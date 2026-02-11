import { Play } from "lucide-react"
import { FaShare } from "react-icons/fa6"
// import { CiPlay1 } from "react-icons/ci";

export default function MusicCard({ id, title, artist, duration }: { id: number, title: string, artist: string, duration: string }) {
    return (
        <div className="flex justify-between m-2">
            <div className="flex gap-x-6 items-center">
                <p>{id}</p>
                <p><Play size={20} /></p>
                <div className="flex flex-col">
                    <p className="font-bold tracking-wider">{title}</p>
                    <p>{artist}</p>
                </div>
            </div>
            <div className="flex gap-x-8 items-center">
                <p>{duration}</p>
                <p><FaShare /></p>
            </div>
        </div>
    )
}