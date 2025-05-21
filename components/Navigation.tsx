'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/constants/nav-links';

export default function Navigation() {
  return (
    <nav>
      <Link href={NAV_LINKS.numbers} style={{ marginRight: 16 }}>numbers</Link>
      <Link href={NAV_LINKS.grades}>grades</Link>
    </nav>
  );
}
