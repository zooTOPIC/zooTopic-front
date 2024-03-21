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
    <>
      {/* 네비게이션 바 */}
      <div className="mt-5 ml-2 w-full">
        <ul className="flex space-x-3 justify-start">
          <li>
            <button className="text-gray-600 hover:text-gray-900">전체보기</button>
          </li>
          <li>
            <button className="text-gray-600 hover:text-gray-900">정치</button>
          </li>
          <li>
            <button className="text-gray-600 hover:text-gray-900">경제</button>
          </li>
          <li>
            <button className="text-gray-600 hover:text-gray-900">사회</button>
          </li>
          <li>
            <button className="text-gray-600 hover:text-gray-900">스포츠</button>
          </li>
          <li>
            <button className="text-gray-600 hover:text-gray-900">연예</button>
          </li>
        </ul>
      </div>
      <hr className="border-t border-gray-300 m-2 w-full" />
      {/* 뉴스 그리드 */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4">
        {/* 반응형 그리드 */}
        {newsData.length > 0 &&
          newsData.map((news, index) => (
            <News key={index} news={news} />
            ))}
      </div>
      <hr className="border-t border-gray-300 m-2 w-full" />
    </>
  );
}

export default NewsList;
