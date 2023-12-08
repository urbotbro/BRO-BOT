import React from 'react'
import Chart from './Chart'

import Demo from './Demo'

const Dashboard = () => {
  return (
    <main class="p-6 sm:p-10 space-y-6">
    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
    <div class="mr-6">

      <h1 class="text-4xl text-white font-semibold mb-2">BRO BOT DASHBOARD</h1>
     
    </div>
   
  </div>
  <h1 className='text-white text-2xl'>Recent Trades</h1>
  <section class="grid md:grid-cols-3 xl:grid-cols-4 gap-6">

  <div class="flex items-center p-8 bg-white shadow rounded-lg">
  <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
  </svg>
</div>
    <div>
      <span class="block text-2xl text-red-600 font-bold">-$500</span>
      <span class="block text-gray-500">32 minutes ago</span>
    </div>
  </div>
  <div class="flex items-center p-8 bg-white shadow rounded-lg">
    <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    </div>
    <div>
      <span class="block text-2xl text-green-500 font-bold">+$1200</span>
      <span class="block text-gray-500">50 minutes ago</span>
    </div>
  </div>
  <div class="flex items-center p-8 bg-white shadow rounded-lg">
    <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    </div>
    <div>
      <span class="block text-2xl text-red-600 font-bold">-$100</span>

      <span class="block text-gray-500">2 hours ago</span>
    </div>
  </div>


  
</section>

<section class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 pt-5 xl:grid-flow-col gap-6">
  <div class="flex flex-col md:col-span-2 md:row-span-2 w-[300vh] shadow rounded-lg pt-4">
    <Chart />
   
  </div>
 <Demo />




  <div class="row-span-3 rounded-xl"></div>
  <div class="row-span-3"></div>
  
  
</section>



    </main>
  )
}

export default Dashboard
