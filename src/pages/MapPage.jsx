import { Link } from "react-router-dom";

export const MapPage = () => {
  const routes = [
    { path: "/loading", label: "Loader" },
    { path: "/slide-window", label: "Slide Window" },
    { path: "/home", label: "Home" },
  ];

  return (
    <div className="space-y-5 text-3xl mb-16">
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
