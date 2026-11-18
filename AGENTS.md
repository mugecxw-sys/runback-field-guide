# AGENTS.md — RUNBACK Field Guide

> 本文件是给**任何 AI 会话 / 新协作者**的项目说明书：打开这个目录就会自动被读到。
> 目的是让你不必从代码里猜结构，也不必重做已完成的部分。

## 0. 铁律（优先级最高）

- **没有用户明确的"做 / 改 / 执行"指令时，不要动任何文件、不要跑任何有副作用的命令。** 只回答、只读调查、提方案。
- 禁止在未获明确同意时：`git add/commit/push/branch/reset/clean`、安装依赖、启动或重启服务、部署、改配置、改数据。
- 一次批准 ≠ 永久批准；每次以当轮指令为准。不确定就先问。
- 改 URL 必须同步 `next.config.ts` 的 redirects，否则线上 404 会被搜索引擎记住很久。

## 1. 这是什么

多游戏 wiki / 攻略站（"field guide"）：builds、routes、tier lists、enemy intel、计算工具。
站点内容为英文（面向国际玩家），**开发沟通与文档可用中文**。

> **做 UI 之前先读 [`docs/ui-brief.md`](docs/ui-brief.md)**：里面是硬约束（三栏骨架不可改）、已否决方向、任务顺序和验收标准。UI 与数据/框架是两条线，不要混在一个会话里做。

**游戏库是数据驱动的**：`lib/game-catalog.ts` 里的 `gameLibraries` 是唯一真相（含 `slug` / `status` / `guideCount` / `categories` / `sourceHref`），首页与 `/games/<slug>` 都从它渲染。当前 12 个游戏（线上实测）：

`brotato` · `wanderburg` · `repo` · `cult-of-the-lamb` · `deep-rock-galactic` · `gamble-with-your-friends` · `hades-ii` · `lost-castle-2` · `risk-of-rain-2` · `sephiria` · `yet-another-zombie-survivors` · `void-breaker`

有独立页面目录的只有 4 个（`sephiria` 体量最大、`void-breaker` 有内部数据层、`repo` 是主线、`brotato` 有角色页）；其余游戏走 `app/games/[game]/[slug]` 动态路由 + `lib/game-articles.json` 数据。**新增游戏时先改 catalog，再补数据，最后才考虑独立目录。**

> **新增游戏照 [`docs/game-template.md`](docs/game-template.md) 的模板走**：外壳与契约在 `components/game-wiki/`（`GameShell` / `GameHub` / `GameWikiConfig`），新游戏只写一份 `{game}-config.ts` + 一份 `{game}-hub.tsx` + 数据 JSON/图标清单，外壳不重写。

## 2. 技术栈（实测自 package.json，勿凭印象改）

- **框架**：`vinext@1.0.0-beta.5`（Next.js 兼容 API，跑在 Cloudflare 上）+ React `19.2.9` + RSC
- **构建**：Vite `8.0.13` + `@cloudflare/vite-plugin` + `@openai/sites-vite-plugin`
- **样式**：Tailwind CSS `4.2.1` + `shadcn@4.18` + `@base-ui/react` + `tw-animate-css`
- **UI 依赖**：`lucide-react`、`cmdk`、`recharts`、`embla-carousel-react`、`react-resizable-panels`
- **运行/部署**：Cloudflare **Workers**（`wrangler@4.92`），产物 `dist/server/wrangler.json`
- **Node**：`>=22.13.0`
- **Lint/Format**：`oxlint` / `oxfmt`（不是 eslint/prettier）

## 3. 目录职责

```
app/                 路由与页面（App Router 风格）。页面尽量薄，逻辑下沉到 lib/
components/          UI 组件；components/ui 是 shadcn 基础件，避免直接改里面的样式
  game-hub-v1/       游戏聚合页 v1 组件
  game-wiki/         wiki 展示组件
  game-guide/        攻略文章组件
lib/                 数据、配置、文案、计算逻辑（主要战场）
  sephiria-planner/  伤害/加点计算逻辑（有单测）
  sephiria-builds/   build 预设数据 + 校验
  game-hub-v1/       聚合页数据装配
public/data/         对外物品数据（版本化的 JSON，见 §4）
public/images/       站内图片（按游戏分目录）
public/videos/       站点视频（体量大，见 §5）
tests/               单测与构建期校验（sephiria-planner 为主）
scripts/             校验与审查脚本（导航、站点结构、主题）
templates/           页面/文章模板
```

