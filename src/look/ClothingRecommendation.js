import React, { useState, useEffect } from 'react';
import './ClothingRecommendation.css'
import ClothData from '../data/ClothData';

function ClothingRecommendation({ temperature, humidity, precipitation }) {
  // 기본 추천과 디테일한 옷들을 담을 상태 설정
  const [suggestion, setSuggestion] = useState('');
  const [detailSuggestions, setDetailSuggestions] = useState([]);

  useEffect(() => {
    // 기온에 따른 옷차림 추천 로직
    let basicSuggestion = '';
    if (temperature >= 35) {
      basicSuggestion = '미친 폭염입니다. 나가면 죽습니다.';
    } else if (temperature >= 28) {
      basicSuggestion = '매우 덥습니다. 오늘은 내가 노출왕';
    } else if (temperature >= 23) {
      basicSuggestion = '슬슬 덥네요. 가볍게 입어볼까요?';
    } else if (temperature >= 19) {
      basicSuggestion = '더울때도 있고 아닐때도 있고... 사바사';
    } else if (temperature >= 11) {
      basicSuggestion = '쌀쌀하네요 감기걸리기 싫으면 외투하나정돈 입자';
    } else if (temperature >= 5) {
      basicSuggestion = '나 떨고있니?? ';
    } else if (temperature >= -4) {
      basicSuggestion = '너무 추워요 내복에 패딩에 중무장을 하고 나갑시다.';
    } else {
      basicSuggestion = '미치게 춥습니다. 나가면 죽습니다';
    }

    // 습도에 따른 옷차림 추천
    if (humidity > 70) {
      basicSuggestion += '\n땀이 많이 날 수 있으니 통기성 있는 옷을 입는 것이 좋습니다.';
    }

    // 강수량에 따른 우산추천
    if (precipitation > 0) {
      basicSuggestion += '\n우산 새로 사면 돈 아깝잖아요? 하나 준비합시다';
    }

    // 기본 추천을 상태에 반영
    setSuggestion(basicSuggestion);

    // 디테일한 옷들 추천 로직
    const newDetailSuggestions = ClothData.filter(item => {
      // 온도와 계절에 맞는 아이템 필터링
      return (
          parseInt(item.temperature) >= temperature && // 기온 체크
          (item.season === '4계절' || item.season === '봄가을' || item.season === '여름' || item.season === '겨울') // 계절 체크
      );
    }).map(item => item.item);

    // 추천된 세부 옷들 상태에 반영
    setDetailSuggestions(newDetailSuggestions);
    console.log(detailSuggestions)
    console.log('옷추천')
  }, [temperature]);



  return (
      <div className="recommendation_card">
        <h2>오늘의 날씨는</h2>
        <p>{suggestion.split('\n').map(
            (line, index) => <>{index > 0 && <br/>}{line}</>)}</p>
        {detailSuggestions.map((item, index) => (
            <button key={index}>{item}</button>
        ))}

        <button>
          얇은 가디건
        </button>
      </div>
  );
}

export default ClothingRecommendation;
