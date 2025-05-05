
"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image";
import { api } from "@/contents/api";

interface IData{
    name: string;
    gender: string;
    status: string;
    species: string;
    image: string;

}
const axiosPage = () => {
    const [data, setData] = useState<IData[]>([])

    useEffect(() => {
        api.get(`/character`).then((res) => {
            setData(res.data.results)
        }).catch((e) =>{
            console.log(e)
        })
    }, [])




    return(
        <>
         <h1>Axios page client side</h1>
         <Suspense fallback={<div>Loading...</div>}>
        {data.map((item, index) =>(
            <div key={index}>
            <h2>{item.name}</h2>
            <Image src={item.image} alt={item.name} width={200} height={200}/>
            <p>{item.species}</p>
            <p>{item.status}</p>
            <p>{item.gender}</p>
            </div>
        ))}
         </Suspense>
        </>
    )
}

export default axiosPage