import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
    console.log(scroll.scrollToTop());
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">sdadadad1</FooterLink>
              <FooterLink to="/">Aaaa</FooterLink>
              <FooterLink to="/">Bbbbb</FooterLink>
              <FooterLink to="/">Bbbbb</FooterLink>
              <FooterLink to="/">Bbbbb</FooterLink>
              <FooterLink to="/">CCCCc</FooterLink>
              <FooterLink to="/">dddDd</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Teste2</FooterLinkTitle>
              <FooterLink to="/">sdadadad1</FooterLink>
              <FooterLink to="/">Aaaa</FooterLink>
              <FooterLink to="/">Bbbbb</FooterLink>
              <FooterLink to="/">CCCCc</FooterLink>
              <FooterLink to="/">dddDd</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Teste3</FooterLinkTitle>
              <FooterLink to="/">sdadadad1</FooterLink>
              <FooterLink to="/">Aaaa</FooterLink>
              <FooterLink to="/">Bbbbb</FooterLink>
              <FooterLink to="/">CCCCc</FooterLink>
              <FooterLink to="/">dddDd</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>ATeste4</FooterLinkTitle>
              <FooterLink to="/">sdadadad1</FooterLink>
              <FooterLink to="/">Aaaa</FooterLink>
              <FooterLink to="/">Bbbbb</FooterLink>
              <FooterLink to="/">CCCCc</FooterLink>
              <FooterLink to="/">dddDd</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla c {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
