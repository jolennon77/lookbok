import React from 'react';
import './Look.css';
import ClothingRecommendation from "./ClothingRecommendation"; // Card 컴포넌트에서 사용할 CSS 파일을 불러옵니다.

function Look() {


  const temperature = 20;
  const humidity = 60;
  const precipitation = 10;



  return (
      <div className="lookcard">
        <div className="looktools">
          <div className="lookcircle">
            <span className="red lookbox"></span>
          </div>
          <div className="lookcircle">
            <span className="yellow lookbox"></span>
          </div>
          <div className="lookcircle">
            <span className="green lookbox"></span>
          </div>
        </div>
        <div className="look__content">
          <ClothingRecommendation temperature={temperature} humidity={humidity} precipitation={precipitation} />
        </div>
      </div>
  );
}

export default Look