/* ============ 题库 ============ */
const QUESTIONS = {
    truth: [
        "你最近一次撒谎是什么时候？说了什么？",
        "你做过最丢脸的事情是什么？",
        "你暗恋过谁？现在还记得吗？",
        "你最大的秘密是什么？",
        "你曾经因为什么事情哭过？",
        "你手机里最不想让别人看到的 APP 是什么？",
        "你做过最疯狂的事情是什么？",
        "你做过最后悔的决定是什么？",
        "你觉得自己最大的缺点是什么？",
        "你偷偷喜欢过好朋友的伴侣吗？",
        "你收到过最难忘的礼物是什么？",
        "你上一次说'我爱你'是什么时候？对谁说的？",
        "你最害怕什么东西？",
        "你做过最自私的事情是什么？",
        "你相信一见钟情吗？有过吗？",
        "你最近一次熬夜是在做什么？",
        "如果可以回到过去，你想改变什么？",
        "你曾经在背后说过谁的坏话？说了什么？",
        "你做过最尴尬的梦是什么？",
        "你最不想让父母知道的事是什么？",
        "你曾经偷偷拿过别人的东西吗？",
        "你给自己打过几分？为什么？",
        "你谈过几次恋爱？最深刻的是哪一次？",
        "你最近一次哭是什么时候？为什么？",
        "你心里有没有一直想道歉但没开口的人？",
        "你最怕失去什么？",
        "你曾经为了谁熬夜不睡？",
        "你做过最自恋的事情是什么？",
        "你有没有什么奇怪的小癖好？",
        "你上一次感到真正的快乐是什么时候？",
        "你曾经对谁有过愧疚感？",
        "你最想删除的手机相册里的照片是什么？",
        "你觉得自己是个好人吗？",
        "如果明天是世界末日，你今天会做什么？",
        "你上一次亲一个人是什么时候？",
        "你有没有不能说的秘密？可以提示一下吗？",
        "你最羡慕谁？为什么？",
        "你曾经在洗澡的时候做过什么奇怪的事？",
        "你最近一次检查别人的社交账号是因为什么？",
        "你对自己身体最不满意的地方是哪里？",
        "你曾经在感情中伤害过谁？怎么伤害的？",
        "你一个人在家的时候会做什么奇怪的事？",
        "你觉得自己多久能脱单 / 准备好恋爱？",
        "你上一次为什么事感到后悔？",
        "你最想对前任说的一句话是什么？",
        "你有没有做过违背良心的事？",
        "你心里最柔软的地方是什么？",
        "你曾经为了什么梦想努力过？后来呢？",
        "你最喜欢自己性格中的哪一点？",
        "你觉得自己在别人眼中是什么样的人？",
        "你有没有做过被自己蠢哭的事？",
        "你上一次心跳加速是因为什么？",
        "你最想穿越到人生的哪个阶段？",
        "如果能拥有一种超能力，你想要什么？",
        "你曾经在考试或工作中作弊过吗？",
        "你最想和谁互换人生？",
        "你经历过最社死的瞬间是什么？",
        "你有没有什么隐藏的技能？",
        "你给自己的颜值打几分？",
        "你曾经因为什么被误会有对象？",
        "你手机里存了多少张自拍？",
        "你觉得最让你无法忍受的事情是什么？",
        "你上一次嫉妒别人是什么时候？",
        "你曾经在厕所里待了多久不出来？在干嘛？",
        "你做过最对不起自己的事是什么？",
        "你觉得自己上辈子是什么？",
        "你曾经因为什么谎言圆了更久的谎？",
        "你看到上一任时还会心动吗？",
        "你心里有没有一个永远放不下的人？",
        "你害怕一个人独处吗？",
        "你做过最浪漫的事是什么？",
        "你觉得自己最让人讨厌的地方是什么？",
        "你曾经为了留住一个人做过什么傻事？",
        "你上一次发自内心的笑是因为什么？",
        "如果可以匿名给一个人发消息，你想发给谁？说什么？",
        "你有没有什么童年阴影？",
        "你曾经被什么人深深伤害过？",
        "你做过最见不得人的事是什么？",
        "你曾经在梦里梦到过谁？",
        "你觉得自己最大的优点是什么？",
        "你上一次开怀大笑是因为什么？",
        "你最想对现在的自己说什么？",
        "你觉得朋友眼中的你和真实的你有什么不同？",
        "你经历过最尴尬的约会是什么？",
        "你曾经在公众场合做过什么丢脸的事？",
        "你心里有没有过想要报复谁的念头？",
        "你上一次紧张到手心出汗是什么时候？",
        "你曾经因为什么事情失眠过？",
        "你做过最幼稚的事是什么？",
        "你觉得人生中最重要的是什么？",
        "你曾经因为什么被感动到哭？",
        "你最想忘掉的一段记忆是什么？",
        "你觉得自己是感性的人还是理性的人？",
        "你曾经在背后偷偷帮助过谁吗？",
        "你最喜欢自己的哪一个身体部位？",
        "你最想收到什么样的告白？",
        "如果给你一次表白的机会，你会对谁说什么？",
        "你觉得爱情和友情哪个更重要？",
        "你曾经因为什么冲动消费而后悔？",
        "你有没有一个坚持了很久的习惯？",
        "你觉得什么才是真正的幸福？",
        "你上一次生气到失控是什么时候？为什么？",
    ],
    dare: [
        "模仿一种动物叫声，持续10秒",
        "给通讯录第5个人打电话说'我喜欢你'",
        "在房间里青蛙跳一圈",
        "吃一勺芥末",
        "把自己的头像换成搞笑图片一周",
        "对着窗外大喊'我是最帅/最美的！'",
        "做10个俯卧撑",
        "用最夸张的语气朗诵一段歌词",
        "发一条朋友圈，内容由在场的人决定",
        "闭眼单脚站立30秒",
        "模仿一位在场的人，让大家猜",
        "喝一勺醋",
        "给妈妈/爸爸发一条'我爱你'",
        "用外语做一段自我介绍",
        "把一块冰放在衣服里直到融化",
        "对着镜子对自己说'你真棒'10遍",
        "做20个深蹲",
        "给最近联系的人发一条奇怪的表情包",
        "用屁股写出自己的名字",
        "吃一片柠檬，不能皱眉",
        "让在场每个人在你脸上画一笔",
        "模仿一个电视剧/电影角色的经典台词",
        "把手机交给右边的人，让他发一条动态",
        "转圈10圈后走直线",
        "用方言说一段绕口令",
        "倒立靠墙30秒（做不了就做平板支撑）",
        "拥抱身边的一个人10秒",
        "发一条语音给任意好友，说'你是我最重要的人'",
        "用额头运手机，不掉落走一圈",
        "把袜子脱下来闻一闻",
        "用最做作的语气夸一下左边的人",
        "做30个高抬腿",
        "用非惯用手写自己的名字",
        "闭着眼睛让在场的人喂你吃东西",
        "对着电风扇说'我爱你'",
        "模仿一位明星唱歌",
        "把裤子/裙子卷到膝盖以上走一圈",
        "手撑地做螃蟹走路姿势",
        "和右边的人十指相扣对视10秒",
        "给自己取一个搞笑的外号并让大家叫一周",
        "学一个动物走路的样子",
        "用夸张的演技哭诉一件小事",
        "把手机密码告诉身边的人",
        "在你脸上贴一张纸条直到游戏结束",
        "用唱的方式回答下一个问题",
        "做一次平板支撑直到音乐停",
        "和一位同性假装情侣撒娇30秒",
        "用鼻子发出'哼'的声音模仿猪",
        "跳一段即兴舞蹈",
        "在原地转5圈然后指北",
        "对着镜头做一个鬼脸并保存",
        "把双手举过头顶左右摇摆，边跳边唱《小苹果》",
        "用吸管喝一杯水，不准用手拿",
        "对一位在场的人进行1分钟真心夸赞",
        "给最近联系的人发'你欠我100块'",
        "在房间里爬一圈学猫叫",
        "用嘴叼着笔写一段话",
        "做一个高难度瑜伽动作保持15秒",
        "闭上眼睛向后倒，让其他人接住你",
        "把你今天的穿着发到社交平台",
        "让大家看你最近的购物记录",
        "模仿一个有口音的人说话一分钟",
        "抱一下最近的树或者柱子",
        "用纸巾堵住鼻子说话一分钟",
        "给你第6个微信好友发一个'？'",
        "站着不动，让别人挠你痒痒10秒",
        "学企鹅走路绕房间一圈",
        "现在唱一首歌的开头30秒",
        "连续眨眼睛30次",
        "用左手拿筷子/勺子吃东西",
        "把一首诗用RAP的方式念出来",
        "模仿机器人说话和走路一分钟",
        "给自己画个胡子然后拍照留念",
        "吃一瓣大蒜/洋葱",
        "用身体写一个字母让大家猜",
        "对窗户外路过的第一个人挥手",
        "把你最近的搜索记录展示给大家",
        "做5个波比跳",
        "单腿站立，用手摸另一只脚的脚尖",
        "用不同的语气说同一句话10遍",
        "模仿蜡笔小新的声音说话",
        "把鼻子和另一个人的鼻子贴在一起10秒",
        "闭眼原地跳10次",
        "做一件让所有人笑的事",
        "学大猩猩捶胸走路",
        "给你手机里第3个人发'救命！'",
        "用吸管对着杯子吹泡泡持续15秒",
        "倒着说出自己的名字",
        "顶着一本书在头上走一圈不掉",
        "把胳膊和腿绑一边跳着走",
        "现场编一个冷笑话讲给大家",
        "对你的影子深情告白30秒",
        "用一根手指做俯卧撑（做不了就做标准俯卧撑）",
        "把房间里的灯关掉30秒不说话",
        "用撒娇的语气向一个人借10块钱",
        "把今天发生的事编成一首歌唱出来",
        "演一段偶像剧桥段，哭着说'不要走'",
        "在手腕上画一块手表",
        "双手合十祈祷状绕房间走一圈",
        "喝一杯奇怪的混合饮料（在场的人调配）",
        "对一朵花或者植物说话1分钟",
        "坐在地上，用脚捡起一支笔",
        "让在场的人在你手机里找一张最丑的照片",
    ]
};

