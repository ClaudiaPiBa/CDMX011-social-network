 
import { onNavigate } from "../main.js";
export const Home = () => {
    const loginDiv = document.createElement('div');
    const btnHome = document.createElement('button');
    btnHome.textContent='Cerrar sesión';
    btnHome.addEventListener('click', () => onNavigate('/'));
    loginDiv.append(btnHome);
    return loginDiv;
};  