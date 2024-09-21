import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { localeConfig } from '@/config/site';


export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: localeConfig.locales.map(_ => _.id),
  localePrefix: localeConfig.localePrefix,
});
