import Header from './components/Header';

export const metadata = {
  title: 'Meu App',
  description: 'Aplicativo incrível com Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
