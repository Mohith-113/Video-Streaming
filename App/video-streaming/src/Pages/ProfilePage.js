// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ProfilePage = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title">Profile</h2>
//               <hr />
//               <div className="row">
//                 <div className="col">
//                   <label htmlFor="name">Name:</label>
//                 </div>
//               </div>
//               <div className="row mt-3">
//                 <div className="col">
//                   <label htmlFor="bio">Username:</label>
//                 </div>
//               </div>
//               <div className="row mt-3">
//                 <div className="col">
//                   <label htmlFor="bio">Email:</label>
//                 </div>
//               </div>
//               <div className="row mt-3">
//                 <div className="col">
//                   <label htmlFor="bio">password:</label>
//                 </div>
//               </div>
//               <div className="row mt-3">
//                 <div className="col text-center">
//                   <button className="btn btn-primary">Save</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProfilePage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // Handle save logic here
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Profile</h2>
              <hr />
              <div className="row">
                <div className="col">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="bio">Username:</label>
                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="bio">Email:</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="bio">Password:</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col text-center">
                  <button className="btn btn-primary" onClick={handleSave}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
