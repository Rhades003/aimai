import Button from "../components/button"

function Start() {
  
    return (
      <>
        <Button text="Jugar" onClick ={() => jugar()} colorBtn="red"></Button>
        <Button text="Borrar Datos" onClick ={() => borrarDatos()} colorBtn="blue"></Button>
      </>
    )

    function jugar():void {
        location.replace("/game");
    }

    function borrarDatos():void {
        localStorage.clear;
    }
  }
  
  export default Start;