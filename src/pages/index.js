import Head from 'next/head'
import Image from 'next/image'
import { Oswald } from 'next/font/google'
import { Icon } from '@iconify/react'
import Header from '@/components/Header'
import React,{ useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useFormik, FormikProvider, Form } from 'formik'
import * as Yup from 'yup'
import axios, { AxiosError, isAxiosError } from 'axios'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'


const oswald = Oswald({ subsets: ['latin'] })

export default function Home() {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");
  const router = useRouter();

  axios.defaults.withCredentials=true;
  const LoginSchema = Yup.object().shape({ 
    email: Yup.string().email("votre e-mail doit être valide").required("votre e-mail est requis"),
    password: Yup.string().min(5, "votre mot de passe doit avoir au moins 5 caractères").required("votre mot de passe est requis")
   });

  const formik = useFormik({ 
    initialValues: { 
      email:"",
      password:"",
     },
     validationSchema: LoginSchema,
     onSubmit: ({ email, password })=>{ 
      setHasError(false);
      setErrorStatus("");
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password })
      .then((response)=>{ 
        const { id, accessToken, firstName, email, role, company} = response.data;
        
        localStorage.setItem("userId",id);
        localStorage.setItem("token",accessToken);
        localStorage.setItem("firstName",firstName);
        localStorage.setItem("email",email);
        localStorage.setItem("role",role);
        localStorage.setItem("isConnected",true);

        console.log(`user ${localStorage.getItem("firstName")} is connected`);
        
       })
      .catch((error)=>{ 
        setHasError(true);
        console.log('error : ', error);
        if(error.response.status){
          setErrorStatus(error.response.status);
        } else {
          setErrorStatus(error);
        }
      })
     }

  }); 
  const {errors, touched, getFieldProps} = formik;

  return (
    <>
      <Head>
        <title>Koumi Merchant App</title>
        <meta name="description" content="Created by support@koumishop.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <Header hasSignedIn={false} />
        <section className='md:flex md:w-full md:h-[92%] md:items-center md:justify-between bg-white'>
          <FormikProvider value={formik}>
            <Form className='w-[100%] md:w-1/2 h-[100%] mt-4 p-4 bg-white flex flex-col items-center' autoComplete='off' onSubmit={formik.handleSubmit}>
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
                  <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="ex: monemail@email.em" required {...getFieldProps('email')} value={formik.values.email} onChange={formik.handleChange} onError={()=>Boolean(touched.email && errors.email)} className='bg-white mx-2  w-4/5 border-none focus:outline-none text-secondary' />
                </div>            
              </div>
              <div className='w-[80%] md:w-[72%] mt-3 md:mt-5 mb-10 flex flex-col justify-start space-y-2'>
                <h2 className='text-dark text-lg font-medium'>Mot de passe</h2>
                <div className='w-full p-3 border border-primary flex items-centers'>
                  <Icon icon="material-symbols:lock-outline" width={24} className='text-secondary' />
                  <input type={ isPasswordVisible ? "text" : "password" } placeholder="ex: mon mot de passe" required {...getFieldProps('password')} value={formik.values.password} onChange={formik.handleChange} onError={()=>formik.setErrors} className='bg-white mx-2 w-4/5 border-none focus:outline-none text-secondary' />
                  <button type='button' className='w-1/7' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}><Icon icon={ isPasswordVisible ? "mdi:eye-off" : "ic:baseline-remove-red-eye" } width={24} className='text-primary' /></button>
                </div>  
              </div>
              <div className='w-[80%] md:w-[72%] border border-primary flex flex-col justify-start space-y-2 mb-24'>
                <button type="submit" className='w-full border border-primary bg-primary text-white font-semibold p-3 hover:bg-opacity-50'>Connectez-vous</button>  
              </div>          
            </Form>
          </FormikProvider>
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
