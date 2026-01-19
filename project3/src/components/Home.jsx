import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pro1 from "../components/pro1/Pro1.jsx"
import Mock from "../components/mock/Mock.jsx" 
// import Pro3 from "../components/pro3/Pro3.jsx"
import Pro4 from "../components/pro4/Pro4.jsx"
import Pro5 from "../components/pro5/Pro5.jsx"
import Pro6 from "../components/pro6/Pro6.jsx"
import Pro7 from "../components/pro7/Pro7.jsx"

function Home() {
  const navigate = useNavigate();
  const [selectedProductId, setSelectedProductId] = useState("default");

  const handlePro1CategoryClick = (category, title) => {
    navigate('/optics', { 
      state: { 
        category: category, 
        title: title 
      } 
    });
  };

  const handleMockCardClick = (apiId) => {
    const productIdMapping = {
      '1': 'trail-master',      
      '2': 'freeride-elite',     
      '3': 'xc-light',          
      '4': 'luna',
      '5': 'iris',
      '6': 'muse',
      '7': 'icon',
      '8': 'rush-half',
      '9': 'rush-full',
      '10': 'charge-full',
      '11': 'rush-photochromatic',
      '12': 'hawk',
      '13': 'falcon',
      '14': 'mtb-pro',
      '15': 'road-elite',
      '16': 'trail-master',
      '17': 'urban-rider',
      '18': 'gravel-explorer',
      '19': 'alpine-pro',
      '20': 'freeride-elite',
      '21': 'slalom-race',
      '22': 'powder-master',
      '23': 'backcountry-x',
      '24': 'dh-extreme',
      '25': 'enduro-pro',
      '26': 'xc-light'
    };
    
    const productId = productIdMapping[apiId] || "default";
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <Pro1 onCategoryClick={handlePro1CategoryClick} />
      <Mock onCardClick={handleMockCardClick} /> 
      {/* <Pro3 /> */}
      <Pro4 />
      <Pro5 />
      <Pro6 />
      <Pro7 />
    </>
  );
}

export default Home;