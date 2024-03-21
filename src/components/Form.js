import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AWS from 'aws-sdk';


function Form() {
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
    const email = document.getElementById("email").value;
  
    // Set up AWS SDK
    AWS.config.update({
      region: "ap-northeast-2", // AWS region
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "ap-northeast-2:1be46cc2-3d14-4d13-ae3b-099579178827", // Cognito Identity Pool ID
      }),
    });
  
    // Create an SQS service object
    const sqs = new AWS.SQS();

    // Set up the parameters for the message
    const params = {
      MessageBody: email, // Use the email value as Message body
      QueueUrl: "https://sqs.ap-northeast-2.amazonaws.com/590183860160/email-sqs-ses", // Set your SQS queue URL
    };
  
    // Send the message to the SQS queue
    sqs.sendMessage(params, function (err, data) {
      if (err) {
        console.error("Error sending message to SQS", err);
      } else {
        console.log("Message sent to SQS:", data.MessageId);
        sendVerificationEmail(); // Call sendVerificationEmail function after successful SQS message sending
      }
    });
  };
  
  const sendVerificationEmail = () => {
    // page refresh
    // window.location.reload();
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
          <div className="p-5 flex flex-col md:flex-row justify-center items-center">
            <form className="col-lg-6 p-5 text-lg" style={{ minWidth: '350px', maxWidth: '500px', width: '100%', textAlign:"center" }}>
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
                onClick={sendMessageToSQS}
              >
                <strong>뉴스레터 무료로 구독하기</strong>
              </button>
            </form>
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
        ) : (
          // 로그인되지 않은 상태일 때의 UI
          <div className="p-5 flex flex-col md:flex-row justify-center items-center text-white font-semibold">
            <div className="col-lg-6 p-5 text-lg" style={{ minWidth: '350px', maxWidth: '500px', width: '100%', textAlign:"center" }}>
            💌이메일 구독 서비스를 편리하게 이용하고 싶다구요?💌<br />로그인 후 모든 재미있는 내용을 만나보세요!🌟<br />함께 놀 준비가 되셨나요? 😉
            </div>
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

export default Form;
