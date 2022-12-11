import DogCard from './DogCard';
import './App.css';
import React,{useState} from 'react';
// import ColorButton from './ColorButton';


function App() {

  
  return (
    <>
    <div className='title'>
    <h1>
      Get to know more facts about <div id="dog-title">Dog!!</div>
    </h1>
    </div>
    {/* {loader? <Loader/>: <DogCard loader={loader} setLoader={setLoader} />} */}
    <div className='dogcard-container'>
    <DogCard />
    </div>    

    

    </>
  )
}

export default App;
