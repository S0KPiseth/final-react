import { useDispatch } from "react-redux";
import { addItems } from "../state/cartItems";
import { useSelector } from "react-redux";
export function toCapitalize(name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
}
export const Plant = (props) => {
  const dispatcher = useDispatch();
  const cartItem = useSelector((state) => state.cartItems.itemsArrays);
  return (
    <div className="flex flex-col item-center justify-center w-3xs text-center bg-[#dff7ec] rounded-xl pb-5">
      <img src={props.image} className="h-40 rounded-lg" />
      <br />
      <p className="font-bold">{toCapitalize(props.plantList.common_name)}</p>
      <p className="text-gray-500">${props.price}</p>
      <div>
        <button
          className="p-2 bg-green-800 rounded-full text-white w-1/2 cursor-pointer disabled:bg-gray-400 disabled:cursor-default"
          onClick={() => {
            const targetPlant = { ...props.plantList };
            targetPlant.quantity = 1;
            targetPlant.price = props.price;

            dispatcher(addItems(targetPlant));
          }}
          disabled={cartItem.find((e) => {
            return e.id === props.plantList.id;
          })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
