import Navbar from "../components/Navbar";
import '../styles/home.css'

const Home: React.FC = () => {
  return (
    <div className="home-container">
        <Navbar/>
      <h1 className="home-title">Welcome to the Home Page / Bienvenidos a la pagina principal</h1>
      <h2 className="home-subtitle">About Us...</h2>
      <p className="home-paragraph"> Una aplicación fullstack de gestión de contactos que permite crear, visualizar, buscar, editar y eliminar contactos. Desarrollada con React, TypeScript, Express y MySQL.</p>
      <p className="home-paragraph"> A managing contact fullstack proyect, that allows the user to insert, visualize, search for, delete and edit a contact.</p>
    </div>
  );
};

export default Home;
