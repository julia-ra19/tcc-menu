import React from 'react'

import CentroInicial from '../Components/CentroInicial'
import Propaganda from '../Components/Propaganda'
import LinkTcc from '../Components/LinkTcc'
import Motivos from '../Components/Motivos'
import Rodape from '../Components/Rodape'
import Bar from '../Components/Bar'



const Home = () => {
  return (
    <>
      <Bar/>
      <CentroInicial/>
      <Propaganda/>
      <LinkTcc/>
      <Motivos/>
      <Rodape/>
      </>
  )
}

export default Home