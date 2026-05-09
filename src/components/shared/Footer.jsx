// components/layout/Footer.jsx
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "হোম" },
    { href: "/animals", label: "সব পশু" },
    { href: "/profile", label: "আমার প্রোফাইল" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/contact", label: "যোগাযোগ" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "গোপনীয়তা নীতি" },
    { href: "/terms", label: "শর্তাবলী" },
    { href: "/refund", label: "রিফান্ড নীতি" },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "+880 1406-490781",
      href: "tel:+8801406490781",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "info@qurbanihat.com",
      href: "mailto:info@qurbanihat.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "ঢাকা, বাংলাদেশ",
      href: "#",
    },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg> },
    { name: "Twitter", href: "https://twitter.com", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/></svg> },
    { name: "Instagram", href: "https://instagram.com", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"/></svg> },
    { name: "YouTube", href: "https://youtube.com", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768C18.254 19 12 19 12 19s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.814.418Z"/></svg> },
    { name: "LinkedIn", href: "https://linkedin.com", icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/></svg> },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src={"/main-logo.png"} alt="QurbaniHat" width={500} height={500} className="w-40 h-auto" />
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              QurbaniHat হলো বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন কুরবানির পশুর মার্কেটপ্লেস।
              আমরা আপনার ঈদ-উল-আযহাকে সহজ এবং সুবিধাজনক করে তুলি।
            </p>

            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">দ্রুত লিংক</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">আইনি তথ্য</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">যোগাযোগ</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <Link href={contact.href} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300">
                    <span className="text-emerald-500">{contact.icon}</span>
                    <span>{contact.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} কুরবানিহাট। সকল অধিকার সংরক্ষিত।
        </p>

        <p className="text-sm text-gray-400 text-center md:text-right">
          ডেভেলপ করা হয়েছে <span className="text-red-500 animate-pulse">❤</span> দিয়ে{" "}
          <Link
            href="https://github.com/abdurrahmanadil"
            target="_blank"
            className="text-emerald-500 hover:text-emerald-400 font-semibold"
          >
            আব্দুর রহমান আদিল
          </Link>
        </p>
      </div>

    </footer>
  );
};

export default Footer;