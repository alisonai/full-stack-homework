import { NAV_LINKS } from '@/constants/nav-links';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect(NAV_LINKS.numbers)
}
