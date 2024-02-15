import HeaderProtected from '../../components/Header/HeaderProtected';
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper';

export default function Users() {
  return (
    <>
      <HeaderProtected />
      <DashboardWrapper>
        <h1 className="text-4xl font-bold">Users</h1>
      </DashboardWrapper>
    </>
  );
}
