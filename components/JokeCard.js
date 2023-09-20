import React from "react";
import Image from "next/image";

const JokeCard = ({ data }) => {
   return (
      <React.Fragment>
         <div className="flex w-full flex-col gap-5 rounded-lg px-5 py-5 shadow-lg">
            <label className=" text-lg font-semibold">{data.title}</label>
            {data.cover.trim().length === 0 ? (
               <React.Fragment>
                  <Image
                     className="mx-auto"
                     src="http://localhost:3000/defaultcover.png"
                     width={350}
                     height={300}
                     alt="cover"
                  />
               </React.Fragment>
            ) : (
               <React.Fragment>
                  <Image
                     className="mx-auto"
                     src={data.cover}
                     width={350}
                     height={300}
                     alt="cover"
                  />
               </React.Fragment>
            )}
            <label>{data.content}</label>
         </div>
      </React.Fragment>
   );
};

export default JokeCard;
