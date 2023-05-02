export default function FormInput({ title, value, changeHandler }: Props) {
  return (
    <div className="input-group input-group-sm">
      <span>{title}</span>
      <input
        className="input input-sm input-bordered"
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

interface Props {
  title: string;
  value: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
