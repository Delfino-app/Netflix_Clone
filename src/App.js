

function App() {

  const handleClick = () =>{

    console.log("Teste");
  }

  const handleClickAgain = (name) =>{

      console.log(`Clicked by ${name}`);
  }

  return (
    <div className="App">
        <h2>My Frist React App</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClickAgain('Delfino')}>Click Me Again</button>
    </div>
  );
}

export default App;
