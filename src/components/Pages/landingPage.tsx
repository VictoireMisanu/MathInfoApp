import React from 'react'
// import emailjs from '@emailjs/browser'
// import { BtnIcon } from "../link&btn/btnIcon"
// import SimpleLink from "../link&btn/simpleLink"
// import Logo from "../logo/logo"
// import MiddleSection from "../middleSection/middleSection"
// import SectionTitle from '../title/sectionTitle';
// import Service from '../card/service';
// import { Product, productProps } from '../card/product';
// import { getProducts } from '../services/api';
// import { Link } from 'react-router-dom';
import MiddleSection from '../middleSection/middleSection'
import { Link } from 'react-router-dom'


const LandingPage:React.FC = () => {

    return (
        <MiddleSection>
            <div id="heroSection" className="w-full h-[40rem] bg-[url('/images/facScience.jpeg')] bg-no-repeat bg-center bg-cover opacity-90 flex flex-col justify-around items-center gap-20">
                <div id="bigDetail" className="w-[50rem] items-center">
                    <p className="w-full h-full text-white font-semibold text-4xl font-['Arial'] leading-snug text-center mt-20">Bienvenue sur le portail du département de mathématiques, informatique et statistiques</p>
                </div>
                <div id="learnMore" className="rounded-xl bg-blue-950 p-3 w-60 flex justify-center items-center hover:shadow-lg shadow-black">
                    <a href="#" className="text-md text-[#EDDD5E] font-normal">En savoir plus</a>
                </div>
            </div>
            
            <div id="historique" className="w-full h-[30rem] bg-black/50 flex flex-row p-5">
                <div id="image" className="w-2/3 h-full flex flex-col justify-center items-center">
                    <img src="/images/batiment-unikin.jpg" alt="" className='w-full h-full rounded-md'/>
                </div>
                <div id="text" className="w-2/3 h-full px-10 flex flex-col gap-10 border-black">
                    <div id="text" className="flex gap-5 flex-col">
                        <p className="font-bold text-2xl text-blue-950">Historique</p>
                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?
                        </p>
                    </div>
                    
                </div>

            </div>
            <div id="vision" className="w-full h-[30rem] bg-white flex flex-row-reverse p-5">
                <div id="image" className="w-2/3 h-full flex flex-col justify-center items-center">
                    <img src="/images/vision.jpg" alt="" className='w-full h-full rounded-md'/>
                </div>
                <div id="text" className="w-2/3 h-full px-10 flex flex-col gap-10 border-black">
                    <div id="text" className="flex gap-5 flex-col">
                        <p className="font-bold text-2xl text-blue-950">Vision</p>
                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?
                        </p>
                    </div>
                    
                </div>

            </div>
            <div id="mission" className="w-full h-[30rem] bg-black/30 flex flex-row p-5">
                <div id="image" className="w-2/3 h-full flex flex-col justify-center items-center">
                    <img src="/images/mission.jpg" alt="" className='w-full h-full rounded-md'/>
                </div>
                <div id="text" className="w-2/3 h-full px-10 flex flex-col gap-10 border-black">
                    <div id="text" className="flex gap-5 flex-col">
                        <p className="font-bold text-2xl text-blue-950">Mission</p>
                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?
                        </p>
                    </div>
                    
                </div>

            </div>
            <div id="objectifs" className="w-full h-[30rem] bg-black/50 flex flex-row-reverse p-5">
                <div id="image" className="w-2/3 h-full flex flex-col justify-center items-center">
                    <img src="/images/purpose.jpg" alt="" className='w-full h-full rounded-md'/>
                </div>
                <div id="text" className="w-2/3 h-full px-10 flex flex-col gap-10 border-black">
                    <div id="text" className="flex gap-5 flex-col">
                        <p className="font-bold text-2xl text-blue-950">Objectifs</p>
                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti culpa provident soluta nam. Impedit nam eveniet architecto 
                            blanditiis quaerat modi, ut est, soluta accusamus iusto cum in placeat, 
                            maxime explicabo?
                        </p>
                    </div>
                    
                </div>

            </div>

            <div id="organizer" className="px-5 py-10 w-full pb-10 mb-10">
                <div className="flex flex-col gap-10">
                    <div id="title" className="flex">
                        <h1 className="font-bold text-2xl text-blue-950 mb-[30px]">Equipe administrative</h1>
                    </div>
                    <div id="block-organizer" className="flex flex-col items-center md:flex-row justify-between py-5 gap-6 ">
                        <div id="organizer1" className="flex flex-col items-center gap-7 w-[20rem] h-[28rem]  bg-slate-300 shadow-lg shadow-stone-700  rounded-lg  p-5">
                            <div id="ImgPartener1" className=" w-full ">
                                <img src="images/vic1.jpg" className="w-full h-[20rem] border-5 border-none rounded-lg" alt=""/>  
                            </div>
                            <div>
                                <b className="text-blue-900 text-[1.3rem] font-['Arial']">Prof. Mabela</b>
                                <p className="text-[1.3rem] font-['Arial']">Chef du département</p>
                            </div>
                            
                        </div>
                        <div id="organizer1" className="flex flex-col items-center gap-7 w-[20rem] h-[28rem]  bg-slate-300 shadow-lg shadow-stone-700 rounded-lg  p-5">
                            <div id="ImgPartener1" className=" w-full ">
                                <img src="images/vic3.jpg" className="w-full h-[20rem] border-5 border-none rounded-lg" alt=""/>  
                            </div>
                            <div>
                                <b className="text-blue-900 text-[1.3rem] font-['Arial']">Prof. Kafunda</b>
                                <p className="text-[1.3rem] font-['Arial']">Chef adjoint</p>
                            </div>
                            
                        </div>
                        <div id="organizer1" className="flex flex-col items-center gap-7 w-[20rem] h-[28rem]  bg-slate-300 shadow-lg shadow-stone-700 rounded-lg  p-5">
                            <div id="ImgPartener1" className=" w-full ">
                                <img src="images/vic2.jpg" className="w-full h-[20rem] border-5 border-none rounded-lg" alt=""/>  
                            </div>
                            <div>
                                <b className="text-blue-900 text-[1.3rem] font-['Arial']">Prof. Kasoro</b>
                                <p className="text-[1.3rem] font-['Arial']">Secrétaire/Recherche</p>
                            </div>
                            
                        </div>
                        <div id="organizer1" className="flex flex-col items-center gap-7 w-[20rem] h-[28rem] bg-slate-300 shadow-lg shadow-stone-700 rounded-lg  p-5">
                            <div id="ImgPartener1" className=" w-full ">
                                <img src="images/vic4.jpg" className="w-full h-[20rem] border-5 border-none rounded-lg" alt=""/>  
                            </div>
                            <div>
                                <b className="text-blue-900 text-[1.3rem] font-['Arial']">Prof. Batubenga</b>
                                <p className="text-[1.3rem] font-['Arial']">Secrétaire/Enseignement</p>
                            </div>
                            
                        </div>
                    </div>
                    <div id="learnMore" className="w-full">
                        <Link to={'/team'} className="text-md bg-blue-950 w-60 p-3 text-[#EDDD5E] font-semibold flex justify-center items-center hover:bg-white hover:text-blue-950 hover:border-2 border-blue-950 hover:shadow-lg shadow-black rounded-xl">En savoir plus</Link>
                    </div>
                </div>
            </div>

            </MiddleSection>
    )
}

export default LandingPage