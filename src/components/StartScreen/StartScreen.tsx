type Props = {
  onClick: () => void;
};

const StartScreen = ({ onClick }: Props) => {
  return (
    <div>
      <h2></h2>
      <p>
        The job market today can feel overwhelming. Get ready for your next
        interview with this totally accurate job search simulator! Just fill out
        this simple form and prepare for the next step.
      </p>
      <button onClick={onClick}>Prepare for your next big opportunity</button>
    </div>
  );
};

export { StartScreen };
