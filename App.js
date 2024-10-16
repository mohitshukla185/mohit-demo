
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';



function App() {
  return (
    <>
      
      {/* <Navbar title="TextUtils" aboutText="About Textutils" /> */}
      <Navbar title="TextUtils"/>
      <div className="container">
      <Textform heading="Enter the text"/>
      </div>
    </>




  );
}

export default App;
