import React from 'react';
import './NewUserPage.scss';
import StaffForm from '../../components/StaffForm/StaffForm';

import { StaffContextProvider } from '../../context/StaffContext';

const NewUserPage = () => {
  return (
    <StaffContextProvider>
      <StaffForm />
    </StaffContextProvider>
  );
};

export default NewUserPage;
