import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle"; // Import the toggle

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-lg mr-4">
          🏥 Faull’s Pharmacy (Demo)
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/order">Order Prescription</Link>
          </Button>
          <ThemeToggle /> {/* Add the toggle button here */}
        </div>
      </div>
    </header>
  );
}