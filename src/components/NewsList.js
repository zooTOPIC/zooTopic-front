// import React from "react"
// import News from "./News"

// function NewsList(props) {
//     return(
//         <div>
//             뉴스 리스트
//             <News />
//             <News />
//             <News />
//             <News />
//             <News />
//             <News />
//             <News />
//             <News />
//             <News />
//             <News />
//             <News />
//             <News />
//         </div>
//     )
// }

// export default NewsList

// NewsList.js
import React, { useState, useEffect } from "react";
import News from "./News";

function NewsList(props) {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  // AJAX 요청을 보내서 CSV 파일을 가져오고 처리하는 함수
  function fetchNews() {
    fetch(
      "https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/news_data.csv"
    )
      .then((response) => response.text())
      .then((data) => {
        const newsData = data
          .split("\n")
          .slice(1, 25)
          .map((row) => row.split("|")); // CSV 데이터 파싱
        setNewsData(newsData); // 뉴스 데이터 상태 업데이트
      })
      .catch((error) => {
        console.error("Failed to fetch news data", error);
      });
  }

  return (
    <div>
      뉴스 리스트
      {newsData.length > 0 && newsData.map((news, index) => (
        <News key={index} news={news} />
      ))}
    </div>
  );
}

export default NewsList;
