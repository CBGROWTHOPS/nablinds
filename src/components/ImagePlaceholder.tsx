/**
 * Placeholder for images to be supplied by client.
 * Shows dimensions and description until real asset is provided.
 */
export default function ImagePlaceholder({
  width,
  height,
  description,
  className = '',
}: {
  width: number;
  height: number;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-taupe/10 flex items-center justify-center text-taupe/50 text-xs text-center p-3 ${className}`}
      style={{ aspectRatio: `${width}/${height}`, minHeight: 0 }}
      title={description}
    >
      <span>
        {description}
        <br />
        {width}×{height}px
      </span>
    </div>
  );
}
