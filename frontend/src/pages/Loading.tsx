import {  } from 'react'
import loader from '../assets/loaderFood.gif';
import { Helmet } from 'react-helmet';

export default function Loading() {
  return (
    <>
    <Helmet>
      <title>Please Wait... - FoodieFiends</title>
    </Helmet>
    <div className='grid place-items-center h-[100vh] w-[100wh]'>
        <img src={loader} alt="loader spinner" />
    </div>
    </>
  )
}
