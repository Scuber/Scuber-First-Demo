
export default function Home() {

    return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-gray-900">
      <div className="text-center p-6">
        <div className="flex justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4"><img src="/scuberlogo.png" alt="Scuber Yard" className="w-64 h-64" /></h1>
        </div>
        <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Let professional landscape artists bring your dream yard to life.
        </p>
        <div className="flex gap-6 justify-center">
          <a href="https://homeowners.scuber.pro" className="px-8 py-4 bg-green-600 text-white rounded-2xl shadow-lg hover:bg-green-700 transition">
            I'm a Homeowner
          </a>
          <a href="https://professionals.scuber.pro" className="px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition">
            I'm a Professional
          </a>
        </div>
      </div>
    </main>
    );
}