import "./loader.css";

const Loader = () => {
  return (
    <div className="flex p-5 gap-1 items-center">
      <div className="dot rounded-full" />
      <div className="dot rounded-full" />
      <div className="dot rounded-full" />
    </div>
  );
};
export default Loader;
