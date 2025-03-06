import React from 'react'
import { Footer,BannerInicio,Dispositivos,Servicios,Faqs,Planes } from '../../components'

function Inicio() {
  return (
    <>
      <div className='Container-Inicio h-100 w-100'>
      <BannerInicio/>
      <Servicios/>
      <Planes/>
      <Dispositivos/>
      <Faqs/>
      </div>
      <Footer></Footer>
      
    </>
  )
}

export default Inicio