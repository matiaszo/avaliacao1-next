import Link from "next/link";
import Image from "next/image";

export const Card = ({title, text, href}: any) =>{
    return(
        <>
            <div className="flex flex-col items-center justify-center max-w-52 border-2 rounded-md overflow-hidden">
                <div className="flex bg-gradient-to-r from-purple-500 to-pink-500 min-h-32 min-w-52 justify-center items-center">
                    <span className="text-white font-medium text-2xl"> {title}</span>
                </div>
                <div className="flex text-wrap"></div>
                    <span className="flex text-center">{text}</span>
                <div className="flex mt-5 justify-center items-center w-28 h-7 mb-5">
                <a href={href} className="w-full h-full text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center justify-center items-center">Read more</a>
                </div>
            </div>
        </>
    )
}
