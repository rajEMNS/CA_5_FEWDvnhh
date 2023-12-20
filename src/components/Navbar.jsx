import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ onSearch }) {

  return (
    <>
      <nav>
        <Link to="/" className='kalviumBooks'>
          <span className='book-heading'>Kalvium Books</span>
        </Link>
        <input type="search" placeholder='Search books' onChange={onSearch} className='searchBar' />
        <Link to='/registration' >
          <button className='Registration'>Register</button>
        </Link>
      </nav>
    </>
  )
}
export default Navbar