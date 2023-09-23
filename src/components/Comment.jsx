import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/vitord3v.png" haveBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>VitorDevEth</strong>
              <time title dataTime="2022-05-11 08:13:30">
                Cerca de 1h atras
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash />
            </button>
          </header>
          <p>Muito Bom Devan, parabéns</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
