import React from "react";

import * as RI from "./styles";

function ResumeItem({ title, Icon, value, color }) {
  return (
    <RI.Container>
      <RI.Header>
        <RI.HeaderTitle>{title}</RI.HeaderTitle>
        <Icon color={color} />
      </RI.Header>

      <RI.Total>{value}</RI.Total>
    </RI.Container>
  );
}

export default ResumeItem;
