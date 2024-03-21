import ContentTitle from '../../components/ContentTitle';
import DashboardWrapper from '../../components/DashboardWrapper';
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
