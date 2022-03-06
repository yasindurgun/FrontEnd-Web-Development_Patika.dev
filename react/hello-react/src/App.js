import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';

const name ="Yasin";
const isLoggedIn = false;

function App(){
  return(
    <div>
      <User name ="Yasin" surname="Durgun" isLoggedIn={false} friends ={["Ahmet", "Tayfun", "Gökhan"]}/>
      <h1>
        { isLoggedIn && `Hello ${name}`}
      </h1>

      {!isLoggedIn && `Giriş yapmadınız.`}
      <Header/>
    </div>
  );
}

export default App;
