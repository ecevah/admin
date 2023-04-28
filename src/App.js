import logo from './logosLogoLight.svg';
import './App.css';

function App() {
  return (
    <>
    <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <img src={logo} alt='logo' id='logo' width={750} height={200}></img>
      <div id='text'>Yapım Aşamında</div>
    </div>
    </>
  );
}

export default App;
