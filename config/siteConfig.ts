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

export type SiteConfig = Omit<typeof defaultConfig, 'navLinks'> & {
  analyticsConfig?: AnalyticsConfig;
  comments?: {
    provider?: string;  // Ensure the provider is part of comments configuration
    [key: string]: any; // Any other comment-related settings
  };
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
  navLinks?: NavLink[];
} & Partial<typeof userConfig>;

const siteConfig: SiteConfig = {
  ...defaultConfig,
  ...userConfig,
  // If either config defines navLinks, we use it, otherwise, default to an empty array
  navLinks: userConfig?.navLinks ?? defaultConfig.navLinks ?? [],
  theme: {
    ...defaultConfig.theme,
    ...userConfig?.theme,
  },
};

export default siteConfig;

export type UserConfig = {
  analyticsConfig?: AnalyticsConfig;
  comments?: {
    provider?: string;  // Ensure provider is part of comments config in userConfig
    [key: string]: any;
  };
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
  navLinks?: NavLink[];
} & Partial<typeof defaultConfig>;