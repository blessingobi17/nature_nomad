const Navbuttons = ({ buttonText, setReqType, setDropdown }) => {
  const handleClick = () => {
    setReqType(buttonText.toLowerCase());
    localStorage.setItem("reqType", buttonText.toLowerCase());
  };

  return (
    <button
      onClick={() => {
        handleClick();
        setDropdown(false);
      }}
    >
      {buttonText}
    </button>
  );
};

export default Navbuttons;
