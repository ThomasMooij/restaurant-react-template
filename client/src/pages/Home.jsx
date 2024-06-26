import React, { useEffect, useState } from 'react'
import CartAside from '../components/CartAside'
import Landing from '../components/Landing'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'
import Photos from '../components/Photos'
import Reservation from '../components/Reservation'

const Home = () => {
  const [selectedPage, setSelectedPage] = useState('inicio')
  const [topPage , setTopPage] = useState(true)
  
  useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY === 0){
        setTopPage(true);
        setSelectedPage('inicio')
      }else{
        setSelectedPage('')
        setTopPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])
  return (
    <>
     <NavBar 
          topPage = {topPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
      />
        <Landing />
        <Menu />
        <Reservation />
        <Photos />
        
    </>
  )
}

export default Home