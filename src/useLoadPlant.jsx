import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

export default function useLoadPlant(pageNum) {
  const API_KEY = "sk-XHqo6811deca145c010127";
  const [plant, setPlant] = useState([]);
  const [isLoading, setIstLoading] = useState(true);

  useEffect(() => {
    setIstLoading(true);
    axios
      .get("https://perenual.com/api/v2/species-list", {
        params: {
          key: API_KEY,
          page: pageNum,
          indoor: 1,
        },
      })

      //-----for testing-----//
      // .get("plants.json")
      .then((res) => {
        console.log(res);
        setPlant((pre) => {
          return [...pre, ...res.data.data];
        });
        setIstLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNum]);
  return { plant, isLoading };
}
