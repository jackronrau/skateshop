import { type Metadata } from "next"
import { env } from "@/env.js"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Shell } from "@/components/shell"
import { useTranslations } from "next-intl"
import { ResetPasswordConfirmForm } from "../../../../_components/reset-password-confirm-form"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Reset Password",
  description: "Enter your email to reset your password",
  robots: { index: false, follow: false },
}

export default function ResetPasswordConfirmPage() {
  const t = useTranslations("auth")
  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{t("resetPassword")}</CardTitle>
          <CardDescription>
            {t("resetPasswordDescription")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordConfirmForm />
        </CardContent>
      </Card>
    </Shell>
  )
}
