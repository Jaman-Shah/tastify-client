import React from "react";

const GalleryCard = ({ singleGallery }) => {
  const { image, feedback, name } = singleGallery;
  console.log(image);

  const bgImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div
      className="relative rounded-2xl h-52 text-center bg-cover bg-center overflow-hidden"
      style={bgImageStyle}
    >
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black opacity-0 hover:opacity-80 transition-opacity duration-300">
        <div className="font-bold p-10">
          <h1 className="text-4xl mb-4 text-white">{name}</h1>
          <p className="text-2xl text-white">{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
