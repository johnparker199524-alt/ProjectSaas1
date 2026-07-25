
const SonProps: React.FC<{ surname: string; age: number; nation: string }> = (
  props
) => {
  return (
    <div>
      <ol>
        <li>{props.surname}</li>
        <li>{props.nation}</li>
        <li>{props.age}</li>
      </ol>
    </div>
  );
};

export default SonProps;
