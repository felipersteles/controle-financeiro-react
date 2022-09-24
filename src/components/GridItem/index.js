
import React from "react";
import * as GI from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <GI.Tr>
      <GI.Td>{item.desc}</GI.Td>
      <GI.Td>{item.amount}</GI.Td>
      <GI.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </GI.Td>
      <GI.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </GI.Td>
    </GI.Tr>
  );
};

export default GridItem;