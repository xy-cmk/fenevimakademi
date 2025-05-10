
import SidebarStudent from "../../components/SidebarStudent";

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen">
      <SidebarStudent />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">👋 Hoş geldin, Öğrenci!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">📚 3 Yeni Ödev</div>
          <div className="bg-white p-4 rounded shadow">🧪 1 Test</div>
          <div className="bg-white p-4 rounded shadow">🎥 Canlı Ders: Bugün 14:00</div>
        </div>
      </div>
    </div>
  );
}
