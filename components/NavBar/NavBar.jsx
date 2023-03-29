import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav>
    <h3>e-commerce</h3>
    <div>
        <button>
            stickers
        </button>
        <button>
            remeras
        </button>
        <button>
            calendarios
        </button>
    </div>
    <CartWidget/>
    </nav>
  )
}

export default NavBar