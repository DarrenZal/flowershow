import userConfig from "@/content/config.mjs";
import {
  AnalyticsConfig,
  AuthorConfig,
  CommentsConfig,
  NavConfig,
  ThemeConfig,
  defaultConfig,
} from "@portaljs/core";
import { DefaultSeoProps } from "next-seo";

const siteConfig: SiteConfig = {
  ...defaultConfig,
  ...userConfig,
  theme: {
    ...defaultConfig.theme,
    ...userConfig?.theme,
  },
};

export default siteConfig;

export type NavLink = {
  href: string;
  name: string;
};

export type UserConfig = {
  analyticsConfig?: AnalyticsConfig;
  comments?: CommentsConfig;
  defaultAuthor: string;
  editLinkRoot?: string;
  logo?: AuthorConfig["logo"];
  navbarTitle?: {
    text?: NavConfig["title"];
    logo?: NavConfig["logo"];
  };
  nextSeo?: Partial<DefaultSeoProps>;
  showComments?: boolean;
  search?: NavConfig["search"];
  social?: NavConfig["social"];
  theme?: ThemeConfig;
  preProcess?: (source: string) => string;
  title?: string;
  author: string;
  domain: string;
  navLinks?: NavLink[];  // Properly typed navLinks
} & Partial<typeof defaultConfig>;

export type SiteConfig = typeof defaultConfig & typeof userConfig;