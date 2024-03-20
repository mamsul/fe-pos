import { AxiosError } from 'axios';
import { AlertCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { Button } from '../../../components/ui/Button';
import { FormInput } from '../../../components/ui/form/FormInput';
import { useAuth } from '../../../hooks/useAuth';
import { signinAdmin } from '../../../services/authService';

export default function LoginForm() {
  const mutation = useMutation({ mutationFn: signinAdmin });
  const { handleAuthData } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSignin = (e: FormEvent) => {
    setError(null);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const payload = {
      email,
      password,
    } as ILogin;

    mutation.mutate(payload, {
      onSuccess(res) {
        form.reset();
        handleAuthData(res.data);
      },
      onError(err) {
        if (err instanceof AxiosError) {
          setError(err.response?.data?.message);
        } else {
          setError('Something wrong');
        }
      },
    });
  };

  return (
    <form onSubmit={handleSignin} className="flex flex-col gap-6">
      {error && (
        <div className="flex items-center rounded-lg bg-red-300 p-3 text-white">
          <AlertCircle className="me-2 h-4 w-4 " />
          <span className="text-sm">{error}!</span>
        </div>
      )}

      <FormInput
        placeholder="Type your email"
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        placeholder="Type your password"
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="pt-7">
        <Button type="submit" variant="highlight" className="h-11 md:h-14">
          Sign In
        </Button>
      </div>
    </form>
  );
}
