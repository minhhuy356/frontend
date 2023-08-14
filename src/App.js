import { useLayoutEffect, useRef, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Navigate, Outlet } from 'react-router-dom';


const App = () => {

  const header = useRef(null);

  const [heightHeader, setHeight] = useState("");

  useLayoutEffect(() => {
    setHeight(header.current.clientHeight);
  }, []);


  return (
    <div className="app-container">
      <div ref={header} className='header-container fixed w-100'>
        <Header />
      </div>
      <div className='main-container '>
        <div className='sidenav-container'>

        </div>
        <div style={{ marginTop: heightHeader + 'px' }} className='app-content '>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
