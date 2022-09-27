// import logo from './logo.svg';
import './App.css';
import './index.css';
import Allside from './Component/Allside';
import Header from './Component/Header'; 
import ResultSearch from './Component/ResultSearch'; 
import  { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import TrendingPage from './Component/TrendingPage';
import SubscriptionPage from './Component/SubscriptionPage';

function App() {
  return (
    <div className="">
   <Router>
      <Header />
       
      <Routes>
            
            <Route path="/" element={<Allside/>}/>
            <Route path="/Search" element={<ResultSearch />}/>
            <Route path="/Trending" element={<TrendingPage/>}/>
            <Route path="/Subscription" element={<SubscriptionPage/>}/>


      </Routes>
    </Router>
      </div>
  );
}

export default App;
