export default function SideBar() {
  return (
    <aside className="bg-tertiarySlate w-44 z-10 h-full flex flex-col gap-8 fixed top-0 p-4 justify-center">
      <div className="bg-secondarySlate rounded-md p-4">
        <div>
          <span>Prompts</span>
        </div>
        <ul className="flex flex-col">
          <li>Legal</li>
          <li>People</li>
          <li>Marketing</li>
          <li>Finance</li>
        </ul>
      </div>
      <div className="bg-secondarySlate rounded-md p-4">
        <div>
          <span>My profile</span>
        </div>
        <ul className="flex flex-col">
          <li>My prompts</li>
          <li>Saved</li>
          <li>Settings</li>
          <li>Shared Whit</li>
          <li>Friends</li>
        </ul>
      </div>
    </aside>
  );
}
