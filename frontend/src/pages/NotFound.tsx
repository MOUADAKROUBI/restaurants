import {  } from 'react'
import notFound from '../assets/notFound.gif';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='grid place-items-center h-[100vh] w-[100wh]'>
        <span className=' text-gray-500 font-bold text-2xl capitalize'>something went wrong! please back to <Link to='/' className='text-orange-500'>Home Page</Link></span>
        <img src={notFound} alt="Not Found" />
    </div>
  )
}
