import styled from "styled-components";

import IconComplete from "../assets/icons/icon-complete.svg";

import { useState, useEffect } from "react";

import { Button } from "./Form";

import { motion as m } from "framer-motion";
import Confetti from "react-confetti";

interface IFormProps {
  setForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ThankYou(props: IFormProps) {
  function handleContinue() {
    props.setForm(true);
  }

  const [pieces, setPieces] = useState(300);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <ThankYouContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CheckImage></CheckImage>
      <Thanks>THANK YOU!</Thanks>
      <ThanksTxt>We’ve added your card details</ThanksTxt>
      <Button style={{ marginTop: "4.5rem" }} onClick={handleContinue}>
        Continue
      </Button>
      <Confetti gravity={0.3} numberOfPieces={pieces} />
    </ThankYouContainer>
  );
}

const ThankYouContainer = styled(m.div)`
  width: 32.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 90em) {
    width: 38.1rem;
  }
`;

const CheckImage = styled.img`
  background: linear-gradient(163.95deg, #6348fe 4.74%, #610595 88.83%);
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-image: url(${IconComplete});
  background-position: center;
`;

const Thanks = styled.p`
  font-size: 2.8rem;
  line-height: 1.3em;
  letter-spacing: 3.42222px;
  color: #21092f;
  margin-top: 3.5rem;
`;

const ThanksTxt = styled.p`
  font-size: 1.8rem;
  line-height: 1.3em;
  color: #8f8694;
  margin-top: 1.6rem;
`;
