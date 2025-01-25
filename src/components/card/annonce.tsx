import { Link } from "react-router-dom";
import ImageAnnonce from "./imageAnnonce";
import ReactPlayer from "react-player";

export interface AnnonceProps {
    tweetId?: number;
    profile:string;
    name: string;
    username: string;
    createdAt: string;
    content: string;
    image?: string;
    videoUrl?:string;
    children?: JSX.Element | JSX.Element[]
    
}

const Annonce: React.FC<AnnonceProps> = ({name, profile, createdAt, username, content, image, videoUrl}) =>{

    return(
        <div className="w-full flex flex-col gap-5 bg-black/15 rounded-sm shadow-md shadow-black/20">
            <div className="flex flex-row items-center gap-2 px-5 pt-5">
                <Link to={`/${username}`}><img src={profile} alt="" className="w-12 rounded-full text-black"/></Link>
                <Link to={`/${username}`}><p className="font-semibold text-nowrap text-gray-950 hover:underline">{name}</p></Link>
                
                <Link to={`/${username}`}><p className="font-extralight text-gray-500 hover:text-white">{`@${username}`}</p></Link>
                <p className="font-extralight text-nowrap text-gray-500">{`.${createdAt}`}</p>
            </div>
            {(image) ? <ImageAnnonce src={image} alt="Publication image" className="w-full h-full rounded-md bg-black"/> :
            (videoUrl) ? <ReactPlayer url={videoUrl} controls width="100%" height="auto"/>:" "
            }
            <div className="w-full px-5 pb-5">
                <p className="font-normal text-black">{content}</p>
            </div> 
        </div>
    )
}


export default Annonce