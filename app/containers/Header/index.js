/**
 *
 * Header
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Row, Col } from 'antd';
import {
  Link,
} from 'react-router-dom'

import NetworkIndicator from 'components/NetworkIndicator';
import Logo from 'components/Logo';
import NetworkMenu from 'components/NetworkMenu';

// import { changeBalance } from 'containers/HomePage/actions';

import {
  makeSelectNetworkReady,
  makeSelectLoading,
  makeSelectError,
  makeSelectNetworkName,
  makeSelectBlockNumber,
  makeSelectAvailableNetworks,
  /* makeSelectCheckingBalanceDoneTime,
  makeSelectCheckingBalances,
  makeSelectCheckingBalancesError, */
  makeSelectCheckFaucetLoading,
  makeSelectCheckFaucetSuccess,
  makeSelectAskFaucetLoading,
  makeSelectAskFaucetSuccess,
  makeSelectAskFaucetError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { loadNetwork } from './actions';

const HeaderWrapped = styled.header`
  transition: opacity 0.5s;
  margin-bottom: 30px;
  padding: 0;
  width: 100%;
  font-size: 16px;
  background-color: #dc3545;
`;

function Header(props) {
  const {
    loading,
    error,
    networkName,
    blockNumber,
    availableNetworks,
    onLoadNetwork,
   } = props;

  const networkIndicatorProps = {
    loading,
    error,
    blockNumber,
  };

  const networkMenuProps = {
    availableNetworks,
    networkName,
    onLoadNetwork,
  };

  const HorizontalMenuList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #dc3545;
  `;

  const HorizontalMenuItem = styled.li`
    float: left;
    a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    a:hover {
      color: #111;
    }

    .active {
      color: #4CAF50;
    }
  `;

  
  return (
    <HeaderWrapped className="clearfix">
      <Row type="flex" align="middle" justify="space-between" style={{ backgroundColor: '#dc3545' }}>
        <Col sm={{ span: 6, offset: 1 }} xs={24}>
          <Logo />
        </Col>
        <Col>
          <HorizontalMenuList>
            <HorizontalMenuItem>
              <Link to="https://shopr-list.azurewebsites.net/chat">Chat</Link>              
            </HorizontalMenuItem>
            <HorizontalMenuItem>
              <Link to="https://shopr-list.azurewebsites.net">Lists</Link>
            </HorizontalMenuItem>
            <HorizontalMenuItem>
              <Link to="https://shopr-wallet.azurewebsites.net">Wallet</Link>
            </HorizontalMenuItem>
            <HorizontalMenuItem>
              <Link to="https://shopr-list.azurewebsites.net/settings">Settings</Link>
            </HorizontalMenuItem>
          </HorizontalMenuList>
        </Col>
        <Col sm={{ span: 8, offset: 2 }} xs={24}>
          <Row type="flex" align="middle" justify="center">
            <NetworkIndicator {...networkIndicatorProps} />
            <NetworkMenu {...networkMenuProps} />
          </Row>
        </Col>
      </Row >
    </HeaderWrapped >
  );
}

Header.propTypes = {
  onLoadNetwork: PropTypes.func.isRequired,
  // onCheckBalances: PropTypes.func.isRequired,

  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
  networkName: PropTypes.string,
  availableNetworks: PropTypes.object,
  blockNumber: PropTypes.number,

  /* checkingBalanceDoneTime: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  checkingBalances: PropTypes.bool,
  checkingBalancesError: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]), */
};

const mapStateToProps = createStructuredSelector({
  networkReady: makeSelectNetworkReady(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  networkName: makeSelectNetworkName(),
  availableNetworks: makeSelectAvailableNetworks(),
  blockNumber: makeSelectBlockNumber(),
  /* checkingBalanceDoneTime: makeSelectCheckingBalanceDoneTime(),
  checkingBalances: makeSelectCheckingBalances(),
  checkingBalancesError: makeSelectCheckingBalancesError(), */
  checkFaucetLoading: makeSelectCheckFaucetLoading(),
  checkFaucetSuccess: makeSelectCheckFaucetSuccess(),
  askFaucetLoading: makeSelectAskFaucetLoading(),
  askFaucetSuccess: makeSelectAskFaucetSuccess(),
  askFaucetError: makeSelectAskFaucetError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadNetwork: (name) => {
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadNetwork(name));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'header', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Header);
