"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="hover:border-blur transition dark:bg-[#123c78] bg-[#E8E8EA] text-black hover:bg-gray-300 dark:text-white"
          size="icon"
        >
          <RxHamburgerMenu size={21} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44" align="center">
        <DropdownMenuLabel className="text-color-text">
          Toogle Theme
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-color-text">
          Social links
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem asChild>
          <Link
            target="_blank"
            rel="noopener noreferer"
            color="foreground"
            href={siteConfig.links.twitter}
            className="space-x-3"
          >
            <FaXTwitter size={18} />
            <span>Twitter</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            target="_blank"
            rel="noopener noreferer"
            color="foreground"
            href={siteConfig.links.github}
            className="space-x-3"
          >
            <FaGithub size={18} />
            <span>Github</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            target="_blank"
            rel="noopener noreferer"
            color="foreground"
            href={siteConfig.links.linkedin}
            className="space-x-3"
          >
            <FaLinkedin size={18} />
            <span>Linkedin</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            color="foreground"
            href={siteConfig.links.email}
            className="space-x-3"
          >
            <MdEmail size={18} />
            <span>Email</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
