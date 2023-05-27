import styled, { css } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { motion as m } from "framer-motion";

interface IFormProps {
  setForm: React.Dispatch<React.SetStateAction<boolean>>;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setExpMonth: React.Dispatch<React.SetStateAction<string>>;
  setExpYear: React.Dispatch<React.SetStateAction<string>>;
  setCVC: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form(props: IFormProps) {
  const {
    setForm,
    setCardName,
    setCardNumber,
    setExpMonth,
    setExpYear,
    setCVC,
  } = props;
  const formik = useFormik({
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
        .transform((originalValue) => {
          if (typeof originalValue === "string") {
            return originalValue.replace(/\s/g, "");
          }
          return originalValue;
        })
        .test(
          "numeric",
          `Credit card must contain only numeric characters`,
          (value) => {
            return /^\d+$/.test(String(value));
          }
        )
        .test("length", "Card number must be 16 characters", (value) => {
          return String(value).length === 16;
        })
        .required("Card number is required"),

      expDateMonth: Yup.number()
        .min(1, "Exp month must be greater than or equal to 1")
        .max(12, "Exp month must be less than or equal to 12")
        .required("Expiration month is required"),

      expDateYear: Yup.number()
        .min(23, "Exp year must be greater than or equal to 23")
        .max(99, "Exp year must be less than or equal to 99")
        .required("Expiration year is required"),

      CVC: Yup.string()
        .required("CVC is required")
        .test("no-zero", "CVC cannot contain 0", (value) => {
          if (value) {
            return !/[0]/.test(value);
          }
          return true;
        })
        .matches(/^[1-9]{3}$/, "Invalid CVC"),
    }),

    // Submit From
    onSubmit: () => {
      setForm(false);
    },
  });
  console.log(formik.values);
  useEffect(() => {
    setCardName(formik.values.name);
  }, [formik.values.name, setCardName]);

  useEffect(() => {
    setCardNumber(formik.values.cardNumber);
  }, [formik.values.cardNumber, setCardNumber]);

  useEffect(() => {
    setExpMonth(formik.values.expDateMonth);
  }, [formik.values.expDateMonth, setExpMonth]);

  useEffect(() => {
    setExpYear(formik.values.expDateYear);
  }, [formik.values.expDateYear, setExpYear]);

  useEffect(() => {
    setCVC(formik.values.CVC);
  }, [formik.values.CVC, setCVC]);

  return (
    <FormContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={formik.handleSubmit}
    >
      <InputContainer width="100%">
        <InputContainerName htmlFor="name">
          {formik.touched.name && formik.errors.name ? (
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          ) : (
            "Cardholder Name"
          )}
        </InputContainerName>
        <Input
          placeholder="e.g. Jane Appleseed"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></Input>
      </InputContainer>
      <InputContainer width="100%">
        <InputContainerName htmlFor="cardNumber">
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <ErrorMessage>{formik.errors.cardNumber}</ErrorMessage>
          ) : (
            "Card Number"
          )}
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
          onBlur={formik.handleBlur}
        ></Input>
      </InputContainer>

      <EXP_CVC_Input_Container>
        <InputContainer width="46.5%">
          <InputContainerName htmlFor="expDate">
            {(formik.touched.expDateMonth || formik.touched.expDateYear) &&
            (formik.errors.expDateMonth || formik.errors.expDateYear) ? (
              <ErrorMessage>
                {formik.errors.expDateMonth || formik.errors.expDateYear}
              </ErrorMessage>
            ) : (
              "Exp. Date (MM/YY)"
            )}
          </InputContainerName>
          <MonthYearContainer>
            <Input
              id="expDate"
              placeholder="MM"
              name="expDateMonth"
              type="number"
              value={formik.values.expDateMonth}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                if (value.length <= 2) {
                  formik.handleChange(e);
                }
              }}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                const changedValue = value.padStart(2, "0");
                setExpMonth(changedValue);
                formik.setFieldValue("expDateMonth", changedValue);
                formik.handleBlur(e);
              }}
            ></Input>
            <Input
              id="expDate"
              placeholder="YY"
              name="expDateYear"
              maxLength={2}
              value={formik.values.expDateYear}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                if (value.length <= 2) {
                  formik.handleChange(e);
                }
              }}
              onBlur={formik.handleBlur}
            ></Input>
          </MonthYearContainer>
        </InputContainer>

        <InputContainer width="50%">
          <InputContainerName htmlFor="CVC">
            {formik.touched.CVC && formik.errors.CVC ? (
              <ErrorMessage>{formik.errors.CVC}</ErrorMessage>
            ) : (
              "CVC"
            )}
          </InputContainerName>
          <Input
            placeholder="e.g. 123"
            type="number"
            name="CVC"
            value={formik.values.CVC}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = e.target;
              if (value.length <= 3) {
                formik.handleChange(e);
              }
            }}
            onBlur={formik.handleBlur}
          ></Input>
        </InputContainer>
      </EXP_CVC_Input_Container>

      <Button type="submit">Confirm</Button>
    </FormContainer>
  );
}

const FormContainer = styled(m.form)`
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

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  line-height: 1.275em;
  letter-spacing: 2px;
  color: #ff5050;
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
