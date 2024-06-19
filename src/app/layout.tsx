import '@/styles/globals.css';

export const metadata = {
  title: {
    template: '%s | Junior Alves',
    default: 'Junior Alves'
  },
  description: 'Black Friday | 70% de desconto!!!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-200 text-gray-100">
        <div className="flex w-full items-center px-8 py-20 text-slate-600">
          {children}
        </div>
      </body>
    </html>
  );
}
