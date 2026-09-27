import React, { useContext, useState } from 'react'
import { Mystore } from '../context/Mystore'
import { useNavigate } from 'react-router';

function Todo({data}) {
    let {task,settask} = useContext(Mystore);
   let {upd,setupd} = useContext(Mystore);
   let Navigate = useNavigate();
    
let delfunc = (info) => {
    let find = task.filter((item) => item.id !== info.id);
    settask(find);
};


  return (
    <div>
    {/* Task Shelf */}

<div className="mt-10">

  {/* Shelf Header */}
  <div className="mb-6 flex items-end justify-between">

    <div>
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
        Your Shelf
      </p>

      <h2 className="mt-2 font-serif text-3xl font-bold">
        My Tasks
      </h2>
    </div>

    <div className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
      {task.length} Tasks
    </div>

  </div>

{task.map((data,index)=>{
    return(
  <div className="space-y-4 m-1">

    {/* Task Card 1 */}
    <div className="rounded-3xl border border-gray-300 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between gap-4">

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Task {index+1}
          </p>

          <h3 className="mt-1 font-serif text-2xl font-bold">
            {data?.task}
          </h3>
        </div>

        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
          {data?.priority}
        </span>

      </div>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {data?.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">

        <span className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600">
          📅 {data?.date}
        </span>

        <span className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600">
          📁 {data?.category}
        </span>

        <span className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600">
          ⚡ {data?.priority} Priority
        </span>

      </div>

      <div className="mt-5 flex justify-end gap-2 border-t border-gray-100 pt-4">

        <button
        onClick={()=> {
            setupd(data)
        Navigate("/task")
        }}
          type="button"
          className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100"
        >
          Edit
        </button>

        <button
        onClick={()=>delfunc(data)}
          type="button"
          className="rounded-xl border border-red-200 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
        >
          Delete
        </button>

        <button
          type="button"
          className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Complete
        </button>

      </div>

    </div>

  </div>
  )})}
</div>
</div>
  )
}

export default Todo
