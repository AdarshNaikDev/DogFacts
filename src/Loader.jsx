import React from 'react'
import loaderGif from "./Asset/loader.gif"

function Loader() {
    return (
        <>
            <div className='table loader'>
                <img src={loaderGif} alt="" />
            </div>
            

        </>

    )
}

export default Loader