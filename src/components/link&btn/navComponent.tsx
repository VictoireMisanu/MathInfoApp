interface NavComponentProps{
    src:string;
    alt?:string;
    text:string;
}




function NavComponent ({src, text}: NavComponentProps){
    return(
        <div className="w-auto h-auto py-1 px-1 flex flex-row items-center gap-5 rounded-full hover:bg-slate-400">
                <a href="#" className="w-auto h-auto"><img src={src} alt=""/></a>
                <a href="#" className="w-20 text-black font-semibold text-nowrap">{text}</a>
            </div>
    )
}

export default NavComponent
