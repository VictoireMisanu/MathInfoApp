// import React from 'react'

import { Link } from "react-router-dom"
import Logo from "../logo/logo"

const footer = () => {
    return(
        <div className="w-full h-[443px] px-20 py-[57px] bg-blue-950 flex flex-col-reverse justify-start items-start gap-10">
            <div id="part2" className="w-full self-stretch text-center text-[#EDDD5E] text-xs font-bold font-['Libre Baskerville'] border-t-[1px] border-[#EDDD5E] pt-10">Copyright © 2024 | Université de Kinshasa -- Département de mathématique informatique</div>

            <div id="part1" className="w-full flex flex-row">
                <div id="logo" className="w-60 h-full flex flex-col justify-center items-center py-5 gap-5 mr-26">
                    <Logo className="w-32 h-32 p-3"/>
                </div>
                <div className="flex flex-row justify-evenly">
                    <div id="page" className="w-1/5 h-full px-14 py-8 flex flex-col justify-center items-center gap-5">
                        <div id="title" className="text-[#FFC107] text-xl font-extrabold font-['Roboto Serif'] flex justify-center items-center">Pages</div>
                            <div id="content" className="w-auto flex flex-col justify-center items-center gap-3">
                                <Link id="home" to={'/'} className="">
                                                <div className="flex flex-row items-center gap-3">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                                    <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Acceuil</div>
                                                </div>
                                </Link>
                                <Link id="team" to={'/team'}>
                                                <div className="flex flex-row items-start gap-3">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                                    <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Equipe</div>
                                                </div>
                                </Link>
                                
                                <a id="news" href="#">
                                                <div className="flex flex-row items-center gap-3">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                                    <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Actualités</div>
                                                </div>
                                </a>
                            </div>
                    </div>

                    <div id="contact" className="w-1/5 h-full px-14 py-8 flex flex-col gap-5">
                        <div id="title" className="self-stretch text-[#FFC107] text-xl font-extrabold font-['Roboto Serif'] text-center">Contact</div>
                            <div id="content" className="w-full flex flex-col justify-center items-start gap-3">
                                {/* <a id="phone" href="#">
                                                <div className="flex flex-row items-center gap-3">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#FEF3B8" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg></span>
                                                    <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">+2438 2505 7845</div>
                                                </div>
                                </a> */}
                                            
                                <Link id="email" to={`mailto:vicmisanu63@gmail.com`}>
                                    <div className="flex flex-row items-center gap-3">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FEF3B8" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg></span>
                                        <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">contact.mathInfo@gmail.com</div>
                                    </div>
                                </Link>
                                <Link id="twitter" to={`https://twitter.com/VMuvumbi`}>
                                    <div className="flex flex-row items-center gap-3">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FEF3B8" d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12"/></svg></span>
                                        <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">https://twitter.com</div>
                                    </div>
                                </Link>

                                <Link id="facebook" to={`https://web.facebook.com/profile.php?id=100077261924800`}>
                                    <div className="flex flex-row items-center gap-3">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FEF3B8" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"/></svg></span>
                                        <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">https://facebook.com</div>
                                    </div>
                                </Link>
                                <Link id="linkedin" to={`https://www.linkedin.com/in/victoire-muvumbi-203680309/`}>
                                    <div className="flex flex-row items-center gap-3">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FEF3B8" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/></svg></span>
                                        <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">https://linkedin.com</div>
                                    </div>
                                </Link>
                                            
                            </div>
                    </div>
                </div>

                
                
            </div>
    </div>
    )
}
export default footer