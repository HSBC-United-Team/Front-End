import LogOutButton from '../atoms/LogOutButton';


function AccountActions({ onLogout }) {
  return (
    <section className="px-6 mt-28">
      <LogOutButton onClick={onLogout} />
    </section>
  );
}

export default AccountActions;
