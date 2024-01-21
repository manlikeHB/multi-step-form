const SectionNumber = (props) => {
  return (
    <div
      className="section-number"
      style={{
        backgroundColor: String(props.currentPage) === props.num && "#e58e26",
      }}
    >
      <p>{props.num}</p>
    </div>
  );
};

export default SectionNumber;
