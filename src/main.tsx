import { GlobalStyle } from '@/styles/Global'
import { NavBar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import ReactDOM from 'react-dom/client'
import { Home } from '@/pages/home'
import React from 'react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  	<React.StrictMode>
    	<GlobalStyle>
        	<NavBar />
        	<Home />
        	<Footer />
    	</GlobalStyle>
  	</React.StrictMode>
)
