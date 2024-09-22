import { type Metadata } from "next"
import Link from "next/link"
import { env } from "@/env.js"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Shell } from "@/components/shell"
import { useTranslations } from "next-intl"
import { OAuthSignIn } from "../../_components/oauth-signin"
import { SignUpForm } from "../../_components/signup-form"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Sign Up",
  description: "Sign up for an account",
  robots: { index: false, follow: false },
}

export default function SignUpPage() {
  const t = useTranslations("auth")
  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{t("signUp")}</CardTitle>
          <CardDescription>
            {t("signUpDescription")}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {t("orContinueWith")}
              </span>
            </div>
          </div>
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <div className="text-sm text-muted-foreground">
            {t("alreadyHaveAccount")}{" "}
            <Link
              aria-label="Sign in"
              href="/signin"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              {t("signIn")}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  )
}
