import React, { Fragment } from 'react';

import Button from './../components/Button';

export const ButtonExamples = (
  <Fragment>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Button label='Default' style={{ marginRight: '1%' }} />
      <Button label='Danger' color='light' fill='red' line='red' hoverColor='red' hoverFill='light' hoverLine='red' style={{ marginRight: '1%' }} />
      <Button label='Warning' color='light' fill='yellow' line='yellow' hoverColor='yellow' hoverFill='light' hoverLine='yellow' style={{ marginRight: '1%' }}/>
      <Button label='Success' color='light' fill='green' line='green' hoverColor='green' hoverFill='light' hoverLine='green' style={{ marginRight: '1%' }}/>
      <Button label='Primary' primary style={{ marginRight: '1%' }} />
      <Button label='Secondary' secondary style={{ marginRight: '1%' }} />
    </div>
    <div style={{ marginTop: '2%' }}>
      Hi
    </div>
  </Fragment>
);
