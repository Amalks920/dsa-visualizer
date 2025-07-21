import CourseList from "./CourseList";

export default function Sidebar() {
    const mode='courses'
    return (
      <aside className="h-full bg-[#1a003c] border-l-2 border-pink-500 shadow-[0_0_24px_2px_rgba(255,0,255,0.2)] p-6 text-white flex flex-col items-center">
        <h2 className="text-2xl font-extrabold text-pink-400 drop-shadow-[0_0_12px_rgba(255,0,255,0.8)] mb-6 tracking-widest font-mono">DSA Visualizer</h2>
        {mode === 'courses' ?<CourseList />: "<AnimationControls />"}
      </aside>
    );
}