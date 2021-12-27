import "../styles/App.css";

function App() {
  const handleButtom = (ev) => {
    ev.preventDefault();
    console.log("Me han presionado");
  };
  const handleInput = (ev) => {
    ev.preventDefault();
    console.log(ev.target.value);
  };
  return (
    <div classNameName="App">
      <button onClick={handleButtom} classNameName="header__buttom">
        Púlsame
      </button>
      <form onChange={handleInput}>
        <input type="text" />
        <label>Pon tu nombre</label>
      </form>
    </div>
  );
}

export default App;
