
import { Link } from "react-router-dom";

export default function SidebarTeacher() {
  return (
    <div className="w-64 bg-white p-4 shadow-lg h-screen">
      <h2 className="text-xl font-bold mb-6">👨‍🏫 Öğretmen</h2>
      <nav className="space-y-3">
        <Link to="/teacher/dashboard" className="block text-blue-700">🏠 Panel</Link>
        <Link to="/teacher/create-assignment" className="block">📝 Ödev Oluştur</Link>
        <Link to="/teacher/materials" className="block">📁 Materyal Yükle</Link>
        <Link to="/teacher/live-class" className="block">🎥 Canlı Ders</Link>
        <Link to="/" className="block text-red-600">🚪 Çıkış</Link>
      </nav>
    </div>
  );
}
