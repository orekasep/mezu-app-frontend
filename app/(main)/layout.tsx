import googleSans from './fonts'
import './globals.scss'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body className={googleSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
