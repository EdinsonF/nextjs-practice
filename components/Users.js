import React from 'react'

const Users = ({users}) => {

  return (
    <>
      <div className='users'>
        <h2>Users API</h2>
        {
          users.map(usr => (
           
            <div className='users__card'>
              <div className='users__card--head'>
                <span className='users__card--icon'> 
                  <img src={usr.avatar} alt="" /> 
                </span>
                <span className='users__card--email'> { usr.email } </span>
              </div>
              <div className='users__card--body'>
                { usr.first_name } { usr.last_name }
              </div>
            </div>
            
          ))
        }
      </div>
    </>
  )
}

export default Users