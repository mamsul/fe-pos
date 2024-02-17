import { AlertCircle } from 'lucide-react';

export default function OfflineAlert() {
  return (
    <div className="flex h-12 w-screen items-center justify-center gap-3 bg-red-100">
      <AlertCircle className="w-5 text-yellow-600" />
      <span className="text-sm font-semibold">You are offline</span>
    </div>
  );
}
