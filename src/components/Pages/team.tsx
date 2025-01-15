import React from 'react'
import ProfInfo from '../card/profInfo'

const Team: React.FC = () => {
    return (
        <div>
            <div id="filter" className="w-full h-20 bg-slate-700 flex flex-row justify-center items-center gap-20">
                <button className="text-[#EDDD5E] font-bold text-lg">Ordre alphabétique</button>
                <button className="text-[#EDDD5E] font-bold text-lg">Date d'adhésion</button>
                <button className="text-[#EDDD5E] font-bold text-lg">Domaine de recherche</button>
            </div>
            <div className="flex flex-col items-center py-20">
                <ProfInfo 
                    name="Prof. Lendo Arnold" 
                    image="/images/arnold.jpg" 
                    searchField="Sécurité informatique" 
                    descript='PhD en sécurité informatique ipsum dolor sit amet consectetur adipisicing elit. At libero, eveniet quod similique deserunt, magni laboriosam porro deleniti minus nihil veritatis voluptatem sed odit natus est magnam consectetur. Officiis, optio!
                    dolor sit amet consectetur adipisicing elit. At libero, eveniet quod similique deserunt, magni laboriosam porro deleniti minus nihil veritatis voluptatem sed odit natus est magnam consectetur. Officiis, optio!' 
                    whatsapp="https://api.whatsapp.com/send?phone=243827457217" 
                    facebook="https://web.facebook.com/arnold.lendo.94"
                    linkedin='https://www.linkedin.com/in/victoire-muvumbi-203680309/'
                />
                <ProfInfo 
                    name="Prof. Muvumbi Victoire" 
                    image="/images/vic3.jpg" 
                    searchField="Machine learning" 
                    descript='PhD en machine learning ipsum dolor sit amet consectetur adipisicing elit. At libero, eveniet quod similique deserunt, magni laboriosam porro deleniti minus nihil veritatis voluptatem sed odit natus est magnam consectetur. Officiis, optio!
                    dolor sit amet consectetur adipisicing elit. At libero, eveniet quod similique deserunt, magni laboriosam porro deleniti minus nihil veritatis voluptatem sed odit natus est magnam consectetur. Officiis, optio!' 
                    whatsapp="https://api.whatsapp.com/send?phone=243825057845" 
                    facebook="https://web.facebook.com/profile.php?id=100077261924800"
                    linkedin='https://www.linkedin.com/in/victoire-muvumbi-203680309/'
                />
                <ProfInfo 
                    name="Prof. Muvumbi Victoire" 
                    image="/images/vic1.jpg" 
                    searchField="Machine learning" 
                    descript='PhD en machine learning ipsum dolor sit amet consectetur adipisicing elit. At libero, eveniet quod similique deserunt, magni laboriosam porro deleniti minus nihil veritatis voluptatem sed odit natus est magnam consectetur. Officiis, optio!
                    dolor sit amet consectetur adipisicing elit. At libero, eveniet quod similique deserunt, magni laboriosam porro deleniti minus nihil veritatis voluptatem sed odit natus est magnam consectetur. Officiis, optio!' 
                    whatsapp="https://api.whatsapp.com/send?phone=243825057845" 
                    facebook="https://web.facebook.com/profile.php?id=100077261924800"
                    linkedin='https://www.linkedin.com/in/victoire-muvumbi-203680309/'
                />
                <ProfInfo 
                    name="Prof. Muvumbi Victoire" 
                    image="/images/vic1.jpg" 
                    searchField="Machine learning" 
                    descript='PhD en machine learning ipsum dolor sit amet consectetur adipisicing elit. At libero, eveniet quod similique deserunt, magni laboriosam porro deleniti minus nihil veritatis voluptatem sed odit natus est magnam consectetur. Officiis, optio!
                    dolor sit amet consectetur adipisicing elit. At libero, eveniet quod similique deserunt, magni laboriosam porro deleniti minus nihil veritatis voluptatem sed odit natus est magnam consectetur. Officiis, optio!' 
                    whatsapp="https://api.whatsapp.com/send?phone=243825057845" 
                    facebook="https://web.facebook.com/profile.php?id=100077261924800"
                    linkedin='https://www.linkedin.com/in/victoire-muvumbi-203680309/'
                />

                
            </div>
        </div>
    )
}
export default Team