import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0px;
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 700px;
  }

  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* grid-template-areas: ${({ imgStart }) =>
      imgStart
        ? `'col1'
        'col2'`
        : `'col1 col1' 'col2 col2'`}; */
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* grid-template-areas: ${({ imgStart }) =>
      imgStart
        ? `'col1'
        'col2'`
        : `'col1 col1' 'col2 col2'`}; */
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 840px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    padding-bottom: 0px;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 1rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 3rem;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.li`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 24px;
  list-style-type: none;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 480px) {
    padding: 0;
    margin: 24px auto;
    font-size: 1rem;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: start;

  @media screen and (max-width: 480px) {
    margin: 24px auto;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 480px) {
    margin: auto;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
