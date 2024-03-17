import ContentTitle from '../../components/Dashboard/ContentTitle';
import HeaderProtected from '../../components/Header/HeaderProtected';
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper';

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
