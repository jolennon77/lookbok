import React from 'react';
import './ClothingRecommendation.css';

const ClothingRecommendation = ({ temp }) => {
  const getClothingRecommendation = (temp) => {
    if (temp > 25) return "가벼운 옷차림 추천";
    if (temp > 20) return "반팔과 얇은 겉옷 추천";
    if (temp > 15) return "가벼운 겉옷 추천";
    if (temp > 10) return "얇은 스웨터와 자켓 추천";
    if (temp > 5) return "두꺼운 옷과 외투 추천";
    return "매우 추운 날씨, 따뜻한 옷차림 추천";
  };

  const getWeatherCommentary = (temp) => {
    if (temp > 30) return "지금은 매우 더운 날씨입니다.";
    if (temp > 20) return "지금은 따뜻한 날씨입니다.";
    if (temp > 10) return "지금은 선선한 날씨입니다.";
    if (temp > 0) return "지금은 추운 날씨입니다.";
    return "지금은 매우 추운 날씨입니다.";
  };

  return (
      <div className="recommendation_card">
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
            <h2>지금은 날씨는??!</h2>
            <p>{getWeatherCommentary(temp)}</p>
            <p>{getClothingRecommendation(temp)}</p>
          </div>
        </div>

      </div>
  );
};

export default ClothingRecommendation;
