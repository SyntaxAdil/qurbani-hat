"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./../../utils/NavLink";
import { Button } from "../ui/button";
import { LogIn, Menu, X } from "lucide-react";
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
  hoverScaleVariants,
} from "../ui/MotionDiv";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Nav_Link = [
    { href: "/", Label: "Home" },
    { href: "/animals", Label: "All Animals" },
    { href: "/profile", Label: "My Profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <MotionDiv
            variants={navbarLogoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="shrink-0 hover:opacity-80 transition-opacity"
            >
              <Image
                src={"/main-logo.png"}
                alt="QurbaniHat"
                width={600}
                height={600}
                className="w-32 sm:w-40 md:w-48 h-auto"
                priority
              />
            </Link>
          </MotionDiv>

          {/* Desktop Navigation */}
          <MotionUl
            variants={navbarContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-1 lg:gap-6"
          >
            {Nav_Link.map((link) => (
              <MotionLi
                key={link.href}
                variants={navbarItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  href={link.href}
                  className="px-3 lg:px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-gray-700 hover:text-gray-900"
                >
                  {link.Label}
                </NavLink>
              </MotionLi>
            ))}
          </MotionUl>

          {/* Desktop Login Button */}
          <MotionDiv
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="hidden md:block"
          >
            <Button className="flex items-center gap-2 px-6">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </MotionDiv>

          {/* Mobile Menu Button */}
          <MotionButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </MotionButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <MotionDiv
        initial="hidden"
        animate={mobileMenuOpen ? "visible" : "hidden"}
        variants={menuVariants}
        className="md:hidden border-t bg-white overflow-hidden"
      >
        <div className="px-4 py-4 space-y-3">
          <ul className="space-y-2">
            {Nav_Link.map((link, index) => (
              <MotionLi
                key={link.href}
                custom={index}
                variants={slideInVariants}
                initial="hidden"
                animate={mobileMenuOpen ? "visible" : "hidden"}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <NavLink
                  href={link.href}
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-gray-700 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.Label}
                </NavLink>
              </MotionLi>
            ))}
          </ul>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={
              mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="w-full flex items-center justify-center gap-2 py-6">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </MotionDiv>
        </div>
      </MotionDiv>
    </nav>
  );
};

export default Navbar;