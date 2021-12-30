import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <header>
        <div class="header-1">
          <a href="#" class="logo">
            <i class="fas fa-shopping-basket"></i>groco
          </a>

          <form action="" class="search-box-container">
            <input type="search" id="search-box" placeholder="search here..." />
            <label for="search-box" class="fas fa-search"></label>
          </form>
        </div>

        <div class="header-2">
          <div id="menu-bar" class="fas fa-bars"></div>

          <nav class="navbar">
            <Link href="#home">
              <a>Home</a>
            </Link>
            <Link href="#category">
              <a>Category</a>
            </Link>
            <Link href="#product">
              <a>Product</a>
            </Link>
            {/* <Link href="#deal">
              <a>Deal</a>
            </Link> */}
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </nav>

          <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-user-circle"></a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
