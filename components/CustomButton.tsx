
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  containerStyles,
  textStyles,
  title,
}: CustomButtonProps) => (
  <button
    className={`custom-btn ${containerStyles}`}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
  </button>
);

export default CustomButton;
