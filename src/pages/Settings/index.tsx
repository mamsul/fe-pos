import { useState } from 'react';
import ContentTitle from '../../components/ContentTitle';
import TabNavigation from '../../components/Dashboard/TabNavigation';
import DashboardWrapper from '../../components/DashboardWrapper';
import HeaderProtected from '../../components/sections/header/HeaderProtected';
import Modules from './Modules';
import RoleModules from './RoleModules';

export default function Settings() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Modules', content: <Modules /> },
    { label: 'Role Modules', content: <RoleModules /> },
  ];

  return (
    <>
      <HeaderProtected
        navigation={
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        }
      />

      <DashboardWrapper>
        <ContentTitle label="Settings" />

        <section className="pt-8">{tabs[activeTab].content}</section>
      </DashboardWrapper>
    </>
  );
}
