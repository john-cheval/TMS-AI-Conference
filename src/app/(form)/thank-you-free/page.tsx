import React from 'react';
import { fetchData } from '@/lib/fetchData';
import { baseUrl } from '@/lib/api';

async function ThankYouFreePage() {
    const pageContent = await fetchData(`${baseUrl}/getmenu`);
        const { COMMON_SETTINGS_VALUES_thank_you_free } = pageContent?.general_settings;
    
        return (
            <div className='thank-you text-center container-inside mx-auto py-[50px]'>
                <h1 className='text-center text-[#0078bb] text-[40px] font-[700]'>{COMMON_SETTINGS_VALUES_thank_you_free?.value}</h1>
                {
                    COMMON_SETTINGS_VALUES_thank_you_free?.description && (
                        <div className="content" dangerouslySetInnerHTML={{__html:COMMON_SETTINGS_VALUES_thank_you_free?.description}} />
                    )
                }
            </div>
        );
    }

export default ThankYouFreePage;