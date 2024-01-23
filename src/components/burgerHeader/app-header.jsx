import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IconLink from '../icon-link/icon-link';

function AppHeader() {
    return (
        <header className={`${styles.header} pt-4 pb-4`}>
            <main className={styles.section}>
                <section className={styles.icons}>
                    <ul className={styles.leftHorizont}>
                        <li><IconLink href="/" icon={BurgerIcon} isActive>Конструктор</IconLink></li>
                        <li><IconLink href="/" icon={ListIcon}>Лента заказов</IconLink></li>
                    </ul>
                </section>

                <section className={styles.logo}>
                    <Logo />
                </section>

                <section className={styles.rightHorizont}>
                    <IconLink href="/" icon={ProfileIcon}>Личный кабинет</IconLink>
                </section>
            </main>
        </header>
    );
}




export default AppHeader;