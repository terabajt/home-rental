import React from 'react'
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'HomeRental | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
    </html>

  )
}

export default MainLayout