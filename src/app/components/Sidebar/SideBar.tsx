import CourseList from "./CourseList";


export default function Sidebar() {
    const mode='courses'
    return (
      <aside className="bg-gray-50 text-white h-full">
        <h2 className="text-xl font-bold">DSA Visualizer</h2>
        {mode === 'courses' ?<CourseList />: "<AnimationControls />"}
      </aside>
    );
  }