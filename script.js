/* ============ Supabase 配置 ============ */
const SUPABASE_URL = 'https://xmjmgfusfuyoifxbscur.supabase.co';
const SUPABASE_KEY = 'sb_publishable_FpfJWcT59igaSPSue6nk0w_70Sac-wc';

/* ============ 访客识别 ============ */
const VISITOR_ID = localStorage.getItem('visitor_id') || crypto.randomUUID();
if (!localStorage.getItem('visitor_id')) {
    localStorage.setItem('visitor_id', VISITOR_ID);
}

/* ============ 状态 ============ */
let currentMode = 'truth';
let isSpinning = false;
let history = [];
const MAX_HISTORY = 100;

async function supabaseFetch(path, options = {}) {
    const url = SUPABASE_URL + path;
    const headers = {
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'Content-Type': 'application/json',
        ...options.headers
    };
    const res = await fetch(url, { ...options, headers });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Supabase ${res.status}: ${text}`);
    }
    return res.json();
}

function formatTime(dateStr) {
    const d = new Date(dateStr);
    return d.getHours().toString().padStart(2, '0') + ':' +
           d.getMinutes().toString().padStart(2, '0');
}

async function saveRecordToDB(type, content) {
    return supabaseFetch('/rest/v1/records', {
        method: 'POST',
        body: JSON.stringify({ visitor_id: VISITOR_ID, type, content })
    });
}

async function loadRecordsFromDB() {
    const data = await supabaseFetch(
        `/rest/v1/records?visitor_id=eq.${encodeURIComponent(VISITOR_ID)}&order=created_at.desc&limit=${MAX_HISTORY}`
    );
    return (data || []).map(r => ({
        type: r.type,
        text: r.content,
        time: formatTime(r.created_at)
    }));
}

/* ============ DOM 引用 ============ */
const card = document.getElementById('card');
const cardInner = document.getElementById('cardInner');
const cardContent = document.getElementById('cardContent');
const typeBadge = document.getElementById('typeBadge');
const drawBtn = document.getElementById('drawBtn');
const historyList = document.getElementById('historyList');
const modeBtns = document.querySelectorAll('.mode-btn');

/* ============ 核心逻辑 ============ */
function getRandomItem(mode) {
    if (mode === 'mix') {
        const isTruth = Math.random() < 0.5;
        const pool = isTruth ? QUESTIONS.truth : QUESTIONS.dare;
        return {
            text: pool[Math.floor(Math.random() * pool.length)],
            type: isTruth ? 'truth' : 'dare'
        };
    }
    const pool = QUESTIONS[mode];
    return {
        text: pool[Math.floor(Math.random() * pool.length)],
        type: mode
    };
}

async function draw() {
    if (isSpinning) return;
    isSpinning = true;
    drawBtn.disabled = true;
    drawBtn.classList.add('spinning');
    drawBtn.querySelector('.draw-btn-text').textContent = '抽取中...';

    card.classList.remove('flipped');

    const shuffleInterval = setInterval(() => {
        const preview = getRandomItem(currentMode);
        cardContent.textContent = preview.text;
        typeBadge.textContent = preview.type === 'truth' ? '真心话' : '大冒险';
        typeBadge.className = 'card-type-badge ' + preview.type;
    }, 60);

    setTimeout(async () => {
        clearInterval(shuffleInterval);

        const result = getRandomItem(currentMode);
        cardContent.textContent = result.text;
        typeBadge.textContent = result.type === 'truth' ? '真心话' : '大冒险';
        typeBadge.className = 'card-type-badge ' + result.type;

        card.classList.add('flipped');

        // 保存到数据库
        await saveRecordToDB(result.type, result.text);

        // 添加到本地历史
        const now = new Date();
        const timeStr = now.getHours().toString().padStart(2, '0') + ':' +
                        now.getMinutes().toString().padStart(2, '0');
        history.unshift({ ...result, time: timeStr });
        renderHistory();

        isSpinning = false;
        drawBtn.disabled = false;
        drawBtn.classList.remove('spinning');
        drawBtn.querySelector('.draw-btn-text').textContent = '再来一次';
    }, 1500);
}

/* ============ 历史记录 ============ */
function renderHistory() {
    if (history.length === 0) {
        historyList.innerHTML = '<div class="history-empty">还没有记录，开始抽奖吧！</div>';
        return;
    }
    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <span class="h-type ${item.type}">${item.type === 'truth' ? '真心话' : '大冒险'}</span>
            <span class="h-text">${item.text}</span>
            <span class="h-time">${item.time}</span>
        </div>
    `).join('');
}

/* ============ 模式切换 ============ */
function setMode(mode) {
    currentMode = mode;
    modeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    if (!card.classList.contains('flipped')) return;
    card.classList.remove('flipped');
    drawBtn.querySelector('.draw-btn-text').textContent = '开始抽奖';
}

/* ============ 键盘快捷键 ============ */
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
        draw();
    }
    if (e.key === '1') setMode('truth');
    if (e.key === '2') setMode('dare');
    if (e.key === '3') setMode('mix');
});

/* ============ 事件绑定 ============ */
drawBtn.addEventListener('click', draw);
card.addEventListener('click', draw);

modeBtns.forEach(btn => {
    btn.addEventListener('click', () => setMode(btn.dataset.mode));
});

/* ============ 初始化 ============ */
(async function init() {
    history = await loadRecordsFromDB();
    renderHistory();
    console.log('%c🎲 真心话大冒险已加载 (Supabase)', 'font-size:20px; font-weight:bold;');
    console.log(`%c💬 真心话 ${QUESTIONS.truth.length} 题 | 🔥 大冒险 ${QUESTIONS.dare.length} 题`, 'font-size:14px;');
    console.log(`%c👤 访客ID: ${VISITOR_ID.slice(0,8)}...`, 'font-size:12px;');
    console.log('%c🔄 按 1/2/3 切换模式 | 空格键抽奖', 'font-size:12px;');
})();
