import { Btn } from "./button.style";

function Button(props) {
  return (
    <Btn
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </Btn>
  );
}

export default Button;
