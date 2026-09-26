import Image from "next/image";

const navLinks = [
  { href: "#properties", label: "Properties" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-sand/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Grapple Properties"
            width={44}
            height={38}
            className="h-10 w-auto"
            priority
          />
          <span className="font-display text-lg tracking-tight text-ink">
            Grapple Properties
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-ink/80 transition-colors hover:text-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/263777251575"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm bg-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-deep"
        >
          WhatsApp us
        </a>
      </div>
    </header>
  );
}
