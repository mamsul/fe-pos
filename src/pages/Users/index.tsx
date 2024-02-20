import ContentTitle from '../../components/Dashboard/ContentTitle';
import HeaderProtected from '../../components/Header/HeaderProtected';
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper';
import UserNavigation from './components/UserNavigations';

export default function Users() {
  return (
    <>
      <HeaderProtected navigation={<UserNavigation />} />
      <DashboardWrapper>
        <ContentTitle label="Users" />
      </DashboardWrapper>
    </>
  );
}
