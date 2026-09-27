import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Mystore } from '../context/Mystore';
import Todo from './Todo';
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router';


function Task() {
let {task,settask} = useContext(Mystore)
let {upd,setupd} = useContext(Mystore);
let navigate = useNavigate();
console.log(task);

useEffect(() => {
  if (upd) {
    reset(upd);
  }
}, [upd]);
    
  let handledata = (data)=>{
    if(upd){
        let update = task.map((val)=>{
           return (val.id === upd.id) ? {...val,...data} : val
    })
    settask(update);
    setupd(null);
    }else{
let arr = [...task,{...data,id:nanoid()}];
settask(arr);
    }
reset();
navigate("/cart");
  }
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(
    {mode:"onChange",
        defaultValues:upd
    }
  );


  return (
    <div className="min-h-screen bg-[#f5f1e8] px-4 py-10 text-gray-900">
      <div className="mx-auto max-w-2xl">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Task Manager
          </p>

          <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">
            Create New Task
          </h1>

          <p className="mt-3 text-gray-500">
            Fill in the details below to create your task.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handledata)} className="rounded-3xl border border-gray-300 bg-white p-6 shadow-lg sm:p-8">

          {/* Task Name */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold">
              Task Name
            </label>

            <input
            {...register("task",{required:true})}
              type="text"
              placeholder="Enter task name"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-gray-900 focus:bg-white"
            />
            {errors.task && <p className='text-red-500 font-semibold'>enter the task</p>}
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold">
              Description
            </label>

            <textarea
            {...register("description",{required:true})}
              rows="4"
              placeholder="Enter task description"
              className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-gray-900 focus:bg-white"
            ></textarea>
            {errors.description && <p className='text-red-500 font-semibold'>enter the description</p>}
          </div>

          {/* Date + Priority */}
          <div className="mb-6 grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Due Date
              </label>

              <input
              {...register("date",{required:true})}
                type="date"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none focus:border-gray-900 focus:bg-white"
              />
              {errors.date && <p className='text-red-500 font-semibold'>enter the date</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Priority
              </label>

              <select
              {...register("priority",{required:true})}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none focus:border-gray-900 focus:bg-white"
              >
                <option>Select priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              {errors.priority && <p className='text-red-500 font-semibold'>enter the Priority</p>}
            </div>

          </div>

          {/* Category */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-semibold">
              Category
            </label>

            <select
            {...register("category",{required:true})}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none focus:border-gray-900 focus:bg-white"
            >
              <option>Select category</option>
              <option>Study</option>
              <option>Work</option>
              <option>Personal</option>
              <option>Other</option>
            </select>
            {errors.category && <p className='text-red-500 font-semibold'>enter the category</p>}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
            >
              Cancel
            </button>

            
            
                <button
             
              type="submit"
              className="rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Add Task
            </button>
          </div>

        </form>
      </div>
      
    </div>

    
  );
}




export default Task;