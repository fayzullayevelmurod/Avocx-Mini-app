import { Link } from "react-router-dom";
import { Header } from "../layouts";

export const MapPage = () => {
  const routes = [
    { path: "/loading", label: "Loader" },
    { path: "/slide-window", label: "Slide Window" },
    { path: "/home", label: "Home" },
    { path: "/settings", label: "Settings" },
    { path: "/wallet", label: "Кошелёк" },
  ];

  return (
    <div className="space-y-5 text-3xl mb-16">
      <Header />
      {routes.map((route, index) => (
        <Link
          key={index}
          className="text-primary block underline text-base"
          to={route.path}
        >
          {`${index + 1}: ${route.label}`}
        </Link>
      ))}
    </div>
  );
};
