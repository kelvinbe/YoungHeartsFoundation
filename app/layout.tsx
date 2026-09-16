import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Young Hearts Foundation | Every Child Deserves a Safe Place",
  description: "Young Hearts Foundation supports children experiencing homelessness with shelter, education, meals, healthcare and a path toward independence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
