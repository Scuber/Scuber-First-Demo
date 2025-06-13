import styles from './input.module.css';

export default function Input({placeholder, onChange}:{placeholder: string, onChange: (e: any) => void}) {
    return (
        <div className={styles.container}>
            <input onChange={onChange} placeholder={placeholder} />
        </div>
    )
}