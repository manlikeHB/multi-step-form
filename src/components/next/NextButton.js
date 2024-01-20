const NextButton = (props) => {
  return (
    <button className="next-button" type="button">
      {props.dir}
    </button>
  );
};

export default NextButton;
