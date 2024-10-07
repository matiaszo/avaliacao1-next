import { Card } from "@/components/card"
import Image from "next/image";
import jqueryImg from "/src/jquery-img.png"
import nextImg from "/src/next-img.png"
import vueImg from "/src/vue-img.png"
import reactImg from "/src/react-img.png"
import next from "next";
const data: {title: string, text: string, href: string}[] = 
[
  {
    title: "React",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore sunt soluta rerum corporis quo consequatur nobis",
    href: "#react" 
  },
  {
    title: "Vue",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore sunt soluta rerum corporis quo consequatur nobis",
    href: "#vue" 
  },
  {
    title: "Next",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore sunt soluta rerum corporis quo consequatur nobis",
    href: "#next" 
  },
  {
    title: "JQuery",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore sunt soluta rerum corporis quo consequatur nobis",
    href: "#jquery" 
  }
]

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">

      <div className="flex flex-wrap items-center justify-center gap-4">
      {data.map((item,index) =>(
        <Card key={index} title={item.title} text={item.text} href={item.href}/>
      ))}
      </div>

      <div className="flex flex-col w-full items-center justify-center ">
        <div id="react" className="flex flex-col mt-14 items-center justify-center">
          <Image  src={reactImg} height={200} width={200}  alt="imagem react"/>
          <span className="flex text-center w-1/3">React Native is an open-source UI software framework created by Facebook Inc. 
            (now Meta Platforms).[3] It is used to develop applications for Android,by enabling developers to use the React framework along with native platform capabilities.
             It is used to develop Android and iOS applications at Facebook, Microsoft, and Shopify</span>
        </div>
        <div id="vue" className="flex flex-col mt-14 items-center justify-center">
          <Image  src={vueImg} height={200} width={200}  alt="imagem react"/>
          <span className="flex text-center w-1/3">Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster 
            and leaner development experience for modern web projects. It consists of two major parts.</span>
        </div>
        <div id="next" className="flex flex-col mt-14 items-center justify-center">
          <Image  src={nextImg} height={200} width={200}  alt="imagem react"/>
          <span className="flex text-center w-1/3">React documentation mentions Next.js among "Recommended Toolchains" advising it to developers when "building a server-rendered website with
             Node.js". Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include 
             applications rendered on the server-side.</span>
        </div>
        <div id="jquery" className="flex flex-col mt-14 items-center justify-center">
          <Image  src={jqueryImg} height={200} width={200}  alt="imagem react"/>
          <span className="flex text-center w-1/3">jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation,
             as well as event handling, CSS animations, and Ajax.[3] It is free, open-source software using the permissive MIT License.[4] 
            As of August 2022, jQuery is used by 77% of the 10 million most popular websites.</span>
        </div>
      </div>
    </div>
    </>
  );
}
