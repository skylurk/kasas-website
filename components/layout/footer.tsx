import Link from "next/link"

const footerLinks = [
  { label: "Fleet",   href: "/fleet"   },
  { label: "Routes",  href: "/routes"  },
  { label: "About",   href: "/about"   },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        <Link href="/" className="text-lg font-semibold tracking-tight">
          XYZ Air
        </Link>

        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} XYZ Air Charter. All rights reserved.
        </p>

      </div>
    </footer>
  )
}