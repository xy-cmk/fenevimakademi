
import SidebarTeacher from "../../components/SidebarTeacher";

export default function TeacherDashboard() {
  return (
    <div className="flex min-h-screen">
      <SidebarTeacher />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">📊 Öğretmen Paneli</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">👨‍🎓 Öğrenci Sayısı: 20</div>
          <div className="bg-white p-4 rounded shadow">📤 Verilen Ödevler: 4</div>
          <div className="bg-white p-4 rounded shadow">🧪 Test Hazırla</div>
        </div>
      </div>
    </div>
  );
}
