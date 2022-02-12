import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Container = (props) => {
  return (
    <>
      <Head>
        <title>this it's?</title>
      </Head>
      <Navbar/>
      {props.children}
    </>
  )
}

export default Container