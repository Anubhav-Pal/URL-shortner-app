import React from 'react'

const Table = () => {
  return (
    <div className='md:flex md:items-center md:justify-center md:w-full'>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-4 md:w-[48rem]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3">
                Your URL
              </th>
              <th scope="col" class="px-6 py-3">
                Shorten URL
              </th>
              <th scope="col" class="px-6 py-3">
                Clicks
              </th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Table