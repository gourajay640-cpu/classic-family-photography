import './globals.css';
import { db } from '@/lib/db';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export const metadata = {
  title: 'Classic Family Photography | Wedding Photography in Bhopal',
  description: 'Classic Family Photography creates cinematic wedding photography, films, pre-wedding stories and portraits in Bhopal.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await db.studioSettings.findUnique({ where: { id: 'default' } }).catch(() => null);
  return (
    <html lang="en">
      <body>
        <SiteHeader logo={settings?.logoUrl} />
        {children}
        <SiteFooter settings={settings} />
      </body>
    </html>
  );
}
