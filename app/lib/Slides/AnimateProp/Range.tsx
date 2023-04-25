interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function Range({
  value,
  children,
  set,
  min = -200,
  max = 200,
  step = 1,
}: InputProps) {
  return (
    <label className="w-full select-none">
      <div className="flex justify-between">
        <b>{children}</b>
        <b>{value}</b>
      </div>
      <input
        value={value}
        type="range"
        className="range range-primary range-sm"
        min={min}
        max={max}
        step={step}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
    </label>
  );
}
