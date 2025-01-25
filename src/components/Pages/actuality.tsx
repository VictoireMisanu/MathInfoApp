import { Link } from "react-router-dom";
import Annonce from "../card/annonce";
import NavComponent from "../link&btn/navComponent";

// interface MiddleSectionProps {
//     className?:string;
// }

// interface userProps{
//     userId:number;
//     name:string;
//     userName:string;
//     bio:string;
//     profilePicture:string;
//     followersCount: number;
//     followingCount: number;
//     tweet: TweetProps;

// }

function Actuality (){
        
    return(
        <div className="flex flex-row justify-around items-start py-10 bg-black/5">
            <div id="sideNav" className="w-1/3 mx-3 p-5 flex flex-col gap-2 rounded-sm shadow-sm shadow-black/20">
                <NavComponent src='/svg/home.svg' text="File d'actualités"/>
                <NavComponent src='/svg/announcement.svg' text="Annonces"/>
                <NavComponent src='/svg/event.svg' text="Evènements"/>


            </div>
            <div id="middleSection" className=" w-2/3 mx-3 flex flex-col justify-center items-center gap-5">
                <Annonce
                    profile='/logo/logoUnikin.png' name='Unikin' username='Unikin' 
                    createdAt='27/01/2025'content="Nous avons le plaisir de vous informer que la rentrée académique 2024-2025 est prévue pour ce lundi 28 octobre 2024, sur l'ensemble du territoire de la République Démocratique du Congo" image='/images/facScience.jpeg' videoUrl=''
                    
                />

                <Annonce
                    profile='/logo/logoUnikin.png' name='Unikin' username='Unikin' 
                    createdAt='27/01/2025'content="L'Université de Kinshasa a célébré, ce mercredi 23 octobre 2024, la clôture de l'année académique 2023-2024 en procédant à la collation des Grades Académiques pour plus de 1819 lauréats de divers domaines d'études." image='/images/collation.jpg' videoUrl=''
                    
                />

                <Annonce
                    profile='/logo/logoUnikin.png' name='Unikin' username='Unikin' 
                    createdAt='27/01/2025'content="La défense de mémoire sert à mettre en valeur la qualité du travail écrit mais également à se situer par rapport à lui, à être en mesure de répondre à ses lacunes éventuelles et à mettre en œuvre des pistes permettant d'y faire face. Pour ce faire, la « forme » importe souvent autant que le fond." image='/images/defense.jpg' videoUrl=''
                    
                />

            </div>
            <div id="rightSide" className="w-1/3 mx-3 px-5 flex flex-col rounded-sm">
                <Annonce
                    profile='/logo/logoUnikin.png' name='Unikin' username='Unikin' 
                    createdAt='27/01/2025'content='Excited to be working on a new React project! Loving the flexibility it provides for building UI components. #React #JavaScript #WebDevelopment' image='' videoUrl=''
                    
                />
                <div id="learnMore" className="w-auto h-auto flex justify-end my-5">
                    <Link to={'/#'} className="w-20 h-10 text-md bg-gray-700 p-3 text-[#EDDD5E] font-normal text-nowrap flex justify-center items-center hover:bg-white hover:text-blue-950 hover:border-2 border-blue-950 hover:shadow-lg shadow-black rounded-md">Voir plus</Link>
                </div>
                <hr className="w-full mb-5 border-gray-600"/>
                <Annonce
                    profile='/logo/logoUnikin.png' name='Unikin' username='Unikin' 
                    createdAt='27/01/2025'content='Excited to be working on a new React project! Loving the flexibility it provides for building UI components. #React #JavaScript #WebDevelopment' image='' videoUrl=''
                    
                />
                <div id="learnMore" className="w-auto h-auto flex justify-end my-5">
                    <Link to={'/#'} className="w-20 h-10 text-md bg-gray-700 p-3 text-[#EDDD5E] font-normal text-nowrap flex justify-center items-center hover:bg-white hover:text-blue-950 hover:border-2 border-blue-950 hover:shadow-lg shadow-black rounded-md">Voir plus</Link>
                </div>
                <hr className="w-full mb-5 border-gray-600"/>
                <Annonce
                    profile='/logo/logoUnikin.png' name='Unikin' username='Unikin' 
                    createdAt='27/01/2025'content='Excited to be working on a new React project! Loving the flexibility it provides for building UI components. #React #JavaScript #WebDevelopment' image='' videoUrl=''
                    
                />
                <div id="learnMore" className="w-auto h-auto flex justify-end my-5">
                    <Link to={'/#'} className="w-20 h-10 text-md bg-gray-700 p-3 text-[#EDDD5E] font-normal text-nowrap flex justify-center items-center hover:bg-white hover:text-blue-950 hover:border-2 border-blue-950 hover:shadow-lg shadow-black rounded-md">Voir plus</Link>
                </div>
            
                
            </div>
        </div>
    )
}

export default Actuality