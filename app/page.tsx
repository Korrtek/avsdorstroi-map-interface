import styles from "./page.module.scss";
import { MarkForm } from "@/components/shared/MarkForm/MarkForm";
export default function Home() {
  return (
    <div className={styles.page}>
      <MarkForm></MarkForm>
    </div>
  );
}
