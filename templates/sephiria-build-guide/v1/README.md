# RUNBACK / Sephiria Build Guide Template V1

冻结日期：2026-10-31（Asia/Shanghai）
状态：FROZEN

## 打开模板

直接打开 index.html，即可从大剑 Build 卡片进入 build.html。
两个 HTML 是当前已确认页面的静态导出，包含侧栏、明暗主题切换、服装切换及章节跳转。
assets/greatsword.webp 随包提供；字体保留原设计使用的 Google Fonts。
其他 RUNBACK 导航指向正式网站。

正式列表：https://roguelikegame.org/games/sephiria/builds/greatsword
正式详情：https://roguelikegame.org/games/sephiria/builds/greatsword/greatsword-build

## V1 已冻结的设计

- 大剑分类 → 独立 Build 卡片 → 攻略详情。
- 桌面及平板侧栏；手机导航展开入口。
- 18 张卡片、原有圆角、间距、字体层级及响应式规则。
- Hero / Build Snapshot，然后依次为 Before the Run、Core Items、Weapon Upgrade Route、How to Play、Tips、Run Results。
- RUNBACK 明暗主题配色、服装切换、章节内跳转。
- 页尾返回大剑列表；存在相邻的真实 Build 时才显示前后链接。
- 全英文；不显示 Preview、无效面包屑、Game Version 占位标签、加点优先级、服装首选/备选或解锁标签。

以上设计后续沿用 V1。作者明确要求调整设计时，建立新的模板版本，保留本目录的冻结快照。

## 每篇 Build 的可填内容

Build 名称、服装及效果、天赋、出门道具、核心物品、武器升级、玩法、Tips、实测结果、截图和视频均由各自 Build 提供。
当前 [Build Name] 及其他内容占位留待填写；不把 Greatsword Build 固定成所有卡片的名字。
名称统一读取 lib/sephiria-build-navigation.ts 中对应 Build 的 title：卡片、详情 H1 和页面标题自动使用同一字段。
详情内容由 renderGreatswordBuildGuide(buildName) 输出，并对名称做 HTML 转义。

## 网站实现入口

- lib/sephiria-builds/greatsword-build-guide.ts：已冻结的详情卡片结构和样式。
- components/game-wiki/sephiria-greatsword-build-shell.tsx：侧栏和响应式页面框架。
- app/games/sephiria/builds/greatsword/page.tsx：数据驱动的 Build 卡片列表。
- app/games/sephiria/builds/greatsword/greatsword-build/page.tsx：当前模板详情与相邻 Build 导航。
- lib/sephiria-build-navigation.ts：各 Build 名称、地址和分类数据。

HTML 导出用于交付和还原设计。网站继续使用上述实现入口，导出文件不作为第二份运行时数据源。
freeze.json 记录 V1 冻结时的源文件及导出文件 SHA-256，供比对版本使用。文本文件统一按 UTF-8 / LF 换行计算；二进制文件按原始字节计算。
