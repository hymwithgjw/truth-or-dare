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
        "给你最近一个微信好友发一句'我爱你'",
        "把微信头像换成当前聊天截图，保持24小时",
        "在任意群聊里发一句'我是猪，我承认'",
        "给你的朋友圈最新一条点个赞并评论一句彩虹屁",
        "把手机语言切换成英文，玩完这局才能改回来",
        "给你的置顶聊天联系人发一个'？'",
        "用表情包轰炸任意好友10条消息",
        "在朋友圈发一张你最丑的自拍，不准屏蔽任何人",
        "找到你聊天记录里最早的一条消息并截图发群里",
        "给任意好友打语音电话，接通后不说话5秒再挂",
        "把你的微信状态改成'裂开'",
        "给你最近群聊里最后发言的人私聊'你刚刚说的好有道理'",
        "用手机浏览器搜索'最尴尬的事情'并截图发出来",
        "给第5个聊天记录的人发一段15秒的语音唱生日快乐歌",
        "在聊天框里打出你的键盘第一行字母并发送",
        "找到你相册里最早的一张照片发到朋友圈",
        "给你通讯录里名字字母排序最后的人发'我想你了'",
        "用非惯用手打字发一条消息",
        "在任意平台搜索你自己的名字并截图",
        "把手机壁纸换成纯绿色并保持一天",
        "给任意好友发一个红包备注'买糖吃'",
        "把你手机桌面截图发到群里让大家点评",
        "在任意群聊里连发20个不同的表情包",
        "打开你的购物APP搜索记录截图并展示",
        "给你最近通话记录的第3个人发一条'晚安'",
        "在微信里搜索'哈哈哈'，把最多的聊天记录截图",
        "把你的输入法皮肤截图发出来",
        "连发10条朋友圈，每间隔5分钟一条",
        "给妈妈发一句'您辛苦了'，看看她回什么",
        "打开你的闹钟列表截图发出来",
        "给任意好友发一条'你是我最好的朋友'",
        "把你当前的手机电量截图发到群里",
        "用语音转文字发一句绕口令",
        "在任意视频平台搜索'搞笑'并收藏第一个视频",
        "把你微信年度报告截图发出来（如果有）",
        "在微信里摇一摇，截图结果",
        "浏览你的收藏夹并分享第一个收藏",
        "把手机字体调成最大，持续到游戏结束",
        "给你好久没联系的朋友发一句'突然想你了'",
        "在任意社交平台搜索自己的昵称并截图",
        "把今天的天气截图发出来并配音播报",
        "找一首歌用语音消息唱给任意好友",
        "在浏览器里打开你的历史记录，截取前5条",
        "给你的外卖/快递小哥点个好评",
        "把你在用的所有社交平台名字发出来",
        "打开你的备忘录/记事本分享第一条记录",
        "连续发10个不同语气词给一个人（啊哦嗯诶哈嘿呀哟啧噢）",
        "在游戏群里发一句'这游戏真好玩'",
        "给你最近一个好友申请发一句'抱歉，不加陌生人'",
        "找一张搞笑图片设为你的聊天背景",
        "在任意音乐平台搜索'好运来'并播放截图",
        "把你的微信运动步数截图发出来",
        "给任意好友发一段60秒的语音讲述你今天的流水账",
        "把你的手机字号调成超大并截图",
        "在群里用@所有人发一句'大家辛苦了'（如果是群主/管理员）",
        "打开你的手机使用时间/屏幕使用时间截图",
        "在任意APP里给客服发一句'你辛苦了'",
        "把你的微信朋友圈封面改成纯白",
        "在微博/抖音/小红书搜索'真心话大冒险'并截图",
        "给你最常聊天的好友发'在干嘛'",
        "把手机铃声调到最大然后播放一首歌",
        "在朋友圈发'点赞的都是我爸爸'",
        "把你的APP使用时长排行榜截图发出来",
        "用放大的字体写一段话发朋友圈",
        "给前任/最近常想起的人发一句'最近好吗'",
        "把你昨天这个时间的手机截图发出来",
        "在聊天里只发表情包聊天5轮",
        "打开你的相册截图最新一张照片",
        "在群里发一个10块钱的拼手气红包（如果群支持）",
        "把你的音乐软件年度歌单截图发出来",
        "给任意联系人发你的当前位置（随便哪里）",
        "在任意平台修改个签为'今天是个好日子'",
        "打开你的备忘录添加一条'2026年要暴富'",
        "连发三条语音消息，第一条笑、第二条哭、第三条正常",
        "把你的最近播放音乐列表截图",
        "在聊天框里只打'哈哈哈'直到对方回你",
        "把手机亮度调到最高持续到下一轮",
        "给你第3个微信标签分组的人发'好久不见'",
        "开启手机飞行模式10秒再关掉",
        "在朋友圈发一张天空的照片配文'今天真好'",
        "把你的手机通知栏截图发出来",
        "在任意APP写一条五星好评并截图",
        "给任意好友发'我刚刚看到一个人好像你'",
        "把你的短视频APP喜欢列表截图第一条",
        "把手机时间调快5分钟，游戏结束后才能改回",
        "给你的好友备注改成一个外号持续一天",
        "在微信搜索'晚安'并截图最多的聊天",
        "打开计算器算一道复杂的题并截图",
        "把你手机里最旧的APP翻出来截图",
        "在朋友圈发一句'好无聊啊有没有人聊天'",
        "用手机拍一张窗外的风景发朋友圈",
        "给你最近聊天的人发你的一张童年照",
        "把你的微信支付分截图发出来",
        "在任意游戏里发一句'求带'（如果有）",
        "把你的通知管理列表截图发出来",
        "给任意好友发'明天请你吃饭'",
        "在群里连续发5个不同的早安表情包",
        "把你的手机内存使用情况截图分享",
        "用不同颜色的字体发一条朋友圈",
        "给你通讯录里的第一个联系人发'早安'",
    ]
};

