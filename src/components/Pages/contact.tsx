import React from 'react'
import ContactProf from '../card/contactProf'

const Contact: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col items-center py-20">
                <ContactProf 
                    name="Prof. Mabela Rostin" 
                    searchField='Probabilités'
                    title='Chef du département'
                    image="/images/mabela.png"  
                    whatsapp="https://api.whatsapp.com/send?phone=243825057845" 
                    facebook="https://web.facebook.com/profile.php?id=100077261924800"
                    linkedin='https://www.linkedin.com/in/victoire-muvumbi-203680309/'
                    to='https://calendar.google.com/calendar/u/0/r/week/2025/1/16?pli=1'
                />
                <ContactProf 
                    name="Prof. Kafunda Pierre" 
                    searchField='Datamining'
                    title='Chef adjoint'
                    image="/images/kafunda.jpg"  
                    whatsapp="https://api.whatsapp.com/send?phone=243825057845" 
                    facebook="https://web.facebook.com/profile.php?id=100077261924800"
                    linkedin='https://www.linkedin.com/in/victoire-muvumbi-203680309/'
                    to='https://calendar.google.com/calendar/u/0/r/week/2025/1/16?pli=1'
                />
                <ContactProf 
                    name="Prof. Kasoro Nathanaël" 
                    searchField='Datamining'
                    title="Secrétaire chargé de la recherche"
                    image="/images/kasoro.jpg"  
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