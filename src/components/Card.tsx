import styled from "styled-components";

import BgMainMobile from "../assets/images/bg-main-mobile.png";
import BgCardBack from "../assets/images/bg-card-back.png";
import BgCardFront from "../assets/images/bg-card-front.png";
import CardLogo from "../assets/icons/card-logo.svg";

export default function Card() {
  return (
    <Background>
      <CardContainer>
        <CardBack>
          <CVC>000</CVC>
        </CardBack>
        <CardFront>
          <CardFrontIcon src={CardLogo}></CardFrontIcon>
          <CardNumber>0000 0000 0000 0000</CardNumber>
          <NameAndExp>
            <Name>JANE APPLESEED</Name>
            <Exp>00/00</Exp>
          </NameAndExp>
        </CardFront>
      </CardContainer>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 24rem;
  background-image: url(${BgMainMobile});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  @media (min-width: 90em) {
    width: 48.3rem;
    min-height: 100vh;
    height: max-content;
    align-items: center;
  }
`;

const CardContainer = styled.div`
  width: 34.2rem;
  position: absolute;

  @media (min-width: 90rem) {
    left: 16.4rem;
    height: 52.7rem;
  }
`;

const CardBack = styled.div`
  background-image: url(${BgCardBack});
  background-repeat: no-repeat;
  background-size: cover;
  width: 28.6rem;
  height: 15.7rem;
  position: absolute;
  top: 3.2rem;
  right: 1.6rem;
  padding: 7.1rem 3.7rem 0 22.9rem;
  border-radius: 6px;
  color: #ffffff;

  @media (min-width: 90em) {
    width: 44.7rem;
    height: 24.5rem;
    top: 28.2rem;
    left: 9.4rem;
    padding: 11.1rem 5.7rem 11.6rem 35.8rem;
  }
`;

const CVC = styled.p`
  font-size: 0.9rem;
  line-height: 1.3em;
  letter-spacing: 1.28571px;

  @media (min-width: 90em) {
    font-size: 1.4rem;
  }
`;

const CardFront = styled.div`
  width: 28.5rem;
  height: 15.6rem;
  background-image: url(${BgCardFront});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 12.6rem;
  left: 0;
  padding: 1.76rem 2.1rem 2.1rem 1.9rem;
  display: flex;
  flex-direction: column;
  color: #ffffff;

  @media (min-width: 90em) {
    width: 44.7rem;
    height: 24.5rem;
    top: 0;
    padding: 2.8rem 3.2rem 2.65rem;
  }
`;

const CardFrontIcon = styled.img`
  width: 5.4rem;
  height: 3rem;

  @media (min-width: 90em) {
    width: 8.4rem;
    height: 4.7rem;
  }
`;

const CardNumber = styled.h1`
  font-size: 1.8rem;
  line-height: 1.3em;
  letter-spacing: 2.2px;
  margin-top: 2.7rem;

  @media (min-width: 90em) {
    font-size: 2.8rem;
    margin-top: 6.4rem;
  }
`;

const NameAndExp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  line-height: 1.3em;
  letter-spacing: 1.28571px;
  margin-top: 2.7rem;

  @media (min-width: 90em) {
    margin-top: 2.55rem;
    font-size: 1.4rem;
  }
`;

const Name = styled.p``;

const Exp = styled.p``;
