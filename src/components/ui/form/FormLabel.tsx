type FormLabelProps = {
  label: string;
  id: string;
};

export default function FormLabel({ label, id }: FormLabelProps) {
  return (
    <label className="text-sm text-gray-700" htmlFor={id}>
      {label}
    </label>
  );
}
