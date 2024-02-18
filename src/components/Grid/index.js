import React from "react";
import GridItem from "../GridItem";
import * as G from "./styles";

const Grid = ({ items, setItems }) => {
  const onDelete = (ID) => {
    const newArray = items.filter((transaction) => transaction.id !== ID);
    setItems(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <G.Table>
      <G.Thead>
        <G.Tr>
          <G.Th width={40}>Description</G.Th>
          <G.Th width={40}>Value</G.Th>
          <G.Th width={10} alignCenter>
            Type
          </G.Th>
          <G.Th width={10}></G.Th>
        </G.Tr>
      </G.Thead>
      <G.Tbody>
        {items?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </G.Tbody>
    </G.Table>
  );
};

export default Grid;
