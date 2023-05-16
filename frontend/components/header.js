import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Style from '../styles/header.module.css'
import cookie from 'js-cookie';
const Header = ()=>{
    const [hasCookie, setHasCookie] = useState('');

    const removeCookie = ()=>{
        cookie.remove('acno')
        cookie.remove('name')
        window.location.href='http://localhost:3000/login';
    }

    useEffect(()=>{
        setHasCookie(cookie.get('acno'));
    },[])
    //console.log(hasCookie)
    return(
        <>
        
        <div className={Style.allLinks_main}>
            <div className={Style.allLinks_header}>MyBanking</div>
            <div className={Style.allLinks}>
                <div><Link href='/'>Homepage</Link></div>
                <div>
                   {
                    (hasCookie === undefined)? <div><Link href='/login'>Login</Link></div>:
                    <div><button onClick={removeCookie}>Logout</button></div>
                   }
                </div>
                <div><Link href='/transaction'>MoneyTransaction</Link></div>
                <div><Link href='/history'>History</Link></div>
            </div>
        </div>
        
        </>
    )
}
export default Header;