import Spinner from '../../../components/ui/Spinner';
import { Button } from '../../../components/ui/button/Button';

export default function SubmitButton({
  isLoading,
  onClick,
  label = 'Submit',
}: {
  isLoading: boolean;
  onClick?: () => void;
  label?: string;
}) {
  return (
    <Button
      type="submit"
      variant="highlight"
      disabled={isLoading}
      onClick={onClick}
      className="h-11 md:h-12">
      {isLoading ? (
        <span className="inline-flex items-center gap-2 text-sm">
          <Spinner className="h-6 w-6" />
          Please wait...
        </span>
      ) : (
        label
      )}
    </Button>
  );
}
