import { FC } from "react";

interface IProps {
  placeHolder: string;
}

const Textarea: FC<IProps> = ({ placeHolder }) => {
  return (
    <div>
      <textarea
        className="w-full p-3 rounded-lg bg-transparent bg-gradient-to-r from-black/10 to-black/20 outline-none"
        name=""
        cols={30}
        rows={10}
        placeholder={placeHolder}
      ></textarea>
    </div>
  );
};

export default Textarea;
