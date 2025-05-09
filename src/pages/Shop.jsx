import { useEffect, useState } from "react";
import PLANT_DATA from "../assets/plant_data";
import Plant from "../components/plant";
import useLoadPlant from "../useLoadPlant";
import PlantMorph from "../components/loader";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../state/changePageSlice";

const Shop = () => {
  const [pageNum, setPageNum] = useState(1);
  const { plant, isLoading } = useLoadPlant(pageNum);
  const isShop = useSelector((state) => state.changePage.value);
  const dispatch = useDispatch();
  useEffect(() => {
    //change body background color
    document.body.style.backgroundColor = "white";
    console.log(isShop);
    if (isShop === false) {
      dispatch(change());
    }
    console.log(isShop);
  }, []);

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
      <div className="bg-radial from-white">
        {categories.map((category) => {
          return (
            <div className="flex flex-col">
              <h1 className="text-center text-5xl font-[Qurova]">{category}</h1>
              <br />
              <div className="flex flex-wrap w-full justify-evenly gap-5">{plant.map((e, index) => PLANT_DATA[index].benefits.includes(category) && <Plant key={index} plantList={e} price={(Math.random() * 100).toFixed(2)} image={e.default_image ? e.default_image.original_url : "/img/noimagelarge.png"} />)}</div>
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
