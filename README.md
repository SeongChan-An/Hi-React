# React 시작하기

Project Lion 의 Hi, React 강의를 보며 실습하고 공부하는 저장소

## 기술스택

- React
- Clayful API
-

## Project 환경설정

- Node.js 설치
- **npx create-react-app** 을 통해 리액트 CRA 구성
- **npm install react-router-dom --save**
- React Bootstrap 사용

  - **npm install react-bootstrap bootstrap@5.1.3**
  - import 'bootstrap/dist/css/bootstrap.min.css'; 를 index.js 또는 app.js 에 추가

- Clayful 사용 ([공식문서 참고](https://www.notion.so/ac4b1c6e6d3f4364974cd93120bf2b9d))

  - **npm install clayful --save**
  - index.js 에 import : 공식문서 참고

- Axios 를 통한 요청/응답  
  : Clayful에서 plug-in 으로 사용되기 때문에 설치 필요

  - npm install axios --save

  > npx는 기존에 npm 설치 방법과는 다르게 일일이 설치, 실행, 제거를 할 필요 없이 일회성으로 원하는 패키지를 npm 레지스트리에 접근해서 실행시키고 설치하는 실행도구
  >
  > > - npx 를 통해 web-pack, babel 등의 기타 환경설정 필요없이 간편하게 react 환경을 구성할 수 있음

  > webpack 이란 ?  
  >  : 오픈 소스 자바스큷티 모듈 번들러로써 여러개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화하는 라이브러리
  >
  > > - 압축을 통한 최적화를 통해 로딩에 대한 네트워크 비용 감소 가능
  > > - 모듈 단위로 개발이 가능하여, 가독성과 유지보수에 장점이 있다.
