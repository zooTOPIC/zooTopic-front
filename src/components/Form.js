import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function MyComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoggedIn === 'true');
  }, []);

  const showPrivacyModal = () => {
    // 모달을 보여주는 코드 작성
  };

  const showMarketingModal = () => {
    // 모달을 보여주는 코드 작성
  };

  const sendMessageToSQS = () => {
    // SQS에 메시지를 보내는 코드 작성
  };

  return (
    <motion.div className="p-5 w-full" style={{ backgroundColor: "#F1AB00" , marginTop: "141px"}}>
      <div className="flex justify-center items-center my-5 text-white font-semibold">
        <div className="text-center leading-relaxed text-2xl">
          세상 돌아가는 소식을 받아보고 싶지만, 신문을 볼 시간이 없어요!<br />
          월/화/수/목/금 아침마다 세상 돌아가는 소식을 이메일로 받아보세요!
        </div>
      </div>
      <div className="container mx-auto">
        {isLoggedIn ? (
          // 로그인된 상태일 때의 UI
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="p-5">
              <form className="max-w-xs mx-auto">
                <div className="mb-4">
                  <input
                    type="email"
                    className="block w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:border-yellow-500 focus:outline-none"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                {/* 개인정보 수집·이용 동의 체크박스 */}
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id="flexCheckDefault"
                    className="form-checkbox h-5 w-5 text-yellow-500"
                    onClick={showPrivacyModal}
                  />
                  <label htmlFor="flexCheckDefault" className="ml-2">
                    <u>개인정보 수집·이용</u>에 동의합니다
                  </label>
                </div>
                {/* 광고성 정보 수신 동의 체크박스 */}
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id="receiveMarketingInfo"
                    className="form-checkbox h-5 w-5 text-yellow-500"
                    onClick={showMarketingModal}
                  />
                  <label htmlFor="receiveMarketingInfo" className="ml-2">
                    <u>광고성 정보 수신</u>에 동의합니다
                  </label>
                </div>
                {/* 구독하기 버튼 */}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md w-full"
                  type="button"
                  data-toggle="modal"
                  data-target="#subscriptionModal"
                  onClick={sendMessageToSQS}
                >
                  <strong>뉴스레터 무료로 구독하기</strong>
                </button>
              </form>
            </div>
            <div className="p-5">
              <form className="max-w-xs mx-auto">
                {/* 입력 폼 내용 */}
              </form>
            </div>
            
            <div className="p-5">
              <img
                src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/radio_penguin.png"
                alt="radio_penguin"
                className="w-full"
              />
            </div>
          </div>
        ) : (
          // 로그인되지 않은 상태일 때의 UI
          <div className="p-5 flex flex-col md:flex-row justify-center items-center text-red-600 font-semibold">
            <div className="col-lg-6 p-5 text-lg" style={{ minWidth: '350px', maxWidth: '500px', width: '100%', textAlign:"center" }}>이메일 구독 서비스는 로그인 후 이용 가능합니다.</div>
            <div className="col-lg-6 p-5" style={{ minWidth: '350px', maxWidth: '500px', width: '100%' }}>
              <div className="flex justify-center">
                <img
                  src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/radio_penguin.png"
                  alt="radio_penguin"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default MyComponent;
