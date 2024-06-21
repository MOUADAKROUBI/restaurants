import {  } from 'react'
import loader from '../assets/loaderFood.gif';

export default function Loading() {
  return (
    <div className='grid place-items-center h-[100vh] w-[100wh]'>
        <img src={loader} alt="loader spinner" />
    </div>
  )
}
