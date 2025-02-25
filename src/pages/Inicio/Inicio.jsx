import React from 'react'
import { Footer, NavBar,BannerInicio,Dispositivos,Servicios,Faqs,Planes } from '../../components'

function Inicio() {
  return (
    <>
      <BannerInicio/>
      <Dispositivos/>
      <Servicios/>
      <Faqs/>
      <Planes/>
    <Footer></Footer>
    </>
  )
}

export default Inicio