# 新游戏模板（RUNBACK field guide）

> 给 DSH / Codex 任何一个 agent 用。加一个肉鸽游戏 = 填数据 + 一份 config + 一个 hub 包装，**外壳不用重写**。
> 站点内容英文、开发文档中文；本文代码标识符保留英文。

---

## 1. 直接复用（不要改）

外壳与契约都在 `components/game-wiki/`：

| 文件 | 提供 | 是否通用 |
|---|---|---|
| `game-wiki.tsx` | `GameShell` / `GameWikiShell` / `GameWikiArticleLayout` / `GameWikiHero` / `GameWikiCategoryCard` / `GameWikiSidebar` / `GameWikiMobileNav` / `GameBreadcrumb` / `AdSlot` / `ContactRail` / `OnThisPage` + `GameWikiConfig` 类型 | ✅ 通用 |
| `game-hub.tsx` | `GameHub` + `GameHubConfig`（数据驱动 Overview 页） | ✅ 通用 |

明暗主题、三栏骨架、移动折叠、固定广告位、右栏反馈块，都在外壳里，新游戏零成本获得。

---

## 2. 每游戏要写的东西

1. `components/game-wiki/{game}-config.ts` —— 一份 `GameWikiConfig`（游戏名 / hubHref / 版本 / 左栏分组）。
2. `components/game-wiki/{game}-hub.tsx` —— 一份 `GameHubConfig` + 页面包装函数（`app/games/{game}/page.tsx` 引用它）。
3. 数据：`lib/game-catalog.ts` 加一条 + `public/data/{game}-{kind}-{version}.json`（版本号进文件名）+ 图标清单 `lib/{game}-image-manifest.ts`。

---

## 3. 落地步骤（照着做）

0. **catalog 加游戏**：`lib/game-catalog.ts` 加一条，`status: 'draft'`（达到门槛才 `live`）。`guideCount`/`count` 由数据算，不手填。
1. **写 `{game}-config.ts`**：`navigationSections` 分组，结构复用 `START / DATABASE / SYSTEMS / TOOLS`；**没有 build 系统就整段不放 BUILD**。
2. **写 `{game}-hub.tsx`**：`GameHubConfig`（facts + sections），页面包装返回 `<GameHub config={...} hub={...} activeHref={...} schema={...} />`。参考 `sephiria-hubs.tsx`。
3. **数据 JSON**：版本号进文件名；每条可追溯到「来源 + 游戏版本 + 全量/抽样」；图标存在性进清单；数值不要写进正文除非有出处。
4. **套页面**（见 §4 对照表）。
5. **校验**：`npm run validate:data`、`npm run lint`、`npm run build`、`node scripts/verify-navigation.mjs`、`node scripts/verify-site-structure.mjs` 无新增问题。
6. **收录门槛**：实体 ≥ 100 或攻略 ≥ 5 才把 `status` 改 `live`；否则 noindex、不进导航、不进 sitemap。

---

## 4. 页面类型 ↔ 组件

| 页面 | 组件 | 说明 |
|---|---|---|
| Hub / Overview | `GameHub` + `GameHubConfig` | 自动生成，只写 config |
| 列表 / 索引 | `GameWikiArticleLayout` + 数据库索引组件 | 参考 `sephiria-database-index.tsx` + `database-ui.tsx`；**实体字段因游戏而异，索引组件要按游戏写** |
| 实体详情 | `GameWikiArticleLayout` + 自定义 infobox | 参考 Sephiria wiki 详情 |
| 攻略文章 | `GameWikiArticleLayout` | ✅ 通用 |
| Build | 用普通攻略文章（`GameWikiArticleLayout`） | **Sephiria 那套 build 系统（武器分组→复杂 build 页）是专属，不进模板**；别的游戏用 Wanderburg 那种「普通文章当 build」 |
| 工具页 | `GameWikiShell` + 自定义组件 | 游戏特有，不模板化 |

---

## 5. 肉鸽相通（复用）vs 每游戏调整

**相通，直接复用**：三栏骨架 / 面包屑 / 左栏分组 / 右栏反馈+广告 / 明暗主题 / 移动折叠 / 数据契约（catalog + 版本化 JSON + 图标清单）/ 稀有度 + 等宽数字右对齐 + 来源表 + 版本戳。

**每游戏按实际内容调**：左栏具体条目（items/weapons/artifacts… vs modules/captains/crew…）、稀有度层级（5 级 vs 4 级 vs 别的名字）、有没有 build 系统、工具页、实体字段。

---

## 6. 契约字段速查

### `GameWikiConfig`（`game-wiki.tsx`）
```ts
type GameWikiConfig = {
  gameName: string;
  hubHref: string;          // /games/{game}
  version: string;          // 显示在左栏和徽章
  navigationSections: Array<{
    label: string;          // START / DATABASE / ...
    links: { href: string; label: string }[];
    groups?: { label: string; href?: string; links: { href: string; label: string }[] }[]; // 有 groups 就折叠
  }>;
  officialHref?: string;    // 官方 Steam 等
  showAboutLink?: boolean;
  relatedLabel?: string;
};
```

### `GameHubConfig`（`game-hub.tsx`）
```ts
type GameHubConfig = {
  eyebrow: string; title: string; description: string; version: string;
  image?: { src: string; alt: string };
  facts?: { label: string; value: string }[];   // At a glance
  factsTitle?: string;
  sections: Array<{
    id: string; title: string; lead?: string;
    cards: { href: string; label: string; description?: string; count?: string; backgroundImage?: string }[];
    cols?: 2 | 3;
    width?: 'full' | 'wide' | 'narrow';
  }>;
};
```

数据契约（`GameConfig` / `Entity` / 校验规则）见 `docs/framework-v1.md` §4。

---

## 7. 注意

- 改 URL 必须同步 `next.config.ts` 的 redirects，否则线上 404 被搜索引擎记住很久。
- 大文件不塞 `public/`（Cloudflare 单文件 ≤ 25 MiB、文件数 ≤ 20,000）。
- 图标集中在 `public/images/games/{game}/...`，清单见 `lib/{game}-image-manifest.ts`，缺图要有占位。
- 不引入第二套 CSS 体系；不改 `components/ui/` 基础件样式。
