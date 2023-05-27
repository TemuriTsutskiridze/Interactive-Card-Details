import { GlobalStyles } from "./components/Globals";

import Card from "./components/Card";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";
import { useState } from "react";

function App() {
  const [form, setForm] = useState<boolean>(true);
  const [cardName, setCardName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expMonth, setExpMonth] = useState<string>("");
  const [expYear, setExpYear] = useState<string>("");
  const [CVC, setCVC] = useState<string>("");

  return (
    <>
      <GlobalStyles />
      <Card
        cardName={cardName}
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
        CVC={CVC}
      />
      {form ? (
        <Form
          setForm={setForm}
          setCardName={setCardName}
          setCardNumber={setCardNumber}
          setExpMonth={setExpMonth}
          setExpYear={setExpYear}
          setCVC={setCVC}
        />
      ) : (
        <ThankYou setForm={setForm} />
      )}
    </>
  );
}

export default App;
