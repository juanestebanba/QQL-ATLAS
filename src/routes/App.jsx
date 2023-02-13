import { BrowserRouter, Routes, Route } from'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import CardsList from '../components/CardsList';
import CardDetail from '../components/CardDetail';
import Letters from '../pages/Letters';
import Numbers from '../pages/Numbers';
import Objects from '../pages/Objects';
import ImageDetail from '../pages/ImageDetail';
import AppContext from '../context/AppContext';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/letters" element={<Letters />} />
          <Route exact path="/letters/:slug" element={<ImageDetail />} />
          <Route exact path="/numbers" element={<Numbers />} /> 
          <Route exact path="/numbers/:slug" element={<ImageDetail />} />
          <Route exact path="/objects" element={<Objects />} />
          <Route exact path="/objects/:slug" element={<ImageDetail />} />
        {/*  <Route exact path="/404" element={<NotFound />} /> */}
          <Route path ="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
