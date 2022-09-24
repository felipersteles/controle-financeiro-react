
import React, {useState, useEffect} from 'react';
import {Resume, Header, Form} from './components'
import Global from './styles/global';

const App = () => {
  const data = localStorage.getItem('transactions');
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  //Função chamada para fazer algo depois do render
  useEffect(() => { 
    const amountExpense = transactionsList
      .filter((item) => item.expense) //filta os itens que são saida
      .map((transaction) => Number(transaction.amount));
    
    const amountIncome = transactionsList
      .filter((item) => !item.expense) //filta os itens que são entrada
      .map((transaction) => Number(transaction.amount));
    
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2); //soma de todas as saida
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2); //soma de todas as entradas
    
    const total = Math.abs(income - expense).toFixed(2); //arrendondando
    
    //Interpolando os valores
    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]); //tem como dependencia o transactionsList

  //função para adicionar novos itens
  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    //salvando no local storage
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
  <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <Global />
  </>)
}

export default App