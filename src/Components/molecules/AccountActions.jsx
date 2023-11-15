
import React from 'react';
import LogoutButton from '../atoms/LogoutButton';

function AccountActions({ onLogout }) {
  return (
    <section className="px-6 mt-28">
      <LogoutButton onClick={onLogout} />
    </section>
  );
}

export default AccountActions;
