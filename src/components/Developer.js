import React from "react";

function Developer({ name, tagline, image, description }) {
  const formattedDescription = description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br/>
    </React.Fragment>
  ));

  return (
    <div className="container mx-auto mb-8 px-5" style={{marginTop: "141px"}}>
      <div className="flex flex-col md:flex-row items-start">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={image} alt={name} className="w-full" />
        </div>
        <div className="md:w-1/2 md:ml-8 p-2">
          <h2 className="text-3xl font-semibold mb-3">{name}</h2>
          <h3 className="text-gray-600 mb-6">{tagline}</h3>
          <p className="text-gray-800 mt-4">{formattedDescription}</p>
        </div>
      </div>
    </div>
  );

}

export default Developer;
