import { Button, Input } from "@heroui/react";

export default function Login() {
  return (
    <>
      <section className="flex items-center justify-center bg-gradient-to-r from-bgColorPrimary to-bgColorSecondary relative h-screen w-screen overflow-hidden">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="../img/ImageBackground.png"
              className="mx-auto h-20 w-auto rounded-full"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Login
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="cpf"
                  className="block text-sm/6 font-medium text-white"
                >
                  CPF
                </label>
                <div className="mt-2">
                  <Input
                    isRequired
                    id="cpf"
                    errorMessage="Por favor, preencha o campo CPF"
                    name="cpf"
                    placeholder="Digite seu CPF"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Senha
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-primary hover:text-primaryHover"
                    >
                      Esqueceu Sua Senha ?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <Input
                    isRequired
                    id="password"
                    errorMessage="Por favor, preencha o campo com a sua senha"
                    name="cpf"
                    placeholder="Digite Sua Senha"
                    type="password"
                  />
                </div>
              </div>

              <div>
                <Button
                  color="primary"
                  variant="shadow"
                  size="lg"
                  className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Login
                </Button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm/6 text-gray-500">
            Não tem uma conta ?{' '}
            <a href="/signin" className="font-semibold text-primary hover:text-primaryHover">
              Faça o cadastro agora
            </a>
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
