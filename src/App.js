import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import Loading from './Pages/Loading/Loading';
import { useSelector } from 'react-redux';
import FilmCard from './Components/FilmCard';
import FilmList from './Components/FilmList';
import AddFilm from './Pages/Add_Film/AddFilm';
import Edit from './Pages/Edit_Profile/Edit';

function App() {
  const loadUser=useSelector(state=>state.UserReducer.loadUser)
  const isAuth=useSelector(state=>state.UserReducer.isAuth)
  const loadFilm=useSelector(state=>state.FilmReducer.loadFilm)
  console.log(isAuth)
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/AddFilm' element={<AddFilm />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/EditProfile/:id' element={<Edit />} />
        <Route path='/films' element={loadFilm?<Loading/>:<FilmList />} />
        {isAuth?<Route path='/Profile' element={loadUser?<Loading />:<Profile />} />:<Route path='/Login' element={<Login />} />}
        </Routes>
      
    </div>
  );
}

export default App;
