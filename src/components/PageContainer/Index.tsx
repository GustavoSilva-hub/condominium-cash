import React from 'react';
import {Navbar} from '../Navbar/Index';

interface IPageContainer {
    children: JSX.Element
}

export function PageContainer({children}:IPageContainer){
    return(
        <div className="page-container">
            <Navbar/>
            {children}
        </div>
    )
}