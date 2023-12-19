import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1509983165097-0c31a863e3f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1545201065-5c7a8dc149f2?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1536121669036-cb96c328d389?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Add more images here
];

const time = 3000;

function BackgroundImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, time);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[600px] mt-10">
      <div className="w-[95%] mx-auto h-full">
        <img
          src={images[currentImageIndex]}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default BackgroundImages;
