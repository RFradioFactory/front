import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Registration.css' 
import React, { useState } from 'react';

interface RegistrationFormState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Registr: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegistrationFormState>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не одинаковы");
      return;
    }
    console.log('Form submitted:', formData);
    // Здесь можно добавить логику отправки данных на сервер
    // пост запрос, при удачном выполнении редирект на вход
    //handleReg({formData});
    navigate('/Login');
  };
  /*const handleReg = async ({username, email, password}) => {
    try {
      // Здесь можно добавить логику отправки данных на сервер
      const response = await axios.post('https://your-api-url.com/reg', {
        username,
        email,
        password,
      });

      // Пример обработки ответа сервера
      if (response.status === 200) {
        // Перенаправляем пользователя на страницу входа
        navigate('/Login');
      }
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };*/

  return (
   <div className='reg' > 
   <h2 style={{borderBottom: '1px solid grey'  }}>Регистрация</h2>
    <form  onSubmit={handleSubmit}>
      <div > 
        <label htmlFor="username">Логин</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder='Логин:'
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Почтовый адрес (email)</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email:'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Пароль:'
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Подтвердите пароль</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='Пароль:'
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" style={{backgroundColor:'orange'}}>Зарегистрироваться</button>
      <div className="account-prompt">
        <span>Уже есть учетная запись?</span>
        </div>
      <Link to='/Login'><button type='button'  >Вход</button></Link>
      <a href='' style={{display:'flex', justifyContent:'center', margin:'2%'}}>Сообщить о проблеме</a>
    </form>
    </div>
  );
};

export default Registr;