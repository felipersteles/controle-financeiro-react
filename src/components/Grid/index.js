
import React from "react";
import GridItem from "../GridItem";
import * as G from "./styles";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <G.Table>
      <G.Thead>
        <G.Tr>
          <G.Th width={40}>Descrição</G.Th>
          <G.Th width={40}>Valor</G.Th>
          <G.Th width={10} alignCenter>
            Tipo
          </G.Th>
          <G.Th width={10}></G.Th>
        </G.Tr>
      </G.Thead>
      <G.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </G.Tbody>
    </G.Table>
  );
};

export default Grid;