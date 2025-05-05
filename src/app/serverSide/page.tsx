import { Metadata } from "next"

type IData = {
    results: {
        name: string;
        status: string;
        id: string;
    }[];
}
export const metadata: Metadata = {
    title: "Lista de personagens Rm",
    description: "aplicação com consumo de API"
}
 const serverSide = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data: IData = await res.json()

  return (
   <>
    <div>server side page</div>
    {data?.results.map((item, index) => {
        return(
            <div key={index}>
            <h1>{item.name}</h1>
            <h2>{item.id}</h2>
            <p>{item.status}</p>
            </div>
        )
    })}
   </>
  )
}
export default serverSide