## 4. 数据约定

- **对外数据必须带版本号，且版本号进文件名**：
  `public/data/sephiria-items-1.0.33.json`、`sephiria-items-1.1.3.json`
  当前版本常量在 `lib/sephiria-current-version.ts`（现为 `1.1.3`）。历史版本不要删，Planner 需要跨版本比对。
- **内部数据与对外数据分层**：`*.internal.json` / `*-internal.ts` 只供内部计算，不直接渲染到页面。
- **图标**：集中在 `public/images/games/<game>/...`，清单思路见 `lib/sephiria-image-manifest.ts`；新增图标必须同步清单，缺图要有占位。
- 数据来源是逆向/解包，**每条数值应能追溯到"来源 + 游戏版本 + 全量或抽样"**；没有出处的数值不要写进页面正文。
- 新增游戏时：先加数据，再加清单/索引，最后才写页面；不要反过来。

## 5. 资产与部署约束

- 仓库曾达 ~503 MB，其中 `public/videos` 约 374 MB、`public/images` 约 123 MB。**视频计划迁到 R2 / 外部托管**（用户决定中，未完成）；本地开发可用 `git sparse-checkout` 跳过视频。
- Cloudflare 静态资源限制：**单文件 ≤ 25 MiB、文件数 ≤ 20,000**（部署前以官方配额为准）。大文件不要直接塞 `public/`。
- 部署：`vinext build` 产出 `dist/`，再由 Cloudflare 侧（Git 集成或 `wrangler deploy`）发布。**具体方式待用户确认，不要自行部署。**

## 6. 常用命令

```bash
npm install                    # Node >= 22.13
npm run dev                    # 本地开发
npm run build                  # 生产构建（prebuild 会自动跑 build 预设校验）
npm run start                  # wrangler dev --config dist/server/wrangler.json
npm run lint                   # oxlint
npm run format                 # oxfmt
npm run validate:sephiria-build-layouts
```

## 7. 已知环境坑（Windows，实测）

- 本机 Git 用系统 schannel 会握手失败（`SEC_E_NO_CREDENTIALS`）：本仓库本地 config 已设 `http.sslBackend=openssl`；换机器需要重设，或用 `git -c http.sslBackend=openssl ...`。
- 本机 **没有配置 git 身份**（`user.name` / `user.email` 为空），提交前必须先配，否则 commit 直接失败。
- `gh` 未登录、无 `GH_TOKEN`：当前只能匿名读取 GitHub，不能 push。
- 本工作区是 shallow + partial + sparse 克隆：只有 `main` 的最近一次提交，且**排除了 `public/videos`**。补全视频：`git sparse-checkout set --no-cone '/*'`。

## 8. 改动的验收标准（做完要能自证）

1. `npm run lint` 通过；
2. `npm run build` 通过（含 prebuild 数据校验）；
3. 涉及路由的改动：受影响页面本地 200，`scripts/verify-navigation.mjs`、`scripts/verify-site-structure.mjs` 无新增问题；
4. 涉及数据的改动：条数、id 唯一性、图标存在性自检通过；
5. 涉及 URL 的改动：`next.config.ts` 的 redirects 已补；
6. 报告里写清"改了什么 / 怎么验证的 / 有什么已知风险"。

## 9. 不要做

- 不要引入第二套 CSS 体系（Tailwind 4 + shadcn 是既定方案）。
- 不要直接手改 `components/ui/` 的基础件样式来"修页面"，用页面级样式或 `className` 覆盖。
- 不要在没有公式和实测样本的情况下写"最大伤害"结论。
- 不要把整包游戏原始资源（尤其是版权素材）提交进仓库。
- 不要为了"顺手"重构无关文件——改动范围必须与指令一致。
