export default function MusicCard({ id, title, artist }: { id: number, title: string, artist: string }) {
    return (
        <div className="flex justify-between m-2">
            <div className="flex">
                <p>{id}</p>
                <p>▷ </p>
                <div className="flex flex-col">
                    <p>{title}</p>
                    <p>{artist}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}