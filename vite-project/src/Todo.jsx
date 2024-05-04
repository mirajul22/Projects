import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import "./Todo.css";

const Todo = () => {
  const [InputList, setInputList] = useState();
  const [items, setItems] = useState([]);
  const [line, setLine] = useState(false);

  const Add = () => {
    if (!InputList) {
      alert("Enter Your Task First");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: InputList,
      };
      setItems([...items, myNewInputData]);
      setInputList("");
    }
  };
  const Click = () => {
    setLine(!line);
  };
  const Remove = () => {
    const filterdItem = items.filter((arr, val) => val.id != items.id);
    setItems(filterdItem);
  };
  const RemoveAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={InputList}
          onChange={(event) => setInputList(event.target.value)}
        />
        <button onClick={Add}>+</button>
        <button>
          <FaTrash onClick={RemoveAll} />
        </button>
        <ol>
          {items.map((data) => {
            return (
              <div key={data.id}>
                <li
                  onClick={Click}
                  style={
                    line
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }>
                  <AiFillCloseCircle onClick={Remove} />
                  {data.name}
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Todo;
