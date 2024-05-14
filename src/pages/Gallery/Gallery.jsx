import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import axios from "axios";
import GalleryCard from "../../components/GalleryCard";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  const loadGallery = async () => {
    try {
      const response = await axios.get("http://localhost:5005/gallery");
      setGallery(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadGallery();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Gallery | Tastify</title>
      </Helmet>
      <div className="m-4 rounded-2xl  text-center bg-[url('https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/education/hero/top-ten-foods-for-health-2x.jpg')] bg-cover bg-center">
        <div className="font-bold rounded-2xl bg-gradient-to-tr  from-gray-900 text-white p-10">
          <h1 className="text-4xl mb-4">
            <span className="text-green-400">Gallery</span>
          </h1>
          <p className="text-2xl">Tastify | Gallery</p>
        </div>
      </div>
      <Modal loadGallery={loadGallery} />
      <div className="grid mb-10 gap-6 px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {gallery &&
          gallery.map((singleGallery) => {
            return (
              <GalleryCard
                key={singleGallery._id}
                singleGallery={singleGallery}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
