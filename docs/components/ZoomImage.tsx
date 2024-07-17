import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
export default function ZoomImage({
  src,
  alt,
  width,
  className,
}: {
  src: string;
  alt: string;
  width?: number;
  className?: string;
}) {
  return (
    <Zoom
      zoomImg={{
        className: "custom-zoom-image", // Apply custom zoom image class
      }}
      zoomMargin={80}
    >
      <img
        src={src}
        alt={alt}
        width={width ? `${width}%` : "100%"}
        className={className ?? ""}
      />
    </Zoom>
  );
}
