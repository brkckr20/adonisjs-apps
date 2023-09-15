import Icon from "../../icons";

interface IProps {
  isIcon?: boolean;
}

const Button = ({ isIcon = false }: IProps) => {
  return (
    <button
      className="bg-primary text-black w-full py-3 mt-2 rounded-full border border-primary hover:bg-transparent hover:text-primary duration-200
              flex items-center justify-center gap-2 group"
    >
      {isIcon && (
        <Icon name="letter" className="group-hover:fill-primary duration-200" />
      )}
      <span>HIRE ME!</span>
    </button>
  );
};

export default Button;
