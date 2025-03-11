import { Button, Input } from "@heroui/react";

function CreateAccount() {
  return (
    <section className="bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <div className="relative block h-16 lg:order-last  lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="../img/ImageBackground.png"
            className="absolute inset-0 rounded-l-full h-full w-full object-cover"
          />
        </div>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold  sm:text-3xl md:text-4xl text-white">
              Bem Vindo ao MyFinance 🪙
            </h1>

            <p className="mt-4 leading-relaxed text-gray-400">
              Organize suas finanças e conquiste seus objetivos com o MyFinance.
              Simples, rápido e eficiente.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-white mb-5" htmlFor="Nome">
                  Nome
                </label>
                <Input
                  isRequired
                  id="name"
                  errorMessage="Por favor, preencha o campo Nome"
                  name="name"
                  placeholder="Digite seu nome"
                  type="text"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-white" htmlFor="cpf">
                  CPF
                </label>
                <Input
                  isRequired
                  id="cpf"
                  errorMessage="Por favor, preencha o campo CPF"
                  name="cpf"
                  placeholder="Digite seu CPF"
                  type="text"
                />
              </div>

              <div className="col-span-6">
                <label className="text-white" htmlFor="email">
                  Email
                </label>
                <Input
                  isRequired
                  id="email"
                  errorMessage="Por favor, preencha o campo Email"
                  name="email"
                  placeholder="Digite seu email"
                  type="email"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-white" htmlFor="password">
                  Senha
                </label>
                <Input
                  isRequired
                  id="password"
                  errorMessage="Por favor, preencha o campo Senha"
                  name="password"
                  placeholder="Digite sua senha"
                  type="password"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-white" htmlFor="confirmPassword">
                  Confirme Sua Senha
                </label>
                <Input
                  isRequired
                  id="confirmPassword"
                  errorMessage="Por favor, confirme sua senha"
                  name="confirmPassword"
                  placeholder="Confirme sua senha"
                  type="password"
                />
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-400">
                  Ao criar uma conta, você concorda com nossos{" "}
                  <a href="#" className=" underline text-gray-200">
                    termos e condições{" "}
                  </a>
                  e
                  <a href="#" className="underline text-gray-200">
                    {" "}
                    política de privacidade{" "}
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button color="primary" variant="shadow" size="lg" type="submit">
                  Criar Conta
                  </Button>

                <p className="mt-4 text-sm sm:mt-0 text-gray-400">
                  Já tem uma conta?{" "}
                  <a href="/login" className="underline text-gray-200">
                    Entrar
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
export default CreateAccount;
