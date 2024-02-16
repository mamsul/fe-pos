type ContentTitleProps = {
  label: string;
};
export default function ContentTitle({ label }: ContentTitleProps) {
  return <h1 className="text-4xl font-bold">{label}</h1>;
}