/* ============ DOM 引用 ============ */
const card = document.getElementById('card');
const cardInner = document.getElementById('cardInner');
const cardContent = document.getElementById('cardContent');
const typeBadge = document.getElementById('typeBadge');
const drawBtn = document.getElementById('drawBtn');
const historyList = document.getElementById('historyList');
const clearBtn = document.getElementById('clearBtn');
const modeBtns = document.querySelectorAll('.mode-btn');

/* ============ 状态 ============ */
let currentMode = 'truth';
let isSpinning = false;
let history = [];
const MAX_HISTORY = 50;

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

function draw() {
    if (isSpinning) return;
    isSpinning = true;
    drawBtn.disabled = true;
    drawBtn.classList.add('spinning');
    drawBtn.querySelector('.draw-btn-text').textContent = '抽取中...';

    // 先翻回正面
    card.classList.remove('flipped');

    // 快速切换内容制造随机感
    const shuffleInterval = setInterval(() => {
        const preview = getRandomItem(currentMode);
        cardContent.textContent = preview.text;
        typeBadge.textContent = preview.type === 'truth' ? '真心话' : '大冒险';
        typeBadge.className = 'card-type-badge ' + preview.type;
    }, 60);

    // 延迟后翻牌
    setTimeout(() => {
        clearInterval(shuffleInterval);

        const result = getRandomItem(currentMode);
        cardContent.textContent = result.text;
        typeBadge.textContent = result.type === 'truth' ? '真心话' : '大冒险';
        typeBadge.className = 'card-type-badge ' + result.type;

        card.classList.add('flipped');

        // 添加历史
        addHistory(result);

        isSpinning = false;
        drawBtn.disabled = false;
        drawBtn.classList.remove('spinning');
        drawBtn.querySelector('.draw-btn-text').textContent = '再来一次';
    }, 1500);
}

