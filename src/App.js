
import './App.css';
import axios from 'axios';

function App() {

  const getData=async()=>{

    const PROXY = window.location.hostname === 'localhost' ? '' : 'http://mytest.cafe24app.com';
    const URL = `${PROXY}/board`;

    const result=await axios.get(URL,{ validateStatus: false })
    console.log(result)
  }

  return (
    <div className="App">
        <button onClick={getData}>요청</button>
    </div>
  );
}

export default App;
