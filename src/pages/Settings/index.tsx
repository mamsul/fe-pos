import HeaderProtected from '../../components/Header/HeaderProtected';
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper';

export default function Settings() {
  return (
    <>
      <HeaderProtected />
      <DashboardWrapper>
        <h1 className="text-4xl font-bold">Settings</h1>
      </DashboardWrapper>
    </>
  );
}
