export const InfoIconBox = (props) => {
  const { image, text, className, h5ClassName } = props;

  return (
    <div className={`info-content info-box box1 ${className}`}>
      <img src={image} alt={image + ".svg"} />
      <h5 className={h5ClassName}>{text}</h5>
    </div>
  );
};
