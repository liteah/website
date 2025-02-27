import type { I18nConfig } from "fumadocs-core/i18n"
import type { Translations } from "fumadocs-ui/i18n"

export const i18n: I18nConfig = {
  defaultLanguage: "en",
  languages: ["en", "cn"],
}

export const cn: Partial<Translations> = {
  search: "搜索文档",
  searchNoResult: "你来到了没有知识的荒原",
  toc: "目录",
  tocNoHeadings: "目录",
  lastUpdate: "更新日期",
  chooseLanguage: "更改语言",
  nextPage: "下一页",
  previousPage: "上一页",
  chooseTheme: "切换深浅色主题",
  editOnGithub: "在 GitHub 编辑",
}
