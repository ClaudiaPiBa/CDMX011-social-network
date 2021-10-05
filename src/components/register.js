
import { onNavigate } from "../main.js";
export const Register = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent='Registrate es rápido y fácil';
    const form = document.createElement('form');
    const email = document.createElement('input');
    email.placeholder = "correo electrónico"
    const password = document.createElement('input');
    password.placeholder ='contraseña'
    const confirmPassword = document.createElement('input');
    confirmPassword.placeholder ='Confirmar contraseña'

    const btnHome = document.createElement('button');
    btnHome.textContent='Regresar';
    btnHome.addEventListener('click', () => onNavigate('/'));
    form.append(email)
    form.append(password)
    form.append(confirmPassword)
    form.append(btnHome);
    HomeDiv.append(form)

    return HomeDiv;
};  