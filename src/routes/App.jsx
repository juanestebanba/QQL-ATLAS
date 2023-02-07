import { BrowserRouter, Routes, Route } from'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import CardsList from '../components/CardsList';
import CardDetail from '../components/CardDetail';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/letters" element={<CardsList />} />
          <Route exact path="/letters/:slug" element={<CardDetail />} />
          <Route exact path="/numbers" element={<CardsList />} /> 
          <Route exact path="/numbers/:slug" element={<CardDetail />} />
          <Route exact path="/objects" element={<CardsList />} />
          <Route exact path="/objects/:slug" element={<CardDetail />} />
        {/*  <Route exact path="/404" element={<NotFound />} /> */}
          <Route path ="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
