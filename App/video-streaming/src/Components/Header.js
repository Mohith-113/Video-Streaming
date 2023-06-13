// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//       <a className="navbar-brand" href="/">Video Streaming</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav mx-auto">
//           <li className="nav-item active">
//             <a className="nav-link list_item" href="/">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link list_item" href="../Pages/Profile">Movies</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link list_item" href="/services">Series</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link list_item" href="/contact">Downloads</a>
//           </li>
//         </ul>
//         <div className="ml-auto">

//           <button className="btn btn-primary">Sign In</button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;


import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home';
import EnglishMovies from '../Pages/EnglishMovies';
import Navigation from './Navigation';
import ProfilePage from '../Pages/ProfilePage';
import SignUp from './signUp';
import PlayPage from './yasaswini/PlayPage'
import Login from '../Pages/swetha/Login'
import SignIn from '../Pages/swetha/SignIn';
import TM from '../Pages/TM';

class Header extends React.Component{
  
  render(){
    return(
      <div>

        <BrowserRouter>
           <Navigation/>
           <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/TeluguMovies' element={<TM/>} />
              <Route path='/EnglishMovies' element={<EnglishMovies/>} />
              <Route path='/ProfilePage' element={<ProfilePage/>} />
              <Route path='/PlayPage' element={<PlayPage/>} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/Login' element={<Login/>} />
              <Route path='/SignUp' element={<SignIn/>} />
              <Route path='/TeluguMovies' element={<TM/>} />


           </Routes>
        </BrowserRouter>


      </div>
          )
  }
}

export default Header