import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Optics from './components/optics/Optics';
import Clothing from './components/Clothing/Clothing';
import HeroesSection from './components/HeroesSection/HeroesSection';
import ArticleList from './components/ArticleList/ArticleList';
import ArticleContent from './components/ArticleContent/ArticleContent';
import ArticleContent1 from './components/ArticleContent/ArticleContent1';
import ArticleContent2 from './components/ArticleContent/ArticleContent2';
import ArticleContent3 from './components/ArticleContent/ArticleContent3';
import ArticleContent4 from './components/ArticleContent/ArticleContent4';
import ArticleContent5 from './components/ArticleContent/ArticleContent5';
import ArticleContent6 from './components/ArticleContent/ArticleContent6';
import ArticleContent7 from './components/ArticleContent/ArticleContent7';
import ArticleContent8 from './components/ArticleContent/ArticleContent8';
import ArticleContent9 from './components/ArticleContent/ArticleContent9';
import ArticleContent10 from './components/ArticleContent/ArticleContent10';
import ArticleContent11 from './components/ArticleContent/ArticleContent11';
import ArticleContent12 from './components/ArticleContent/ArticleContent12';
import ArticleContent13 from './components/ArticleContent/ArticleContent13';
import ArticleContent14 from './components/ArticleContent/ArticleContent14';
import ArticleContent15 from './components/ArticleContent/ArticleContent15';
import Products from './components/products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ForgotPassword from './components/Auth/ForgotPassword';

const ArticleContentWrapper = ({ Component }) => {
  const navigate = useNavigate();
  return <Component onBack={() => navigate('/stories')} />;
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="optics" element={<Optics />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="heroes" element={<HeroesSection />} />
          <Route path="stories" element={<ArticleList />} />
          <Route path="article/1" element={<ArticleContentWrapper Component={ArticleContent} />} />
          <Route path="article/2" element={<ArticleContentWrapper Component={ArticleContent1} />} />
          <Route path="article/3" element={<ArticleContentWrapper Component={ArticleContent2} />} />
          <Route path="article/4" element={<ArticleContentWrapper Component={ArticleContent3} />} />
          <Route path="article/5" element={<ArticleContentWrapper Component={ArticleContent4} />} />
          <Route path="article/6" element={<ArticleContentWrapper Component={ArticleContent5} />} />
          <Route path="article/7" element={<ArticleContentWrapper Component={ArticleContent6} />} />
          <Route path="article/8" element={<ArticleContentWrapper Component={ArticleContent7} />} />
          <Route path="article/9" element={<ArticleContentWrapper Component={ArticleContent8} />} />
          <Route path="article/10" element={<ArticleContentWrapper Component={ArticleContent9} />} />
          <Route path="article/11" element={<ArticleContentWrapper Component={ArticleContent10} />} />
          <Route path="article/12" element={<ArticleContentWrapper Component={ArticleContent11} />} />
          <Route path="article/13" element={<ArticleContentWrapper Component={ArticleContent12} />} />
          <Route path="article/14" element={<ArticleContentWrapper Component={ArticleContent13} />} />
          <Route path="article/15" element={<ArticleContentWrapper Component={ArticleContent14} />} />
          <Route path="article/16" element={<ArticleContentWrapper Component={ArticleContent15} />} />
          <Route path="products/:category" element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;