import React from "react";

type UserInputProp = {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};

export default function UserInput({ setUserInput }: UserInputProp) {
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleSearch} />
    </div>
  );
}
