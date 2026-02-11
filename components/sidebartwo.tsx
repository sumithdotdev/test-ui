import { FaBars, FaInstagram, FaTiktok, FaLinkedin, FaTwitch } from "react-icons/fa"

export default function SidebarTwo() {
    return (
        <div className="flex flex-col w-full gap-10 items-center">
            <div className="flex justify-end">
                < FaBars size={30} />
            </div>
            <div className="flex flex-col gap-y-5 items-end">
                <FaInstagram size={20} />
                <FaTiktok size={20} />
                <FaLinkedin size={20} />
                <FaTwitch size={20} />
            </div>
        </div >
    )
}