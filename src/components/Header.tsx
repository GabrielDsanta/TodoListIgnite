
import styles from './Header.module.css'
import HeaderLogo from '../assets/todo.svg'
import RocketLogo from '../assets/rocket.svg'

export function Header(){
    return(
        <header className={styles.HeaderStyles}>
            <span><img src={RocketLogo} alt="Logo De Foguete" /></span>
            <img src={HeaderLogo} alt="Logo E Titulo Todo List" />
        </header>
    )
}