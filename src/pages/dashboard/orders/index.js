import Header from '@/components/Header'
import Resume from '@/components/Resume'
import { Montserrat } from 'next/font/google'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Badge from '@mui/material/Badge';
import { useState } from 'react'
import OrderDetail from '@/components/OrderDetail'
import { Icon } from '@iconify/react'
import { useQuery } from '@tanstack/react-query'


const columns = [
    { field: 'id', headerName: 'N°', width: 70 },
    { field: 'date_added', headerName: 'Date commande', width: 130 },
    { field: 'user_name', headerName: 'Client', width: 130 },
    { field: 'total', headerName: 'Montant', width: 130 },
  ]

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Dashboard() {
    const [orderItems, setOrderItems] = useState([]);
    const [orderTotal, setOrderTotal] = useState("");
    const [orderCurrency, setOrderCurrency] = useState("");
    const [orderNum, setOrderNum] = useState("");
    const [badgeInvisibility, setBadgeInvisibility] = useState(false);
    const fetcher = async ()=>{ 
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjI2NjgwMTEsImlzcyI6ImVLYXJ0IiwiZXhwIjo2LjQ4MDAwMDAwMDAwMDAwMmUrMjQsInN1YiI6ImVLYXJ0IEF1dGhlbnRpY2F0aW9uIn0.B3j6ZUzOa-7XfPvjJ3wvu3eosEw9CN5cWy1yOrv2Ppg");
        const seller = localStorage.getItem("userId");
        var formdata = new FormData();
        formdata.append("accesskey", "90336");
        formdata.append("seller_id", seller);
        formdata.append("get_orders", "1");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        const response = await fetch("https://webadmin.koumishop.com/seller/api/api-v1.php", requestOptions)
        const data = await response.json();
        console.log("******** orders : ",data );
        return data;
        
    }
    const {data:orderData, isLoading:isOrderDataLoading} = useQuery(['order'], ()=>fetcher())

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }

    function formatDate(date) {
        return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('-');
      }
    console.log("today : ", formatDate(new Date()));

    const handleOrderDetail = (currency, items, total, order)=>{
        setOrderCurrency(currency);
        setOrderItems(items);
        setOrderTotal(total);
        setOrderNum(order);
        setBadgeInvisibility(true);
        console.log("order num : ", order, " items : ", items, " total : ", total, " currency : ", currency);
    }

    return(
        <main className={montserrat.className}>
            <Header hasSignedIn={true} />
            <section className='md:flex md:flex-col md:w-full md:items-center md:pb-8 md:h-screen bg-white'>
                <div className='w-full md:ml-[10%] md:my-[4%]'>
                    <Resume/>
                </div>
                <div className='w-[95%] md:ml-[10%] md:flex items-start'>
                    <div className='md:w-[55%]'>
                        <div style={{ height: '100%', width: '100%' }}>
                            <Table>
                                <TableHead className='bg-alt-secondary'>
                                    <TableRow >
                                        <TableCell className={`w-[12%] ${montserrat.className} text-base`}>N°</TableCell>
                                        <TableCell className={`w-[25%] ${montserrat.className} text-base`}>Date commande</TableCell>
                                        <TableCell className={`${montserrat.className} text-base`}>Client</TableCell>
                                        <TableCell className={`w-[25%] ${montserrat.className} text-base`}>Montant</TableCell>
                                        <TableCell className={`w-[5%] ${montserrat.className} text-base`}></TableCell>
                                    </TableRow>                                    
                                </TableHead>
                                <TableBody>
                                {orderData?.data.map((row, idx)=>(
                                    <TableRow key={idx}>
                                        <TableCell className={`w-[12%] ${montserrat.className} text-base`}>{formatDate(new Date())==row.date_added.split(" ")[0]? <Badge invisible={badgeInvisibility} variant='dot' color='primary' className='mr-2'/>:<></>}{row.id}</TableCell>
                                        <TableCell className={`w-[25%] ${montserrat.className} text-base`}>{row.date_added.split(" ")[0]}</TableCell>
                                        <TableCell className={` ${montserrat.className} text-base`}>{row.user_name}</TableCell>
                                        <TableCell className={`w-[25%] ${montserrat.className} text-base`}>{ new Intl.NumberFormat('fr-FR', { style: 'currency', currency: `${row.currency}` }).format(parseInt(row.total))}</TableCell>
                                        <TableCell className={`w-[5%] ${montserrat.className} text-base`}><button type='button' className='w-[80%]' onClick={()=>handleOrderDetail(row.currency, row.items, row.total, row.id)}><Icon icon="ic:baseline-remove-red-eye" width={25} height={25} /></button></TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <OrderDetail items={orderItems} currency={orderCurrency} total={orderTotal} id={orderNum} />
                </div>
            </section>
        </main>
    )
}