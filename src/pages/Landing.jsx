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
      <div className="h-screen w-full text-white relative grid grid-cols-[20% 40% 40%] grid-rows-[80% 20%] items-end gap-x-2.5 overflow-hidden">
        <div className="bg-[url(/img/middleLeaf.png)] h-screen w-full absolute bg-contain bg-no-repeat bg-center brightness-70 z-0"></div>

        <div className="col-start-1 col-span-1 row-start-1 row-span-1">
          <p className="h-56 leading-[1em] text-[220px] relative bottom-[-100px] font-[Qurova] font-medium">Bring</p>
        </div>
        <div className="col-start-1 col-span-3 row-start-2 row-span-1 ">
          <p className="h-56 leading-[1em] text-[220px] overflow-hidden align-bottom relative font-[Qurova] font-medium">Nature Home</p>
        </div>
        <p className=" text-center col-span-2 col-start-2 row-start-1 row-span-1 p-4 relative">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem obcaecati numquam dolorem ullam corporis voluptatibus, nihil nam modi corrupti. Aperiam optio fuga laborum, velit modi illo cupiditate ipsa corrupti enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur aut quidem exercitationem voluptas, laboriosam nemo, facere autem iusto pariatur in quis ullam rem nulla, harum quasi repellat. Architecto, alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quod a nesciunt doloremque repellendus cumque, maiores consequuntur sapiente asperiores, ab sequi sed dignissimos quibusdam atque! Cupiditate error suscipit nisi ratione! uppercase uppercase Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit libero ad. Laudantium reprehenderit qui voluptates dolorem fugit, sequi alias, quas laborum quaerat vel ipsam molestias praesentium hic quibusdam magnam!</p>
        <div className="absolute left-1/2 top-3/5 translate-x-[-50%]">
          <Link to="/shop">
            <Call2Action />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Landing;
