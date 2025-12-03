import styles from './Input.module.scss'

interface Props {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string // Добавили label
  error?: string
  type?: string
  
}
// передаю как пропсы чтобы переиспользовать инпут
export const Input: React.FC<Props> = ({
  placeholder,
  type,
  value,
  onChange,
  label,
  error
}) => {
  return (
                <div className={`${styles.inputWrapper} ${error? styles.hasError : ''}`}>
       <div className={styles.labelContainer}>
        {label && <div className={styles.label}>{label}</div>}
        {error && <div className={styles.error}>{error}</div>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}