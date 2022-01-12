# Context 사용

## 1. Context 생성

react 제공 createContext 함수 사용

```jsx
const AuthContext = createContext();
```

## 2. Provider 생성

> Context는 Provider 안에서 사용가능하기 때문에

```jsx
<AuthContext.Provider value = { } >
    <App/>
  </AuthContext.Provider>
```

## 3. Provider 함수 생성

> 복잡한 로직을 구현하기 위해서 함수를 생성한다

- ### 함수 생성 후 Provider 리턴

```jsx
const AuthContextProvider = ({ children }) => {
  return (
    <AuthCOntext.Provider value = { value }>
      { children }
    </AuthContext.Provider>
  )
}
```

- #### Value 넣을 데이터를 만들어주기
  - ##### 필요한 데이터 형식
  - ##### 데이터를 업데이트 해주는 함수
  - ##### 로그아웃 시 업데이트 (변경되어야 할 경우 확인)

## 4. 생성한 함수로 Context를 사용할 컴포넌트를 감싸준다.

```jsx
// 예시
function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Routes path="/" element={<LandingPage />} />
        /* 중략 */
      </Routes>
    </AuthContextProvider>
  );
}
```

## 5. 컴포넌트에서 Context 사용하기
