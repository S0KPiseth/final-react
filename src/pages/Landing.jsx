import { useEffect } from "react";
import Call2Action from "../components/call2action";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../state/changePageSlice";
const Landing = (props) => {
  const isShopping = useSelector((state) => state.changePage.value);
  const dispatcher = useDispatch();

  useEffect(() => {
    //change body background color
    document.body.style.backgroundColor = "#016630";
    if (isShopping) {
      dispatcher(change());
    }
  }, []);
  return (
    <>
      <div className={`h-screen w-full flex flex-col justify-end text-white relative md:grid md:grid-cols-[20% 40% 40%] md:grid-rows-[80% 20%] md:items-end gap-x-2.5 overflow-hidden ${props.isOpenCart && "blur-"}`}>
        <div className="bg-[url(/img/middleLeaf.png)] h-screen w-full absolute bg-contain bg-no-repeat bg-center brightness-70 z-0"></div>
        <div className="col-start-1 col-span-1 row-start-1 row-span-1">
          <p className="h-fit pl-4 text-[20vw] leading-[1em] md:text-[15vw] relative md:bottom-[-200px] lg:bottom-[-100px] font-[Qurova] font-medium">Bring</p>
        </div>
        <div className="col-start-1 col-span-3 row-start-2 row-span-1 ">
          <p className="h-fit pl-4 text-[20vw] leading-[1em] md:text-[15vw] overflow-hidden align-bottom relative font-[Qurova] font-medium">
            Nature <br className="md:hidden" />
            Home
          </p>
        </div>
        <p className="md:text-center text-left col-span-3 col-start-1 row-start-1 row-span-1 p-4 relative lg:text-[1.2vw] lg:col-span-2 lg:col-start-2">
          At Plant Shop, we believe that nature should be a part of every home. Founded with a passion for greenery and a mission to reconnect people with the natural world, we specialize in curating a wide range of indoor plants that not only beautify your space but also enhance your well-being. <span className="hidden md:inline">Whether you're a seasoned plant lover or just beginning your journey into urban gardening, our hand-picked collection is designed to meet your needs — from easy-care succulents to vibrant tropicals. We take pride in sourcing healthy, sustainable plants and delivering them with care using eco-friendly packaging.</span>
        </p>
        <br className="md:hidden" />
        <br className="md:hidden" />
        <div className="relative md:absolute left-1/2 md:top-3/5 translate-x-[-50%] bottom-2">
          <Link to="/shop">
            <Call2Action />
          </Link>
        </div>
        <br className="md:hidden" />
      </div>
    </>
  );
};
export default Landing;
