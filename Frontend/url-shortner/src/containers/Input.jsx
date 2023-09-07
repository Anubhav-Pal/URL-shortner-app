import React from 'react'

const Input = () => {
  return (
    <div>
      <form action="" method="post" className='m-4 md:flex gap-2 md:items-center md:justify-center md:my-20'>
        <div className='mb-2 md:mb-0 md:w-1/2'>
          <input type="url" name="formUrl" id="formUrl" placeholder='Enter your URL here' className='w-full p-2.5 rounded-md '/>
        </div>
        <div>
        <button className='w-full text-white bg-green-700 p-2.5 rounded-md hover:bg-green-800 ease-in-out duration-300'>Shorten URL</button>
        </div>
      </form>
    </div>
  )
}

export default Input