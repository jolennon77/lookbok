import React from 'react';
import './Look.css';
import ClothingRecommendation from "./ClothingRecommendation"; // Card 컴포넌트에서 사용할 CSS 파일을 불러옵니다.

const Look = ({weather}) => {


  const temperature = 30;
  const humidity = 0;
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
          <ClothingRecommendation weather={weather} />
        </div>
      </div>
  );
}

export default Look