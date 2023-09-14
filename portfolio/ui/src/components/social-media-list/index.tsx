import Icon from "../../icons";

type SocialMedia = {
  iconName: string;
  size?: number;
  url?: string;
};

export const SocialMedia = ({ iconName, size = 24, url }: SocialMedia) => {
  return (
    <div className="w-12 h-12 border border-gray-500 flex items-center justify-center rounded-full group hover:border-primary cursor-pointer duration-200">
      <a href={url} target="_blank">
        <Icon
          name={iconName}
          className="group-hover:fill-primary duration-200 fill-gray-500"
          size={size}
        />
      </a>
    </div>
  );
};
