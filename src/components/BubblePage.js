import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchColors } from "../api/fetchColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    getColors()
  }, [])

  const getColors = () => {
    fetchColors()
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => {
        console.log({err});
      })
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
