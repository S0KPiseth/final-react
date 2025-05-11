import axios from "axios";
import { useEffect, useState } from "react";

export default function useLoadPlant(pageNum) {
  const API_KEY = import.meta.env.VITE_key;
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
