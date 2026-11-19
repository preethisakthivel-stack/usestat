import React, { useState } from 'react'

export default function Formvalid() {

    // let [name,setName]=useState("");
    // let [email,setEmail]=useState("");
    // let [passwrd,setPasswrd]=useState("");

    
    // console.log('Name:-',name)
    // console.log('Email:-',email)
    // console.log('Passwrd:-',passwrd)

    let [usersdoc,setUsersdoc]=useState({
      names:"",
      emails:"",
      passwrds:"",
    });


    const handelChange=(datas,value)=>
    {
      const namerejx=/^[A-Za-z]*$/
      const emailrejx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const passwrdrejx=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      if(datas === 'names' && !namerejx.test(value)){
        console.log('Invalid name');
      }else if (datas === 'emails' && !emailrejx.test(value)){
        console.log('Invalid email');
      }else if(datas === 'passwrd' && !passwrdrejx.test(value) ){
        console.log('Invalid passwrd');
        
      }

      setUsersdoc((prev)=>({
        ...prev,
        [datas]:value,
    }))
    }
    console.log('Name:',usersdoc.names);
    console.log('email:-',usersdoc.emails);
    console.log('passwrd:',usersdoc.passwrds);
    
    
  return (
    <div className=' mb-[100px]'>
        
        {/* <div>
            <form className=' ml-10'>
                <label  > NAME:-</label>
                <input type='text' value={name} className=' outline-none border-b-2 border-stone-600 '
                 onChange={(e)=>{
                    const namerejx=/^[A-Za-z]*$/
                    if(namerejx.test(e.target.value))
                    setName(e.target.value)}}  />
                <br></br>
                <lable > EMAIL:-</lable>
                <input type='email' value={email} className=' outline-none border-b-2 mt-10 border-stone-600'
                 onChange={(e)=>{
                    const emailrejx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    if(emailrejx.test(e.target.value))
                    setEmail(e.target.value)
                 }} />
                <br></br>
                <lable >PASSWORD:-</lable>
                <input type='password' value={passwrd} className=' outline-none border-b-2 mt-10 border-stone-600'
                 onChange={(e)=>setPasswrd(e.target.value)} />

                </form>
        </div> */}


        <div>
          <form>
            <label>NAME:-</label>
            <input type='text' 
            value={usersdoc.names} 
            name='names' 
            onChange={(e)=> handelChange("names",e.target.value)} />

            <label>EMAIL:-</label>
            <input type='email'
            value={usersdoc.emails}
            name='emails'
            onChange={(e)=>handelChange('emails',e.target.value)}/>

            <label>PASSWRD:-</label>
            <input type='password'
            value={usersdoc.passwrds}
            name='passwrds'
            onChange={(e)=>handelChange('passwrds',e.target.value)}/>
          </form>
        </div>

    </div>
  )
}
