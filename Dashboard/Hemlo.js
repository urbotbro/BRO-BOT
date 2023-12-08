import React from 'react'
import Chart from './Chart'
import Table from './Table'

const Hemlo = () => {
  return (
    
    <main class="p-6 sm:p-10 space-y-6">
    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
      <div class="mr-6">
        <h1 class="text-4xl text-white font-semibold mb-2">BRO BOT Dashboard</h1>
      
      </div>
      <div class="flex flex-wrap items-start justify-end -mb-3">
    
      </div>
    </div>

    <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">62</span>
            <span class="block text-gray-500">Students</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">6.8</span>
            <span class="block text-gray-500">Average mark</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
          <div>
            <span class="inline-block text-2xl font-bold">9</span>
            <span class="inline-block text-xl text-gray-500 font-semibold">(14%)</span>
            <span class="block text-gray-500">Underperforming students</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">83%</span>
            <span class="block text-gray-500">Finished homeworks</span>
          </div>
        </div>
      </section>

      <section class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
        <div class="flex flex-col md:col-span-2 md:row-span-2 shadow rounded-lg">
        <Chart />
          </div>

           <Table />
      
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">139</span>
            <span class="block text-gray-500">Hours spent on lections</span>
          </div>
        </div>
        <div class="row-span-3 rouned-xl ">
         
          
         
          
        
         
        </div>
        <div class="row-span-3 ">
        
        </div>
      </section>
   
   
  </main>
    
  )
}

export default Hemlo
