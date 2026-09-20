interface ImgSlotProps {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImgSlot({ label, className, style }: ImgSlotProps) {
  return <div className={`imgslot${className ? ` ${className}` : ""}`} role="img" aria-label={label} style={style} />;
}
