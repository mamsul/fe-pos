import HeaderProtected from '../../components/Header/HeaderProtected';
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper';

export default function Dashboard() {
  return (
    <>
      <HeaderProtected />
      <DashboardWrapper>
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </DashboardWrapper>
    </>
  );
}
