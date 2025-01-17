"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Logo from "@/assets/lumi.svg";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Contact",
    href: "/contact",
    description:
      "Have questions or feedback? Reach out to our team, and we'll assist you promptly.",
  },
  {
    title: "Documentation",
    href: "/docs",
    description:
      "Explore our comprehensive guide to get the most out of your Wrapped experience.",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    description:
      "Learn about how we protect your data and ensure your privacy is our top priority.",
  },
  {
    title: "FAQs",
    href: "/faqs",
    description:
      "Find answers to the most common questions about our platform and services.",
  },
  {
    title: "Terms of Service",
    href: "/terms-of-service",
    description:
      "Review the terms and conditions for using our application and services.",
  },
  {
    title: "Support",
    href: "/support",
    description:
      "Need help? Visit our support page for troubleshooting and assistance.",
  },
];

export function NavigationMenuItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image src={Logo} alt="logo" width={80} height={80} />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      lumi.work
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Elevating your digital presence with pioneering solutions
                      for a dynamic online future.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/team" title="Team">
                Meet the creative minds behind lumi.work. Discover their skills,
                experience, and passion for innovation.
              </ListItem>
              <ListItem href="https://github.com/lumi-work" title="GitHub">
                Explore our open-source projects and contribute to the growing
                lumi.work community.
              </ListItem>
              <ListItem href="https://x.com/works_lumi" title="Twitter">
                Stay updated on our latest projects, news, and achievements by
                following us on Twitter.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Changelog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-600 hover:text-neutral-100 focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
