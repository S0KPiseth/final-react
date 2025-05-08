const Plant = (props) => {
  function toCapitalize(name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
  }
  return (
    <div className="flex flex-col item-center justify-center w-3xs text-center">
      <img src={props.image} className="h-40 rounded-lg" />
      <p>{toCapitalize(props.plantList.common_name)}</p>
      <p>${props.price}</p>
      <button className="p-2 bg-green-800 rounded-full text-white">Add to cart</button>
    </div>
  );
};
export default Plant;
