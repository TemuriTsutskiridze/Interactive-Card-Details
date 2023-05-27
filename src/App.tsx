import { GlobalStyles } from "./components/Globals";

import Card from "./components/Card";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

function App() {
  const [form, setForm] = useState<boolean>(false);
  const [cardName, setCardName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expMonth, setExpMonth] = useState<string>("");
  const [expYear, setExpYear] = useState<string>("");
  const [CVC, setCVC] = useState<string>("");

  return (
    <AnimatePresence mode="wait" initial={false}>
      <GlobalStyles />
      <Card
        key={"card"}
        cardName={cardName}
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
        CVC={CVC}
      />
      {form ? (
        <Form
          key="form"
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
    </AnimatePresence>
  );
}

export default App;
