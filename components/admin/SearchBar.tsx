type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="admin-search">
      <input
        type="text"
        placeholder="Buscar familia..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}