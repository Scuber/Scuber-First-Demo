import styles from './button.module.css';

export default function Button({label, onClick, style}:{label: string, onClick: () => void, style?: object}) {
    return(
        <div style={style} className={styles.container} onClick={onClick}>
            {label}
        </div>
    )
}