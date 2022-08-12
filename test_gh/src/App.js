import styled from "styled-components";

const Frame = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  display: flex;
`;

function App() {
  return (
    <Frame>
      <H1>이것은 테스트 페이지 입니다.</H1>
    </Frame>
  );
}

export default App;
