import React from 'react'
import { Footer,BannerInicio,Dispositivos,Servicios,Faqs,Planes } from '../../components'

function Inicio() {
  return (
    <>
      <BannerInicio/>
      <Servicios/>
      <Planes/>
      <Dispositivos/>
      <Faqs/>
      <Footer></Footer>
    </>
  )
}

export default Inicio