/* ============ DOM ============ */
const dom = {
    card: document.getElementById('card'),
    cardContent: document.getElementById('cardContent'),
    cardOwner: document.getElementById('cardOwner'),
    typeBadge: document.getElementById('typeBadge'),
    drawBtn: document.getElementById('drawBtn'),
    historyList: document.getElementById('historyList'),
    historyCount: document.getElementById('historyCount'),
    modeBtns: document.querySelectorAll('.mode-btn'),
    nameOverlay: document.getElementById('nameOverlay'),
    nameInput: document.getElementById('nameInput'),
    nameConfirmBtn: document.getElementById('nameConfirmBtn'),
    playerName: document.getElementById('playerName'),
    changeNameBtn: document.getElementById('changeNameBtn')
};

/* ============ 状态 ============ */
let mode = 'truth';
let spinning = false;
let history = [];
let playerName = localStorage.getItem('pn') || '';

/* ============ 名字逻辑 ============ */
function showNameModal() {
    dom.nameOverlay.classList.remove('hidden');
    dom.nameInput.value = '';
    dom.nameInput.focus();
}

function hideNameModal() {
    dom.nameOverlay.classList.add('hidden');
}

function setName(name) {
    name = name.trim();
    if (!name) return;
    playerName = name;
    localStorage.setItem('pn', name);
    dom.playerName.textContent = name;
    hideNameModal();
}

dom.nameConfirmBtn.addEventListener('click', function() {
    setName(dom.nameInput.value);
});

dom.nameInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') setName(dom.nameInput.value);
});

dom.changeNameBtn.addEventListener('click', showNameModal);

if (!playerName) {
    showNameModal();
} else {
    dom.playerName.textContent = playerName;
}

/* ============ 游戏核心 ============ */
function pick(m) {
    var pool;
    if (m === 'mix') {
        pool = Math.random() < 0.5 ? QUESTIONS.truth : QUESTIONS.dare;
    } else {
        pool = QUESTIONS[m];
    }
    return {
        text: pool[Math.floor(Math.random() * pool.length)],
        type: m === 'mix' ? (pool === QUESTIONS.truth ? 'truth' : 'dare') : m
    };
}

function now() {
    var d = new Date();
    // 北京时间 (UTC+8)
    d = new Date(d.getTime() + 8 * 3600000);
    return d.toISOString().slice(11, 19);
}

function draw() {
    if (spinning) return;
    if (!playerName) { showNameModal(); return; }

    spinning = true;
    dom.drawBtn.disabled = true;
    dom.drawBtn.textContent = '🎯 抽取中...';
    dom.drawBtn.classList.add('spinning');
    dom.card.classList.remove('flipped');

    var timer = setInterval(function() {
        var p = pick(mode);
        dom.cardContent.textContent = p.text;
        dom.typeBadge.textContent = p.type === 'truth' ? '真心话' : '大冒险';
        dom.typeBadge.className = 'card-type-badge ' + p.type;
    }, 60);

    setTimeout(function() {
        clearInterval(timer);
        var result = pick(mode);
        dom.cardContent.textContent = result.text;
        dom.typeBadge.textContent = result.type === 'truth' ? '真心话' : '大冒险';
        dom.typeBadge.className = 'card-type-badge ' + result.type;
        dom.cardOwner.innerHTML = '<strong>' + playerName + '</strong> 抽到了：';
        dom.card.classList.add('flipped');

        result.name = playerName;
        result.time = now();
        history.unshift(result);
        render();

        // 后台保存云端
        try { if (window.saveCloud) window.saveCloud(playerName, result.type, result.text); } catch(e) {}

        spinning = false;
        dom.drawBtn.disabled = false;
        dom.drawBtn.classList.remove('spinning');
        dom.drawBtn.textContent = '🎯 再来一次';
    }, 1500);
}

