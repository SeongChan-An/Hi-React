# React 란 ?

> React는 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리입니다. “컴포넌트”라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 돕습니다.
> 출처 : [React 공식문서 KO](https://ko.reactjs.org/tutorial/tutorial.html#what-is-react)

: React를 프레임워크라고 간혹 말하는 블로그가 있지만 라이브러리이다.

> 라이브러리란 ?  
> 라이브러리는 주로 소프트웨어를 개발할 때 컴퓨터 프로그램이 사용하는 비휘발성 자원의 모임

> 프레임워크란 ?  
> 간단한 뼈대, 골조,  
> 정해진 구조가 있어 해당 구조에 맞게 개발을 해야함

## React 특징

- Component 들로 이루어져 있다.
- Virtual DOM 을 통해 빠른 성능을 보여준다.

  - Vitual DOM ?  
    : 메모리상에 실제 돔을 복사해놓고 변경된 부분만을 실제 돔에 적용 (일부분만 렌더링)

- JSX 사용

  - Javascript를 사용하는 파일안에 HTML 문법을 사용

- SPA (Single Page Application)  
  : 웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현
  - React Router DOM 을 통해 화면 이동
    참고 : [History API](https://developer.mozilla.org/ko/docs/Web/API/History_API)
