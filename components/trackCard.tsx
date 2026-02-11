import Image from "next/image"

export default function TrackCard({ image, title, artist }: { image: string, title: string, artist: string }) {
    return (
        <div className="flex flex-col gap-y-3">
            <Image src={image} alt="tracks" width={128} height={128} />
            <div className="">
                <p className="font-bold tracking-wider">{title}</p>
                <p className="text-sm italic">{artist}</p>
            </div>
        </div>
    )
}