import React, { useEffect } from "react";

const BackgroundImages = () => {
  var i = 0;
  var images = [];
  var time = 3000;

  images[0] =
    "https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D";
  images[1] =
    "https://images.unsplash.com/photo-1536121669036-cb96c328d389?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  images[2] =
    "https://images.unsplash.com/photo-1509983165097-0c31a863e3f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZXxlbnwwfHwwfHx8MA%3D%3D";
  images[3] =
    "https://images.unsplash.com/photo-1545201065-5c7a8dc149f2?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const changeImg = () => {
    document.slide.src = images[i];

    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }

    setTimeout(changeImg, time);
  };

  window.onload = changeImg;

  return (
    <>
      <div className=" w-full h-[600px] mt-10 ">
        <div className=" w-[95%] mx-auto h-full">
          <img
            name="slide"
            className=" w-full h-full object-cover rounded-md "
          />
        </div>
      </div>
    </>
  );
};

export default BackgroundImages;
