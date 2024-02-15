import { LogOutIcon } from 'lucide-react';

type SidebarMinimizeBtnProps = {
  isMinimize: boolean;
  handleClick: () => void;
};

export default function SidebarSignoutBtn({
  isMinimize,
  handleClick,
}: SidebarMinimizeBtnProps) {
  return (
    <button
      className="absolute inset-x-5 bottom-5 flex items-center justify-center rounded-lg bg-red-50 p-3"
      onClick={handleClick}>
      <span className="inline-flex items-center text-red-700">
        <LogOutIcon className={`h-4 w-4 ${isMinimize ? 'me-0' : 'me-2'}`} />{' '}
        {!isMinimize && 'Sign Out'}
      </span>
    </button>
  );
}
