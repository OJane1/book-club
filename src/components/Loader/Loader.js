import React from 'react';
import LoaderImg from "../../images/Spinner@1x-1.0s-200px-200px.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loader
