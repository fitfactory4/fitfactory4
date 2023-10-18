export const InfoIconBox = (props) => {
  const { image, text, className } = props;

  return (
    <div className={`info-content info-box box1 ${className}`}>
      <img src={image} alt={image + ".svg"} />
      <h5 className="info-content-h5">{text}</h5>
    </div>
  );
};
