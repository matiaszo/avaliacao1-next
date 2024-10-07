"use client"
import { useState } from "react"

import imcImage from "/src/imc-image.jpg"
import Image from "next/image"

export default function Page() {

    const [peso, setpeso] = useState<string>("")
    const [altura, setAltura] = useState<string>("")
    const [imc, setImc] = useState<number | undefined>(0)

    const msgError = "Digite valores válidos"

    const calculateImc = () => {

        const p = parseFloat(peso);
        let alt = parseFloat(altura);

        alt = alt/100;

        if(!isNaN(p) && !isNaN(alt)){
            setImc(p/(alt * alt))
        }else{
            setImc(undefined)
        }
    }

    return(
        <>
            <div className="flex flex-col items-center justify-center bg-blue border-2 rounded-md overflow-hidden max-w-100">
                <span className="flex bg-darkYellow text-white w-full items-center justify-center">Calculo de imc</span>
                <Image src={imcImage} width={500} height={500} alt="imagem imc"/>

                <div className="flex gap-3 mt-3 flex-col">
                    <input className="text-center rounded-md w-36" type="text" value={altura} placeholder="Altura em cm" onChange={(event)=>setAltura(event.target.value)}/>
                    <input className="text-center rounded-md w-36" type="text" value={peso} placeholder="Peso" onChange={(event)=>setpeso(event.target.value)}/>
                </div>
                <div className="flex w-36 items-center justify-center"> <button className="flex bg-darkYellow mt-3 p-1 rounded-md w-full justify-center items-center" onClick={calculateImc}>Calcular Imc</button>
                </div>
                <div className="flex bg-green-300 w-36 mt-5 mb-5 rounded-md justify-around">
                    <p>Resultado: </p>
                    <p className="flex items-center justify-center">{!isNaN(imc ?? NaN) ? imc?.toFixed(2) : msgError}</p>
                </div>
            </div>
        </>
    )
}