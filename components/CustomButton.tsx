import { CustomButtonProps } from "@/types";
import Link from "next/link";

const CustomButton = ({
  containerStyles,
  textStyles,
  title,
  address,
}: CustomButtonProps) => (
  <Link href={address} className={`custom-btn ${containerStyles}`}>
    <span className={`flex-1 ${textStyles}`}>{title}</span>
  </Link>
);

export default CustomButton;
