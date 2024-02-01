import React from 'react'

const Button = (props) => {
    const [buttonState, setButtonState] = React.useState("loaded");
    const onClick = async () => {
      setButtonState("loading");
      await props.onClick();
      setButtonState("loaded");
    };
    return (
      <button onClick={onClick} disabled={buttonState === "loading"} className='h-[43px] bg-[#605BFF] text-white font-montserrat font-bold text-[16px] rounded-[10px]'>
        {buttonState === "loaded" ? props.children : "wait..."}
      </button>
    );
}

export default Button