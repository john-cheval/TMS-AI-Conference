import React from 'react';
import { fetchData } from '@/lib/fetchData';
import { baseUrl } from '@/lib/api';

async function FailPayment({ searchParams}:any) {
    const datas = await searchParams;

    const pageContent = await fetchData(`${baseUrl}/payment-response?ref=${datas.ref}`,{ cache: "no-store" });

    console.log("pageContent",pageContent)

    const payment_msg = pageContent?.payment_msg;


    return (
        <>
            {
            (pageContent?.payment_details?.state === 'DECLINED' || pageContent?.payment_details?.state === 'FAILED' || pageContent?.payment_details?.state === 'CANCELLED' ) && (
                <div className='container text-center thank-you container-inside mx-auto py-[50px]'>
                    {/* <h1 className='text-center text-[#0078bb] text-[40px] font-[700]'>{pageContent?.msg}</h1> */}
                    <h1 className='text-center text-[#0078bb] text-[40px] font-[700]'>{payment_msg[`${pageContent?.payment_details?.state}`].heading}</h1>
                    <p className='mt-[15px]'>{payment_msg[`${pageContent?.payment_details?.state}`].text}</p>

                </div>
            ) 
            }
        </>
    );
}

export default FailPayment;