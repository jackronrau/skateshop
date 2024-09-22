import type { Metadata } from "next"
import { env } from "@/env.js"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { useTranslations } from "next-intl"
import { Shell } from "@/components/shell"
import { LogOutButtons } from "../../_components/logout-buttons"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Sign out",
  description: "Sign out of your account",
  robots: { index: false, follow: false },
}

export default function SignOutPage() {
  const t = useTranslations("auth")
  return (
    <Shell className="max-w-md">
      <PageHeader className="text-center">
        <PageHeaderHeading size="sm">{t("signOut")}</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          {t("signOutDescription")}
        </PageHeaderDescription>
      </PageHeader>
      <LogOutButtons />
    </Shell>
  )
}
