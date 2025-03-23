require('dotenv').config({path: '../.env'});
// dotenv라는 외부 패키지를 현재 스크립트로 불러온다다. 
// dotenv는 환경 변수를 .env 파일에서 읽어와 process.env 객체에 설정해주는 역할을 하는 패키지
// .config(): 불러온 dotenv 객체의 config() 메소드를 실행한다. 
// 이 메소드는 기본적으로 현재 작업 디렉토리에 있는 .env 파일을 찾아서 그 내용을 읽어 환경 변수로 설정한다.
const express = require('express');
// require('express'): express라는 외부 패키지를 현재 스크립트로 불러온다. 
// express는 Node.js를 위한 빠르고 개방적인 간결한 웹 애플리케이션 프레임임. 
// 웹 서버를 쉽게 구축하고 라우팅, 미들웨어 등을 관리할 수 있도록 다양한 기능을 제공한다.
const imageRoutes = require('./routes/imageRoutes');
const path = require('path');
// 현재 파일 (server.js)과 같은 디렉토리 또는 
// 하위 디렉토리에 있는 routes 폴더 안의 imageRoutes.js 파일을 불러온다
// 불러온 내용은 imageRoutes라는 변수에 할당됩니다.
const app = express();
app.use(express.json());
// express 객체인 app에 json() 메소드를 사용한다.
// express(): express 함수를 호출하여 새로운 Express 애플리케이션 인스턴스를 생성하고, 
// 이 인스턴스를 app 변수에 할당함. 
// 이 app 객체를 사용하여 서버의 다양한 기능을 설정하고 관리한다.

// app.use(): Express 애플리케이션에 미들웨어를 추가하는 메소드
// express.json(): Express에서 제공하는 내장 미들웨어 함수 중 하나로, 
// 들어오는 요청의 본문(body)이 JSON 형식일 경우 이를 파싱(해석)하여 
// JavaScript 객체로 변환하고 req.body 속성에 담아준다. 
// 이를 통해 서버 측에서 클라이언트가 전송한 JSON 데이터를 쉽게 사용할 수 있다.

// 라우트 설정
app.use('/api', imageRoutes);
const PORT = process.env.PORT || 3000;
// process.env 객체에 PORT 키가 있으면 그 값을 사용하고,
// 없으면 기본값으로 3000을 사용한다.