import Background from "@/components/Background"
import MusicCard from "@/components/musicCard"
import Navbar from "@/components/sidebar"
import SidebarTwo from "@/components/sidebartwo"
import TrackCard from "@/components/trackCard"

import Image from "next/image"

import { FaUser } from "react-icons/fa"
import { FaShare } from "react-icons/fa"
import { FaMusic, FaApple, FaYoutube, FaSpotify, FaSoundcloud, FaDiscord } from "react-icons/fa"

export default function Home() {

  const tracks = [
    {
      id: 1,
      title: "Ninjas in Paris",
      artist: "Kanye",
      duration: "3:30"
    },

    {
      id: 2,
      title: "Heil Stalin",
      artist: "Sumith",
      duration: "3:30"
    },

    {
      id: 3,
      title: "Fartnite",
      artist: "Speed",
      duration: "3:30"
    }
  ]

  const music = [
    {
      image: "/cover.jpg",
      title: "FEELING",
      artist: "Conro"
    },
    {
      image: "/cover.jpg",
      title: "FEELING",
      artist: "Conro"
    },
    {
      image: "/cover.jpg",
      title: "FEELING",
      artist: "Conro"
    },
    {
      image: "/cover.jpg",
      title: "FEELING",
      artist: "Conro"
    },
    {
      image: "/cover.jpg",
      title: "FEELING",
      artist: "Conro"
    },
    {
      image: "/cover.jpg",
      title: "FEELING",
      artist: "Conro"
    }
  ]

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

          <section className="z-50 flex flex-col gap-y-8">
            <p className="text-white tracking-widest text-4xl font-bold">TRACK LIST</p>
            <div className="flex flex-col gap-y-2">
              {tracks.map((t) => {
                return (
                  <MusicCard key={t.id} id={t.id} title={t.title} artist={t.artist} duration={t.duration} />
                )
              })}
            </div>
          </section>

          <div className="flex flex-col gap-y-7">
            <p className="tracking-widest font-bold text-4xl">OTHER RELEASES LIKE THIS</p>
            <div className="flex justify-between">
              {music.map((m, e) => {
                return (
                  <TrackCard key={e} image={m.image} title={m.title} artist={m.artist} />
                )
              })}
            </div>
          </div>

          <div>
            <hr className="text-white" />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-y-2 font-bold tracking-widest">
              <p>ABOUT MONSTERCAT</p>
              <p>CONTACT US</p>
              <p>CAREERS</p>
              <p>NEWS</p>
              <p>PRESS</p>
            </div>
            <div className="flex flex-col gap-y-2 font-bold tracking-widest">
              <p>TERMS OF SERVICE</p>
              <p>PRIVACY POLICY</p>
            </div>
            <div className="flex flex-col gap-y-2 font-bold tracking-widest">
              <p className="text-gray-600">MONSTERCAT NEWS</p>
              <p className="italic text-gray-100">
                Don't miss a thing stay up to date <br></br> with the latest news from us
              </p>
              <div className="relative">
                <input type="text" placeholder="Enter email" className="border-b p-2 mt-3 w-full outline-none" />
                <span className="absolute right-3 bottom-2">→</span>
              </div>
            </div>
          </div>

          <div>
            <hr className="text-white" />
          </div>

          <div className="flex justify-between">
            <p className="italic tracking-widest">2021 © Monstercat, All Rights Reserved</p>
            <div className="flex gap-x-5">
              <FaMusic />
              <FaApple />
              <FaYoutube />
              <FaSpotify />
              <FaSoundcloud />
              <FaDiscord />
            </div>
          </div>

          <div className="flex flex-col items-center gap-y-5">
            <div className="text-sm italic text-center w-[60%]">
              We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples,
              including the territories of the Skwxw7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and
              xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat’s Vancouver HQ stands.
            </div>

            <div className="text-sm italic text-center w-[60%]">
              We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.
            </div>
          </div>

        </main>

        <div className="z-50 w-[10%]">
          <SidebarTwo />
        </div>
      </div >
    </div >
  )
}