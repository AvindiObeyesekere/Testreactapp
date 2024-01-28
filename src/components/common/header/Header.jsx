import React from 'react';
import { Navbar } from '../../common';
function Header (){
    return(
        <section className="header">
           <section className="header-top">
            <section className="header-top-logo">
              <a href="/" className="header">LOGO</a>
              
            </section>
            <section className="header-top_navbar"> 
                <Navbar />

               
            </section>
         
        </section>
 
        <section className="header-bottom">
            <section className="header-bottom_phone">
                    99999
            </section>
            <section className="header-bottom_email">
                    shoppr.info@gmail.com
            </section>
        </section>
        </section>
       
    )
}
export default Header;