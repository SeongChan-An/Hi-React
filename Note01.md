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

### React Router

[Refer](https://reactrouter.com/docs/en/v6/getting-started/tutorial)

### React Context

> 로그인 상태를 기억하고 사용하기 위해 Context 사용  
> Component에 정보를 제공하고 해당 정보를 업데이트하거나 지워줄 때 사용
>
> > [참고설명](./Note01_Context.md)

[공식문서](https://ko.reactjs.org/docs/context.html#when-to-use-context)  
: context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있습니다.

### React UseState

> 컴포넌트 내에서 변하는 데이터를 관리하고 싶을 때
> import React, { useState } from 'react';
> const [state, setstate] = useState(initialState)
