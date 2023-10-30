import { FC } from "react";

interface IProps {
  placeHolder: string;
}

const Input: FC<IProps> = ({ placeHolder }) => {
  return (
    <div>
      <input
        className="w-full p-3 rounded-lg bg-transparent bg-gradient-to-r from-black/10 to-black/20 outline-none"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
