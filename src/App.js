import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc'; // Reemplaza con tu projectID si es necesario

const App = () => {
  // Establecer credenciales predefinidas para pruebas
  const testUsername = 'alex'; // Reemplaza con tu nombre de usuario deseado
  const testPassword = 'alumno'; // Reemplaza con tu contraseña deseada

  // Simular el almacenamiento de las credenciales en localStorage
  localStorage.setItem('username', testUsername);
  localStorage.setItem('password', testPassword);

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
