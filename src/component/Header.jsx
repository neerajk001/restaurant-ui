import React from 'react';
import welcome from '../assets/images/welcome.png';
import spoon from '../assets/images/spoon.png';

const Header = () => {
  return (
    <>
      <div className='min-h-screen bg-black flex flex-col md:flex-row justify-around items-center mt-24'>
        <div>
          <h1 className='text-white font-semibold '>chase the new flavour</h1>
          <img src={spoon} alt="" />
          <h1 className='text-yellow-500 text-4xl font-bold mb-3'>
            The key to fine
            <br />
            dining
          </h1>
          <p className='text-white mb-6'>
            Lorem ipsum dolor sit amet consectetur
            <br /> adipisicing elit. Ab perferendis error
            <br /> temporibus architecto earum vel mollitia,
          </p>
          <button className='bg-yellow-500 px-2 py-1 rounded-xl ml-12'>Explore now</button>
          <br />
          <br />
          <br />
          <br />

        </div>
        <div className=''>
          <img className='w-72 h-70' src={welcome} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
