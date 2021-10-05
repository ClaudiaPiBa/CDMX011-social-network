

import { onNavigate } from "../main.js";
export const Login = () => {
    const LoginDiv = document.createElement('div');
    LoginDiv.className = 'LoginDiv';
    const form = document.createElement('form');
    const email = document.createElement('input');
    email.setAttribute('id','email')
    const password = document.createElement('input');
    password.setAttribute('id','password')
    const btnRegister = document.createElement('button');
    const btnLogin= document.createElement('button');
    const divRegister = document.createElement('p')
   divRegister.textContent = '¿Aún no tienes cuenta?'
    btnRegister.textContent='Registrate';
    btnLogin.textContent='Inicia sesión';
    
    btnRegister.addEventListener('click', () => onNavigate('/register'))
    btnLogin.addEventListener('click', () => onNavigate('/home'))
    email.placeholder = 'Correo electrónico';
    password.placeholder = 'Contraseña';
    form.append(email);
    form.append(password);
    form.append(btnLogin);
    form.append(divRegister)
    form.append(btnRegister);

    LoginDiv.append(form);
    return LoginDiv;
};  