import "./globals.css";

export const metadata = {
  title: "Alex Doss Mobile Mechanic | Honest Diagnostics First",
  description: "Mobile mechanic — honest diagnostics first, repairs second. On-site service, no tow needed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900">{children}</body>
    </html>
  );
}
