import { GlobalStyles } from "./components/Globals";

import Card from "./components/Card";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";
import { useState } from "react";

function App() {
  const [form, setForm] = useState<boolean>(true);
  return (
    <>
      <GlobalStyles />
      <Card />
      {form ? (
        <Form form={form} setForm={setForm} />
      ) : (
        <ThankYou form={form} setForm={setForm} />
      )}
    </>
  );
}

export default App;
