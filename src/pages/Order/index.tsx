import HeaderProtected from '../../components/Header/HeaderProtected';
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper';

export default function Order() {
  return (
    <>
      <HeaderProtected />
      <DashboardWrapper>
        <h1 className="text-4xl font-bold">Order</h1>
      </DashboardWrapper>
    </>
  );
}
