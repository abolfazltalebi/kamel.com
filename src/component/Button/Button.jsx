function Button(props) {
  return (
    <>
      <button className="text-white rounded-xl bg-blue-600 p-3 hover:bg-blue-800 transition-all">
        {props.title}
      </button>
    </>
  );
}

export default Button;
