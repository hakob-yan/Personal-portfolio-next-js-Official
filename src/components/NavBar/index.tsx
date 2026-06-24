"use client";

import React, { useEffect, useState } from "react";
import { PROFILE } from "@/constants/profile";
import { Menu, X } from "lucide-react";
import { SECTION_IDS, NAV_ITEMS } from "@/constants/navigation";
import { motion, AnimatePresence } from "framer-motion";
import useNavItemActive from "@/hooks/useNavItemActive";
import Link from "next/link";

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

// Thin scroll-progress hairline pinned to the very top edge.
const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute left-0 top-0 h-px w-full origin-left bg-[var(--color-primary)]"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden
    />
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive = false,
  onClick,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`group relative px-1 py-1 text-sm font-medium transition-colors ${
      isActive
        ? "text-[var(--color-primary-hover)]"
        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
    }`}
  >
    {label}
    <span
      className={`absolute -bottom-0.5 left-0 h-0.5 bg-[var(--color-primary)] transition-all duration-200 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </a>
);

const ProfileBadge: React.FC = () => (
  <Link href={`#${SECTION_IDS.hero}`} className="flex items-center gap-3">
    <span
      className="grid h-9 w-9 place-items-center rounded-btn border border-[var(--border-strong)] bg-[var(--surface-raised)] font-mono text-sm font-semibold text-[var(--color-primary-hover)]"
      aria-hidden
    >
      HH
    </span>
    <div className="hidden flex-col leading-tight sm:flex">
      <span className="text-sm font-semibold text-[var(--text-primary)]">
        {PROFILE.name}
      </span>
      <span className="font-mono text-[0.7rem] uppercase tracking-wide text-[var(--text-muted)]">
        {PROFILE.title}
      </span>
    </div>
  </Link>
);

const NavLinks: React.FC<{ onClick?: () => void; isMobile?: boolean }> = ({
  onClick,
  isMobile = false,
}) => {
  const activeId = useNavItemActive(NAV_IDS);

  return (
    <div
      className={`flex ${
        isMobile ? "flex-col items-start gap-4" : "flex-row items-center gap-7"
      }`}
    >
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.id}
          href={`#${item.id}`}
          label={item.label}
          isActive={activeId === item.id}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.22 } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.18 } },
  };

  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]/80 px-6 backdrop-blur-md lg:px-12">
      <ScrollProgress />

      <ProfileBadge />

      <div className="hidden lg:flex">
        <NavLinks />
      </div>

      <div className="lg:hidden">
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-btn p-2 text-[var(--text-secondary)] transition hover:bg-[var(--surface-raised)] hover:text-[var(--text-primary)]"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute left-4 right-4 top-16 flex flex-col items-start rounded-card border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-5 shadow-card lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <NavLinks onClick={() => setMenuOpen(false)} isMobile />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
