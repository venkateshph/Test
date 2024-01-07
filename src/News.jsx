import React, { useEffect, useState } from "react";
import supabase from "./login";
const News = () =>{
    const [created,setCreated] = useState([]);
    
    useEffect(()=>{
        const fecth = async()=>{
            console.log("loding")
            const {data:username_data,err} =  await supabase.from('News').select('*')
            
            setCreated(username_data)
        }        
        fecth()
    },[])
        console.log(created)
    return(
        <>
            <h4>News </h4>
            <ul>
                {created.map(v =>(
                    <li key={v.id}>
                        {v.v}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default News