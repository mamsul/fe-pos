import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import LoginPreview from './components/LoginPreview';

const AnimationContribute = () => {
  return (
    <a
      href="https://storyset.com/people"
      className="absolute bottom-5 left-5 text-xs text-gray-500"
      target="_blank"
      rel="noreferrer">
      People illustrations by Storyset
    </a>
  );
};

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="relative hidden h-full flex-col items-center justify-center bg-white md:flex md:w-1/2 lg:w-7/12">
        <LoginPreview />
        <AnimationContribute />
      </div>
      <div className="flex h-full w-full flex-col justify-center bg-blue-50 px-5 md:w-1/2 md:px-10 lg:w-5/12 xl:px-20">
        <h2 className="text-3xl font-bold lg:text-5xl">Get Started</h2>
        <span className="mt-4 text-sm text-gray-500 sm:text-base">
          Don&apos;t have acount?{' '}
          <Link to="/register" className="text-blue-500 underline">
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
