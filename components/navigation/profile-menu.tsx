"use client";

import { memo } from "react";

import Link from "next/link";
import { User, Settings, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PROFILE_MENU_ITEMS } from "@/constants/routes";


const iconMap = {
  User: <User className="size-4" />,
  Settings: <Settings className="size-4" />,
  LogOut: <LogOut className="size-4" />,
};

function ProfileMenuContent() {
  return (
    <DropdownMenu>
     <DropdownMenuTrigger
  aria-label="Open profile menu"
  className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-muted"
>
  <Avatar className="h-8 w-8">
    <AvatarImage
      src="https://github.com/shadcn.png"
      alt="User avatar"
    />
    <AvatarFallback className="bg-red-500/20 text-red-500">
      RX
    </AvatarFallback>
  </Avatar>
</DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex flex-col gap-1">
            <span className="text-sm font-medium">
              Alex Thompson
            </span>

            <span className="text-xs text-muted-foreground">
              alex@racex.com
            </span>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {PROFILE_MENU_ITEMS.map((item) => (
          <DropdownMenuItem key={item.href} className="p-0">
            <Link
              href={item.href}
              className="flex w-full items-center gap-2 px-1.5 py-1 text-sm cursor-pointer"
            >
              {iconMap[item.icon as keyof typeof iconMap]}
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const ProfileMenu = memo(ProfileMenuContent);