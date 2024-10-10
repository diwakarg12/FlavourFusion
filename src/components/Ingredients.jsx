/* eslint-disable react/prop-types */
import { useState } from 'react';

const Ingredients = ({ ingredients }) => {
  const [items, setItems] = useState(
    ingredients.map(ingredient => ({ name: ingredient, checked: false }))
  );

  const handleCheck = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  return (
    <div className="max-w-md">
      <ul className="list-none">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 my-6"
          >
            <span
              className={`w-7 h-7 border-2 rounded-full  flex items-center justify-center cursor-pointer transition-all ${
                item.checked ? 'bg-green-500 border-green-500 text-white' : 'border-gray-400'
              }`}
              onClick={() => handleCheck(index)}
            >
              {item.checked && <span>&#10003;</span>}
            </span>
            <span
              className={`font-inter text-xl leading-relaxed ${item.checked ? 'line-through text-gray-500' : 'text-black'}`}
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
