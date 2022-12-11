import React, { useEffect, useState } from 'react'
import './App.css';
import Axios from 'axios';
import Loader from './Loader';

function DogCard( ) {

    // useEffect(async () => {
    //     fetchImage();
    //     fetchFact();

    // }, [])
    const baseURL = "https://dogapi.dog/api/facts";
    const ImgURL = "https://dog.ceo/api/breeds/image/random"
    const [fact, setFact] = useState("The average number of puppies in a litter is four to six.")
    const[loader,setLoader] = useState(false)

    const [dogimg, setDogImg] = useState("https:\/\/images.dog.ceo\/breeds\/pekinese\/n02086079_7302.jpg")

    function factImgHandler() {
        setLoader(true)
        fetchImage();

    }


    const fetchImage = async () => {
        try {
            const response = await Axios(ImgURL)
            console.log(response.data.message)
            if (response.data.message != null) {
                await setDogImg(response.data.message)
                await fetchFact();
                setLoader(false)

            }
        }
        catch (error) {
            console.log("Error",error.response)
            setLoader(false)
            alert("Something went wrong with API!!")
        }
    }
    const fetchFact = async () => {
        try {
            const response = await Axios(baseURL)
            console.log(response.data.facts)
            setFact(response.data.facts)

        }
        catch (error) {
            console.log(error.response)
        }
    }

    return (
        <>
            {loader? <Loader/>:<div className='table'>
                <div className='image'>
                    <img className='img' src={dogimg} alt="" />
                </div>
                <div className='fact'>
                    <p>{fact}</p>
                </div>
            </div> }
            
            <div className='btn'>
                <button className='glossy-button glossy-button--blue' onClick={factImgHandler}>
                    Get Fact!!
                </button>
            </div>


        </>
    )
}

export default DogCard