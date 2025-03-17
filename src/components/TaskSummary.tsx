import React from 'react'

const TaskSummary = () => {
  return (
    <div className='py-6'>
      <h2 className='text-3xl text-gray-700 font-bold text-center py-6'>Task Summary</h2>
      <div className='flex justify-center items-center gap-4'>
        <div className='bg-green-500 text-white p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>Total Tasks</h3>
          <p className='text-2xl font-bold'>5</p>
        </div>
        <div className='bg-blue-500 text-white p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>Completed Tasks</h3>
          <p className='text-2xl font-bold'>3</p>
        </div>
        <div className='bg-red-500 text-white p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>Pending Tasks</h3>
          <p className='text-2xl font-bold'>2</p>
        </div>
      </div>
    </div>
  )
}

export default TaskSummary