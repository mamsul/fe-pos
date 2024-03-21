import ContentTitle from '../../components/Dashboard/ContentTitle';
import DashboardWrapper from '../../components/Dashboard/DashboardWrapper';
import HeaderProtected from '../../components/sections/header/HeaderProtected';

export default function Users() {
  return (
    <>
      <HeaderProtected />
      <DashboardWrapper>
        <ContentTitle label="Users" />
      </DashboardWrapper>
    </>
  );
}
