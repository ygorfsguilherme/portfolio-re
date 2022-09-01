import classNames from "classnames";
import styles from "./Alert.module.scss";

interface Props {
  variant: string;
  mensagem: React.ReactNode;
}

export function Alert({ variant, mensagem }: Props) {
  
  function variantAlert(){
    return styles["alert__"+ variant];
  }

  return (
    <div className={classNames(styles["alert"], variantAlert())}>{mensagem}</div>
  );
}
