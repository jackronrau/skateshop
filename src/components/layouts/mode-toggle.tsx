"use client"

import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme();
  const modes = [
    {
      theme: "light",
      name: "Light",
      icon: SunIcon,
    },
    {
      theme: "dark",
      name: "Dark",
      icon: MoonIcon,
    },
    {
      theme: "system",
      name: "System",
      icon: LaptopIcon,
    }
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" >
          <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {
          modes.map(mode => <DropdownMenuItem key={mode.theme} onClick={() => setTheme(mode.theme)}>
            <mode.icon className="mr-2 size-4" />
            <span>{mode.name}</span>
          </DropdownMenuItem>)
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
