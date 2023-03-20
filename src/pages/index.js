import Head from 'next/head'
import FormData from 'form-data'
import Image from 'next/image'
import { Oswald } from 'next/font/google'
import { Icon } from '@iconify/react'
import Header from '@/components/Header'
import React,{ useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios, { AxiosError, isAxiosError } from 'axios'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'


const oswald = Oswald({ subsets: ['latin'] })

export default function Home() {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isConnected = localStorage.getItem("isConnected");
    if(!isConnected) router.push('/');

}, []);  

  axios.defaults.withCredentials=true;

    const handleSubmit = ()=>{
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjI2NjgwMTEsImlzcyI6ImVLYXJ0IiwiZXhwIjo2LjQ4MDAwMDAwMDAwMDAwMmUrMjQsInN1YiI6ImVLYXJ0IEF1dGhlbnRpY2F0aW9uIn0.B3j6ZUzOa-7XfPvjJ3wvu3eosEw9CN5cWy1yOrv2Ppg");
      
      var formdata = new FormData();
      formdata.append("password", password);
      formdata.append("accesskey", "90336");
      formdata.append("mobile", phone);
      formdata.append("login", "1");
      formdata.append("fcm_id", "");
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("https://webadmin.koumishop.com/seller/api/api-v1.php", requestOptions)
        .then(response => response.json())
        .then((result)=>{
          console.log("***** response : ", result);
         const { id, name, store_name, email, balance,} = result.data[0];
          localStorage.setItem("userId",id);
          localStorage.setItem("userEmail",email);
          localStorage.setItem("serviceName",name);
          localStorage.setItem("storeName",store_name);
          localStorage.setItem("isConnected", true)
          console.log("balance : ", result.data[0].balance);
          router.push('/dashboard/orders');

        })
        .catch(error => { 
          setHasError(true);
          console.log("***** error : ",error );
        });

    }

  return (
    <>
      <main>
        <Header hasSignedIn={false} />
        <section className='md:flex md:w-full md:h-[92%] md:items-center md:justify-between bg-white'>
          <form className='w-[100%] md:w-1/2 h-[100%] mt-4 p-4 bg-white flex flex-col items-center' autoComplete='off'>
            <h1 className={`${oswald.className}`}>
              <div className='text-secondary text-5xl md:text-7xl font-bold'>Bienvenu sur</div>
              <div className='text-primary text-5xl md:text-7xl font-bold'>Koumi-Merchant</div>
            </h1>
            <Collapse in={hasError}>
              <Alert severity='error'
                action={
                  <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                      setHasError(false);
                  }}
                  >
                    <Icon icon="material-symbols:close" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                  erreur : utilisateur ou mot de passe incorrect
              </Alert>
            </Collapse>
            <div className={'w-[80%] md:w-[72%] mt-6 mb-3 flex flex-col justify-start space-y-2'}>
              <h2 className='text-dark text-lg font-medium'>Identifiant utilisateur</h2>
              <div className='w-full p-3 border border-primary flex items-centers'>
                <Icon icon="mdi:user-circle-outline" width={24} className='text-secondary' />
                <input type="text" placeholder="ex: 9876543210" required  value={phone} onChange={(event)=>setPhone(event.target.value)} className='bg-white mx-2  w-4/5 border-none focus:outline-none text-secondary' />
              </div>            
            </div>
            <div className='w-[80%] md:w-[72%] mt-3 md:mt-5 mb-10 flex flex-col justify-start space-y-2'>
              <h2 className='text-dark text-lg font-medium'>Mot de passe</h2>
              <div className='w-full p-3 border border-primary flex items-centers'>
                <Icon icon="material-symbols:lock-outline" width={24} className='text-secondary' />
                <input type={ isPasswordVisible ? "text" : "password" } placeholder="ex: mon mot de passe" required value={password} onChange={(event)=>setPassword(event.target.value)} className='bg-white mx-2 w-4/5 border-none focus:outline-none text-secondary' />
                <button type='button' className='w-1/7' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}><Icon icon={ isPasswordVisible ? "mdi:eye-off" : "ic:baseline-remove-red-eye" } width={24} className='text-primary' /></button>
              </div>  
            </div>
            <div className='w-[80%] md:w-[72%] border border-primary flex flex-col justify-start space-y-2 mb-24'>
              <button type="button" className='w-full border border-primary bg-primary text-white font-semibold p-3 hover:bg-opacity-50' onClick={handleSubmit}>Connectez-vous</button>  
            </div>          
          </form>
          <div className='hidden md:w-1/2 md:h-full md:flex md:justify-end md:relative'>
            <div>
              <Image src="/images/shopping.png" alt='match-making background' width={850} height={850} className='absolutes' />
            </div>          
          </div>
        </section>
      </main>
    </>
  )
}
