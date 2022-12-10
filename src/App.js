
import './App.css';
import axios from 'axios';

function App() {

  const getData=async()=>{

    //axios.defaults.baseURL = 'http://mytest.cafe24app.com';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

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
