import { Button } from '../../../components/ui/button/Button';

export default function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="default" onClick={onClick} className="h-11 md:h-12">
      Cancel
    </Button>
  );
}