/* ============ 历史记录 ============ */
function addHistory(result) {
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' +
                    now.getMinutes().toString().padStart(2, '0');
    history.unshift({ ...result, time: timeStr });
    if (history.length > MAX_HISTORY) history.pop();
    saveHistory();
    renderHistory();
}

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

function clearHistory() {
    if (history.length === 0) return;
    history = [];
    saveHistory();
    renderHistory();
}

/* ============ 本地存储 ============ */
function saveHistory() {
    try {
        localStorage.setItem('truthOrDareHistory', JSON.stringify(history));
    } catch (e) {
        // ignore
    }
}

function loadHistory() {
    try {
        const saved = localStorage.getItem('truthOrDareHistory');
        if (saved) {
            history = JSON.parse(saved);
            renderHistory();
        }
    } catch (e) {
        // ignore
    }
}

/* ============ 模式切换 ============ */
function setMode(mode) {
    currentMode = mode;
    modeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    // 如果不是混合模式，翻回正面
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

clearBtn.addEventListener('click', clearHistory);

/* ============ 初始化 ============ */
loadHistory();

console.log('%c🎲 真心话大冒险已加载', 'font-size:20px; font-weight:bold;');
console.log(`%c💬 真心话 ${QUESTIONS.truth.length} 题 | 🔥 大冒险 ${QUESTIONS.dare.length} 题`, 'font-size:14px;');
console.log('%c🔄 按 1/2/3 切换模式 | 空格键抽奖', 'font-size:12px;');
