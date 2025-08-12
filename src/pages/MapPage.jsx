import { Link } from "react-router-dom";

export const MapPage = () => {
  const routes = [
    { path: "/loading", label: "Loading" },
    { path: "/home", label: "Home" },
    { path: "/create-shop", label: "Create Shop" },
    { path: "/product-card", label: "Product Card" },
    { path: "/announcement", label: "Announcement" },
    { path: "/products-my-stores", label: "Products My Stores" },
    { path: "/create-ad-success", label: "Create Ad Success" },
    { path: "/my-shop-not-found", label: "My Shop Not Found" },
  ];

  return (
    <div className="space-y-5 text-3xl">
      {routes.map((route, index) => (
        <Link
          key={index}
          className="text-primary block underline"
          to={route.path}
        >
          {`${index + 1}: ${route.label}`}
        </Link>
      ))}
    </div>
  );
};
