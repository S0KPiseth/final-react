const Plant = (props) => {
  function toCapitalize(name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
  }
  return (
    <div className="flex flex-col item-center justify-center w-3xs text-center bg-green-50 rounded-xl pb-5">
      <img src={props.image} className="h-40 rounded-lg" />
      <br />
      <p className="font-bold">{toCapitalize(props.plantList.common_name)}</p>
      <p className="text-gray-500">${props.price}</p>
      <div>
        <button className="p-2 bg-green-800 rounded-full text-white w-1/2">Add to cart</button>
      </div>
    </div>
  );
};
export default Plant;
