// import React from "react";

// function Form(props){
//     return (
//         <div>구독폼입니다</div>
//     );
// }

// export default Form;

import React from "react";

function showPrivacyModal() {
    // 모달을 보여주는 코드 작성
  }
  
  function showMarketingModal() {
    // 모달을 보여주는 코드 작성
  }
  
  function sendMessageToSQS() {
    // SQS에 메시지를 보내는 코드 작성
  }
  
  function closePrivacyModal() {
    // 모달을 닫는 코드 작성
  }
  

function Form(props) {
  return (
    <div className="container mx-auto p-5 bg-yellow-400">
      <div className="flex justify-center items-center my-5 text-white font-semibold">
        <h3 className="text-center leading-relaxed">
          세상 돌아가는 소식을 받아보고 싶지만, 신문을 볼 시간이 없어요!<br />
          월/화/수/목/금 아침마다 세상 돌아가는 소식을 이메일로 받아보세요!
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 입력 폼 */}
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
          <img
            src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/radio_penguin.png"
            alt="radio_penguin"
            className="w-full"
          />
        </div>
      </div>
      {/* 개인정보 수집·이용 모달 */}
      <div id="privacyModal" className="fixed inset-0 z-50 overflow-y-auto hidden">
        <div className="flex items-center justify-center min-h-screen">
          <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="modal-header">
                <h5 className="modal-title text-xl font-semibold">개인정보 수집·이용 동의</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closePrivacyModal}
                ></button>
              </div>
              <div className="modal-body">
                {/* 내용 */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 광고성 정보 수신 모달 */}
      <div id="marketingModal" className="fixed inset-0 z-50 overflow-y-auto hidden">
        {/* 모달 내용 */}
      </div>
      {/* 인증 메일 확인 모달 */}
      <div
        className="modal"
        id="subscriptionModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="subscriptionModalLabel"
        aria-hidden="true"
      >
        {/* 모달 내용 */}
      </div>
    </div>
  );
}

// showPrivacyModal, showMarketingModal, sendMessageToSQS, sendVerficationEmail 함수 정의

export default Form;
