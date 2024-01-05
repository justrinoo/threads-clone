import type { Metadata } from 'next';
import './globals.css';
import Navigation from './_components/Navigation/Navigation';
import { menus } from './_components/Navigation/_types/menu';

export const metadata: Metadata = {
    title: 'Clone Threads',
    description: 'This web clone threads using fullstack modern framework',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <main className='flex min-h-screen flex-col items-center justify-between bg-[#000]'>
                    <div className='z-10 max-w-3xl w-full items-center justify-between font-mono text-sm'>
                        <header className='px-24 text-white'>
                            <Navigation menus={menus} />
                        </header>
                        <div className='px-24 py-12'>{children}</div>
                    </div>
                </main>
            </body>
        </html>
    );
}
