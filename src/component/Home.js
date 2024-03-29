import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="hone_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Holi24/GW/Holi24_GW_PC_H1_PostHoli_1x._CB579848721_.jpg"
          alt="Amazon_banner"
        />
        <div className="home_row">
          <Product
            tittle="test SignoraWare Compact Lunch Box Set of 3 With Zipered Bag"
            price={20.2}
            rating={3}
            image="https://m.media-amazon.com/images/I/71d7rfSl0wL..jpg"
          />
          <Product
            tittle="test script for the below product"
            price={20.2}
            rating={2}
            image="https://m.media-amazon.com/images/I/618d5bS2lUL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            tittle="test Fairus SignoraWare Compact Lunch Box Set of 3 With Zipered Bag, Bpa Free Plastic"
            price={2020}
            rating={5}
            image="https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            tittle="test #2
            Corslet 8 Pcs Whiteboard Marker Dry Erase Markers Fine Point Tip, 8 Colors White Board Markers"
            price={20.2}
            rating={5}
            image="https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            tittle="amsung Galaxy M14 4G (Sapphire Blue,4GB,64GB)"
            price={20.2}
            rating={5}
            image="https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            tittle="Lenovo V15 Intel Celeron N4500 15.6 (39.62 cm) FHD (1920x1080) Antiglare "
            price={20.2}
            rating={5}
            image="https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

      

  

      
      
      </div>
    </div>
  );
}

export default Home;
