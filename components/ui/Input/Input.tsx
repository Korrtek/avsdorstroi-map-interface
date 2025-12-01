import styles from './Input.module.scss'
interface Props {
    label?:string;
    placeholder?:string;
    type?: string; 
}
    // label, placeholder, type передаю как пропсы чтобы переиспользовать инпут
export const Input: React.FC<Props> = ( {label, placeholder, type}) => {

  return (
    <div className={styles.inputWrepper}>
        {label && <div className={styles.label}>{label}</div>}
        <input type={type} className={styles.input} placeholder={placeholder}/>
    </div>
  );
};