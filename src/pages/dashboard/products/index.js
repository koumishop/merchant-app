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
    //console.log("****** productQuery : ", productData.data);
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
    const product =[
        {
            "id": "51",
            "seller_id": "9",
            "row_order": "0",
            "name": "Risotto",
            "tax_id": "0",
            "slug": "risotto-2",
            "category_id": "40",
            "subcategory_id": "13",
            "indicator": "1",
            "manufacturer": "",
            "made_in": "",
            "return_status": "0",
            "cancelable_status": "0",
            "till_status": "",
            "image": "https://webadmin.koumishop.com/upload/images/9851-2023-03-03.jpg",
            "other_images": [],
            "description": "",
            "status": "1",
            "date_added": "2023-03-03 17:20:20",
            "is_approved": "1",
            "return_days": "0",
            "type": "packet",
            "pincodes": "",
            "cod_allowed": "1",
            "total_allowed_quantity": "0",
            "seller_name": "Koumi_Shop",
            "seller_status": "1",
            "price": "23230",
            "tax_title": "",
            "tax_percentage": "0",
            "delivery_places": "2",
            "variants": [
                {
                    "id": "51",
                    "product_id": "51",
                    "type": "packet",
                    "measurement": "500",
                    "measurement_unit_id": "2",
                    "price": "23230",
                    "price_original": "23000",
                    "discounted_price": "0",
                    "serve_for": "Available",
                    "stock": "10",
                    "stock_unit_id": "1",
                    "measurement_unit_name": "gm",
                    "stock_unit_name": "kg"
                }
            ]
        },
        {
            "id": "50",
            "seller_id": "9",
            "row_order": "0",
            "name": "Pates au chou",
            "tax_id": "0",
            "slug": "pates-au-chou",
            "category_id": "0",
            "subcategory_id": "0",
            "indicator": "1",
            "manufacturer": "",
            "made_in": "",
            "return_status": "0",
            "cancelable_status": "0",
            "till_status": "",
            "image": "https://webadmin.koumishop.com/upload/images/5915-2023-03-03.jpg",
            "other_images": [],
            "description": "",
            "status": "1",
            "date_added": "2023-03-03 17:18:26",
            "is_approved": "1",
            "return_days": "0",
            "type": "packet",
            "pincodes": "",
            "cod_allowed": "1",
            "total_allowed_quantity": "0",
            "seller_name": "Koumi_Shop",
            "seller_status": "1",
            "price": "17170",
            "tax_title": "",
            "tax_percentage": "0",
            "delivery_places": "2",
            "variants": [
                {
                    "id": "50",
                    "product_id": "50",
                    "type": "packet",
                    "measurement": "500",
                    "measurement_unit_id": "2",
                    "price": "17170",
                    "price_original": "17000",
                    "discounted_price": "0",
                    "serve_for": "Available",
                    "stock": "10",
                    "stock_unit_id": "1",
                    "measurement_unit_name": "gm",
                    "stock_unit_name": "kg"
                }
            ]
        },
        {
            "id": "49",
            "seller_id": "9",
            "row_order": "0",
            "name": "Riz brasé",
            "tax_id": "0",
            "slug": "riz-brasé",
            "category_id": "0",
            "subcategory_id": "0",
            "indicator": "1",
            "manufacturer": "",
            "made_in": "",
            "return_status": "0",
            "cancelable_status": "0",
            "till_status": "",
            "image": "https://webadmin.koumishop.com/upload/images/3278-2023-03-03.jpeg",
            "other_images": [],
            "description": "",
            "status": "1",
            "date_added": "2023-03-03 17:17:08",
            "is_approved": "1",
            "return_days": "0",
            "type": "packet",
            "pincodes": "",
            "cod_allowed": "1",
            "total_allowed_quantity": "0",
            "seller_name": "Koumi_Shop",
            "seller_status": "1",
            "price": "19190",
            "tax_title": "",
            "tax_percentage": "0",
            "delivery_places": "2",
            "variants": [
                {
                    "id": "49",
                    "product_id": "49",
                    "type": "packet",
                    "measurement": "500",
                    "measurement_unit_id": "2",
                    "price": "19190",
                    "price_original": "19000",
                    "discounted_price": "0",
                    "serve_for": "Available",
                    "stock": "10",
                    "stock_unit_id": "2",
                    "measurement_unit_name": "gm",
                    "stock_unit_name": "gm"
                }
            ]
        },
        {
            "id": "48",
            "seller_id": "9",
            "row_order": "0",
            "name": "Risotto aux champignons",
            "tax_id": "0",
            "slug": "risotto-aux-champignons-1",
            "category_id": "40",
            "subcategory_id": "13",
            "indicator": "2",
            "manufacturer": "",
            "made_in": "",
            "return_status": "0",
            "cancelable_status": "0",
            "till_status": "",
            "image": "https://webadmin.koumishop.com/upload/images/0049-2023-03-03.jpg",
            "other_images": [],
            "description": "",
            "status": "1",
            "date_added": "2023-03-03 16:56:49",
            "is_approved": "1",
            "return_days": "0",
            "type": "packet",
            "pincodes": "",
            "cod_allowed": "1",
            "total_allowed_quantity": "0",
            "seller_name": "Koumi_Shop",
            "seller_status": "1",
            "price": "25250",
            "tax_title": "",
            "tax_percentage": "0",
            "delivery_places": "2",
            "variants": [
                {
                    "id": "48",
                    "product_id": "48",
                    "type": "packet",
                    "measurement": "500",
                    "measurement_unit_id": "1",
                    "price": "25250",
                    "price_original": "25000",
                    "discounted_price": "0",
                    "serve_for": "Available",
                    "stock": "9",
                    "stock_unit_id": "1",
                    "measurement_unit_name": "kg",
                    "stock_unit_name": "kg"
                }
            ]
        }
    ]    
    return(
        <main className={montserrat.className}>
            <Header hasSignedIn={true} />
            <section className='md:flex md:flex-col md:w-full md:h-[92%] md:items-start md:justify-between bg-white'>
                <div className='w-full md:ml-[10%] md:my-[4%]'>
                    <Resume cashAmount={user[0].balance} itemsAmount={80} orderAmount={data.length}/>
                </div>
                <div className='md:w-[42.3%] md:ml-[12%] text-dark bg-alt-secondary'>
            <h2 className='p-4 w-full font-medium'>Produits</h2>
            <div className='md:w-full md:pb-4 text-dark bg-alt-secondary'>
                {productData?.data.map((item, idx)=>(
                    <div key={idx} className='w-[95%] px-2 py-4 mx-4 mb-2 flex bg-white'>
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