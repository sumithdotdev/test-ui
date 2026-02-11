import Image from "next/image"

export default function Navbar() {
    return (
        <div className="flex justify-center">
            <div>
                <Image src={"/logo.png"} alt="logo" width={48} height={48} className="" />
            </div>
        </div>
    )
}