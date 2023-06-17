import React from 'react'
<<<<<<< Updated upstream
import Header from './Components/Header'
import './App.css'
import Footer from './Components/Footer'
// import Slider from './Components/Slider'
=======
import Page2 from './Components/Page2'
// import Block1 from './Components/Block1'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Episodes from './Components/Episode.js'
import Slider from './Components/Slider'


>>>>>>> Stashed changes

export default function App() {
  return (
    <div>
<<<<<<< Updated upstream
      <Header/>
      <Footer/>
=======
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Block1/>}/>
          <Route path="/" element={<Page2/>}/>
          <Route path="/episodes" element={<Episodes/>}/> */}
          <Route path="/" element={<Slider/>}/>
        </Routes>
      </BrowserRouter>
>>>>>>> Stashed changes
    </div>
  )
}


<<<<<<< Updated upstream
// import React from 'react'
// import Page2 from './Components/yasaswini/Page2'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           {/* <Route path="/" element={<Block1/>}/> */}
//           <Route path="/" element={<Page2/>}/>

//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }


// export default App
=======
export default App
>>>>>>> Stashed changes
