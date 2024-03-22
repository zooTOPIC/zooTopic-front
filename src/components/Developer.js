import React from "react";

function Developer({ name, tagline, image, description }) {
  const formattedDescription = description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br/>
    </React.Fragment>
  ));

  return (
    <div className="container mx-auto mb-20 px-7">
      <div className="flex flex-col md:flex-row items-start justify-center pt-2">
        <div className="md:w-1/2 mb-4 md:mb-0" style={{ minWidth: '350px', maxWidth: '600px', width: '100%' }}>
          <img src={image} alt={name} className="w-full" />
        </div>
        <div className="md:w-1/2 md:ml-8 p-2 mb-3" style={{ minWidth: '350px', maxWidth: '600px', width: '100%' }}>
          <span className="text-4xl font-semibold mr-3">{name}</span>
          <span className="text-2xl font-semibold text-gray-400">{tagline}</span>
          <p className="text-lg ext-gray-800 mt-4">{formattedDescription}</p>
        </div>
      </div>
      
      <hr className="border-1 border-gray-400 my-4"/>
    </div>
  );
}

export default Developer;
