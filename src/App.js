
import './App.css';
import axios from 'axios';

function App() {

  const getData=async()=>{

    axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.get['widthCredentials'] = true
    const result=await axios.get('/proxy/board')
    console.log(result)
  }

  return (
    <div className="App">
        <button onClick={getData}>요청</button>
    </div>
  );
}

export default App;
