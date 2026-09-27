import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';

function Planner() {

    let [task,settask] = useState([]);
    let [Complete,setcomplete] = useState(0);
    let [updates,setupdates] = useState(null);
    console.log(updates);

console.log(task);

    let emptyform = {
      task:"",
      description:"",
      date:"",
      time:"",
      priority:"Select priority",
      category:"Select category",
      hours:"",
      minutes:"",
    };

     const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode:"onChange",
    defaultValues: emptyform,
  });

  useEffect(()=>{
    if(updates){
      reset(updates)
    }
  },[updates])

  let handledata = (data) => {
  if (updates) {
    let updating = task.map((item)=>{
      return item.id === updates.id ? {...item,...data} : item
    });
    settask(updating);
    setupdates(null);
    reset(emptyform);
  } else {
    let arr = [...task, { ...data, id: nanoid() }];
    settask(arr);
    reset(emptyform);
  }
};

  let percentage = task.length === 0? 0 : Math.round((Complete)/(task.length) *100)

  let deletefunc = function(item){
    return settask((data)=>{
return data.filter((val)=> val.id !== item.id)
    })
  }


  return (
  <div className="min-h-screen bg-[#f5f7f4] px-4 py-8 md:px-8">

    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-emerald-600">
          DAILY PLANNER
        </p>

        <h1 className="text-4xl font-bold text-slate-900 mt-2">
          Plan Your Day
        </h1>

        <p className="text-slate-500 mt-2">
          Organize your tasks and make your day productive.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">

        {/* Form */}
        <form  onSubmit={handleSubmit(handledata)} className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">

          <div className="mb-7">
            <h2 className="text-xl font-bold text-slate-900">
              Create a Task
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Add something you want to accomplish today.
            </p>
          </div>

          {/* Task Name */}
          <div className="mb-5">
            <label 
            className="block text-sm font-semibold text-slate-700 mb-2">
              Task Name
            </label>

            <input
             {...register("task",{required:true})}
              type="text"
              placeholder="e.g. Complete DSA practice"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 transition"
            />
            {errors.task && <p className='text-red-500 font-semibold'>enter the task</p>}
          </div>

          {/* Description */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Description
            </label>

            <textarea
            {...register("description",{required:true})}
              rows="4"
              placeholder="Write a short description..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none resize-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 transition"
            ></textarea>
          </div>

          {/* Date + Time */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Date
              </label>

              <input
              {...register("date",{required:true})}
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Time
              </label>

              <input
              {...register("time",{required:true})}
                type="time"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
              />
            </div>

          </div>

          {/* Priority + Category */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Priority
              </label>

              <select
              {...register("priority",{required:true})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
              >
                <option>Select priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Category
              </label>

              <select
              {...register("category",{required:true})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
              >
                <option>Select category</option>
                <option>Study</option>
                <option>Coding</option>
                <option>Personal</option>
                <option>Project</option>
                <option>Health</option>
              </select>
            </div>

          </div>

          {/* Duration */}
          <div className="mb-7">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Estimated Duration
            </label>

            <div className="grid grid-cols-3 gap-8">

              <input
              {...register("hours",{required:true})}
                type="number"
                placeholder="Hours"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500"
              />

              <input
              {...register("minutes",{required:true})}
                type="number"
                placeholder="Minutes"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500"
              />

            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-emerald-600 transition duration-300"
          >
            {updates ? "Update Task" : "+ Add Task"}
          </button>

        </form>

        {/* Preview */}
        <div className="space-y-5">

          {/* Today's Progress */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6">

            <h2 className="font-bold text-lg text-slate-900">
              Today's Progress
            </h2>

            <div className="flex items-center justify-center my-7">
              <div className="h-36 w-36 rounded-full border-[12px] border-emerald-100 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-slate-900">
                    {percentage}%
                  </p>
                  <p className="text-xs text-slate-400">
                    completed
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-500">
                Completed
              </span>

              <span className="font-semibold">
                {Complete} / {task.length}
              </span>
            </div>

          </div>

         {/* Quick Tasks */}
<div className="bg-slate-900 rounded-3xl p-6 text-white">

  <div className="flex items-center justify-between">
    <div>
      <p className="text-emerald-400 text-xs font-bold tracking-widest">
        TODAY
      </p>

      <h2 className="text-2xl font-bold mt-2">
        Stay focused.
      </h2>
    </div>

    <span className="text-xs bg-slate-800 px-3 py-1.5 rounded-full text-slate-400">
      {task.length} Tasks
    </span>
  </div>

  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
    Small progress every day creates big results.
  </p>

  <div className="mt-6 space-y-3">
  {task.map((data)=>{
    return(

    <div key={data.id} className="group flex items-center gap-3 bg-slate-800/70 border border-slate-700 rounded-2xl p-3 hover:border-emerald-400/40 transition">

      {/* Complete */}
      <input
      onChange={(e)=>{
        console.log(e.target.checked);
        
        if(e.target.checked){
           setcomplete(Complete+1)
        }else{
            setcomplete(Complete-1);
        }
      }}
        type="checkbox"
        className="w-5 h-5 accent-emerald-500 cursor-pointer"
      />

      {/* Task */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-200 truncate">
          {data.task}
        </p>

        <p className="text-xs text-slate-500 mt-1">
          {data.time} • {data.category}
        </p>
      </div>

      {/* Update */}
      <button
      type="button"
      onClick={()=>{
         setupdates(data);
      }}
        className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition"
        title="Update"
      >
        ✎
      </button>

      {/* Delete */}
      <button
      type="button"
      onClick={()=> deletefunc(data)}
        className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-400 hover:bg-slate-700 transition"
        title="Delete"
      >
        🗑
      </button>

    </div>

)})}
  </div>
</div>

        </div>

      </div>
    </div>
  </div>
)
}

export default Planner