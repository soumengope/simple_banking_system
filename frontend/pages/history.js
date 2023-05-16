import React,{useState,useEffect} from 'react'
import Header from '../components/header.js'
import Style from '../styles/history.module.css'
import axios from 'axios'
import cookie from 'js-cookie'

const History = ()=>{
    const [mydata,setMydata] = useState([]);
    const [ck, setCk] = useState([])

    useEffect(()=>{
         axios.get('http://localhost:8080/history_data').then((data)=>{
            setMydata(data.data);
        })
        setCk(cookie.get('name'));
    },[])
    const newData = mydata.filter(elem=> elem.sender_name==ck || elem.receiver_name==ck)
    return(
        <>
        <Header/>
        <div className={Style.histHeader}>This is your every transaction histories you ever made</div>
        {
            newData.map((elem)=>{
                if(elem.sender_name==ck){
                    return(
                    <div key={elem._id} className={Style.mainDiv}>
                        <div className={Style.myDiv}>
                            <li>YOU sent <b>{elem.status}</b> to {elem.receiver_name.toUpperCase()}'s account at {elem.time}</li>
                        </div>
                    </div>
                )
                }else{
                    return(
                    <div key={elem._id} className={Style.mainDiv}>
                        <div className={Style.myDiv}>
                            <li>{elem.sender_name.toUpperCase()} sent <b>{elem.status}</b> to YOUR account at {elem.time}</li>
                        </div>
                    </div>
                )
                }
                
            })
        }
        </>
    )
}
export default History;