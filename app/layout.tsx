import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/numbers" style={{ marginRight: 16 }}>numbers</Link>
          <Link href="/grades">grades</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
