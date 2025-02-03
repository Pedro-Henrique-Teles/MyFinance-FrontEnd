
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
                {/* <Field>
                  <label className="text-white" htmlFor="firtName">Nome</label>
                  <Input type="text" id="firstName" name="firstName"/>
                </Field> */}

              </div>

              <div className="col-span-6 sm:col-span-3">
                {/* <Field>
                  <label className="text-white" htmlFor="cpf">CPF</label>
                  <Input type="text" id="cpf" name="cpf" />
                </Field> */}
              </div>

              <div className="col-span-6">
                {/* <Field>
                  <label className="text-white" htmlFor="email">Email</label>
                  <Input type="email" id="email" name="email" />
                </Field> */}
              </div>

              <div className="col-span-6 sm:col-span-3">
                {/* <Field>
                  <label className="text-white" htmlFor="password">Senha</label>
                <Input type="password" id="password" name="password" />
                </Field> */}
              </div>

              <div className="col-span-6 sm:col-span-3">
                {/* <Field>
                  <label className="text-white" htmlFor="confirmPassword">Confirme Sua Senha</label>
                  <Input type="password" id="passwordConfirmation" name="passwordConfirmation" />
                </Field> */}
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
                {/* <Button>Criar Conta</Button> */}

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
