import '#/styles/globals.css';
import React from 'react';
import NavBar from "#/ui/NavBar"
import AuthProvider from "#/utils/AuthProvider"
export default function RootLayout(
  {children,}: { children: React.ReactNode}) {
  return (
    <html lang='en'>
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head />
    <body className="overflow-y-scroll bg-navy-100">
      <AuthProvider>
        <NavBar/>
        <div className="justify-between py-4 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          {children}
        </div>
      </AuthProvider>
    </body>
    </html>
  );
}
