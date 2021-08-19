import logo from './logo.svg';
import backgroundimg from './img/test_img.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> My React App </h1>
      <h2> Author: T.D. </h2>
      <img src={backgroundimg} alt = "profile-image" style={{flex: 1, resizeMode: 'cover'}}/>
    </div>
  );
}

export default App;
