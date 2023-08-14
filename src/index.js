import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage'
import ManageQuiz from './components/Admin/Content/Features/ManageQuiz';
import ManageUser from './components/Admin/Content/Features/ManageUser';
import ManageAnswer from './components/Admin/Content/Features/ManageAnswer';
import DashBoard from './components/Admin/Content/DashBoard';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='user' element={<User />} />
        </Route>
        <Route path='admin' element={<Admin />} >
          <Route index element={<DashBoard />} />
          <Route path='manage-user' element={<ManageUser />} />
          <Route path='manage-quiz' element={<ManageQuiz />} />
          <Route path='manage-answer' element={<ManageAnswer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
