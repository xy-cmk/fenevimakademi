
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">LMS Giriş</h2>
        <form className="space-y-4">
          <input type="email" placeholder="E-posta" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Şifre" className="w-full p-2 border rounded" />
          <select className="w-full p-2 border rounded">
            <option value="student">Öğrenci</option>
            <option value="teacher">Öğretmen</option>
          </select>
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
