function PageNotFound() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-bgColorPrimary to-bgColorSecondary relative h-screen w-screen overflow-hidden">
      <div className="text-center z-10">
        <h2 className="text-primary text-2xl font-light p-2">404</h2>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Página Não Encontrada
        </h1>
        <p className="mt-6 text-lg font-medium text-textPrimary sm:text-xl">
          Desculpe, a página que deseja não foi encontrada.
        </p>
        <p className="text-lg font-medium text-textPrimary sm:text-xl">
          Por favor retorne à página principal.
        </p>

        <div className="flex justify-center items-center mt-4 space-x-4">
          {/* Aqui você pode adicionar botões ou links */}
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
