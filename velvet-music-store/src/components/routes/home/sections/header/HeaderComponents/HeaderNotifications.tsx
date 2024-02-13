import React from 'react';
import styled from 'styled-components';

const NotificationsContainer = styled.div`
  background-color: black;
`;

const NotifactionsText = styled.p`
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-weight: bold;
  margin-bottom: 0;
`;

const HeaderNotifications = () => {
  return (
    <NotificationsContainer>
      <NotifactionsText>
        We have a lot of DISCOUNTS on various products
      </NotifactionsText>
    </NotificationsContainer>
  );
};

export default HeaderNotifications;
