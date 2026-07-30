type GuestCounterProps = {
  value: number;
  max: number;
  onChange: (value: number) => void;
};

export default function GuestCounter({
  value,
  max,
  onChange,
}: GuestCounterProps) {
  return (
    <div className="guest-counter">

      <button
        type="button"
        className="guest-counter-button"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        −
      </button>

      <span className="guest-counter-value">
        {value}
      </span>

      <button
        type="button"
        className="guest-counter-button"
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        +
      </button>

    </div>
  );
}