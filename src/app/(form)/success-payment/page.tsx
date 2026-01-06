import React from 'react';
import { fetchData } from '@/lib/fetchData';
import { baseUrl } from '@/lib/api';

async function SuccessPayment({ searchParams}:any) {
    const datas = await searchParams;

    const pageContent = await fetchData(`${baseUrl}/payment-response?ref=${datas.ref}`,{ cache: "no-store" });

    console.log("pageContent",pageContent)


    return (
        <>
            {
            // pageContent?.payment_details?.status === 'CAPTURED' && (
                <div className='container text-center thank-you container-inside mx-auto py-[50px]'>
                    {/* <h1 className='text-center text-[#0078bb] text-[40px] font-[700]'>{pageContent?.msg}</h1> */}
                    <h1 className='text-center text-[#0078bb] text-[40px] font-[700]'>Your payment was completed successfully.</h1>
                    <h3 className='mt-[15px]'>Order ID: #{pageContent?.payment_details.payment_details?.reference_id}</h3>
                    <p className='mt-[15px]'>Thank you for choosing us.</p>
                </div>
            // ) 
            }
        </>
    );
}

export default SuccessPayment;