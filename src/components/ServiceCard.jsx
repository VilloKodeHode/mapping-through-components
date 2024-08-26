export const ServiceCard = ({src, title, text, label}) => {
    return (
        <div className="flex flex-col bg-slate-800 shadow items-center gap-4 w-[264px] relative p-4 rounded-2xl">
            <figure className="bg-slate-400 h-24 w-24 group flex items-center justify-center rounded-full">
                <img className="w-[80%] group-hover:scale-110 duration-200 group-hover:opacity-100 opacity-75" src={`/service-icons/${src}`} alt={title} />
            </figure>
            <article className="grid gap-2 text-center">
                <h4 className="text-2xl underline underline-offset-[6px]">{title}</h4>
                <div className="grid gap-4">
                    <p>{text}</p>
                    <p>{label}</p>
                </div>
            </article>
        </div>
    )
}