import React, { useState } from "react";
import Grid from "../Grid";
import * as F from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  // generate the id for the items
  const generateID = () => Math.round(Math.random() * 1000);

  function handleSave() {
    if (!desc || !amount) {
      alert("Description or value is required!");
      return;
    } else if (amount < 1) {
      alert("The value must be positive!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  }

  return (
    <>
      <F.Container>
        <F.InputContent>
          <F.Label>Description</F.Label>
          <F.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </F.InputContent>

        <F.InputContent>
          <F.Label>Value</F.Label>
          <F.Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </F.InputContent>

        <F.RadioGroup>
          <F.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <F.Label htmlFor="rIncome">Deposit</F.Label>
          <F.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <F.Label htmlFor="rExpenses">Withdraw</F.Label>
        </F.RadioGroup>

        <F.Button onClick={handleSave}>Add</F.Button>
      </F.Container>
      <Grid items={transactionsList} setItems={setTransactionsList} />
    </>
  );
};

export default Form;
