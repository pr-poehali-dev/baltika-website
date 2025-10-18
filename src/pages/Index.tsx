import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const newsItems = [
  {
    id: 1,
    title: "Открытие нового студенческого медиацентра",
    date: "15 октября 2025",
    category: "События",
    image: "https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/87064f09-65c7-4243-a0a2-3e31f1973b4e.jpg",
    excerpt: "Пресс-служба БАлтика открывает новый медиацентр для студентов с современным оборудованием"
  },
  {
    id: 2,
    title: "Фестиваль молодежной журналистики 2025",
    date: "12 октября 2025",
    category: "Анонсы",
    image: "https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/e6f41492-ffa7-4154-a4e8-82ff2315f981.jpg",
    excerpt: "Приглашаем всех желающих принять участие в ежегодном фестивале студенческой журналистики"
  },
  {
    id: 3,
    title: "Мастер-класс от ведущих журналистов",
    date: "10 октября 2025",
    category: "Мероприятия",
    image: "https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/a15d5739-9ba4-40d3-9aa7-104addae6e5a.jpg",
    excerpt: "Серия мастер-классов от профессионалов медиаиндустрии для студентов"
  }
];

const teamMembers = [
  { name: "Алексей Смирнов", role: "Главный редактор", image: "👨‍💼" },
  { name: "Мария Иванова", role: "Журналист", image: "👩‍💻" },
  { name: "Дмитрий Петров", role: "Фотограф", image: "📸" },
  { name: "Анна Козлова", role: "SMM-специалист", image: "📱" }
];

const events = [
  { date: "20.10", title: "Круглый стол о медиаграмотности", time: "15:00" },
  { date: "25.10", title: "Конкурс студенческих репортажей", time: "12:00" },
  { date: "30.10", title: "День открытых дверей пресс-службы", time: "14:00" }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg animate-float">
                <Icon name="Radio" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  БАлтика
                </h1>
                <p className="text-sm text-muted-foreground">Пресс-служба</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
              <a href="#events" className="text-sm font-medium hover:text-primary transition-colors">Мероприятия</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          ))}
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-20">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 border-0">
              {newsItems[currentSlide].category}
            </Badge>
            <h2 className="text-5xl font-bold text-white mb-4">
              {newsItems[currentSlide].title}
            </h2>
            <p className="text-xl text-white/90 mb-6">
              {newsItems[currentSlide].excerpt}
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Читать далее
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
              <div className="flex gap-2">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-0">О нас</Badge>
          <h2 className="text-4xl font-bold mb-4">Миссия и команда</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Информируем студентов о жизни кампуса и организуемых событиях
          </p>
        </div>

        <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="mission">Миссия</TabsTrigger>
            <TabsTrigger value="team">Команда</TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" className="text-purple-600" />
                  Наша миссия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Пресс-служба БАлтика создана для обеспечения прозрачной и оперативной коммуникации 
                  между студентами, преподавателями и администрацией университета.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:scale-105 transition-transform">
                    <Icon name="Newspaper" className="text-purple-600 mb-3" size={32} />
                    <h4 className="font-semibold mb-2">Актуальные новости</h4>
                    <p className="text-sm text-muted-foreground">Ежедневное освещение событий кампуса</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl hover:scale-105 transition-transform">
                    <Icon name="Users" className="text-pink-600 mb-3" size={32} />
                    <h4 className="font-semibold mb-2">Студенческое сообщество</h4>
                    <p className="text-sm text-muted-foreground">Платформа для общения и обмена идеями</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:scale-105 transition-transform">
                    <Icon name="Calendar" className="text-orange-600 mb-3" size={32} />
                    <h4 className="font-semibold mb-2">Мероприятия</h4>
                    <p className="text-sm text-muted-foreground">Анонсы и репортажи событий</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{member.image}</div>
                      <div>
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" className="text-purple-600" />
                  История создания
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <p className="font-semibold">2020 год</p>
                    <p className="text-muted-foreground">Основание пресс-службы БАлтика группой энтузиастов</p>
                  </div>
                  <div className="border-l-4 border-pink-600 pl-4">
                    <p className="font-semibold">2022 год</p>
                    <p className="text-muted-foreground">Запуск собственного медиаканала и расширение команды</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="font-semibold">2025 год</p>
                    <p className="text-muted-foreground">Открытие нового студенческого медиацентра</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-pink-100 text-pink-700 border-0">Новости</Badge>
            <h2 className="text-4xl font-bold mb-4">Последние публикации</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 border-0">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardDescription className="flex items-center gap-2 text-xs">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </CardDescription>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full group">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-orange-100 text-orange-700 border-0">Мероприятия</Badge>
          <h2 className="text-4xl font-bold mb-4">Календарь событий</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:border-purple-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                      <div className="text-2xl font-bold">{event.date.split('.')[0]}</div>
                      <div className="text-xs">{event.date.split('.')[1]}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Clock" size={14} />
                      {event.time}
                    </p>
                  </div>
                  <Button variant="outline" className="hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent">
                    <Icon name="Bell" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl opacity-90">Мы всегда рады вашим вопросам и предложениям</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="opacity-90">г. Калининград, ул. Студенческая, 1</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="opacity-90">+7 (401) 234-56-78</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="opacity-90">press@baltika.edu</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="font-semibold mb-4">Социальные сети</h4>
                  <div className="flex gap-3">
                    <Button variant="secondary" size="icon" className="rounded-xl">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-xl">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-xl">
                      <Icon name="Mail" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
              
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>Оставьте ваше сообщение</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Ваше сообщение" 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Отправить сообщение
                      <Icon name="Send" className="ml-2" size={16} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Icon name="Radio" className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold">БАлтика</span>
          </div>
          <p className="text-slate-400 mb-4">Пресс-служба студенческого кампуса</p>
          <p className="text-sm text-slate-500">© 2025 БАлтика. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
