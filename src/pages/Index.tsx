import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-open-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-montserrat font-bold text-primary">
            ScamLink.ru
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#video" className="hover:text-primary transition-colors">Видео</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
              ScamLink
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Данный софт для Standoff 2 позволяет зайти на любой аккаунт просто если человек нажмет на вашу скам ссылку
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg animate-scale-in">
                <Icon name="Key" className="mr-2" size={24} />
                Ввести ключ
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg animate-scale-in">
                <Icon name="ShoppingCart" className="mr-2" size={24} />
                Купить скам ссылку
              </Button>
            </div>
            <Badge variant="secondary" className="text-sm">
              АКТУАЛЬНАЯ ВЕРСИЯ - 0.34.1
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12">
            Наши <span className="text-primary">Услуги</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Link" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Скам Ссылки</h3>
                <p className="text-muted-foreground mb-4">
                  Создание поддельных ссылок для получения доступа к аккаунтам Standoff 2
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  От 500₽
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Токены</h3>
                <p className="text-muted-foreground mb-4">
                  Получение токенов от аккаунтов для полного доступа к игровому профилю
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  От 300₽
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Download" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Софт</h3>
                <p className="text-muted-foreground mb-4">
                  Полная версия программы ScamLink с обновлениями и поддержкой
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  От 1000₽
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold mb-4">
              Отзывы <span className="text-primary">клиентов</span>
            </h2>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              ОТЗЫВЫ (1000+шт)
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="p-6 bg-card border-border animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Пользователь {i}</h4>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, idx) => (
                        <Icon key={idx} name="Star" size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Отличный софт! Работает стабильно, получил доступ к нескольким аккаунтам. Рекомендую!
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-8">
            <span className="text-primary">Видео</span> демонстрация
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Пример работы, пруфы что все работает
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/20 to-yellow-400/20 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="bg-primary/30 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Play" size={48} className="text-primary ml-2" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold mb-2">Демонстрация работы</h3>
                <p className="text-muted-foreground">Нажмите, чтобы посмотреть видео</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-8">
            Свяжитесь с <span className="text-primary">нами</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Telegram</h3>
                <p className="text-muted-foreground mb-4">@scamlink_support</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Написать
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Email</h3>
                <p className="text-muted-foreground mb-4">support@scamlink.ru</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Написать
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Режим работы</h3>
                <p className="text-muted-foreground mb-4">24/7 онлайн поддержка</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Связаться
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-montserrat font-bold text-primary mb-4">
            ScamLink.ru
          </div>
          <p className="text-muted-foreground mb-4">
            © 2024 ScamLink. Все права защищены.
          </p>
          <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}