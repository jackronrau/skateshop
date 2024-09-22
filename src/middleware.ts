import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import createMiddleware from 'next-intl/middleware'
import { localeConfig } from "./config/site";
import { functions } from "./config/function";
const intlMiddleware = createMiddleware({
  locales: localeConfig.locales.map(_ => _.id),
  localePrefix: localeConfig.localePrefix,
  defaultLocale: localeConfig.defaultLocale,
});

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"])
export default clerkMiddleware((auth, req) => {
  if (functions.auth && isProtectedRoute(req)) {
    const url = new URL(req.nextUrl.origin)

    auth().protect({
      unauthenticatedUrl: `${url.origin}/signin`,
      unauthorizedUrl: `${url.origin}/dashboard/stores`,
    })
  }
  return intlMiddleware(req);
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
