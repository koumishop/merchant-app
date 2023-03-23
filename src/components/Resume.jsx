import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'

export default function Resume() {
    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }
    
    const fetcher = async ()=>{ 
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjI2NjgwMTEsImlzcyI6ImVLYXJ0IiwiZXhwIjo2LjQ4MDAwMDAwMDAwMDAwMmUrMjQsInN1YiI6ImVLYXJ0IEF1dGhlbnRpY2F0aW9uIn0.B3j6ZUzOa-7XfPvjJ3wvu3eosEw9CN5cWy1yOrv2Ppg");
        const seller = localStorage.getItem("userId");
        var formdata = new FormData();
        formdata.append("accesskey", "90336");
        formdata.append("seller_id", seller);
        formdata.append("get_financial_statistics", "1");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        const response = await fetch("https://webadmin.koumishop.com/seller/api/api-v1.php", requestOptions)
        const data = await response.json();
        console.log("******** stats : ",data );
        return data;
        
    }
    const {data:statsData, isLoading:isStatsDataLoading} = useQuery(['stats'], ()=>fetcher()) 
    //console.log("****** statsQuery : ", statsData.data);

return(
    <div className='md:w-1/2 py-4 flex items-center justify-evenly'>
        <Link href="/dashboard/orders" className='md:w-[25%]'>
            <div className='md:w-[100%] md:flex md:space-x-2 space-y-2'>
                <div className='bg-blue border border-blue w-[57px] h-[57px] flex items-center justify-center rounded-md'><Icon className='text-white' icon="mdi:cart" width={43} height={43}/></div>
                <div className='w-full md:w-1/2 text-blue'>
                    <h2>Commandes</h2>
                    <div className='font-semibold'>{statsData?.total_orders}</div>
                </div>
            </div>
        </Link>
        <Link href="/dashboard/products" className='md:w-[25%]'>
            <div className='md:w-[100%] md:flex md:space-x-2 space-y-2'>
                <div className='bg-green border border-green w-[57px] h-[57px] flex items-center justify-center rounded-md'><Icon className='text-white' icon="fa6-solid:boxes-packing" width={43} height={43}/></div>
                <div className='w-1/2 text-green'>
                    <h2>Produits</h2>
                    <div className='font-semibold'>{statsData?.total_products}</div>
                </div>
            </div>
        </Link>
        <div className='md:w-[25%] md:flex md:space-x-2 space-y-2'>
            <div className='bg-pink-red border border-pink-red w-[57px] h-[57px] flex items-center justify-center rounded-md'><Icon className='text-white' icon="ic:round-account-balance-wallet" width={43} height={43}/></div>
            <div className='w-1/2 text-pink-red'>
                <h2>Solde</h2>
                <div className='font-semibold'>{`${kFormatter(parseInt(statsData?.balance))} ${statsData?.currency}`}</div>
            </div>
        </div>
    </div>
    )
}