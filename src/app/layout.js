'use client'
import React from 'react';
import "./globals.css"

const Layout = (props) => {

  const goTo=()=>{
    window.location.href="/"
  }
  
  return (
    <html>
      <body>
        <a href="/page1" className ='text' >
        PAGE1
        </a>
        <button onClick={()=>goTo()}>main</button>
        {props.children}
        <footer>
          &copy; test
        </footer>
      </body>
    </html>
  );
}

export default Layout;
