import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Logout from '../components/Logout/Logout'
import ProductDetails from '../components/ProductDetails/ProductDetails'


function RoutesLayout() {
  return (
    
    <>
        <Router>
            <Header />
            <div className="main-content"> {/* Wrap Routes in main-content */}
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/logout' element={<Logout/>} />
                <Route path='/product/:id' element={<ProductDetails/>} />
            </Routes>
            </div>
            <Footer />
        </Router>


    </>
  )
}
export default RoutesLayout