import React, { useState } from "react";
import Grid from "../Grid";
import * as F from "./styles";

const Form = ({handleAdd, transactionsList, setTransactionsList}) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  //criar ID alatorio para itens
  const generateID = () => Math.round(Math.random() * 1000);

  function handleSave() {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);
  
    setDesc('');
    setAmount('');
  };

  return (
    <>
      <F.Container>
        <F.InputContent>
          <F.Label>Descrição</F.Label>
          <F.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </F.InputContent>

        <F.InputContent>
          <F.Label>Valor</F.Label>
          <F.Input value={amount} onChange={(e) => setAmount(e.target.value)} />
        </F.InputContent>

        <F.RadioGroup>
          <F.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <F.Label htmlFor="rIncome">Entrada</F.Label>
          <F.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <F.Label htmlFor="rExpenses">Saída</F.Label>
        </F.RadioGroup>

        <F.Button onClick={handleSave}>Adicionar</F.Button>
      </F.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
