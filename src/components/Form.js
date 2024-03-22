import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AWS from 'aws-sdk';


function Form() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const toggleModal = (content) => {
    setModalContent(content);
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoggedIn === 'true');
  }, []);

  const sendMessageToSQS = () => {
    const email = document.getElementById("email").value;
  
    // AWS SDK 설정
    AWS.config.update({
      region: "ap-northeast-2", // AWS 리전
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "ap-northeast-2:1be46cc2-3d14-4d13-ae3b-099579178827", // Cognito Identity Pool ID
      }),
    });
  
    // SQS 서비스 객체 생성
    const sqs = new AWS.SQS();

    const params = {
      MessageBody: email, 
      QueueUrl: "https://sqs.ap-northeast-2.amazonaws.com/590183860160/email-sqs-ses", // SQS queue URL
    };
  
    // SQS queue로 메시지 전송
    sqs.sendMessage(params, function (err, data) {
      if (err) {
        console.error("Error sending message to SQS", err);
      } else {
        console.log("Message sent to SQS:", data.MessageId);
        sendVerificationEmail(); 
      }
    });
  };
  
  // SQS 전송 후 refresh
  const sendVerificationEmail = () => {
    window.location.reload();
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
          <div className="p-5 flex flex-col md:flex-row justify-center items-center">
            <form className="col-lg-6 p-5 text-lg" style={{ minWidth: '350px', maxWidth: '520px', width: '100%', textAlign:"center" }}>
              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:border-yellow-500 focus:outline-none"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="flex items-center mb-3">
                <input
                  type="checkbox"
                  id="flexCheckDefault"
                  className="form-checkbox h-5 w-5 text-yellow-500"
                  onClick={() => toggleModal("personalInfo")} // 개인정보 모달 열기
                />
                <label htmlFor="flexCheckDefault" className="ml-2">
                  <u>개인정보 수집·이용</u>에 동의합니다
                </label>
              </div>
              <div className="flex items-center mb-3">
                <input
                  type="checkbox"
                  id="receiveMarketingInfo"
                  className="form-checkbox h-5 w-5 text-yellow-500"
                  onClick={() => toggleModal("marketingInfo")} // 광고성 정보 모달 열기
                />
                <label htmlFor="receiveMarketingInfo" className="ml-2">
                  <u>광고성 정보 수신</u>에 동의합니다
                </label>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md w-full"
                type="button"
                onClick={sendMessageToSQS}
              >
                <strong>뉴스레터 무료로 구독하기</strong>
              </button>
            </form>
            <div className="col-lg-6 p-5" style={{ minWidth: '350px', maxWidth: '520px', width: '100%' }}>
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
          <div className="p-5 flex flex-col md:flex-row justify-center items-center text-white font-semibold">
            <div className="col-lg-6 p-5 text-lg" style={{ minWidth: '350px', maxWidth: '520px', width: '100%', textAlign:"center" }}>
              💌이메일 구독 서비스를 편리하게 이용하고 싶다구요?💌<br />로그인 후 모든 재미있는 내용을 만나보세요!🌟<br />함께 놀 준비가 되셨나요?😉
            </div>
            <div className="col-lg-6 p-5" style={{ minWidth: '350px', maxWidth: '520px', width: '100%' }}>
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
  
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center" style={{zIndex: 1001}}>
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white p-8 rounded-md shadow-md" style={{width: '400px'}}>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => toggleModal("")}
            >
              닫기
            </button>
            {modalContent === "personalInfo" && (
              <div style={{margin:'10px'}}>
                (주)주토픽은 귀하의 개인 정보 보호를 존중하며, 귀하의
                개인 정보를 보호하기 위해 최선을 다하고 있습니다. 이메일
                주소는 회사와의 소식, 업데이트, 행사 및 프로모션과
                관련된 정보를 받기 위한 용도로 사용될 수 있습니다.<br />
                동의를 선택함으로써 귀하는 회사가 귀하의 이메일 주소를
                위와 같은 목적으로 사용하는 데 동의하게 됩니다. 회사는
                귀하의 개인 정보를 안전하게 보호하며, 제3자에게 귀하의
                정보를 전달하지 않습니다. 귀하는 언제든지 이메일 수신을
                거부할 수 있으며, 이메일 내의 링크를 통해 구독을 취소할
                수 있습니다.<br />
                귀하의 이메일 수집 동의에 대한 문의 사항이 있으시면 아래
                연락처로 문의하십시오:<br />
                [회사명 및 연락처] (주)주토픽 02-3667-7304~5
              </div>
            )}
            {modalContent === "marketingInfo" && (
              <div>
                (주)주토픽은 귀하의 이메일 주소를 사용하여 회사의 제품,
                서비스, 행사, 특가 및 프로모션에 관한 정보를 제공할 수
                있습니다.<br />
                동의를 선택함으로써 귀하는 회사가 귀하의 이메일 주소를
                광고 및 마케팅 목적으로 사용하는 데 동의하게 됩니다.
                회사는 귀하의 개인 정보를 안전하게 보호하며, 제3자에게
                귀하의 정보를 전달하지 않습니다. 귀하는 언제든지 광고성
                메시지를 거부할 수 있으며, 이메일 내의 링크를 통해
                구독을 취소할 수 있습니다.<br />
                광고성 수신 동의에 대한 문의 사항이 있으시면 아래
                연락처로 문의하십시오:<br />
                [회사명 및 연락처] (주)주토픽 02-3667-7304~5
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
  
}

export default Form;
