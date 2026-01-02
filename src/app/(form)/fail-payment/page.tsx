import React from 'react';
import { fetchData } from '@/lib/fetchData';
import { baseUrl } from '@/lib/api';

async function FailPayment({ searchParams}:any) {
    const datas = await searchParams;

    const pageContent = await fetchData(`${baseUrl}/payment-response?ref=${datas.ref}`,{ cache: "no-store" });

    console.log("pageContent",pageContent)


    return (
        <>
            {
            // pageContent?.payment_details?.state === 'FAILED' && (
                <div className='thank-you container-inside mx-auto py-[50px]'>
                    {/* <h1 className='text-center text-[#0078bb] text-[40px] font-[700]'>{pageContent?.msg}</h1> */}
                    <h1 className='text-center text-[#0078bb] text-[40px] font-[700]'>Your payment is failed.</h1>
                </div>
            // ) 
            }
        </>
    );
}

export default FailPayment;