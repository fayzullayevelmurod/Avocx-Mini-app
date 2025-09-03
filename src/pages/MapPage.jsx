import { Link } from "react-router-dom";
import { Header } from "../layouts";

export const MapPage = () => {
  const routes = [
    { path: "/loading", label: "Loader" },
    { path: "/slide-window", label: "Slide Window" },
    { path: "/home", label: "Главная" },
    { path: "/settings", label: "Настройки профиля" },
    { path: "/wallet", label: "Кошелёк" },
    { path: "/notifications", label: "Уведомления" },
    { path: "/cart-products", label: "Корзина товары" },
    { path: "/advertising-exchange", label: "Биржа рекламы" },
    { path: "/advertising-account", label: "Рекламный кабинет" },
    { path: "/channel-settings", label: "Настройки канала для рекламы" },
    { path: "/my-ads", label: "Объявления на бирже" },
    { path: "/my-shops", label: "Мои магазины. Нету" },
    { path: "/store-management", label: "Управление магазином" },
    { path: "/store-management-two", label: "Управление магазином 2" },
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
