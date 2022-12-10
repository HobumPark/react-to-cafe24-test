
import './App.css';
import axios from 'axios';

function App() {

  const getData=async()=>{
    const result=await axios.get('/board')
    console.log(result)
  }

  return (
    <div className="App">
        <button onClick={getData}>요청</button>
    </div>
  );
}

export default App;
