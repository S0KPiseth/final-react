export default function FirstTimeLoad(props) {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center">
      <p className="text-6xl text-green-800 font-bold font-sans">{props.value}%</p>
    </div>
  );
}
