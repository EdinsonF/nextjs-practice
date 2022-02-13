import Head from 'next/head';
import React from 'react'
import Container from '../components/Container';
import fetch from 'isomorphic-fetch';
import Users from '../components/Users';


const Index = ({users}) => {
  
  return (
    <>
     <Container>
       <Head>
         <title>Home - page</title>
       </Head>
        <div className='index'>
            {/* component users */}
            <Users users={users}/>
        </div>
      </Container>
    </>
  )
}

Index.getInitialProps = async ctx => {
  
    const result_query = await fetch('https://reqres.in/api/users');

    const resJSON = await result_query.json();

    return {
      users : resJSON.data
    }
}

export default Index;

