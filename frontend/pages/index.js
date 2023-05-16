import Reacct from 'react'
import Style from '../styles/index.module.css'
import Header from '../components/header.js'

const Index = ()=>{
    return(
        <>

        <div className={Style.headerDiv}>
            <div className={Style.headerContent}>Banking System Created by Me</div>
        </div>

        <Header />

        <div className={Style.bankHistory_main}>
            <div className={Style.bankHistory_content}>
                We are from MyBanking , we are the banking system always at your services. Since 2020
                we are working hard to concern about ours clients to provide a system which is 
                more secure, user friendly, reliable and as well as honest. We are always providing
                many facilities based on our clients requirements.Its 2023 we got approximately 
                2 lakhs 30 thousand happy customers.Feel free to query at this 
                website.
            </div>
        </div>

        <div className={Style.overview_main}>
            <div className={Style.overview_header}>Overview</div>
            <div className={Style.overview_sections}>
                <div className={Style.overview_section1}>
                    <div className={Style.overview_content_header}>Ease to use</div>
                    <div>This bank is really easy to use.You dont need to think about
                        a lot just use it like a professional.Everything is simple.
                    </div>
                </div>
                <div className={Style.overview_section2}>
                    <div className={Style.overview_content_header}>User friendly</div>
                    <div>
                        The layout is very user friendly whenever you will use this System
                        you will be very much familier.
                    </div>
                </div>
                <div className={Style.overview_section3}>
                    <div className={Style.overview_content_header}>Good Facility</div>
                    <div>
                        The banking facility is fantastic, you will get good enough facilities
                        than other banking system are providing.
                    </div>
                </div>
                <div className={Style.overview_section4}>
                    <div className={Style.overview_content_header}>Secure</div>
                    <div>
                        This is more secure more reliable, You just dont need to worry about 
                        anything ours stuff will always care about your security.
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}
export default Index;