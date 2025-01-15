import React from 'react'
import ContactProf from '../card/contactProf'

const Contact: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col items-center py-20">
                <ContactProf 
                    name="Prof. Lendo Arnold" 
                    searchField='Sécurité informatique'
                    title='Chef du département'
                    image="/images/arnold.jpg"  
                    whatsapp="https://api.whatsapp.com/send?phone=243825057845" 
                    facebook="https://web.facebook.com/profile.php?id=100077261924800"
                    linkedin='https://www.linkedin.com/in/victoire-muvumbi-203680309/'
                    to='https://calendar.google.com/calendar/u/0/r/week/2025/1/16?pli=1'
                />
                <ContactProf 
                    name="Prof. Muvumbi Victoire" 
                    searchField='Machine learning'
                    title='secrétaire chargé de la recherche'
                    image="/images/vic3.jpg"  
                    whatsapp="https://api.whatsapp.com/send?phone=243825057845" 
                    facebook="https://web.facebook.com/profile.php?id=100077261924800"
                    linkedin='https://www.linkedin.com/in/victoire-muvumbi-203680309/'
                    to='https://calendar.google.com/calendar/u/0/r/week/2025/1/16?pli=1'
                />
                <ContactProf 
                    name="Prof. Muvumbi Victoire" 
                    searchField='Machine learning'
                    title="secrétaire chargé de l'enseignement"
                    image="/images/vic2.jpg"  
                    whatsapp="https://api.whatsapp.com/send?phone=243825057845" 
                    facebook="https://web.facebook.com/profile.php?id=100077261924800"
                    linkedin='https://www.linkedin.com/in/victoire-muvumbi-203680309/'
                    to='https://calendar.google.com/calendar/u/0/r/week/2025/1/16?pli=1'
                />

                
            </div>
        </div>
    )
}
export default Contact