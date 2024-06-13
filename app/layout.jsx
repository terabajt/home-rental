import React from 'react'
import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'HomeRental | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({children}) => {
  return (
    <AuthProvider>
        <html lang='en'>
        <body>
            <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
    </html>
    </AuthProvider>
  

  )
}

export default MainLayout