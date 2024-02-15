import { BellDot, MessageSquare } from 'lucide-react';

type HeaderProtectedProps = {
  navigation?: React.ReactNode;
};

export default function HeaderProtected({ navigation }: HeaderProtectedProps) {
  return (
    <div className="sticky top-0 h-12 w-full bg-white px-10">
      <div className="flex h-full w-full items-center justify-between">
        <div className="h-full w-max">{navigation}</div>
        <div className="flex items-center gap-5">
          <BellDot />
          <MessageSquare />
        </div>
      </div>
    </div>
  );
}
