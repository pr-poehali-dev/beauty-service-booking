import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    { name: "Стрижка", price: "от 1500₽", icon: "Scissors" },
    { name: "Окрашивание", price: "от 3000₽", icon: "Palette" },
    { name: "Маникюр", price: "от 1200₽", icon: "Hand" },
    { name: "Педикюр", price: "от 1500₽", icon: "Footprints" },
    { name: "Массаж", price: "от 2000₽", icon: "Heart" },
    { name: "Макияж", price: "от 2500₽", icon: "Sparkles" },
  ];

  const salons = [
    {
      name: "Студия красоты Элегант",
      rating: 4.9,
      reviews: 245,
      address: "ул. Тверская, 12",
    },
    {
      name: "Салон Премиум",
      rating: 4.8,
      reviews: 189,
      address: "пр. Невский, 45",
    },
    {
      name: "Красота и Стиль",
      rating: 4.7,
      reviews: 156,
      address: "ул. Арбат, 23",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">BeautyBook</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#salons"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Салоны
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Отзывы
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Войти</Button>
              <Button>Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Найдите идеальный
                <span className="text-primary block">салон красоты</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Оставьте заявку на услугу — салоны и мастера сами предложат вам
                свои услуги с лучшими ценами
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Какая услуга вам нужна?"
                  className="flex-1 h-14 text-lg"
                />
                <Button size="lg" className="h-14 px-8">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти мастера
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/3eaa30d8-ff73-4c37-8f7b-34142ad766c1.jpg"
                alt="Салон красоты"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные услуги
            </h3>
            <p className="text-lg text-gray-600">Найдите то, что вам нужно</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-beauty-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Как это работает
            </h3>
          </div>
          <Tabs defaultValue="clients" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="clients">Для клиентов</TabsTrigger>
              <TabsTrigger value="salons">Для салонов</TabsTrigger>
            </TabsList>
            <TabsContent value="clients" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon name="PenTool" size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    1. Опишите услугу
                  </h4>
                  <p className="text-gray-600">
                    Расскажите, что вам нужно, укажите желаемую дату и бюджет
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    2. Получите предложения
                  </h4>
                  <p className="text-gray-600">
                    Салоны сами предложат вам услуги с ценами и условиями
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon name="Calendar" size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    3. Выберите и запишитесь
                  </h4>
                  <p className="text-gray-600">
                    Выберите лучшее предложение и забронируйте время
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="salons" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon name="Eye" size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    1. Находите клиентов
                  </h4>
                  <p className="text-gray-600">
                    Получайте заявки от клиентов в вашем районе
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon
                      name="MessageCircle"
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    2. Делайте предложения
                  </h4>
                  <p className="text-gray-600">
                    Предложите свои услуги с индивидуальными условиями
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon
                      name="TrendingUp"
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    3. Развивайте бизнес
                  </h4>
                  <p className="text-gray-600">
                    Получайте больше клиентов и положительных отзывов
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Salons Section */}
      <section id="salons" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Лучшие салоны
            </h3>
            <p className="text-lg text-gray-600">
              Проверенные салоны с высоким рейтингом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salons.map((salon, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{salon.name}</CardTitle>
                      <CardDescription>{salon.address}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      <Icon
                        name="Star"
                        size={14}
                        className="mr-1 text-yellow-500"
                      />
                      {salon.rating}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {salon.reviews} отзывов
                    </span>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-beauty-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h3>
            <p className="text-lg text-gray-600">Что говорят о нас</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Анна К.</h4>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon
                          key={star}
                          name="Star"
                          size={16}
                          className="text-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Отличный сервис! Быстро нашла мастера для окрашивания.
                  Результат превзошел все ожидания!"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beauty-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" size={24} className="text-primary" />
                <h5 className="text-xl font-bold">BeautyBook</h5>
              </div>
              <p className="text-gray-400">
                Платформа для поиска и записи к мастерам красоты
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Услуги</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Парикмахерские
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Маникюр
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Косметология
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Массаж
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Компания</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Партнерам
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Поддержка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Следите за нами</h6>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  size={24}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Facebook"
                  size={24}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Twitter"
                  size={24}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BeautyBook. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
