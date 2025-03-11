import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex items-center justify-center bg-gradient-to-r from-bgColorPrimary to-bgColorSecondary relative h-screen w-screen overflow-hidden">
      <div className="text-center z-10">
        <h2 className="text-gray-300 text-4xl font-light p-2">
          Bem Vindo ao
        </h2>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gradientStart to-gradientEnd text-5xl font-semibold tracking-tight sm:text-8xl">
          MyFinance
        </h1>
        <div className="flex justify-center items-center mt-4 space-x-4">
        <Link to="/signin">  
        <Button color="primary" variant="shadow" size="lg">
        Cadastrar-Se 
      </Button>
      </Link>
      <Link to="/login ">
      <Button 
      className="text-white"
      color="success" 
      variant="shadow" 
      size="lg"
      >
        Login 
      </Button>
      </Link>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-1/3 rounded-r-lg overflow-hidden shadow-lg shadow-shadowPrimary">
        <img
          className="opacity-60 h-full object-cover"
          src="../public/img/ImageBackground.png"
          alt="Imagem de fundo"
        />
      </div>
    </section>
  );
}

export default Home;
