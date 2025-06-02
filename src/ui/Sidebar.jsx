import useOutsideClick from "../hooks/useOutsideClick";

function Sidebar({ children ,isSidebarOpen , setIsSidebarOpen}) {
  const ref = useOutsideClick(() => setIsSidebarOpen(false))
  console.log(isSidebarOpen);
  
  return (
    <div ref={ref} className={`bg-secondary-0 row-start-1 row-span-2 border-l border-secondary-200 p-4 z-50 fixed right-0 bottom-0 top-0 md:relative w-[15rem]  shadow-2xl md:shadow-none transition-all duration-200 ${isSidebarOpen ? '' : 'hidden md:block'}`}>
      <ul onClick={() => setIsSidebarOpen(false)} className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
}
export default Sidebar;
