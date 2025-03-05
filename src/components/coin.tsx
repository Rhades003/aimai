

function Coin({coinName, coinImg, onClick}: {coinName:string; coinImg:string; onClick: () => void;}) {
  
    return (
      <>
        <div>
            <button onClick={onClick}>
                <img
                src={coinImg}
                alt="Img"
                height="250px"
                width="250px"
                />
                <h2>{coinName}</h2>
            </button>
        </div>
      </>
    )
  }
  
  export default Coin;