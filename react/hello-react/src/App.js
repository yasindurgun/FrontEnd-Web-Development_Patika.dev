import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

const name ="Yasin";
const isLoggedIn = false;

function App(){
  return(
    <div>
      <h1>
        { isLoggedIn && `Hello ${name}`}
      </h1>

      {!isLoggedIn && `Giriş yapmadınız.`}
      <Header />
    </div>
  );
}

export default App;
