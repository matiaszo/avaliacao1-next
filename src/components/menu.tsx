import { ROUTES } from "@/constants/routes";
import Link from "next/link";


export const Menu = () =>{
    const style = {
        options: "flex bg-white rounded-sm w-16 h-[4vh] items-center justify-center"
    }

    return(

        <h1 className="flex justify-center items-center p-1 relative w-full gap-x-6 bg-darkYellow">
            <Link className={style.options} href={ROUTES.home}>Home</Link>
            <Link className={style.options} href={ROUTES.imc}>Imc</Link>
            <Link className={style.options} href={ROUTES.media}>Media</Link>
        </h1>
    )
}