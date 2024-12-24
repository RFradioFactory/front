import { Link, Outlet, useNavigate } from 'react-router-dom';
import './main.css'
import { faBars, faLock, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Main() {
    return(
    <>
    <div style={{display:'flex'}}>
        <div style={{ margin:'5% 10% 5% 10%', }}>
            <nav style={{ background:'#333', borderRadius:'25px'}}>
                <ul style={{listStyle: 'none', paddingLeft:'20px', paddingRight:'20px'}}>
                    <li><Link to = '/main/newPassword'><button type='button' ><FontAwesomeIcon icon={faLock} /> Безопасность</button></Link></li>
                    <li><Link to = '/main/myShops'><button type='button' ><FontAwesomeIcon icon={faBars} /> Мои магазины</button></Link></li>
                    <li><Link to = '/main/newShop'><button type='button' ><FontAwesomeIcon icon={faShop} /> Создать магазин</button></Link></li>
                </ul>
            </nav>
        </div>

        <div><Outlet/></div>
    </div>
    </>
    )
}
export default Main;