import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../Button';

type SidebarMinimizeBtnProps = {
  isMinimize: boolean;
  handleClick: () => void;
};

export default function SidebarMinimizeBtn({
  handleClick,
  isMinimize,
}: SidebarMinimizeBtnProps) {
  return (
    <Button
      className="absolute -right-4 top-10 h-8 w-8 border-none bg-gray-200"
      onClick={handleClick}>
      {isMinimize ? (
        <ChevronRight className="h-5 w-5" />
      ) : (
        <ChevronLeft className="h-5 w-5" />
      )}
    </Button>
  );
}
