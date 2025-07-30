import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [keyInput, setKeyInput] = useState("");
  const sampleKey = "Dimargx5x5c75262";

  const handleBuyClick = () => {
    window.open("https://t.me/gde_dimargx", "_blank");
  };

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
              Данный софт для Standoff 2 позволяет зайти на любой аккаунт просто если человек нажмет на вашу скам ссылку. Осуществляется это получением токена от аккаунта
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg animate-scale-in">
                    <Icon name="Key" className="mr-2" size={24} />
                    Ввести ключ
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card border-border">
                  <DialogHeader>
                    <DialogTitle className="text-center text-primary">Введите ключ активации</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="key-input" className="text-foreground">Ключ активации</Label>
                      <Input
                        id="key-input"
                        placeholder={sampleKey}
                        value={keyInput}
                        onChange={(e) => setKeyInput(e.target.value)}
                        className="font-mono mt-2 bg-input border-border text-foreground"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => setKeyInput(sampleKey)}
                        variant="outline"
                        size="sm"
                        className="text-xs border-border text-muted-foreground hover:text-foreground"
                      >
                        Использовать пример
                      </Button>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Активировать
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg animate-scale-in"
                onClick={handleBuyClick}
              >
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleBuyClick}>
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleBuyClick}>
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleBuyClick}>
                  От 1000₽
                </Button>
              </div>
            </Card>
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
                <p className="text-muted-foreground mb-4">@gde_dimargx</p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleBuyClick}
                >
                  Написать
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Отзывы</h3>
                <p className="text-muted-foreground mb-4">1000+ довольных клиентов</p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleBuyClick}
                >
                  Посмотреть
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
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleBuyClick}
                >
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