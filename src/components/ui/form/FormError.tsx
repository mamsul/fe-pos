type FormErrorProps = {
  message: string;
};

export default function FormError({ message }: FormErrorProps) {
  return <span className="text-sm text-red-400">{message}</span>;
}
