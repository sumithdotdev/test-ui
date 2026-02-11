import Image from "next/image"

export default function Background() {
    return (
        <div className="">
            <div className="bg-linear-to-b from-gray-600 opacity-70 to-black z-10 absolute inset-0"></div>
            <div className="bg-linear-to-b from-transparent to-black z-11 absolute inset-0"></div>
            <Image src={"/cover.jpg"} alt="cover" className="object-cover blur-md" fill />
        </div>
    )
}