import Link from "next/link";

export default function NavigationBar() {
  const pages = [
    { id: "home", path: "/", text: "Home" },
    { id: "about", path: "/about", text: "About" },
    { id: "projects", path: "/projects", text: "Projects" },
  ];

  return (
    <aside className="w-[100px] border-r border-gray-400">
      <nav className="p-4 flex flex-col gap-4">
        {pages.map((page) => (
          <Link href={page.path} key={page.id}>
            {page.text}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
