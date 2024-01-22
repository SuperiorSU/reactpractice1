
import './App.css';
import { reviews } from './Components/Data';
import NavBar from './Components/NavBar';
import Spacer from './Components/Spacer';
import Testimonial from './Components/Testimonial'
// import Card from './Components/Card';
import './Components/UseEffect'


function App() {
  return(
    <div className='h-[100vh] bg-purple-100'>
      <NavBar></NavBar>
      <Spacer/>
      <div>
        <h1 className='text-center font-bold text-[48px] p-2'>Our Testimonials</h1>
      </div>
      <div className='h-[4px] w-[10%] m-auto bg-purple-400'></div>
      <br></br>
      <div>
        <Testimonial reviews = {reviews}/>
      </div>
    </div>
  )

}

export default App;
