"use client"
import { useState } from "react"
import imgMedia from "/src/foto-media-2.png"
import Image from "next/image"

export default function Page() {

    const [nota1, setNota1] = useState<string>("")
    const [nota2, setNota2] = useState<string>("")
    const [nota3, setNota3] = useState<string>("")
    const [nota4, setNota4] = useState<string>("")
    const [nota5, setNota5] = useState<string>("")
    const [media, setMedia] = useState<number | undefined>(0)
    const [passou, setPassou] = useState<boolean>(false)

    const msgError = "Digite valores válidos"

    const calculateMedia = () => {

        const n1 = parseFloat(nota1);
        const n2 = parseFloat(nota2);
        const n3 = parseFloat(nota3);
        const n4 = parseFloat(nota4);
        const n5 = parseFloat(nota5);

        if(!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4) && !isNaN(n5) ){
            let sum = n1 + n2 + n3 + n4 + n5;
            setMedia(sum / 5);
            if(media && media > 7){
                setPassou(true)
            }else{
                setPassou(false)
            }
        }else{
            setMedia(undefined)
            setPassou(false)
        }
    }

    return(
        <>
            <div className="flex flex-col items-center justify-center bg-blue border-2 rounded-md overflow-hidden max-w-100">
                <div>
                    <span className="flex bg-darkYellow text-white w-full items-center justify-center">Calculo da media</span>
                    <Image className="flex object-cover" src={imgMedia} height={500} width={500} alt="imagem media"/>
                </div>
                <div className="flex flex-col gap-3 mt-3 flex-wrap">
                    <input className="text-center rounded-md w-48" type="text" value={nota1} placeholder="Nota 1" onChange={(event)=>setNota1(event.target.value)}/>
                    <input className="text-center rounded-md w-48" type="text" value={nota2} placeholder="Nota 2" onChange={(event)=>setNota2(event.target.value)}/>
                    <input className="text-center rounded-md w-48" type="text" value={nota3} placeholder="Nota 3" onChange={(event)=>setNota3(event.target.value)}/>
                    <input className="text-center rounded-md w-48" type="text" value={nota4} placeholder="Nota 4" onChange={(event)=>setNota4(event.target.value)}/>
                    <input className="text-center rounded-md w-48" type="text" value={nota5} placeholder="Nota 5" onChange={(event)=>setNota5(event.target.value)}/>
                </div>
                <div className="flex w-36 items-center justify-center"> <button className="flex bg-darkYellow mt-3 p-1 rounded-md w-full justify-center items-center" onClick={calculateMedia}>Calcular media</button>
                </div>
                <div className="flex bg-green-300 w-36 mt-5 mb-5 rounded-md justify-around">
                    <p>Media: </p>
                    <p className="flex items-center justify-center">{!isNaN(media ?? NaN) ? media?.toFixed(2) : msgError}</p>
                </div>
                <div className="flex mb-2 w-full items-center justify-center">
                    <p className={`${passou ? "bg-green-400": "bg-red-300"} rounded-md p-1 w-[90%] text-center`} >{passou ? "Passou": "Nao passou"}</p>
                </div>
            </div>
        </>
    )
}