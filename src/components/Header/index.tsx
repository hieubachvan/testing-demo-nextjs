import React from 'react'
import styled from 'styled-components';

const HeaderStyle = styled.div`
  /* Adapt the colors based on primary prop */
  padding: 20px;
  border: 1px solid #E6E6E6;
`;
const Header = () => {
  return (
    <HeaderStyle>
      header
    </HeaderStyle>
  )
}

export default Header