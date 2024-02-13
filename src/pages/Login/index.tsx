import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import LoginPreview from './components/LoginPreview';

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex h-full w-7/12 flex-col items-center justify-center bg-white">
        <LoginPreview />
      </div>
      <div className="flex h-full w-5/12 flex-col justify-center bg-blue-50 px-20">
        <h2 className="text-5xl font-bold">Get Started</h2>
        <span className="mt-4 text-gray-500">
          Don&apos;t have acount?{' '}
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
        </span>

        <div className="mt-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
