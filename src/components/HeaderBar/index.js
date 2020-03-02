import React from 'react';

import { Header, Logo } from './styles';

import logo from '../../assets/images/logo.svg';

export default function HeaderBar() {
  return (
    <Header>
      <Logo source={logo} />
    </Header>
  );
}
