import Image from 'next/image'

export default function OrderDetail ({items, total, currency, id}){
    const myLoader=({src})=>{
        return `${src}`;
    }
    return ( items===[] || total==="" || currency==="" || id===""?
        <div className='md:w-[42.3%] flex flex-col items-center justify-center text-dark bg-alt-secondary'>
            <h2 className='p-4 w-full font-medium'>Détails commande</h2>
            <div className='md:w-full md:pt-4 md:pl-4 md:pb-6 text-dark bg-alt-secondary'>Selectionnez une commande pour en voir les details</div>
        </div>
    : 
        <div className='md:w-[42.3%] text-dark bg-alt-secondary'>
            <h2 className='p-4 w-full font-medium'>Détails commande n° {id}</h2>
            <div className='md:w-full md:pb-4 text-dark bg-alt-secondary'>
                {items.map((item, idx)=>(
                    <div key={idx} className='w-[95%] px-2 py-4 mx-4 mb-2 flex bg-white'>
                        <div className='w-1/3'><Image loader={myLoader} src={item.image} width={400} height={400} alt="item ordered picture" className='w-full h-full'/></div>
                        <div className='w-1/3 pl-2'>
                            <h3 className='font-semibold'>{item.name}</h3>
                            <div>Unité : {item.variant_name}</div>
                            <div>Qté : {item.quantity}</div>                                        
                        </div>
                        <div className='w-1/3 pl-2'>
                            <div>Prix : {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: `${currency}` }).format(parseInt(item.sub_total)) }</div>
                            <div>Taxe (%) : {item.tax_percentage}</div>
                            <div>Remise (FC) : {item.discounted_price}</div>                                        
                        </div>
                    </div>
                )) }
            </div>
            <div className='w-full flex p-4'><h3 className='mr-2 font-bold'>Prix total :</h3>{ new Intl.NumberFormat('fr-FR', { style: 'currency', currency: currency===""?'CDF':`${currency}` }).format(parseInt(total))}</div>
        </div>
     )
    // {
    //  items===[] && total==="" && currency===""? (

    //  ):
   
    // }
}
