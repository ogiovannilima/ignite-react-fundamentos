import styles from './Avatar.module.css'

// desestruturacao para passar um valor padrao para prop
export function Avatar({hasBorder = true, src}) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src} 
    />
  )
}