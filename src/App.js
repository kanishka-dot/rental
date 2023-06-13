import './App.css';
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/sign-in/SignIn';
import Dashboard from './pages/dashboard/Dashboard.js'
import { RequireAuth } from './auth/RequireAuth.js'
import Checkout from './pages/checkout/Checkout.js'
import Layout from './pages/layout/Layout.js'



function App() {
  return (
    <Routes>
  
      <Route path='/app/signin' element={<Signin />} />
      <Route path='/app/dashboard' element={<RequireAuth><Layout /></RequireAuth>}/>
        {/* <Route path='checkout' element={<RequireAuth><Checkout /></RequireAuth>} /> */}
      {/* </Route> */}
    </Routes>
    //  <>
    
    //   <Checkout />
    //   <Layout />
    //  </>

  );
}

export default App;
