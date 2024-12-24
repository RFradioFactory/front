import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './newPass.css'
interface PassFormState{
    oldPass: string;
    newPass: string;
    confirmNewPass: string;
}
function NewPass(){
    const [formData, setFormData] = useState<PassFormState>({
        oldPass: '',
        newPass: '',
        confirmNewPass: ''
      });
    const navigator = useNavigate();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.newPass == formData.confirmNewPass)
    {
        console.log('Form submitted:', formData);
        navigator('/main');
    }
    // Здесь можно добавить логику отправки данных на сервер
    //handleLogin(formData.login, formData.password);
    
    };
    return(
        <div style={{margin:'15%', background:'#333', width:'100%', borderRadius: '25px', padding:'1% 5% 1% 5%'}}> 
           <h2 style={{borderBottom: '1px solid grey'  }}>Смена пароля  <FontAwesomeIcon icon={faLock} /></h2>
            <form  onSubmit={handleSubmit}>
            <div style={{display:'flex'}}>
                <div > 
                    <label htmlFor="oldPass">Старый пароль</label>
                    <input
                    type="password"
                    id="oldPass"
                    name="oldPass"
                    placeholder='Старый пароль:'
                    value={formData.oldPass}
                    onChange={handleChange}
                    required
                    />
                </div>
              <div style={{marginLeft:'5%'}}>
                <div>
                    <label htmlFor="newPass">Новый пароль</label>
                    <input
                    type="password"
                    id="newPass"
                    name="newPass"
                    placeholder='Новый пароль:'
                    value={formData.newPass}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="confirmNewPass">Подтвердите пароль</label>
                    <input
                    type="password"
                    id="confirmNewPass"
                    name="confirmNewPass"
                    placeholder='Пароль:'
                    value={formData.confirmNewPass}
                    onChange={handleChange}
                    required
                    />
                </div>
              
                <button type="submit" style={{backgroundColor:'orange'}}>Поменять пароль</button>
                </div>
            </div>
            </form>
        </div>
    )
}
export default NewPass