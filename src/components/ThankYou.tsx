import styled from "styled-components";

import IconComplete from "../assets/icons/icon-complete.svg";

import { Button } from "./Form";

interface IFormProps {
  form: boolean;
  setForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ThankYou(props: IFormProps) {
  function handleContinue() {
    props.setForm(true);
  }

  return (
    <ThankYouContainer>
      <CheckImage></CheckImage>
      <Thanks>THANK YOU!</Thanks>
      <ThanksTxt>We’ve added your card details</ThanksTxt>
      <Button style={{ marginTop: "4.5rem" }} onClick={handleContinue}>
        Continue
      </Button>
    </ThankYouContainer>
  );
}

const ThankYouContainer = styled.div`
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
