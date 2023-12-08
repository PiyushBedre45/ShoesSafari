import React, { useEffect, useState } from "react";
import axios from "axios";

const AlwaysIconic = () => {
  const [ico, setIconic] = useState([]);
  const iconicShoes = async () => {
    const respons = await axios.get(`http://localhost:3000/product/iconic`);

    setIconic(respons.data.iconic);
    console.log(ico);
  };

  useEffect(() => {
    iconicShoes();
  }, []);

  return (
    <>
      {/* Heading n all */}

      <div className=" w-full h-[250px] mt-[40px]  ">
        <div className=" w-[50%] mx-auto h-full flex flex-col items-center  justify-center gap-4">
          <h1 id="heading" className="text-4xl ">
            Always Iconic
          </h1>
          <p className="text-xl text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            animi molestiae similique dignissimos repellendus dicta, iusto
            expedita eius consectetur natus
          </p>
        </div>
      </div>

      {/* Maping of Always iconic */}

      <div className=" w-full h-[85vh]  ">
        <div className=" w-[90%] mx-auto h-full flex flex-wrap items-center justify-between ">
          {ico.map((shoe, index) => (
            <div key={shoe.id}>
              <div>
                <img
                  className="w-[250px] h-[250px] object-cover"
                  src={shoe.images[0].url}
                  alt="load"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AlwaysIconic;
