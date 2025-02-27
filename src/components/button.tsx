

function Button({colorBtn, onClick, text}: {colorBtn:string; onClick: () => void; text:string}) {
  
    return (
      <>
        <div>
          <button
          style={{backgroundColor: colorBtn}}
          color={colorBtn}
          onClick={onClick}>
            {text}
          </button>
        </div>
      </>
    )
  }
  
  export default Button;