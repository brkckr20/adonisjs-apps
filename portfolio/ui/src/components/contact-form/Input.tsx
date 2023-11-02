import { FC, FormEvent } from "react";

interface IProps {
  placeHolder: string;
  className?: string;
  value: string;
  onChange: (e: any) => void;
}

const Input: FC<IProps> = ({ placeHolder, className }) => {
  return (
    <div>
      <input
        className={`w-full p-3 rounded-lg bg-transparent bg-gradient-to-r from-black/10 to-black/20 outline-none ${className}`}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
