import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
              <Link href="/">
                <a>
                  Home
                </a>
              </Link>
          </li>
          <li>
              <Link href="/about">
                <a>
                  About
                </a>
              </Link>  
          </li>
          <li>
            <Link href="/others">
              <a>
                Others
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar