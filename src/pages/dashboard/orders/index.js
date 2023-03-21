import Header from '@/components/Header'
import Resume from '@/components/Resume'
import { Montserrat } from 'next/font/google'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'
import OrderDetail from '@/components/OrderDetail'
import { Icon } from '@iconify/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


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
    const seller = localStorage.getItem("userId");
    const orderQuery = useQuery(['order'], async ()=>{
        return await axios.post('https://webadmin.koumishop.com/seller/api/api-v1.php',
        {
            "accesskey":'90336',
            "get_orders": '1',
            "seller_id": seller

        }, 
        {headers: { 
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjI2NjgwMTEsImlzcyI6ImVLYXJ0IiwiZXhwIjo2LjQ4MDAwMDAwMDAwMDAwMmUrMjQsInN1YiI6ImVLYXJ0IEF1dGhlbnRpY2F0aW9uIn0.B3j6ZUzOa-7XfPvjJ3wvu3eosEw9CN5cWy1yOrv2Ppg',
        }},)
    })
    const user =[
        {
            id: "9",
            name: "Koumi_Shop",
            store_name: "123456",
            slug: "123456-1",
            email: "jacobitkashala@gmail.com",
            mobile: "0815824641",
            password: "e10adc3949ba59abbe56e057f20f883e",
            balance: "12120",
            store_url: "",
            logo: "https://webadmin.koumishop.com/upload/seller/1665594074.7899.png",
            store_description: "",
            street: "Lemba bakole 30",
            pincode_id: "32",
            city_id: "95",
            state: "",
            categories: "",
            account_number: "",
            bank_ifsc_code: "",
            account_name: "",
            bank_name: "",
            commission: "0",
            status: "1",
            last_updated: "2023-03-03 15:53:06",
            date_created: "2022-10-12 18:01:14",
            require_products_approval: "0",
            fcm_id: "",
            national_identity_card: "",
            address_proof: "",
            pan_number: "",
            tax_name: "",
            tax_number: "",
            customer_privacy: "1",
            latitude: "0",
            longitude: "0",
            forgot_password_code: null,
            view_order_otp: "0",
            assign_delivery_boy: "0",
            service_id: "2"
        }
    ]
    const data =[
        {
        id: "673",
        seller_id: "9",
        user_id: "49",
        otp: "832951",
        mobile: "822200516",
        order_note: "",
        total: "25250",
        delivery_charge: "5000",
        service_charge: null,
        tax_amount: "0",
        tax_percentage: "0",
        wallet_balance: "0",
        discount: "0",
        promo_code: "",
        promo_discount: "0",
        final_total: "30250",
        payment_method: "Paiement à la livraison",
        address: "avenue foile,plaza,Mongala,Commune:Kinshasa",
        latitude: "0",
        longitude: "0",
        delivery_time: "6 3 2023 - Après-midi de 13h00 à 14h00",
        date_added: "06-03-2023 12:27:48pm",
        order_from: "0",
        pincode_id: "40",
        area_id: "102",
        delivery_rank: "0",
        currency: "CDF",
        user_name: "jonathan",
        discounted_price: "0",
        items: [
                {
                    id: "1345",
                    user_id: "49",
                    order_id: "673",
                    product_name: "Risotto aux champignons",
                    variant_name: "500kg",
                    product_variant_id: "48",
                    delivery_boy_id: "0",
                    quantity: "1",
                    price: "25250",
                    discounted_price: "0",
                    tax_amount: "0",
                    tax_percentage: "0",
                    discount: "0",
                    sub_total: "25250",
                    active_status: "received",
                    date_added: "2023-03-06 12:27:48",
                    seller_id: "9",
                    is_available: "1",
                    is_credited: "0",
                    variant_id: "48",
                    name: "Risotto aux champignons",
                    image: "https://webadmin.koumishop.com/upload/images/0049-2023-03-03.jpg",
                    manufacturer: "",
                    made_in: "",
                    return_status: "0",
                    cancelable_status: "0",
                    till_status: "",
                    measurement: "500",
                    unit: "kg",
                    seller_name: "Koumi_Shop",
                    seller_store_name: "123456",
                    seller_address: "Lemba bakole 30, Pakadjuma - Gombe",
                    seller_mobile: "0815824641",
                    seller_latitude: "0",
                    seller_longitude: "0",
                    delivery_boy_name: "",
                    return_days: "0"
                },
            ]
        },
        {
            id: "674",
            seller_id: "9",
            user_id: "49",
            otp: "832951",
            mobile: "822200516",
            order_note: "",
            total: "17170",
            delivery_charge: "5000",
            service_charge: null,
            tax_amount: "0",
            tax_percentage: "0",
            wallet_balance: "0",
            discount: "0",
            promo_code: "",
            promo_discount: "0",
            final_total: "30250",
            payment_method: "Paiement à la livraison",
            address: "avenue foile,plaza,Mongala,Commune:Kinshasa",
            latitude: "0",
            longitude: "0",
            delivery_time: "6 3 2023 - Après-midi de 13h00 à 14h00",
            date_added: "10-03-2023 11:27:00pm",
            order_from: "0",
            pincode_id: "40",
            area_id: "102",
            delivery_rank: "0",
            currency: "CDF",
            user_name: "jonathan",
            discounted_price: "0",
            items: [
                    {
                        id: "1345",
                        user_id: "49",
                        order_id: "674",
                        product_name: "Pates au chou",
                        variant_name: "500 gm",
                        product_variant_id: "50",
                        delivery_boy_id: "0",
                        quantity: "1",
                        price: "17170",
                        discounted_price: "0",
                        tax_amount: "0",
                        tax_percentage: "0",
                        discount: "0",
                        sub_total: "17170",
                        active_status: "received",
                        date_added: "10-03-2023 11:27:00pm",
                        seller_id: "9",
                        is_available: "1",
                        is_credited: "0",
                        variant_id: "48",
                        name: "Pates au chou",
                        image: "https://webadmin.koumishop.com/upload/images/5915-2023-03-03.jpg",
                        manufacturer: "",
                        made_in: "",
                        return_status: "0",
                        cancelable_status: "0",
                        till_status: "",
                        measurement: "500",
                        unit: "gm",
                        seller_name: "Koumi_Shop",
                        seller_store_name: "123456",
                        seller_address: "Lemba bakole 30, Pakadjuma - Gombe",
                        seller_mobile: "0815824641",
                        seller_latitude: "0",
                        seller_longitude: "0",
                        delivery_boy_name: "",
                        return_days: "0"
                    },
                    {
                        id: "1345",
                        user_id: "49",
                        order_id: "674",
                        product_name: "Orange",
                        variant_name: "100 gm",
                        product_variant_id: "40",
                        delivery_boy_id: "0",
                        quantity: "2",
                        price: "101",
                        discounted_price: "0",
                        tax_amount: "0",
                        tax_percentage: "0",
                        discount: "0",
                        sub_total: "202",
                        active_status: "received",
                        date_added: "10-03-2023 11:27:00pm",
                        seller_id: "9",
                        is_available: "1",
                        is_credited: "0",
                        variant_id: "40",
                        name: "Orange",
                        image: "https://webadmin.koumishop.com/upload/images/8808-2022-10-08.jpeg",
                        manufacturer: "",
                        made_in: "",
                        return_status: "0",
                        cancelable_status: "0",
                        till_status: "",
                        measurement: "500",
                        unit: "gm",
                        seller_name: "Koumi_Shop",
                        seller_store_name: "123456",
                        seller_address: "Lemba bakole 30, Pakadjuma - Gombe",
                        seller_mobile: "0815824641",
                        seller_latitude: "0",
                        seller_longitude: "0",
                        delivery_boy_name: "",
                        return_days: "0"
                    },
                ]
            },
    ]
    const handleOrderDetail = (currency, items, total, order)=>{
        setOrderCurrency(currency);
        setOrderItems(items);
        setOrderTotal(total);
        setOrderNum(order);
        console.log("order num : ", order, " items : ", items, " total : ", total, " currency : ", currency);
    }

    return(
        <main className={montserrat.className}>
            <Header hasSignedIn={true} />
            <section className='md:flex md:flex-col md:w-full md:h-[92%] md:items-center md:justify-between bg-white'>
                <div className='w-full md:ml-[10%] md:my-[4%]'>
                    <Resume cashAmount={user[0].balance} itemsAmount={80} orderAmount={data.length}/>
                </div>
                <div className='w-[95%] md:ml-[10%] md:flex items-start'>
                    <div className='md:w-[55%]'>
                        <div style={{ height: 350, width: '100%' }}>
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
                                {data.map((row, idx)=>(
                                    <TableRow key={idx}>
                                        <TableCell className={`w-[12%] ${montserrat.className} text-base`}>{row.id}</TableCell>
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