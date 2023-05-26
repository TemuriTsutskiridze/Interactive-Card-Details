import styled, { css } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IFormProps {
  form: boolean;
  setForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form(props: IFormProps) {
  const formik: any = useFormik({
    // Formik Logics

    initialValues: {
      name: "",
      cardNumber: "",
      expDateMonth: "",
      expDateYear: "",
      CVC: "",
    },

    // Validate Form

    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Name must be 30 characters or less.")
        .required("Name is required"),
      cardNumber: Yup.string()
        .max(19, "Card number must be 16 characters")
        .required("Card number is required"),
      expDateMonth: Yup.string()
        .max(2, "Expiration Date(month) must be ")
        .required("Card number is required"),
    }),

    // Submit From
    onSubmit: (values: any) => {
      // Handle form submission here
      console.log(values);
    },
  });

  // function handleSubmit(event: React.FormEvent) {
  //   event?.preventDefault();
  //   props.setForm(false);
  // }

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <InputContainer width="100%">
        <InputContainerName htmlFor="name">Cardholder Name</InputContainerName>
        <Input
          placeholder="e.g. Jane Appleseed"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        ></Input>
      </InputContainer>
      <InputContainer width="100%">
        <InputContainerName htmlFor="cardNumber">
          Card Number
        </InputContainerName>
        <Input
          placeholder="e.g. 1234 5678 9123 0000"
          name="cardNumber"
          value={formik.values.cardNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            const sanitizedValue = value.replace(/\s/g, "");
            const formattedValue = sanitizedValue
              .replace(/(.{4})/g, "$1 ")
              .trim();
            formik.setFieldValue("cardNumber", formattedValue);
          }}
          maxLength={19}
        ></Input>
      </InputContainer>

      <EXP_CVC_Input_Container>
        <InputContainer width="46.5%">
          <InputContainerName htmlFor="expDateMonth expDateYear">
            Exp. Date (MM/YY)
          </InputContainerName>
          <MonthYearContainer>
            <Input
              placeholder="MM"
              name="expDateMonth"
              value={formik.values.expDateMonth}
              onChange={formik.handleChange}
            ></Input>
            <Input
              placeholder="YY"
              name="expDateYear"
              value={formik.values.expDateYear}
              onChange={formik.handleChange}
            ></Input>
          </MonthYearContainer>
        </InputContainer>

        <InputContainer width="50%">
          <InputContainerName htmlFor="CVC">CVC</InputContainerName>
          <Input
            placeholder="e.g. 123"
            type="number"
            name="CVC"
            value={formik.values.CVC}
            onChange={formik.handleChange}
          ></Input>
        </InputContainer>
      </EXP_CVC_Input_Container>

      <Button type="submit">Confirm</Button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  width: 32.7rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 90em) {
    width: 38.1rem;
    gap: 2.6rem;
  }
`;

type TInputContainerWidth = {
  width: string;
};

const InputContainer = styled.div<TInputContainerWidth>`
  ${(props) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.9rem;
    width: ${props.width};
  `}
`;

const InputContainerName = styled.label`
  font-size: 1.2rem;
  line-height: 1.275em;
  letter-spacing: 2px;
  color: #21092f;
`;

const Input = styled.input`
  width: 100%;
  height: 4.5rem;
  border: 1px solid #dfdee0;
  outline: none;
  border-radius: 8px;
  background: #ffffff;
  font-size: 1.8rem;
  line-height: 1.3em;
  color: #21092f;
  caret-color: #21092f;
  position: relative;
  padding: 1.1rem 1.6rem;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #dfdee0;
  }

  &:hover {
    border: 1px solid #21092f;
    cursor: pointer;
  }
`;

const EXP_CVC_Input_Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const MonthYearContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  width: 100%;
  height: 5.3rem;
  background: #21092f;
  border-radius: 8px;
  font-size: 1.8rem;
  line-height: 1.3em;
  color: #ffffff;
  margin-top: 0.8rem;
  border: none;
  cursor: pointer;

  @media (min-width: 90em) {
    margin-top: 1.4rem;
  }
`;

export { Button };
