import { BellDot, Menu, MessageSquare } from 'lucide-react';
import { referenceStore } from '../../store/referenceStore';

type HeaderProtectedProps = {
  navigation?: React.ReactNode;
};

export default function HeaderProtected({ navigation }: HeaderProtectedProps) {
  const { handleSidebar, showSidebar } = referenceStore();

  return (
    <div className="sticky top-0 h-10 w-full bg-white px-5 lg:h-12 lg:px-10">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex h-full w-10/12">
          <div className="flex w-1/12 items-center lg:w-0">
            <button onClick={() => handleSidebar(!showSidebar)}>
              <Menu className="w-4 lg:hidden" />
            </button>
          </div>
          <div className="no-scrollbar h-full w-11/12 overflow-auto">
            {navigation}
          </div>
        </div>
        <div className="flex w-[2/12] items-center gap-3 border-l border-gray-400 px-2 lg:gap-5 lg:border-none">
          <BellDot className="w-4 cursor-pointer lg:w-5" />
          <MessageSquare className="w-4 cursor-pointer lg:w-5" />
        </div>
      </div>
    </div>
  );
}
