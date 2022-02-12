import Head from 'next/head';
import React from 'react'
import Container from '../components/Container';


const Index = () => {
  return (
    <>
     <Container>
       <Head>
         <title>Home - page</title>
       </Head>
        <div>
          Hola mundo, a mi home
        </div>
      </Container>
    </>
  )
}

export default Index;

