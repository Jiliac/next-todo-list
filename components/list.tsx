import { FC } from "react";

interface ListProps {
  list: Array<string>;
  onDelete: (index: number) => void;
}

const List: FC<ListProps> = ({ list, onDelete }) => {
  return (
    <ul style={{ maxWidth: "600px" }}>
      {list.map((item, index) => (
        <div className="row my-3" key={item}>
          <div className="col">
            <li>{item}</li>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-secondary"
              onClick={() => onDelete(index)}
            >
              Done
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export { List };
