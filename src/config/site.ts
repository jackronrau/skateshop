import type { FooterItem, MainNavItem } from "@/types"

import { productConfig } from "@/config/product"
import { slugify } from "@/lib/utils"
import { env } from "@/env"
export type SiteConfig = typeof siteConfig

const contacts = [
  {
    title: "X",
    href: "https://twitter.com/sadmann17",
  },
  {
    title: "GitHub",
    href: "https://github.com/sadmann7/skateshop",
  },
  {
    title: "Discord",
    href: "https://discord.com/users/sadmann7",
  },
  {
    title: "cal.com",
    href: "https://cal.com/sadmann7",
  },
]

export const localeConfig = {
  defaultLocale: 'en',
  localePrefix: "as-needed",
  locales: [
    { id: 'en', name: 'English' },
    { id: 'zh', name: '简体中文' },
  ]
} as const;
export type Locales = typeof localeConfig.locales[number]["id"]

export const siteConfig = {
  name: "Skateshop1",
  description:
    "An open source e-commerce skateshop build with everything new in Next.js.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          protected: true,
          items: [],
        },
        {
          title: "Build a Board",
          href: "/build-a-board",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Read our latest blog posts.",
    },
    ...productConfig.categories.map((category) => ({
      title: category.name,
      items: [
        {
          title: "All",
          href: `/categories/${slugify(category.name)}`,
          description: `All ${category.name}.`,
          items: [],
        },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.name,
          href: `/categories/${slugify(category.name)}/${slugify(subcategory.name)}`,
          description: subcategory.description,
          items: [],
        })),
      ],
    })),
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "OneStopShop",
          href: "https://onestopshop.jackblatch.com",
          external: true,
        },
        {
          title: "Acme Corp",
          href: "https://acme-corp.jumr.dev",
          external: true,
        },
        {
          title: "craft.mxkaske.dev",
          href: "https://craft.mxkaske.dev",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: contacts.map((contact) => ({
        title: contact.title,
        href: contact.href,
        external: true,
      }))
    }
  ] satisfies FooterItem[],
}

