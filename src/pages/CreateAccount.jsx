import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import { createUserSchema } from "../validation/createUserValidation";
import { zodResolver } from "@hookform/resolvers/zod";
  
function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors }, //pode ser usada para trazer o erro abaixo do input
  } = useForm({
    resolver: zodResolver(createUserSchema),
  });

  const sendData = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/myFinance/user/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Erro na Requisição");
      }
      const result = await response.json();
      console.log("Sucesso", result);
      alert("Dados enviados com sucesso!");
    } catch (error) {
      console.log("Erro: ", error);
      alert("Houve um erro ao enviar os dados");
    }
  };

  const onSubmit = (data) => {
    const { confirmPassword, ...dataToSend } = data;
    sendData(dataToSend);
    console.log(dataToSend);
  };

  return (
    <section className="bg-gray-900 h-screen">
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

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label className="text-white mb-5" htmlFor="Nome">
                  Nome
                </label>
                <Input
                  {...register("name")}
                  className="bg-white rounded-lg"
                  color={errors.name ? "danger" : "success"}
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  type="text"
                  variant="bordered"
                />
                <span
                  className={`text-sm italic ${
                    errors.name ? "text-red-600" : "text-white"
                  }`}
                >
                  {errors.name?.message}
                </span>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-white" htmlFor="cpf">
                  CPF
                </label>
                <Input
                  {...register("cpf")}
                  color={errors.cpf ? "danger" : "success"}
                  className="bg-white rounded-lg"
                  id="cpf"
                  name="cpf"
                  placeholder="Digite seu CPF"
                  type="text"
                  variant="bordered"
                />
                <span
                  className={`text-sm italic ${
                    errors.cpf ? "text-red-600" : "text-white"
                  }`}
                >
                  {errors.cpf?.message}
                </span>
              </div>

              <div className="col-span-6">
                <label className="text-white" htmlFor="email">
                  Email
                </label>
                <Input
                  {...register("email")}
                  color={errors.email ? "danger" : "success"}
                  className="bg-white rounded-lg"
                  id="email"
                  name="email"
                  placeholder="Digite seu email"
                  type="email"
                  variant="bordered"
                />
                <span
                  className={`text-sm italic ${
                    errors.email ? "text-red-600" : "text-white"
                  }`}
                >
                  {errors.email?.message}
                </span>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-white" htmlFor="password">
                  Senha
                </label>
                <Input
                  {...register("password")}
                  color={errors.password ? "danger" : "success"}
                  className="bg-white rounded-lg"
                  id="password"
                  name="password"
                  placeholder="Digite sua senha"
                  type="password"
                  variant="bordered"
                />
                <span
                  className={`text-sm italic ${
                    errors.password ? "text-red-600" : "text-white"
                  }`}
                >
                  {errors.password?.message}
                </span>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-white" htmlFor="confirmPassword">
                  Confirme Sua Senha
                </label>
                <Input
                  {...register("confirmPassword")}
                  color={errors.confirmPassword ? "danger" : "success"}
                  className="bg-white rounded-lg"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirme sua senha"
                  type="password"
                  variant="bordered"
                />
                <span
                  className={`text-sm italic ${
                    errors.confirmPassword ? "text-red-600" : "text-white"
                  }`}
                >
                  {errors.confirmPassword?.message}
                </span>
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
                <Button
                  color="primary"
                  variant="shadow"
                  size="lg"
                  type="submit"
                >
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
