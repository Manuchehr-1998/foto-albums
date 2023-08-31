import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Photo = ({ photo }) => {
  const { idPhoto } = useParams();
  const [currentPhoto, setCurrentPhoto] = useState(null);
  console.log(idPhoto);

  useEffect(() => {
    if (!photo) {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos?id=${idPhoto}`)
        .then((response) => {
          if (response.data.length > 0) {
            setCurrentPhoto(response.data[0]);
            console.log(response.data);
          }
        });
    } else {
      setCurrentPhoto(photo);
    }
  }, [photo, idPhoto]);
  if (!currentPhoto) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card">
        <div className="title">
          <p>{currentPhoto.title}</p>
        </div>
        <div className="card-img">
          <img src={currentPhoto.url} alt="" className="card-img-img" />
        </div>
      </div>
    </div>
  );
};

export default Photo;
