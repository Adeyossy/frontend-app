import React from 'react';
import './App.css';
import List from './components/list';
import Details from './components/details';

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="offset-lg-2 col-lg-8">
          <div className="container-fluid p-0 app-body">
            <div className="row g-0 app-full-height">
              <div className="col-lg-4 col-xl-5">
                <List />
              </div>
              <div className="col-lg-8 col-xl-7 d-none d-lg-block">
                <Details />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
