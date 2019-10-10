/**
*
* PageFooter
*
*/

import React from 'react';
import { StickyFooter } from './sticky';

const Footer = StickyFooter.extend`
  textAlign: center;
  background: #efeeee;
  color: #5a5a5a;
  padding: 10px;
  font-size: 14px;
`;

function PageFooter() {
  return (
    <Footer>
        &copy; 2019 Shopr
    </Footer>
  );
}

PageFooter.propTypes = {

};

export default PageFooter;
