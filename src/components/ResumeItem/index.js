
import React from 'react';

import * as RI from './styles';

function ResumeItem({ title, Icon, value }) {
  return (
    <RI.Container>
      <RI.Header>
        <RI.HeaderTitle>{title}</RI.HeaderTitle>
        <Icon />
      </RI.Header>

      <RI.Total>{value}</RI.Total>
    </RI.Container>
  )
}

export default ResumeItem

