import '@/styles/globals.css';
import { Inter } from 'next/font/google';

import Sidebar from './../components/Sidebar/index';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata = {
  title: {
    template: '%s | Junior Alves',
    default: 'Junior Alves'
  },
  description: 'Black Friday | 70% de desconto!!!'
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="pt-BR"
      className={cx(
        'scroll-smooth bg-white font-sans text-black dark:bg-[#111010] dark:text-white',
        inter.variable
      )}
    >
      <body className="bg-gray-1100 overflow-y-scroll">
        <div className="flex bg-black">
          <Sidebar />
          <div className="w-full overflow-x-auto">
            <div className="overflow-auto sm:h-[calc(100vh)]">
              <div className="h-[calc(100vh - 100%)] relative mx-auto flex w-full justify-center overflow-auto overflow-y-auto">
                <div className="w-full md:max-w-full">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  {children}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
