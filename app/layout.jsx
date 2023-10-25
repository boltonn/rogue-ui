import '../styles/globals.css'
import { Providers } from "@/providers";
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';

export const metadata = {
    title: 'Rogue',
    description: 'Unstructured content triage with AI/ML',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <div className='bg-white dark:bg-darkbg2'>
                        <Header />
                        <div className='flex flex-row justify-start h-full'>
                            <Sidebar />
                            <div className='flex-1 w-auto mx-5 border border-dashed'>
                                {children}
                            </div>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
