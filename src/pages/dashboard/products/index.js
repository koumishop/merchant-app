import Header from '@/components/Header'
import Resume from '@/components/Resume'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Product() {
    const myLoader=({src})=>{
        return `${src}`;
    }
    const fetcher = async ()=>{ 
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjI2NjgwMTEsImlzcyI6ImVLYXJ0IiwiZXhwIjo2LjQ4MDAwMDAwMDAwMDAwMmUrMjQsInN1YiI6ImVLYXJ0IEF1dGhlbnRpY2F0aW9uIn0.B3j6ZUzOa-7XfPvjJ3wvu3eosEw9CN5cWy1yOrv2Ppg");
        const seller = localStorage.getItem("userId");
        var formdata = new FormData();
        formdata.append("accesskey", "90336");
        formdata.append("seller_id", seller);
        formdata.append("get_products", "1");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        const response = await fetch("https://webadmin.koumishop.com/seller/api/api-v1.php", requestOptions)
        const data = await response.json();
        console.log("******** products : ",data );
        return data;
        
    }
    const {data:productData, isLoading:isProductDataLoading} = useQuery(['product'], ()=>fetcher())

    return(
        <main className={montserrat.className}>
            <Header hasSignedIn={true} />
            <section className='md:flex md:flex-col md:w-full md:items-start bg-white  md:pb-8 md:h-screen'>
                <div className='w-full md:ml-[5%] md:my-[4%]'>
                    <Resume/>
                </div>
                <div className='md:w-[90%] md:ml-[8%] text-dark bg-alt-secondary'>
                    <h2 className='p-4 w-full font-medium'>Produits</h2>
                    <div className='md:w-full md:pb-4 md:flex md:flex-wrap text-dark bg-alt-secondary'>
                        {productData?.data.map((item, idx)=>(
                            <div key={idx} className='w-[45%] px-2 py-4 mx-4 mb-2 flex bg-white'>
                                <div className='w-1/3'><Image loader={myLoader} src={item.image} width={400} height={400} alt="item ordered picture" className='w-full h-full'/></div>
                                <div className='w-1/3 pl-2'>
                                    <h3 className='font-semibold'>{item.name}</h3>
                                    <div>Unité : {`${item.variants[0].measurement} ${item.variants[0].measurement_unit_name}`}</div>
                                    <div>Qté : {item.variants[0].stock}</div>                                        
                                </div>
                                <div className='w-1/3 pl-2'>
                                    <div>Prix : {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'CDF' }).format(parseInt(item.price)) }</div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
                </section>
        </main>
    )
}