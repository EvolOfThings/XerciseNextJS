'use client'; // Error components must be Clients components

import { useEffect } from "react";

const Error = ({error, reset}) => {

    useEffect(()=>{
       console.log(error) 
    }, [error])

    return(
        <div>
            <h2>Something went wrong</h2>
            <button onClick={
                () => reset
            }>
Try again
            </button>
        </div>
    )
}

export default Error;