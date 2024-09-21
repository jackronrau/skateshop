"use client"

import { GlobeIcon } from "@radix-ui/react-icons"
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/lib/i18nNavigation';

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { localeConfig, Locales } from "@/config/site";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  console.log("locale", locale);

  const handleChange = (value: Locales) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" >
          <GlobeIcon className="rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {
          localeConfig.locales.map(item => <DropdownMenuItem key={item.id} onClick={() => handleChange(item.id)}>
            <span>{item.name}</span>
          </DropdownMenuItem>)
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
