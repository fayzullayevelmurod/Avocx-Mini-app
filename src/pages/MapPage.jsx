import { Link } from "react-router-dom";

export const MapPage = () => {
  const routes = [
    { path: "/loading", label: "Loader" },
    { path: "/home", label: "Menu 1" },
    { path: "/create-shop", label: "Create Shop" },
    { path: "/product-card", label: "Product Card" },
    { path: "/announcement", label: "Announcement" },
    { path: "/products-my-stores", label: "Products My Stores" },
    { path: "/create-ad-success", label: "Create Ad Success" },
    { path: "/my-shop-not-found", label: "My Shop Not Found" },
    { path: "/shops", label: "Маркетплейс магазинов" },
    { path: "/my-shops", label: "Мои магазины" },
    { path: "/my-shops-two", label: "Магазин вид" },
    { path: "/product-card-two", label: "Добавление товара" },
    { path: "/store-management", label: "Мои магазины. Управление" },
    {
      path: "/store-management-2",
      label: "Мои магазины. Управление категориями",
    },
    {
      path: "/management-characteristics",
      label: "🟢 Мои магазины. Управление характеристики",
    },
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
