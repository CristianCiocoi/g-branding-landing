import Image, { ImageProps } from "next/image";

type NonDraggableImageProps = ImageProps & {
  extraClasses?: string;
};

export const NonDraggableImage = ({
  className = "",
  extraClasses = "",
  alt = "",
  ...props
}: NonDraggableImageProps) => {
  return <Image className={`no-drag ${className} ${extraClasses}`} draggable={false} alt={alt} {...props} />;
};
