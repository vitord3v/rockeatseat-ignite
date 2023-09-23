import styles from "./Avatar.module.css";

export function Avatar(props) {
  return (
    <img
      className={props.haveBorder ? styles.avatarWhitBorder : styles.avatar}
      src={props.src}
    />
  );
}
