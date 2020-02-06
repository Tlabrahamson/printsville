import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

const Photos = () => {
  const { photos } = useContext(Context);
  const collection = photos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)} />
  ));
  return <main className="photos">{collection}</main>;
};

export default Photos;
