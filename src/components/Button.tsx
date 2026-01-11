type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const ConstButton = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
export function FunctionButton(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
