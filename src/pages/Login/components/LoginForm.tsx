import { useState } from 'react';
import { Button } from '../../../components/Button';
import { FormInput } from '../../../components/Form/FormInput';
import { useAuth } from '../../../hooks/useAuth';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (email === 'user@gmail.com' && password === 'password') {
      await login({ email, password });
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-6">
      <FormInput
        placeholder="Type your email: user@gmail.com"
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        placeholder="Type your password: password"
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="pt-7">
        <Button type="submit" variant="highlight" className="h-14">
          Sign In
        </Button>
      </div>
    </form>
  );
}
