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

export type NavLink = {
  href: string;
  name: string;
};


export type SiteConfig = {
  navLinks: NavLink[];
} & Partial<typeof defaultConfig> & Partial<typeof userConfig>;

const siteConfig: SiteConfig = {
  ...defaultConfig,
  ...userConfig,
  // Explicitly define navLinks to avoid the incorrect type inference
  navLinks: (userConfig?.navLinks || defaultConfig.navLinks || []) as NavLink[], 
  theme: {
    ...defaultConfig.theme,
    ...userConfig?.theme,
  },
};

export default siteConfig;


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

