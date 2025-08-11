import {Metadata} from "next";
import React, {FC} from "react";

export const metadata: Metadata ={
    title: 'CarsLayout title'
}

type Props={
    children: React.ReactNode
}

 const CarsLayout: FC<Props> = ({children})=>{
    return(
        <div>
            {children}
        </div>
    )
}
export default CarsLayout