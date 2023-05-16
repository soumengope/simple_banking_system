import React,{useState,useEffect} from 'react';
import Header from '../components/header.js';
import Style from '../styles/transaction.module.css';
import axios from 'axios';
import cookie from 'js-cookie';


const Transaction = ()=>{

    const [mydata, setMydata] = useState([]);
    const [names, setNames] = useState('default');
    const [money,setMoney] = useState('')
    const [ckName ,setCkName] = useState('');
    
    const sendData = async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:8080/transaction',{
                names:names,
                money:money,
                profile:ckName
            }).then((data)=>{
                alert(data.data.message)
                if(data.data.message=='successfully send the money'){
                    window.location.href = 'http://localhost:3000/transaction';
                }
            })
        }catch(err){
            console.log(err);
        }
    }
    const newData = mydata.filter(elem => elem.name !== ckName)
    

    useEffect(()=>{
        axios.get('http://localhost:8080/data').then((data)=>{
            setMydata(data.data);
        }) 
        setCkName(cookie.get('name'));
    
    },[])

    return(
        <>
        <Header/>

        {
            mydata.map((elem)=>{
                if(elem.name == ckName){
                    return(
                        <div key={elem._id}>
                            <div className={Style.tnxHeader}>
                                Welcome <b>{elem.name.toUpperCase()}</b> , 
                                your total amount <b>{elem.balance}</b>
                            </div>
                        </div>
                    )
                }
            })
        }
        <div className={Style.mobDiv}>
        <form action="/transaction" method="POST">
            <div className={Style.chooseOpt}>
                <div>
                    <select className={Style.opt} name="names" id="names" onChange={e => setNames(e.target.value)}>
                    <option value='default'>select a member</option>
                        {newData.map((elem)=>{
                            return(
                                <>
                                <option value={elem.name} >{elem.name}</option> 
                                </>    
                            )
                        })}
                    </select>
                </div>
                </div><br></br>
            <div>

            <div className={Style.money}>
                <input name="money" type="number" onChange={(e)=>{setMoney(e.target.value)}}
                placeholder='Enter your amount'/>
            </div>
            </div><br></br>
            
            <div className={Style.btn} >
                <button type="submit" name="submit" onClick={sendData}>Send money</button>
            </div>
            

        </form>
        </div>
        </>
       
    )
}
export default Transaction;