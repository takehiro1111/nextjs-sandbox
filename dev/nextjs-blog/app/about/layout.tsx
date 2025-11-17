import React from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className="bg-red-100 p-4">Aboutヘッダー</header>
        {children}
      </body>
    </html>
  );
}
