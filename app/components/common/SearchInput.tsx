import { useNavigate } from "react-router";

interface SearchInputProps {
  placeholder: string;
  defaultValue: string;
}

export default function SearchInput({
  placeholder,
  defaultValue,
}: SearchInputProps) {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
        onChange={(e) => navigate(`/?search=${e.target.value}`)}
      />
    </div>
  );
}
