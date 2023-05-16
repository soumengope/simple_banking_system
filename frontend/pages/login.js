import React,{useState,useEffect} from 'react'
import Header from '../components/header.js'
import Style from '../styles/login.module.css'
import axios from 'axios';
import cookie from 'js-cookie';

const Login = ()=>{

    const [mydata, setMydata] = useState([]);
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    const [conn,setConn] = useState('');
    const [log , setLog] = useState('');
    const [ck, setCk] = useState([])
    const submit = async(e)=>{
        e.preventDefault();
        try{
            axios.post('http://localhost:8080/login',{
                name:name,pass:pass
            }).then((data)=>{
                setConn(data.data.message);
                cookie.set('acno',data.data.acNo,{expires:2/24})
                cookie.set('name',data.data.name,{expires:2/24})
                if(data.data.message == 'successfully login'){
                    window.location.href = 'http://localhost:3000/login';
                }
            })
        }catch(err){
            console.log(err);
        }
    }


    
    useEffect(()=>{
        axios.get('http://localhost:8080/data').then((data)=>{
            setMydata(data.data);
        })
        setCk( cookie.get('acno') );
    },[])

    return(
        <>

        <Header />

        {(ck === undefined) ?
        <div className={Style.mainLoginDiv}>
        <div>  
             
             <div>
            <div className={Style.loginHeader}>Login </div>
            <div className={Style.login}>

                <div>
                    {conn}
                </div>

                <form action='/login' method='POST'>
                    <div><input type='text' name='username' placeholder='full name' onChange={(e)=>setName(e.target.value)}/></div>
                    <div><input type="password" name="password" placeholder="accoount number" onChange={(e)=>setPass(e.target.value)}/></div>
                    <div><button type="submit" name="submit" onClick={submit}>Submit</button></div>
                </form>
            </div>
            </div>
            

        </div>
        <div>
            <div className={Style.user_header}>Login details</div>
            <div className={Style.users}>

                {mydata.map((elem)=>{
                    return(
                        <>
                        <div className={Style.users_list} key={elem._id}>
                            <div>Name : {elem.name}</div>
                            <div> Bank : {elem.bank} </div>
                            <div> Account No : {elem.acNo} </div>
                        </div>
                        </>
                    )

                })}
                
            </div>
            </div>

        </div>
        : <div className={Style.loggedSuccess}>
            You are successfully Logged In , now you can send money to all members and see your transaction history
        </div>}
        </>
    )
}


export default Login;