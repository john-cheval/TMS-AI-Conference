import React from 'react';
import PageDescription from './PageDescription';
interface CommonProps {
    page_description:any;
}

function CommonPageView({page_description}:CommonProps) {
    return (
        <div className='section-wrapper pt-5 md:pt-7 lg:pt-12 xl:pt-16 2xl:pt-20 pb-8 md:pb-10 lg:pb-14'>
            <PageDescription content={page_description.description} />
        </div>
    );
}

export default CommonPageView;