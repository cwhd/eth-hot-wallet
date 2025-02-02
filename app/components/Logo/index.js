/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';
import walletLogo from './shopr-logo-raw.svg';

const Div = styled.div`
  height: 80px;
  font-size: 18px;
  line-height: 80px; 
  color: white;
  `;

const Img = styled.img`
  height: 40px;
  line-height: 80px;
  width: 40px;
  margin-right: 10px;
  `;

function Logo() {
  return (
    <Div>
      <Img alt="logo" src={walletLogo} />
        Shopr
    </Div>
  );
}

Logo.propTypes = {

};

export default Logo;
