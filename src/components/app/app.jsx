import styles from './app.module.css';
import { data } from '../../utils/data';
import AppHeader from '../burgerHeader/app-header';
import BurgerIngredients from '../burgerIngredients/burger-ingredients';
import BurgerConstructor from '../burgerConstructor/burger-constructor';


function App() {
    return (
        <>
            <AppHeader />
            <section className={styles.burger}>
                <div className={styles.section}>
                    <BurgerIngredients data={data} />
                    <BurgerConstructor data={data} />
                </div>
            </section>
        </>
    );
}


export default App;