/* ============ 渲染 ============ */
function render() {
    dom.historyCount.textContent = history.length + ' 条';
    if (!history.length) {
        dom.historyList.innerHTML = '<div class="history-empty">还没有记录，开始抽奖吧！</div>';
        return;
    }
    dom.historyList.innerHTML = history.map(function(item, i) {
        var typeLabel = item.type === 'truth' ? '真心话' : '大冒险';
        return '<div class="history-item">' +
            '<span class="h-type ' + item.type + '">' + typeLabel + '</span>' +
            '<span class="h-text"><strong>' + item.name + '</strong>: ' + item.text + '</span>' +
            '<span class="h-time">' + item.time + '</span>' +
        '</div>';
    }).join('');
}

/* ============ 模式切换 ============ */
function setMode(m) {
    mode = m;
    dom.modeBtns.forEach(function(b) {
        b.classList.toggle('active', b.dataset.mode === m);
    });
    dom.card.classList.remove('flipped');
    if (!spinning) dom.drawBtn.textContent = '🎯 开始抽奖';
}

/* ============ 云端 ============ */
(function() {
    var URL = 'https://xmjmgfusfuyoifxbscur.supabase.co';
    var KEY = 'sb_publishable_FpfJWcT59igaSPSue6nk0w_70Sac-wc';
    var vid = localStorage.getItem('vid');
    if (!vid) {
        vid = Math.random().toString(36).slice(2) + Date.now().toString(36);
        localStorage.setItem('vid', vid);
    }

    function headers() {
        return { 'apikey': KEY, 'Authorization': 'Bearer ' + KEY, 'Content-Type': 'application/json' };
    }

    // 云端记录 → 本地格式
    function toRecord(d) {
        var t = '';
        if (d.created_at) {
            var bj = new Date(new Date(d.created_at).getTime() + 8 * 3600000);
            t = bj.toISOString().slice(11, 19);
        }
        return { type: d.type, text: d.content, name: d.player_name || '匿名', time: t };
    }

    // 拉取最新记录，合并到历史（新记录置顶）
    function fetchAndMerge() {
        fetch(URL + '/rest/v1/records?order=created_at.desc&limit=200', { headers: headers() })
        .then(function(r) { return r.json(); })
        .then(function(data) {
            if (!data || !data.length) return;
            var cloud = data.map(toRecord);

            if (history.length === 0) {
                // 首次加载，直接用
                history = cloud;
                render();
                return;
            }

            // 找出本地有但云端还没有的记录（刚抽到还没存上去的）
            var localPending = [];
            for (var i = 0; i < history.length; i++) {
                var h = history[i];
                var found = false;
                for (var j = 0; j < cloud.length; j++) {
                    if (h.name === cloud[j].name && h.text === cloud[j].text) {
                        found = true;
                        break;
                    }
                }
                if (!found) localPending.push(h);
            }

            // 合并：本地未同步的（最新）→ 云端数据（最新在前）
            // 但避免把本地已同步的再重复
            history = localPending.concat(cloud);

            // 截断最多200条
            if (history.length > 200) history = history.slice(0, 200);

            render();
        })
        .catch(function(e) { /* 静默失败 */ });
    }

    // 初始加载
    setTimeout(fetchAndMerge, 100);

    // 每3秒自动刷新
    setInterval(fetchAndMerge, 3000);

    // 保存到云端
    window.saveCloud = function(name, type, text) {
        fetch(URL + '/rest/v1/records', {
            method: 'POST',
            headers: headers(),
            body: JSON.stringify({ visitor_id: vid, player_name: name, type: type, content: text })
        }).catch(function(){});
    };
})();

/* ============ 事件绑定 ============ */
dom.drawBtn.addEventListener('click', draw);
dom.card.addEventListener('click', draw);
dom.modeBtns.forEach(function(b) {
    b.addEventListener('click', function() { setMode(b.dataset.mode); });
});

/* ============ 键盘 ============ */
document.addEventListener('keydown', function(e) {
    if (e.key === ' ') { e.preventDefault(); draw(); }
    if (e.key === '1') setMode('truth');
    if (e.key === '2') setMode('dare');
    if (e.key === '3') setMode('mix');
});
