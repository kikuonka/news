import { Inter } from 'next/font/google'

import './globals.css'

export const metadata = {
    title: 'News Portal',
    description: 'Новостной сайт',
    icons: {
        icon: '/favicon.png',
    },
}

const interSans = Inter({
    variable: '--font-inter-sans',
    subsets: ['latin'],
})

export default function RootLayout({
                                       children,
                                       modal
}: Readonly<{
    children: React.ReactNode
    modal: React.ReactNode
}>) {
    return (
        <html lang='ru'>
            <body className={`${interSans.variable} antialiased`}>
                {children}
                {modal}
            </body>
        </html>
    )
}
