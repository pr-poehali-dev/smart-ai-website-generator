import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const features = [
    {
      icon: 'Sparkles',
      title: 'AI-генерация',
      description: 'Создавайте сайты из текстового описания за секунды'
    },
    {
      icon: 'Layout',
      title: 'Drag & Drop',
      description: 'Визуальный конструктор для настройки каждого элемента'
    },
    {
      icon: 'Code2',
      title: 'Чистый код',
      description: 'Получите production-ready код на React, Vue или HTML'
    },
    {
      icon: 'Zap',
      title: 'Мгновенный деплой',
      description: 'Публикуйте сайты одним кликом с автоматическим хостингом'
    },
    {
      icon: 'Palette',
      title: 'Умные темы',
      description: 'AI анализирует тренды и предлагает актуальный дизайн'
    },
    {
      icon: 'Globe',
      title: 'SEO оптимизация',
      description: 'Автоматическая настройка метатегов и производительности'
    }
  ];

  const demoSteps = [
    { step: 1, text: 'Опишите идею сайта', icon: 'MessageSquare' },
    { step: 2, text: 'AI генерирует структуру', icon: 'Cpu' },
    { step: 3, text: 'Настройте в конструкторе', icon: 'MousePointer2' },
    { step: 4, text: 'Опубликуйте в сеть', icon: 'Rocket' }
  ];

  const examples = [
    { type: 'Landing', time: '15 сек', color: 'from-purple-500 to-pink-500' },
    { type: 'E-commerce', time: '30 сек', color: 'from-blue-500 to-cyan-500' },
    { type: 'Portfolio', time: '20 сек', color: 'from-green-500 to-emerald-500' },
    { type: 'Blog', time: '25 сек', color: 'from-orange-500 to-yellow-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI SiteGen
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Демо</a>
            <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">Примеры</a>
            <a href="#api" className="text-muted-foreground hover:text-foreground transition-colors">API</a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">Документация</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Начать
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Новое поколение веб-разработки</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Создавайте сайты
            </span>
            <br />
            <span className="text-foreground">силой мысли</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in">
            Опишите идею — получите готовый сайт. AI-платформа для генерации веб-проектов 
            с визуальным конструктором и мгновенным деплоем
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl animate-glow" />
            <Card className="relative backdrop-blur-xl bg-card/50 border-2 border-primary/20 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Monitor" size={80} className="text-primary/50 mx-auto mb-4 animate-float" />
                  <p className="text-muted-foreground">Визуальный конструктор</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Возможности платформы
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Всё необходимое для создания современных сайтов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 px-6 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Как это работает
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">От идеи до запуска за 4 простых шага</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {demoSteps.map((demo, index) => (
              <div 
                key={index}
                className="text-center cursor-pointer"
                onMouseEnter={() => setActiveDemo(index)}
              >
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 transition-all ${
                  activeDemo === index 
                    ? 'from-primary to-secondary scale-110' 
                    : 'from-primary/20 to-secondary/20 scale-100'
                }`}>
                  <Icon name={demo.icon} size={32} className={activeDemo === index ? 'text-white' : 'text-primary'} />
                </div>
                <div className={`text-4xl font-bold mb-2 ${activeDemo === index ? 'text-primary' : 'text-muted-foreground'}`}>
                  {demo.step}
                </div>
                <p className={`${activeDemo === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {demo.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Примеры сайтов
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Создано за минуты, выглядит профессионально</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examples.map((example, index) => (
              <Card 
                key={index}
                className="overflow-hidden backdrop-blur-xl bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 group cursor-pointer"
              >
                <div className={`h-40 bg-gradient-to-br ${example.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Eye" size={32} className="text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{example.type}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>Создан за {example.time}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="api" className="py-20 px-6 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  API для разработчиков
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Интегрируйте AI-генерацию сайтов в свои приложения. 
                Простой REST API с подробной документацией
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Простая интеграция</p>
                    <p className="text-muted-foreground text-sm">Всего несколько строк кода</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Webhook уведомления</p>
                    <p className="text-muted-foreground text-sm">Получайте события в реальном времени</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">SDK для популярных языков</p>
                    <p className="text-muted-foreground text-sm">JavaScript, Python, Go, Ruby</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/20">
              <pre className="text-sm overflow-x-auto">
                <code className="text-primary">{`const siteGen = require('ai-sitegen');

const site = await siteGen.create({
  prompt: 'Landing page for AI startup',
  style: 'futuristic',
  colors: ['#8B5CF6', '#0EA5E9']
});

console.log(site.url);
// => https://your-site.com`}</code>
              </pre>
            </Card>
          </div>
        </div>
      </section>

      <section id="docs" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Документация и поддержка
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Подробные гайды, видео-уроки и активное сообщество помогут начать работу
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <Icon name="BookOpen" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Руководства</h3>
              <p className="text-muted-foreground">Пошаговые инструкции</p>
            </Card>
            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <Icon name="Video" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Видео-уроки</h3>
              <p className="text-muted-foreground">Обучение в формате видео</p>
            </Card>
            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <Icon name="Users" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Сообщество</h3>
              <p className="text-muted-foreground">Помощь от экспертов</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Готовы создать свой сайт?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к тысячам пользователей, которые уже создают сайты с помощью AI
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-12">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Кредитная карта не требуется</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold">AI SiteGen</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">О нас</a>
              <a href="#" className="hover:text-foreground transition-colors">Блог</a>
              <a href="#" className="hover:text-foreground transition-colors">Цены</a>
              <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2025 AI SiteGen. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
