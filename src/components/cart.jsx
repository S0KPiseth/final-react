import { useSelector } from "react-redux";
import CartItemCard from "./cartItemCard";
export default function Cart(props) {
  const carItems = useSelector((state) => state.cartItems.itemsArrays);
  console.log(carItems);
  return (
    <>
      <div className="fixed-center bg-white rounded-3xl w-10/12 h-11/12 z-99 p-2 px-7">
        <button
          className="p-2 bg-gray-200 rounded-full origin-right absolute right-2"
          onClick={() => {
            props.setIsOpenCart(false);
          }}
        >
          <svg className="cursor-pointer" width="25px" height="25px" viewBox="0 0 0.75 0.75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.625 0.625 0.125 0.125m0.5 0L0.125 0.625" stroke="#000000" stroke-width="0.0625" stroke-linecap="round" />
          </svg>
        </button>
        <h1 className="text-center text-2xl">Cart</h1>
        <br />
        <div className="grid grid-cols-6 w-full pr-3">
          <p className="col-span-3">Name</p>
          <p>Price </p>
          <p className="text-center">Quantity</p>
          <p className="text-right">Total</p>
        </div>
        <div className="h-6/12 overflow-y-scroll scrollBar-hidden">
          {carItems.map((e) => {
            return <CartItemCard targetplant={e} />;
          })}
        </div>
        <p className="text-green-800 text-3xl font-medium">Total:</p>
      </div>
    </>
  );
}
