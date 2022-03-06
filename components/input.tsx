import { FC, useState } from "react";

interface InputProps {
  onAdd: (item: string) => void;
}

const Input: FC<InputProps> = ({ onAdd }) => {
  const [item, setItem] = useState<string>("");

  return (
    <div className="row" style={{ maxWidth: "600px" }}>
      <div className="col">
        <input
          type="text"
          className="form-control"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="col">
        <button
          className="btn btn-primary px-4"
          onClick={() => {
            setItem("");
            onAdd(item);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export { Input };
