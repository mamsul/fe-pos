import ContentTitle from '../../components/dashboard/ContentTitle';
import HeaderProtected from '../../components/sections/header/HeaderProtected';
import DashboardWrapper from '../../components/wrapper/DashboardWrapper';

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
