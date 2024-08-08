import { Outlet } from 'react-router-dom';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FetchItems from '../components/FetchItems';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner';

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer></Footer>
    </>
  );
}

export default App;
