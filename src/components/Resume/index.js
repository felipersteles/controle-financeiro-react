import React from "react";
import ResumeItem from "../ResumeItem";
import * as R from "./styles";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <R.Container>
      <ResumeItem
        title="Deposit"
        Icon={FaRegArrowAltCircleUp}
        color="green"
        value={income}
      />
      <ResumeItem
        title="Withdraw"
        Icon={FaRegArrowAltCircleDown}
        color="red"
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </R.Container>
  );
};

export default Resume;
