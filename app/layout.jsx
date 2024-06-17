import React from 'react'
import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer />
        </body>
    </html>
    </AuthProvider>
  

  )
}

export default MainLayout