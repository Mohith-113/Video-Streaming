import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
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
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="bio">Age:</label>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="bio">Gender:</label>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="bio">Email:</label>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="bio">Phone Number:</label>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="bio">Address:</label>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col text-center">
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
