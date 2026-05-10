"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./../../utils/NavLink";
import { Button } from "../ui/button";
import { LogIn, Menu, X, LogOut, Loader2 } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import {
  MotionDiv,
  MotionUl,
  MotionLi,
  MotionButton,
  navbarLogoVariants,
  navbarContainerVariants,
  navbarItemVariants,
  buttonVariants,
  menuVariants,
  slideInVariants,
} from "../ui/MotionDiv";

import { useSession, authClient, signOut } from "../../lib/auth/auth-client";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: session, isPending } = useSession();
  const user = session?.user;

  const Nav_Link = [
    { href: "/", Label: "হোম" },
    { href: "/animal", Label: "সব পশু" },
    { href: "/profile", Label: "আমার প্রোফাইল" },
  ];

  const getInitials = (name = "") =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <MotionDiv
            variants={navbarLogoVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/">
              <Image
                src="/main-logo.png"
                alt="QurbaniHat"
                width={600}
                height={600}
                className="w-32 sm:w-40 md:w-48 h-auto"
                priority
              />
            </Link>
          </MotionDiv>

          {/* Desktop Nav */}
          <MotionUl
            variants={navbarContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-6"
          >
            {Nav_Link.map((link) => (
              <MotionLi key={link.href} variants={navbarItemVariants}>
                <NavLink
                  href={link.href}
                  className="px-4 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-700"
                >
                  {link.Label}
                </NavLink>
              </MotionLi>
            ))}
          </MotionUl>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-3">
            {/* LOADING STATE */}
            {isPending ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                লোড হচ্ছে...
              </div>
            ) : user ? (
              <>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user.image || ""} />
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>

                <Button
                  onClick={async () => await signOut()}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  লগআউট
                </Button>
              </>
            ) : (
              <MotionDiv
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link href="/login">
                  <Button className="flex items-center gap-2 px-6">
                    <LogIn className="w-4 h-4" />
                    লগইন
                  </Button>
                </Link>
              </MotionDiv>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <MotionButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </MotionButton>
        </div>
      </div>

      {/* MOBILE MENU */}
      <MotionDiv
        initial="hidden"
        animate={mobileMenuOpen ? "visible" : "hidden"}
        variants={menuVariants}
        className="md:hidden border-t bg-white"
      >
        <div className="px-4 py-4 space-y-3">
          <ul className="space-y-2">
            {Nav_Link.map((link, i) => (
              <MotionLi
                key={link.href}
                custom={i}
                variants={slideInVariants}
                onClick={() => setMobileMenuOpen(false)}
              >
                <NavLink
                  href={link.href}
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100"
                >
                  {link.Label}
                </NavLink>
              </MotionLi>
            ))}
          </ul>

          {/* MOBILE USER */}
          {isPending ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground px-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              লোড হচ্ছে...
            </div>
          ) : user ? (
            <div className="flex items-center justify-between px-2 pt-3 border-t">
              <Avatar>
                <AvatarImage src={user.image || ""} />
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>

              <Button onClick={async () => await signOut()} variant="outline">
                <LogOut className="w-4 h-4 mr-2" />
                লগআউট
              </Button>
            </div>
          ) : (
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full flex gap-2">
                <LogIn className="w-4 h-4" />
                লগইন
              </Button>
            </Link>
          )}
        </div>
      </MotionDiv>
    </nav>
  );
};

export default Navbar;
