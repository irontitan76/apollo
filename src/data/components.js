import React, { Fragment } from 'react';

import Button from './../components/Button';

export const ButtonExamples = (
  <Fragment>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Button label='Default' />
      <Button label='Danger' color='light' fill='red' line='red' hoverColor='red' hoverFill='light' hoverLine='red' />
      <Button label='Warning' color='light' fill='yellow' line='yellow' hoverColor='yellow' hoverFill='light' hoverLine='yellow' />
      <Button label='Success' color='light' fill='green' line='green' hoverColor='green' hoverFill='light' hoverLine='green' />
      <Button label='Primary' primary />
      <Button label='Secondary' secondary />
    </div>
    <div style={{ marginTop: '2%' }}>
      Hi
    </div>
  </Fragment>
);
