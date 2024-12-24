import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './myShops.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
function MyShops(){
    const [filter, setFilter] = useState('')
    const listStores = [
        'Магазин 1',
        'Магазин 2',
        'Магазин 3',
        'Магазин 4',
        'Магазин 5',
        'Магазин 6',
        'Магазин 7',
    ]

    const filterStores=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setFilter(event.target.value)
    }

    const filteredStores = filter != '' ? listStores.filter((store) => store.toLocaleLowerCase().includes(filter.toLocaleLowerCase())): listStores
    
    return(
        <>
       <div style={{margin:'15%', background:'#333', width:'100%', borderRadius: '25px', padding:'1% 5% 10% 5%'}}>
            <h2 >Мои магазины  <FontAwesomeIcon icon={faBars} /></h2>
            <input
                id = 'search'
                type = 'string'
                name = 'search'
                placeholder='Поиск:'
                value={filter}
                onChange={filterStores}
            />

            <div  className="scroll-container">
                <ul>
                    {filteredStores.map((store, index) => <li key = {index}>{store}</li>)}
                </ul>
            </div>
        </div>
    </>)
}
export default MyShops