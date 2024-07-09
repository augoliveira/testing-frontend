import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '@/components/error-fallback';
import Sidebar from '@/components/Sidebar/sidebar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata = {
  title: {
    template: '%s | Glazing Design',
    default: 'Glazing Design'
  },
  description: 'Expecialista | em vidros e espelhos!!!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <div className="flex bg-black">
          <Sidebar />
          <div className="w-full overflow-x-auto">
            <div className="overflow-auto sm:h-[calc(100vh)]">
              <div className="h-[calc(100vh - 100%)] relative mx-auto flex w-full justify-center overflow-auto overflow-y-auto">
                <div className="w-full md:max-w-full">
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    {children}
                  </ErrorBoundary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
