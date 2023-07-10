import Navbar from './Navbar'
import React, { ReactNode } from "react";
import Footer from './Footer'

interface Props {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout