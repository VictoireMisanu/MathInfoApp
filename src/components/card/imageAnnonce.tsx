interface ImageAnnonceProps{
    src:string;
    alt?:string;
    className:string;
}


function ImageAnnonce({src, alt, className}:ImageAnnonceProps){
    return(
            <div className={className}>
                <img src={src} alt={alt} className="w-full h-60"/>
            </div>
    )
}

export default ImageAnnonce