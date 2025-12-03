import styles from "./ClearMarksButton.module.scss"

interface Props {
  onClick?: () => void
}

export const ClearMarksButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.clearMarksButton} onClick={onClick}>
      Удалить все метки
    </div>
  );
};