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
    <div className="flex flex-col items-center gap-y-1">
      <Zoom>
        <img
          src={src}
          alt={alt}
          width={width ? `${width}%` : "100%"}
          className={className ?? ""}
        />
      </Zoom>
      <p className="mx-auto text-[#6B7280] text-[14px] font-medium">{alt}</p>
    </div>
  );
}
