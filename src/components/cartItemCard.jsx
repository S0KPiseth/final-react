import { toCapitalize } from "./plant";
import { addItems } from "../state/cartItems";
import { removeItems } from "../state/cartItems";
import { useDispatch } from "react-redux";
const CartItemCard = (props) => {
  const dispatcher = useDispatch();
  return (
    <>
      <div className="h-1/5 lg:h-1/3 grid grid-cols-4 lg:grid-cols-6 lg:grid-rows-1 grid-rows-2 mb-1 items-center bg-white pr-3">
        <div className="bg-cover w-full h-full bg-center" style={{ backgroundImage: props.targetplant.default_image ? `url(${props.targetplant.default_image.original_url})` : `url('./img/noimagelarge.png')` }}>
          &nbsp;
        </div>
        <p className="grow md:text-xl font-bold pl-5 col-span-2">
          {toCapitalize(props.targetplant.common_name)} <br />
          <span className="lg:text-sm text-xs font-normal text-gray-600">({props.targetplant.scientific_name})</span>
        </p>
        <p>
          <span className="lg:hidden">{props.targetplant.quantity} x </span>${props.targetplant.price}
        </p>
        <div className="flex flex-row-reverse justify-center gap-2 row-start-2 lg:row-start-1 lg:col-start-5">
          <button
            className="p-0.5 rounded-full border-1 h-fit"
            onClick={() => {
              dispatcher(addItems(props.targetplant));
            }}
          >
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 0.6 0.6" id="plus" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
              <path id="primary" d="M0.3 0.5A0.027 0.027 0 0 1 0.275 0.475V0.325H0.125a0.025 0.025 0 0 1 0 -0.049h0.149V0.125a0.025 0.025 0 0 1 0.049 0v0.149h0.149a0.025 0.025 0 0 1 0 0.049H0.324v0.149a0.027 0.027 0 0 1 -0.025 0.025" />
            </svg>
          </button>
          <p>{props.targetplant.quantity}</p>
          <button
            className="p-0.5 rounded-full border-1 h-fit"
            onClick={() => {
              dispatcher(removeItems(props.targetplant));
            }}
          >
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 0.6 0.6" id="minus" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
              <path id="primary" d="M0.475 0.325H0.125a0.025 0.025 0 0 1 0 -0.05h0.35a0.025 0.025 0 0 1 0 0.05" />
            </svg>
          </button>
        </div>
        <p className="text-right hidden lg:block">${(props.targetplant.quantity * props.targetplant.price).toFixed(2)}</p>
      </div>
    </>
  );
};
export default CartItemCard;
