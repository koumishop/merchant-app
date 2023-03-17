import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Resume({ itemsAmount, orderAmount, cashAmount }) {
return(
    <div className='md:w-1/2 py-4 flex items-center justify-evenly'>
        <Link href="/dashboard/orders" className='md:w-[25%]'>
            <div className='md:w-[100%] md:flex md:space-x-2 space-y-2'>
                <div className='bg-blue border border-blue w-[57px] h-[57px] flex items-center justify-center rounded-md'><Icon icon="mdi:cart" width={43} height={43}/></div>
                <div className='w-full md:w-1/2 text-blue'>
                    <h2>Commandes</h2>
                    <div className='font-semibold'>{orderAmount}</div>
                </div>
            </div>
        </Link>
        <Link href="/dashboard/products" className='md:w-[25%]'>
            <div className='md:w-[100%] md:flex md:space-x-2 space-y-2'>
                <div className='bg-green border border-green w-[57px] h-[57px] flex items-center justify-center rounded-md'><Icon icon="fa6-solid:boxes-packing" width={43} height={43}/></div>
                <div className='w-1/2 text-green'>
                    <h2>Produits</h2>
                    <div className='font-semibold'>{itemsAmount}</div>
                </div>
            </div>
        </Link>
        <div className='md:w-[25%] md:flex md:space-x-2 space-y-2'>
            <div className='bg-pink-red border border-pinkbg-pink-red w-[57px] h-[57px] flex items-center justify-center rounded-md'><Icon icon="ic:round-account-balance-wallet" width={43} height={43}/></div>
            <div className='w-1/2 text-pink-red'>
                <h2>Solde</h2>
                <div className='font-semibold'>{cashAmount}</div>
            </div>
        </div>
    </div>
    )
}