import { NavLink, Outlet } from 'react-router-dom';
import ContentTitle from '../../components/dashboard/ContentTitle';
import HeaderProtected from '../../components/sections/header/HeaderProtected';
import DashboardWrapper from '../../components/wrapper/DashboardWrapper';
import { cn } from '../../lib/utils';

const productTabs: string[] = ['Manage Product', 'Manage Category'];

type ProductProps = {
  childRoute: IRoute[];
};

export default function Product({ childRoute }: ProductProps) {
  return (
    <>
      <HeaderProtected
        navigation={
          <ul className="flex h-full w-max items-center overflow-auto">
            {childRoute.map((route) => (
              <li key={route.path} className="h-full w-max">
                <NavLink
                  to={route.path}
                  className={({ isActive }) => {
                    return cn(
                      'flex h-full items-center px-4',
                      isActive
                        ? 'bg-blue-500 font-medium text-white'
                        : 'text-gray-800',
                    );
                  }}>
                  <span className="text-xs lg:text-sm">{route.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        }
      />

      <DashboardWrapper>
        <ContentTitle label="Product" />

        <section className="mt-4 border-t border-gray-200 pt-5">
          <Outlet />
        </section>
      </DashboardWrapper>
    </>
  );
}
