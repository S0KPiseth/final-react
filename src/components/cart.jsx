import { useSelector } from "react-redux";
import CartItemCard from "./cartItemCard";
import { useDispatch } from "react-redux";
import { applyCoupon } from "../state/couponSlice";
import { useState, useEffect } from "react";
import { checkOut } from "../state/cartItems";
export default function Cart(props) {
  const carItems = useSelector((state) => state.cartItems.itemsArrays);
  const isValid = useSelector((state) => state.couponCode.valid);
  const subTotal = carItems.reduce((total, e) => total + e.quantity * e.price, 0);
  const salesTax = (subTotal * 10) / 100;
  const couponPrice = isValid ? salesTax : 0;
  const dispatcher = useDispatch();
  const [status, setStatus] = useState("idle");
  const [openSum, setOpenSum] = useState(false);

  useEffect(() => {
    console.log("hi");
    if (status === "idle") return;

    const inputTarget = document.getElementById("couponCode");

    if (isValid) {
      setStatus("valid");
      inputTarget.style.borderColor = "black";
    } else {
      setStatus("invalid");
      inputTarget.classList.add("animate-shake");
      inputTarget.style.borderColor = "red";
      setTimeout(() => {
        inputTarget.classList.remove("animate-shake");
      }, 200);
    }
  }, [status]);

  return (
    <>
      <div className="fixed-center bg-white rounded-3xl w-11/12 lg:w-10/12 h-11/12 z-99 p-2 lg:px-7 flex flex-col overflow-hidden">
        <button
          className="p-2 bg-gray-200 rounded-full origin-right absolute right-2"
          onClick={() => {
            props.setIsOpenCart(false);
          }}
        >
          <svg className="cursor-pointer" width="25px" height="25px" viewBox="0 0 0.75 0.75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.625 0.625 0.125 0.125m0.5 0L0.125 0.625" stroke="#000000" strokeWidth="0.0625" strokeLinecap="round" />
          </svg>
        </button>
        <h1 className="text-center text-2xl h-fit">Cart</h1>
        <br />
        <div className="flex grow h-11/12 gap-5 lg:flex-row flex-col relative">
          <div className="w-full lg:w-8/12 h-full">
            <div className="grid-cols-6 w-full pr-3 hidden md:grid">
              <p className="col-span-3">Name</p>
              <p>Price </p>
              <p className="text-center">Quantity</p>
              <p className="text-right">Total</p>
            </div>
            <br />

            <div className="h-11/12 lg:h-10/12 overflow-y-scroll scrollBar-hidden ">
              {carItems.map((e, idx) => {
                return <CartItemCard targetplant={e} key={idx} />;
              })}
            </div>
          </div>
          <div id="summaryDiv" className="transition-all duration-300 grow place-content-center absolute w-full bg-white bottom-0 lg:static lg:w-fit translate-y-[75%] lg:translate-y-0 animate-verticalShake lg:animate-none ">
            <div className=" h-fit border-1 border-gray-400 rounded-lg p-3 mb-5 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-2xl">Summary</p>
                <button
                  className="bg-black p-0.5 rounded-full lg:hidden"
                  onClick={() => {
                    const summaryDiv = document.getElementById("summaryDiv");
                    const pathElement = document.getElementById("path");

                    if (openSum) {
                      summaryDiv.classList.add("animate-verticalShake");
                      summaryDiv.classList.add("translate-y-[75%]");
                      summaryDiv.classList.remove("translate-y-[-5%]");
                      pathElement.setAttribute("d", "M0.75 0.65 0.418 0.982A0.06 0.06 0 0 1 0.325 0.975 0.067 0.067 0 0 1 0.332 0.89L0.707 0.518a0.06 0.06 0 0 1 0.087 0l0.375 0.372a0.067 0.067 0 0 1 0.007 0.085 0.06 0.06 0 0 1 -0.093 0.007Z");
                      setOpenSum(false);
                    } else {
                      summaryDiv.classList.remove("animate-verticalShake");
                      summaryDiv.classList.remove("translate-y-[75%]");
                      summaryDiv.classList.add("translate-y-[-5%]");
                      pathElement.setAttribute("d", "M0.75 0.85 0.419 0.519a0.059 0.059 0 0 0 -0.094 0.006 0.066 0.066 0 0 0 0.006 0.084l0.375 0.372a0.059 0.059 0 0 0 0.087 0l0.375 -0.372a0.066 0.066 0 0 0 0.006 -0.084 0.059 0.059 0 0 0 -0.094 -0.006Z");

                      setOpenSum(true);
                    }
                  }}
                >
                  <svg width="25px" height="25px" viewBox="0 0 1.5 1.5" xmlns="http://www.w3.org/2000/svg">
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="invisible_box" data-name="invisible box">
                        <path width="48" height="48" fill="none" d="M0 0h1.5v1.5H0z" />
                      </g>
                      <g id="icons_Q2" data-name="icons Q2">
                        <path id="path" fill="white" d="M0.75 0.65 0.418 0.982A0.06 0.06 0 0 1 0.325 0.975 0.067 0.067 0 0 1 0.332 0.89L0.707 0.518a0.06 0.06 0 0 1 0.087 0l0.375 0.372a0.067 0.067 0 0 1 0.007 0.085 0.06 0.06 0 0 1 -0.093 0.007Z" />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${subTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Sales Tax (10%)</p>
                <p>${salesTax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Promo Code</p>
                {isValid ? (
                  "-$" + couponPrice.toFixed(2)
                ) : (
                  <a className="underline" href="#couponCode">
                    Apply Coupon Code
                  </a>
                )}
              </div>

              <hr />
              <div className="flex justify-between">
                <p>Grand Total</p>
                <p>(USD)${(subTotal + salesTax - couponPrice).toFixed(2)}</p>
              </div>
              <p className="text-2xl">Promo Code</p>
              <div>
                <input id="couponCode" className="w-[72%] border-1 p-2 rounded-md float-left" type="text" placeholder="Enter your code" />
                <button
                  className="w-3/12 bg-black text-white rounded-md p-2 float-right"
                  onClick={() => {
                    console.log("hi from click");
                    dispatcher(applyCoupon(document.getElementById("couponCode").value));
                    setStatus("checking");
                  }}
                >
                  Apply
                </button>
              </div>
              <button
                className="p-2 bg-green-800 text-white rounded-md"
                onClick={() => {
                  dispatcher(checkOut());
                }}
              >
                Proceed to check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
