import { toCapitalize } from "./plant";
import { addItems } from "../state/cartItems";
import { removeItems } from "../state/cartItems";
import { useDispatch } from "react-redux";
const CartItemCard = (props) => {
  const dispatcher = useDispatch();
  return (
    <>
      <div className="h-2/5 grid grid-cols-6 grid-rows-1 mb-1 items-center bg-white rounded-lg drop-shadow-md pr-3">
        <div className="bg-cover w-full h-full bg-center" style={{ backgroundImage: props.targetplant.default_image ? `url(${props.targetplant.default_image.original_url})` : `url('/img/noimagelarge.png')` }}>
          &nbsp;
        </div>
        <p className="grow text-xl font-bold pl-5 col-span-2">
          {toCapitalize(props.targetplant.common_name)} <br />
          <span className="text-sm font-normal text-gray-600">({props.targetplant.scientific_name})</span>
        </p>
        <p>${props.targetplant.price}</p>
        <div className="flex flex-row-reverse justify-center gap-2">
          <button
            className="p-0.5 rounded-full border-1 h-fit"
            onClick={() => {
              dispatcher(addItems(props.targetplant));
            }}
          >
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 0.6 0.6" id="plus" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
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
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 0.6 0.6" id="minus" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
              <path id="primary" d="M0.475 0.325H0.125a0.025 0.025 0 0 1 0 -0.05h0.35a0.025 0.025 0 0 1 0 0.05" />
            </svg>
          </button>
        </div>
        <p className="text-right">${props.targetplant.quantity * props.targetplant.price}</p>
      </div>
    </>
  );
};
export default CartItemCard;
