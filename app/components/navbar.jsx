// components/Navbar.js

'use client'
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex bg-blue-900 mb-10 text-xl justify-between items-center px-8 py-10'>
      <h3 className='text-4xl text-white font-bold '>Ashish Singh</h3>
      <div className='flex gap-16 text-lg font-medium text-white'>
        <Link href='/'>HOME</Link>
        <Link href='/about'>ABOUT</Link>
        <Link href='/contact'>CONTACT</Link>
        {/* <Link href='/const'>Const</Link> */}
        {/* <Link href='./ashish'>Ashish</Link> */}
        {/* <Link href='/skills'>SKILLS</Link>
        <Link href='/courses'>COURSES</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
