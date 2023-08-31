import axios from "axios";
import React, { useEffect, useState } from "react";
import "./photos.css";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10);
  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_limit=50`
    );
    setPhotos(res.data);
    setLoading(false);
  };

  const lastPhotosIndex = currentPage + photosPerPage;
  const firstPhotosIndex = lastPhotosIndex - photosPerPage;
  const currentPhotos = photos.slice(firstPhotosIndex, lastPhotosIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () =>
    setCurrentPage((prev) =>
      currentPage < Math.ceil(photos.length / photosPerPage) ? prev + 1 : prev
    );

  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div>
      <div className="nav">
        <h1>Photos</h1>
      </div>
      <div className="cards">
        {currentPhotos.map((photo) => (
          <div className="card" key={photo.id}>
            <Link to={`/photo/${photo.id}`}>
              <div className="title">
                <p>{photo.title}</p>
              </div>
              <div className="card-img">
                <img src={photo.url} alt="" className="card-img-img" />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        paginate={paginate}
        photosPerPage={photosPerPage}
        totalPhotos={photos.length}
      />
    </div>
  );
};

export default Photos;
