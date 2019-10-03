import React from 'react';
import Header from 'containers/Header';
import { Content } from 'components/PageFooter/sticky';
import PageFooter from 'components/PageFooter';

const Settings = () => {
  return (
    <div>
      <Content>
        <Header />
        <div className="App-settings">
          <div className="App-header"></div>
          <p>Settings page test</p>
        </div>
      </Content>
      <PageFooter />
    </div>
            );
};

export default Settings;