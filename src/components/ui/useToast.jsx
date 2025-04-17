import { addToast } from "@heroui/toast";

export const useToast = () => {
  const showToast = ({ title, description, color = "default" }) => {
    addToast({
      title,
      description,
      color,
    });
  };

  return { showToast };
};