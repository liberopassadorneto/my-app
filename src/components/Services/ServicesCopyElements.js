import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1400px;
  }

  @media screen and (max-width: 480px) {
    height: 1400px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 auto;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 440px;
  padding: 35px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    max-height: 400px;
  }

  @media screen and (max-width: 480px) {
    max-height: 440px;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 32px;
    margin-top: 32px;
    display: none;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const ServicesP = styled.li`
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  padding: 10px;
  border-bottom: 1px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(to right, #38ef7d, #11998e);

  &:last-child {
    border: none;
  }
`;

export const ItemList = styled.ul`
  list-style-type: none;
`;
