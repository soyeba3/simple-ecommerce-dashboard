import { Link } from "react-router-dom";

function SidebarTabItem({item, route}) {
  return (
    <Link
      to={item.href}
      key={item.id}
      className={`flex justify-between items-center px-8 py-2 ${
        route === item.name.toLocaleLowerCase()
          ? "bg-primary-50 border-l-4 border-primary-600"
          : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 text-gray-500">{<item.leftIcon />}</div>
        <div>{item.name}</div>
      </div>
      {item.rightIcon ? (
        <div className="w-4 h-4 text-gray-500">{<item.rightIcon />}</div>
      ) : (
        ""
      )}
    </Link>
  );
}

export default SidebarTabItem;
