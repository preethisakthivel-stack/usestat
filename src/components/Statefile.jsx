import React, { useState } from 'react'

export default function Statefile() {
    let [count,setCount]=useState(0);

    let [fruits,setFruits]=useState("");

    let [bool,setBool]=useState(false);

    let [brand,setBrand]=useState("POCO");
    let [year,setYear]=useState(2018);
    let [model,setModel]=useState("");
    

    let [counts,setCounts]=useState(0);
    let [text,setText]=useState('');
    
    let [array,setArray]=useState([1,2,3,4,5])
    let [obj,setObj]=useState({
        name:'Preethi',
        age:23,
        colleage:'Nandha',
    });

    let [bools,setBools]=useState('false');


  return (
    <div className='mb-[90px]'>
<div className=' flex gap-40'>
    <div>
    <div className='ml-[20px]'>
    <button onClick={()=>setCount(count+1)} className=' text-[19px] border-[1px] w-60 border-neutral-600 mt-[50px] bg-amber-200 hover:bg-cyan-500'>
        Add count
        </button>
<p className='mt-5'>count Increment:-{count}</p>
</div>

<div className='mt-[40px] ml-[40px] '>
<p onClick={()=>setFruits("Apple")} className=' border-[1px] w-[140px] text-center mt-3 bg-lime-300 hover:bg-cyan-300'>Apple</p>
<p on onClick={()=>setFruits("Mango")} className=' border-[1px] w-[140px] text-center mt-3 bg-lime-300 hover:bg-cyan-300'>Mango</p>
<p onClick={()=>setFruits("Grapes")} className=' border-[1px] w-[140px] text-center mt-3 bg-lime-300 hover:bg-cyan-300'>Grapes</p>
<p onClick={()=>setFruits("Pappaya")} className=' border-[1px] w-[140px] text-center mt-3 bg-lime-300 hover:bg-cyan-300'>Pappaya</p>
<p onClick={()=>setFruits("Cherry")} className=' border-[1px] w-[140px] text-center mt-3 bg-lime-300 hover:bg-cyan-300'>Cherry</p>
<p onClick={()=>setFruits((prev)=>prev + "Dragon fruit")} className=' border-[1px] w-[140px] text-center mt-3 bg-lime-300 hover:bg-cyan-300'>Dragon fruit</p>

<div className='mt-[30px] text-[30px] italic'>
    {fruits && (<h1>{ `${fruits} is ${fruits==="Apple"
?"Sweet and yummy"
:fruits==="Mango"
    ?"Sweet and juisy"
    :fruits==="Grapes"
    ?"Sweet and salty"
    :fruits==="Pappaya"
    ?"Sweet and juisy"
:"Sweet and salty"
}`}
    </h1>)}
</div>

</div>

<div >
    <button onClick={()=>setBool(!bool)} className='border-[1px] w-[190px] ml-[30px] mt-[40px] bg-emerald-200 text-[22px] hover:bg-violet-300'>
        {bool?"open Button":"close Button"}</button>
</div>
</div>


<div className=' mt-[30px] ml-[40px]'>
    <h1 className='text-[30px] text-purple-700 font-bold'>{brand}</h1>
    <p className='mt-[8px] text-[20px] '>{brand} was originally Luanched in the year {year}. </p>
    <p  className='mt-[8px] text-[20px] '> The famous model of {setBrand} is F1. </p>
    <p onClick={()=>setModel('Models')} className='mt-[8px] text-[20px] cursor-pointer'>{brand} 
        <u className=' font-bold text-blue-600'> Models</u>{setYear}
        </p>

    <div className='text-[22px] italic  text-green-800  mt-6'>
        {model && <h1 className=' border-[1px] border-dotted border-gray-900 w-[570px]'>{(`${brand} Models are poco M6,poco F6,poco X6..`)}
            <u onClick={()=>setModel('')} className=' pl-[100px] text-orange-700 cursor-pointer text-[19px]'>close</u></h1>}
    </div>


<div className=' mt-[50px]'>
    <button onClick={()=>setCounts(counts+1)} className='border-[1px] border-gray-700 w-[100px] font-bold bg-lime-100 hover:bg-green-700 cursor-pointer' >
        Increment
        </button>
    <button onClick={()=>setCounts(counts-1)} className='border-[1px] border-gray-700 w-[100px] font-bold bg-lime-100 ml-[20px] hover:bg-green-700 cursor-pointer'>
        Decrement
        </button>
    <button onClick={()=>setCounts(0)} className='border-[1px] border-gray-700 w-[100px] font-bold bg-lime-100 ml-[20px] hover:bg-green-700 cursor-pointer'>
        Reset
        </button>

    <p className='text-[20px] mt-[20px]'> Value of Count is:-{counts}</p>
</div>

<div className='mt-[40px]'>
    <form>
        <label className='text-[20px] font-bold text-pink-700'>Text:-</label>
        <input  type='text' value={text} onChange={(e)=>setText(e.target.value)} className=' outline-none border-b-2 border-gray-400 text-green-700' />
    </form>
    <h1>{text}</h1>
</div>



</div>
</div>

{/* Array in usestate */}

<div className=' mt-[50px] ml-[30px]'>
    <button onClick={()=>setArray(prev=>(
        [
            ...prev,[6,7,8,9]
        ]
    ))} className=' border-[1px] w-[150px] text-[20px] bg-lime-800'>
         Click to show</button>
    <h1 >Array Value:-</h1>
    {array.map(arr=>(<p>{arr}</p>))}
</div>



     {/* Object in usestate */}


<div className=' mt-[50px] ml-[30px]'>
    <button onClick={()=>setObj(prev=>(
        {
            ...prev,['course']:'Full stack'
        }
    ))}  className=' border-[1px] w-[150px] text-[20px] bg-lime-800'>
         Click to show</button>
         <h1>The Data of the Person:-</h1>
         <p>{obj.name}</p>
         <p>{obj.age}</p>
         <p>{obj.colleage}</p>
         {obj?.course && <p>{obj.course}</p>}
</div>

<div className=' mt-[50px] ml-[30px]'>
    <button onClick={()=>setBools(!bools)} className=' border-[1px] w-[150px] text-[20px] bg-lime-500'>
        {bools?'True':'False'}</button>
        { bools && <p className='text-[20px] italic first-letter:font-bold mt-[10px] first-letter:text-purple-600'>Now u see me!</p>}
</div>



    </div>
  )
}
