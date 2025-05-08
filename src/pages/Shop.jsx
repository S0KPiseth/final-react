import { useEffect, useState } from "react";
import PLANT_DATA from "../assets/plant_data";
import Plant from "../components/plant";
import useLoadPlant from "../useLoadPlant";
import PlantMorph from "../components/loader";
const Shop = () => {
  const [pageNum, setPageNum] = useState(1);
  const { plant, isLoading } = useLoadPlant(pageNum);
  console.log(plant);

  const categories = [
    ...new Set(
      PLANT_DATA.map((e) => {
        for (let i of e.benefits) {
          return i;
        }
      })
    ),
  ];
  categories.forEach((e) => {
    return (
      <div>
        <p>{e}</p>
      </div>
    );
  });

  return (
    <>
      <h1>Shop</h1>
      <div>
        {categories.map((category) => {
          return (
            <div className="flex flex-col">
              <h1>{category}</h1>
              <div className="grid autoColumn gap-2.5 w-11/12 m-auto h-fit">{plant.map((e, index) => PLANT_DATA[index].benefits.includes(category) && <Plant key={index} plantList={e} price={10} image={e.default_image ? e.default_image.original_url : "/img/noimagelarge.png"} />)}</div>
            </div>
          );
        })}
        {/* {plant.map((e, index) => (
          <Plant key={index} plantList={e} price={10} image={e.default_image ? e.default_image.original_url : "/img/noimagelarge.png"} />
        ))} */}
      </div>
      <PlantMorph />
    </>
  );
};
export default Shop;
