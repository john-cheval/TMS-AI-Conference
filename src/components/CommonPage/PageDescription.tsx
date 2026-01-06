import React from 'react';

function PageDescription({content}:{content:any}) {
    return (
        <div className='tandc-content py-[50px]'>
            <div className="container-inside mx-auto" dangerouslySetInnerHTML={{__html:content}} />
        </div>
    );
}

export default PageDescription;