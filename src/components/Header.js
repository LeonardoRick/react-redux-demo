import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/auth';
const Header = () => {
    const logged = useSelector((state) => state.auth.isLogged);
    const dispatch = useDispatch();

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {logged && (
                <nav>
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button onClick={() => dispatch(authActions.logout())}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;