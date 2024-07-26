import { CustomButtonProps } from "@/types";

const CustomButton = ({
  containerStyles,
  textStyles,
  title,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
    </button>
  );
}

export default CustomButton;
