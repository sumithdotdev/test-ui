import Background from "@/components/Background"
import Navbar from "@/components/sidebar"
import SidebarTwo from "@/components/sidebartwo"

import Image from "next/image"

import { FaUser } from "react-icons/fa"
import { FaShare } from "react-icons/fa"
import { FaMusic, FaApple, FaYoutube, FaSpotify, FaSoundcloud, FaDiscord } from "react-icons/fa"

export default function Home() {
  return (
    <div className="">
      {/* background */}
      <div className="-z-50">
        <Background />
      </div>

      <div className="flex m-10">
        {/* navbar */}
        <div className="z-50 w-[10%]">
          <Navbar />
        </div>

        <main className="flex flex-col w-[80%] gap-y-20">

          <div className="z-40 flex mt-20">
            <div className="flex">
              <p className="text-white tracking-wider" style={{ writingMode: "sideways-lr" }}>Instincts - Released in May 2022</p>
              <Image src={"/cover.jpg"} alt="cover" width={400} height={400}></Image>
            </div>

            <div className="flex flex-col ml-20 h-full pt-20 gap-y-3">
              <p className="text-stroke text-4xl tracking-widest h-10">LEVEL DAYS</p>
              <p className="text-white font-bold text-3xl ">Conro</p>
              <div className="flex gap-x-5 pt-5">
                <FaUser size={80} className="outline rounded-4xl" />
                <FaUser size={80} className="outline rounded-4xl" />
              </div>
              <div className="pt-10 flex gap-x-10 items-center">
                <button className="bg-green-500 w-50 h-15 rounded-sm tracking-wider ">▷ LISTEN NOW</button>
                <button className="tracking-wider outline-1 bg-transparent flex p-4 rounded-sm gap-x-2 items-center"><FaShare />SHARE</button>
              </div>
            </div>

          </div>

          <div className="z-40">
            <p className="text-white tracking-widest text-4xl font-bold">STREAM IT YOUR WAY</p>
            <table className="text-4xl mt-5">
              <tbody className="">
                <tr className="outline">
                  <th className="outline p-5"><FaMusic size={20} /></th>
                  <th className="p-5"><FaApple size={20} /></th>
                  <th className="outline p-5"><FaDiscord size={20} /></th>
                  <th className="p-5"><FaSoundcloud size={20} /></th>
                  <th className="outline p-5"><FaSpotify size={20} /></th>
                  <th className="p-5"><FaYoutube size={20} /></th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="z-40">
            <p className="text-white tracking-widest text-4xl font-bold">TRACK LIST</p>
          </div>

        </main>

        <div className="z-50 w-[10%]">
          <SidebarTwo />
        </div>
      </div >
    </div >
  )
}