import React from "react";

import { Button } from "../ButtonElements";
import Emoji from "../Emoji/Emoji";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoSectionElements";

function InfoSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  isOn,
  items,
}) {
  const numbers = items;
  console.log(numbers);
  const listItems = numbers.map((number) => (
    <Subtitle darkText={darkText}>{number}</Subtitle>
  ));

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>

                <ul className="m-0 p-0">{listItems}</ul>
                <BtnWrap>
                  <a
                    href="https://wa.me/message/IEEROQ7R4KO2J1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      isOn={isOn ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  </a>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
