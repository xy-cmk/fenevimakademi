
import { Link } from "react-router-dom";

export default function SidebarStudent() {
  return (
    <div className="w-64 bg-white p-4 shadow-lg h-screen">
      <h2 className="text-xl font-bold mb-6">🎓 Öğrenci</h2>
      <nav className="space-y-3">
        <Link to="/student/dashboard" className="block text-blue-700">🏠 Panel</Link>
        <Link to="/student/assignments" className="block">📄 Ödevler</Link>
        <Link to="/student/materials" className="block">📁 Dökümanlar</Link>
        <Link to="/student/tests" className="block">🧪 Testler</Link>
        <Link to="/" className="block text-red-600">🚪 Çıkış</Link>
      </nav>
    </div>
  );
}
