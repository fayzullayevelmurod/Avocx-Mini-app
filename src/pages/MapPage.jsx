import { Link } from "react-router-dom";
import { Header } from "../layouts";

export const MapPage = () => {
  const routes = [
    { path: "/settings", label: "Настройки профиля" },
    { path: "/exchange", label: "Биржа" },
    { path: "/announcements-exchange", label: "Объявления на бирже" },
    { path: "/setting-up-details", label: "Настройка реквизитов" },
    { path: "/creating-exchange", label: "Создание объявления на биржу" },
    { path: "/my-ads-exchange", label: "Мои объявления на бирже" },
    { path: "/buyer-advertising-orders", label: "Заказы рекламы покупателя" },

    // =============================================
    // { path: "/loading", label: "Loader" },
    // { path: "/slide-window", label: "Slide Window" },
    // { path: "/home", label: "Главная" },
    // { path: "/wallet", label: "Кошелёк" },
    // { path: "/notifications", label: "Уведомления" },
    // { path: "/cart-products", label: "Корзина товары" },
    // { path: "/advertising-exchange", label: "Биржа рекламы" },
    // { path: "/advertising-account", label: "Рекламный кабинет" },
    // { path: "/channel-settings", label: "Настройки канала для рекламы" },
    // { path: "/my-ads", label: "Объявления на бирже" },
    // { path: "/my-shops", label: "Мои магазины. Нету" },
    // { path: "/store-management", label: "Управление магазином" },
    // { path: "/store-management-two", label: "Управление магазином 2" },
    // {
    //   path: "/management-characteristics",
    //   label: "Мои магазины. Управление характеристики",
    // },
    // { path: "/adding-product", label: "Добавление товара без шаблона" },
    // { path: "/adding-product-two", label: "Добавление товара" },
    // { path: "/my-shop", label: "Мои магазины" },
    // { path: "/marketplace-stores", label: "Маркетплейс магазинов" },
    // { path: "/marketplace-products", label: "Маркетплейс товары" },
    // { path: "/shop-view", label: "Магазин вид" },
    // { path: "/product-card", label: "Карточка товара" },
    // { path: "/create-shop", label: "Создание магазина" },
    // { path: "/products-my-stores", label: "Товары в Мои магазины" },
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
