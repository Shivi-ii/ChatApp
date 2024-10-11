import React, {lazy} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'

//dynamic import of pages (Home, Chat, Login  etc) only when they are needed
const Home = lazy(() => import('./pages/Home'))             
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Group = lazy(() => import('./pages/Group'))

// if user is false 
let user = false;

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<ProtectRoute user={user}><Home/></ProtectRoute>}/>
    <Route path='/chat/:Chatid' element={<Chat/>}/>
    <Route path='/groups' element={<Group/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </Router>
  );
}

export default App;