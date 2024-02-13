import { Link } from 'react-router-dom';

export default function HeaderPublic() {
  return (
    <header className="fixed inset-x-0 top-0 h-20 bg-transparent">
      <div className="flex h-full w-full items-center px-10">
        <Link
          to="/"
          className="rounded-lg bg-black px-4 py-2 text-2xl font-bold text-white">
          Point Of Sales.
        </Link>
      </div>
    </header>
  );
}
