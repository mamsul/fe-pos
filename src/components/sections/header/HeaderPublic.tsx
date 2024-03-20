import AppTitle from '../../AppTitle';

export default function HeaderPublic() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 h-20 bg-transparent">
      <div className="flex h-full w-full items-center px-10">
        <AppTitle />
      </div>
    </header>
  );
}
