import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../sevise/AutoContext';

interface LogInFormState {
  login: string;
  password: string;
}

const LogIn: React.FC = () => {
  const [formData, setFormData] = useState<LogInFormState>({
    login: '',
    password: '',
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
    console.log('Form submitted:', formData);
    // Здесь можно добавить логику отправки данных на сервер
    //handleLogin(formData.login, formData.password);
    navigate('/');
    loginContext('ghj')
  };

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  if (!authContext) {
    throw new Error('AuthContext is not provided');
  }

  const { loginContext } = authContext;
  /*const handleLogin = async (login:string, password:string) => {
    try {
      // Здесь можно добавить логику отправки данных на сервер
      const response = await axios.post('https://your-api-url.com/login', {
        login,
        password,
      });

      // Пример обработки ответа сервера
      if (response.status === 200) {
        // Сохраняем токен в localStorage
        const token = response.data.token;
        loginContext(token);
        // Перенаправляем пользователя на страницу входа
        navigate('/');
      }
    } catch (error) {
      console.error('Ошибка при входе:', error);
    }
  };*/

  return (
   <div className='reg' > 
   <h2 style={{borderBottom: '1px solid grey'  }}>Авторизация</h2>
    <form  onSubmit={handleSubmit}>
    <div > 
        <label htmlFor="username">Логин</label>
        <input
          type="text"
          id="login"
          name="login"
          placeholder='Логин:'
          value={formData.login}
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
      
      <button type="submit" style={{backgroundColor:'orange'}}>Вход</button>
      <a href='' style={{display:'flex', justifyContent:'center', margin:'2%'}}>Забыли пароль?</a>

      <div className="account-prompt">
        <span>Впервые у нас?</span>
        </div>
      <Link to = '/Reg'><button type='button' >Регистрация</button></Link>
      <a href='' style={{display:'flex', justifyContent:'center', margin:'2%'}}>Сообщить о проблеме</a>
    </form>
    </div>
  );
};

export default LogIn;