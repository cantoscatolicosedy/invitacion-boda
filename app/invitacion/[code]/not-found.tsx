export default function NotFoundInvitation() {
  return (
    <main className="min-h-screen bg-[#35152A] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl mb-6">✦</h1>

        <h2 className="text-3xl font-serif mb-6">
          Invitación no encontrada
        </h2>

        <p className="text-lg leading-8">
          Lo sentimos.
          <br />
          El enlace que estás utilizando no corresponde a una invitación válida.
          <br />
          Si crees que se trata de un error,
          comunícate con los novios.
        </p>
      </div>
    </main>
  );
}