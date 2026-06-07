# 🎲 真心话大冒险

一个美丽的真心话大冒险抽奖网页，支持部署到 GitHub Pages 永久访问。

## 功能

- 💬 **真心话**模式 — 抽到走心问题
- 🔥 **大冒险**模式 — 抽到刺激挑战
- 🎲 **混合随机**模式 — 随机出题
- 🃏 翻牌动画效果
- 📜 历史记录（自动保存到本地）
- ⌨️ 快捷键：`1`真心话 `2`大冒险 `3`混合 `空格`抽奖

## 部署到 GitHub Pages

### 方式一：直接推送

```bash
# 1. 在 GitHub 新建一个仓库（例如 truth-or-dare）

# 2. 在项目目录初始化并推送
git init
git add .
git commit -m "init: 真心话大冒险"
git branch -M main
git remote add origin https://github.com/你的用户名/truth-or-dare.git
git push -u origin main

# 3. 在 GitHub 仓库 Settings > Pages 中：
#    - Source 选 "Deploy from a branch"
#    - Branch 选 "main" 和 "/ (root)"
#    - 点 Save
#    - 等待几分钟，你的网站就上线了
```

### 方式二：手动上传

1. 在 GitHub 新建仓库
2. 把 `index.html`、`styles.css`、`script.js` 三个文件上传
3. 在 Settings > Pages 中开启 GitHub Pages

### 访问地址

```
https://你的用户名.github.io/truth-or-dare/
```

## 本地使用

直接用浏览器打开 `index.html` 即可，无需服务器。
