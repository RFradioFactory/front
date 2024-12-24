import { faShop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function NewShop(){
    return(
        <>
        <h2>Создание магазина</h2>
        <div style={{display:'flex', background:'#333'}}>
            <div style={{marginLeft:'5%'}}>
                <h3 style={{borderBottom: '1px solid grey'}}>Название  <FontAwesomeIcon icon={faShop} /></h3>
                <input
                type="text"
                id="name"
                name="name"
                placeholder='Название:'
                /*value={''}
                onChange={}*/
                required
                />
            </div>
            <div>
                <h3 style={{borderBottom: '1px solid grey'}}>Логотип</h3>
            </div>
            <div>
                <h3 style={{borderBottom: '1px solid grey'}}>Баннер</h3>
            </div>
        </div>
        </>
    )
     
  
}
export default NewShop
