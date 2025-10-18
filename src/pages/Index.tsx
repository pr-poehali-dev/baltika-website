import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const products = [
  { id: 1, name: "Балтика №3 Классическое", type: "Светлое", alc: "4.8%", desc: "Классический вкус, проверенный временем" },
  { id: 2, name: "Балтика №7 Экспортное", type: "Светлое", alc: "5.4%", desc: "Премиальное пиво для ценителей" },
  { id: 3, name: "Балтика №9 Крепкое", type: "Крепкое", alc: "8.0%", desc: "Насыщенный и плотный вкус" },
  { id: 4, name: "Балтика №0 Безалкогольное", type: "Безалкогольное", alc: "0.5%", desc: "Вкус настоящего пива без алкоголя" },
  { id: 5, name: "Балтика №4 Оригинальное", type: "Тёмное", alc: "5.6%", desc: "Богатый солодовый вкус" },
  { id: 6, name: "Балтика №6 Портер", type: "Тёмное", alc: "7.0%", desc: "Классический портер с шоколадными нотами" }
];

const achievements = [
  { year: "1990", title: "Основание завода", icon: "Factory" },
  { year: "1996", title: "Первый экспорт", icon: "Globe" },
  { year: "2005", title: "Лидер рынка", icon: "Trophy" },
  { year: "2024", title: "30+ стран экспорта", icon: "Award" }
];

const values = [
  {
    title: "Качество превыше всего",
    desc: "Мы используем только лучшие ингредиенты и строго контролируем каждый этап производства",
    icon: "Award",
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "Инновации и традиции",
    desc: "Сочетаем вековые пивоваренные традиции с современными технологиями",
    icon: "Lightbulb",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Ответственность",
    desc: "Заботимся об экологии, обществе и продвигаем культуру умеренного потребления",
    icon: "Heart",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Уважение к людям",
    desc: "Создаём комфортные условия для сотрудников и партнёрские отношения с клиентами",
    icon: "Users",
    color: "from-purple-500 to-purple-600"
  }
];

const studentNews = [
  {
    id: 1,
    title: "Открытие студенческого медиацентра",
    date: "15 октября 2025",
    category: "События",
    image: "https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/d1e29d58-c450-454d-ac6e-57c50d9bfc6b.jpg",
    excerpt: "Студенческая пресс-служба Балтика открывает новый медиацентр с современным оборудованием"
  },
  {
    id: 2,
    title: "Фестиваль студенческой журналистики 2025",
    date: "12 октября 2025",
    category: "Анонсы",
    image: "https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/cb36ece6-50af-455c-a180-01bcd58732f8.jpg",
    excerpt: "Приглашаем всех студентов принять участие в ежегодном фестивале журналистики"
  },
  {
    id: 3,
    title: "Мастер-класс от профессионалов медиа",
    date: "10 октября 2025",
    category: "Мероприятия",
    image: "https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/c49bffca-bc99-47fb-8357-ea1e01339f7d.jpg",
    excerpt: "Серия мастер-классов от ведущих журналистов для студентов"
  }
];

const studentTeam = [
  { name: "Погосян Ануш", role: "Главный редактор", emoji: "👩‍💼", bio: "Руководит работой пресс-службы" },
  { name: "Фурманова Мария", role: "Корреспондент", emoji: "✍️", bio: "Пишет статьи и репортажи" },
  { name: "Лапшина Виктория", role: "Фотограф", emoji: "📸", bio: "Создает визуальный контент" }
];

const studentEvents = [
  { date: "20.10", title: "Круглый стол о медиаграмотности", time: "15:00", location: "Ауд. 301" },
  { date: "25.10", title: "Конкурс студенческих репортажей", time: "12:00", location: "Медиацентр" },
  { date: "30.10", title: "День открытых дверей пресс-службы", time: "14:00", location: "Главный корпус" }
];

export default function Index() {
  const [selectedType, setSelectedType] = useState("Все");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showStudentPress, setShowStudentPress] = useState(false);

  const filteredProducts = selectedType === "Все" 
    ? products 
    : products.filter(p => p.type === selectedType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено!', {
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <Icon name="Beer" className="text-amber-400" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  БАЛТИКА
                </h1>
                <p className="text-xs text-muted-foreground">С 1990 года</p>
              </div>
            </button>
            <nav className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-primary transition-colors">Продукция</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('values')} className="text-sm font-medium hover:text-primary transition-colors">Ценности</button>
              <button onClick={() => scrollToSection('quality')} className="text-sm font-medium hover:text-primary transition-colors">Качество</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </nav>
            <Button onClick={() => toast.info('Раздел "Где купить" в разработке')} className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
              Где купить
            </Button>
          </div>
        </div>
      </header>

      <section id="hero" className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/3b2abc00-7e82-49f0-a05e-549de262e078.jpg"
            alt="Балтика продукция" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-6 bg-amber-500 border-0 text-white text-sm px-4 py-1">
              Лидер пивоваренной индустрии
            </Badge>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Традиции качества<br/>с 1990 года
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Мы создаём пиво мирового класса, используя лучшие ингредиенты и проверенные временем технологии
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollToSection('products')} size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Наша продукция
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
              <Button onClick={() => scrollToSection('about')} size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                Узнать больше
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-1">30+</div>
                <div className="text-sm text-white/80">стран экспорта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-1">15</div>
                <div className="text-sm text-white/80">видов пива</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-1">№1</div>
                <div className="text-sm text-white/80">в России</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-0">Продукция</Badge>
            <h2 className="text-5xl font-bold mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент премиального пива на любой вкус
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {["Все", "Светлое", "Тёмное", "Крепкое", "Безалкогольное"].map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className={selectedType === type ? "bg-gradient-to-r from-blue-600 to-blue-800" : ""}
              >
                {type}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 animate-scale-in border-2" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center relative overflow-hidden">
                  <Icon name="Beer" className="text-amber-400/20 absolute" size={120} />
                  <div className="relative text-center text-white z-10">
                    <div className="text-5xl font-bold mb-2">{product.alc}</div>
                    <Badge className="bg-amber-500 border-0">{product.type}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => toast.info(`${product.name}`, { description: product.desc })}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  >
                    Подробнее
                    <Icon name="ChevronRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-amber-500 text-white border-0">О компании</Badge>
              <h2 className="text-5xl font-bold mb-6">34 года традиций и инноваций</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Балтика — крупнейший производитель пива в России и Восточной Европе. 
                Мы гордимся нашей историей, качеством продукции и доверием миллионов потребителей.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Используя только натуральные ингредиенты и современные технологии, 
                мы создаём пиво, которое любят во всём мире.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="Award" className="text-amber-500 mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">международных наград</div>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="Users" className="text-blue-600 mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">сотрудников</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/b3b4f37e-7fed-4c17-bb8f-9f9a58dc1581.jpg"
                alt="Завод Балтика" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold mb-1">1990</div>
                <div className="text-sm">Год основания</div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Наша миссия</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Создавать качественное пиво, которое объединяет людей и дарит радость, 
              при этом заботясь о природе и обществе. Мы стремимся быть лидером отрасли 
              не только по объёмам производства, но и по качеству, инновациям и социальной ответственности.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {achievements.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in cursor-pointer" 
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => toast.info(item.title, { description: `${item.year} год` })}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-amber-400" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-blue-700 mb-2">{item.year}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-0">Ценности</Badge>
            <h2 className="text-5xl font-bold mb-4">Наши ценности</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся каждый день
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {values.map((value, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon name={value.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-3">{value.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{value.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/6ddeaa7d-bfdb-4fc3-93db-61da0766dbfb.jpg"
                alt="Команда Балтика" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6">Социальная ответственность</h3>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Leaf" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Забота об экологии</h4>
                    <p className="text-sm text-muted-foreground">Используем возобновляемую энергию и программы переработки</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="GraduationCap" className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Образовательные программы</h4>
                    <p className="text-sm text-muted-foreground">Поддерживаем молодых специалистов и культуру потребления</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="HeartHandshake" className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Благотворительность</h4>
                    <p className="text-sm text-muted-foreground">Участвуем в социальных проектах и помогаем обществу</p>
                  </div>
                </div>
              </div>
              <img 
                src="https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/09ceef5e-c652-4cd5-bd3d-27998055584c.jpg"
                alt="Экология" 
                className="rounded-xl shadow-lg mt-6"
              />
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <Button 
              onClick={() => setShowStudentPress(!showStudentPress)}
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white"
            >
              {showStudentPress ? 'Скрыть' : 'Показать'} студенческую пресс-службу
              <Icon name={showStudentPress ? "ChevronUp" : "ChevronDown"} className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {showStudentPress && (
        <section id="student-press" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4YzAgMy43MSAxLjEyIDcuMTggMy4wNSAxMC4wNkw4LjEgMjMuMDFDNy40IDIxLjQxIDcgMTkuNzMgNyAxOGMwLTYuMDggNC45My0xMSAxMS0xMXMxMSA0LjkyIDExIDExYzAgMS43My0uNCwzLjQxLTEuMSA1LjAxbDUuMDUgNS4wNUM0OC44OCAyNS4xOCA1MCAyMS43MSA1MCAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-0">Студенческая пресс-служба</Badge>
              <h2 className="text-5xl font-bold mb-4">Студенческая пресс-служба БАлтика</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Информируем студентов о жизни кампуса и организуемых событиях
              </p>
            </div>

            <div className="max-w-6xl mx-auto mb-16">
              <Tabs defaultValue="news" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/10 backdrop-blur-sm">
                  <TabsTrigger value="news" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">Новости</TabsTrigger>
                  <TabsTrigger value="team" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">Команда</TabsTrigger>
                  <TabsTrigger value="events" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">Мероприятия</TabsTrigger>
                  <TabsTrigger value="media" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">Медиа</TabsTrigger>
                </TabsList>

                <TabsContent value="news" className="animate-fade-in">
                  <div className="grid md:grid-cols-3 gap-8">
                    {studentNews.map((item, index) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform hover:scale-110"
                          />
                          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white">
                            {item.category}
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardDescription className="flex items-center gap-2 text-xs">
                            <Icon name="Calendar" size={14} />
                            {item.date}
                          </CardDescription>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <CardDescription className="text-base">{item.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button 
                            onClick={() => toast.info(item.title, { description: item.excerpt })}
                            variant="outline" 
                            className="w-full group"
                          >
                            Читать далее
                            <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="team" className="animate-fade-in">
                  <Card className="bg-white/95 backdrop-blur-sm">
                    <CardHeader className="text-center">
                      <CardTitle className="text-3xl text-foreground">Наша команда</CardTitle>
                      <CardDescription className="text-lg">Знакомьтесь с активными участниками пресс-службы</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        {studentTeam.map((member, index) => (
                          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => toast.info(member.name, { description: member.bio })}>
                            <CardHeader>
                              <div className="flex flex-col items-center text-center gap-4">
                                <div className="text-6xl">{member.emoji}</div>
                                <div>
                                  <CardTitle className="text-xl">{member.name}</CardTitle>
                                  <CardDescription className="text-base font-semibold text-purple-700">{member.role}</CardDescription>
                                  <CardDescription className="text-sm mt-1">{member.bio}</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="events" className="animate-fade-in">
                  <div className="space-y-4">
                    {studentEvents.map((event, index) => (
                      <Card key={index} className="hover:shadow-xl transition-all bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                                <div className="text-3xl font-bold">{event.date.split('.')[0]}</div>
                                <div className="text-sm">{event.date.split('.')[1]}</div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-xl mb-2 text-foreground">{event.title}</h3>
                              <div className="flex gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Icon name="Clock" size={16} />
                                  {event.time}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Icon name="MapPin" size={16} />
                                  {event.location}
                                </div>
                              </div>
                            </div>
                            <Button 
                              onClick={() => toast.success('Вы записались на мероприятие!', { description: event.title })}
                              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            >
                              Записаться
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="media" className="animate-fade-in">
                  <Card className="bg-white/95 backdrop-blur-sm">
                    <CardHeader className="text-center">
                      <CardTitle className="text-3xl text-foreground">Медиагалерея</CardTitle>
                      <CardDescription className="text-lg">Фото и видео с мероприятий</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        {studentNews.map((item, index) => (
                          <div key={index} className="relative group cursor-pointer" onClick={() => toast.info('Просмотр медиа', { description: item.title })}>
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="rounded-xl shadow-lg w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                              <div className="text-white">
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm opacity-90">{item.date}</p>
                              </div>
                            </div>
                            <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Icon name="Play" className="text-purple-600" size={24} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-white">Присоединяйся к нам!</CardTitle>
                  <CardDescription className="text-lg text-white/90">
                    Стань частью студенческой пресс-службы БАлтика
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white/10 rounded-xl">
                      <Icon name="Camera" className="mx-auto mb-3" size={40} />
                      <h4 className="font-semibold mb-2">Фоторепортёры</h4>
                      <p className="text-sm opacity-90">Снимай события кампуса</p>
                    </div>
                    <div className="text-center p-6 bg-white/10 rounded-xl">
                      <Icon name="Pen" className="mx-auto mb-3" size={40} />
                      <h4 className="font-semibold mb-2">Журналисты</h4>
                      <p className="text-sm opacity-90">Пиши статьи и репортажи</p>
                    </div>
                    <div className="text-center p-6 bg-white/10 rounded-xl">
                      <Icon name="Video" className="mx-auto mb-3" size={40} />
                      <h4 className="font-semibold mb-2">Видеооператоры</h4>
                      <p className="text-sm opacity-90">Создавай видеоконтент</p>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <Button 
                      onClick={() => toast.success('Заявка отправлена!', { description: 'Мы свяжемся с вами в ближайшее время' })}
                      size="lg" 
                      className="bg-white text-purple-700 hover:bg-white/90"
                    >
                      Подать заявку
                      <Icon name="Send" className="ml-2" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <section id="quality" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-amber-100 text-amber-700 border-0">Качество</Badge>
            <h2 className="text-5xl font-bold mb-4">Контроль качества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая бутылка проходит строжайший контроль на всех этапах производства
            </p>
          </div>

          <Tabs defaultValue="ingredients" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="ingredients">Ингредиенты</TabsTrigger>
              <TabsTrigger value="production">Производство</TabsTrigger>
              <TabsTrigger value="control">Контроль</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ingredients" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img 
                  src="https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/5d9a0888-2e60-4a62-b2a4-e23f8978ea3a.jpg"
                  alt="Ингредиенты" 
                  className="rounded-xl shadow-xl"
                />
                <div>
                  <h3 className="text-3xl font-bold mb-6">Только натуральные ингредиенты</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Wheat" className="text-amber-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Солод высшего качества</h4>
                        <p className="text-sm text-muted-foreground">Отборный ячменный солод от проверенных поставщиков Европы</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Droplet" className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Чистейшая вода</h4>
                        <p className="text-sm text-muted-foreground">Многоступенчатая система очистки артезианской воды</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Leaf" className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Натуральный хмель</h4>
                        <p className="text-sm text-muted-foreground">Ароматные сорта хмеля из Германии и Чехии</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="production" className="animate-fade-in">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">1</span>
                      </div>
                      <h4 className="font-semibold mb-2">Варка сусла</h4>
                      <p className="text-sm text-muted-foreground">Традиционная технология варки с точным соблюдением температурных режимов</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">2</span>
                      </div>
                      <h4 className="font-semibold mb-2">Брожение</h4>
                      <p className="text-sm text-muted-foreground">Контролируемое брожение в современных цилиндро-конических танках</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">3</span>
                      </div>
                      <h4 className="font-semibold mb-2">Розлив</h4>
                      <p className="text-sm text-muted-foreground">Автоматизированная линия розлива с защитой от кислорода и света</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <img 
                      src="https://cdn.poehali.dev/projects/7421cca5-0f09-43bd-8e4c-494ec9ab45e3/files/d6cf6908-8bc1-4304-8cc1-46ad0e9666cf.jpg"
                      alt="Контроль качества" 
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="control" className="animate-fade-in">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckCircle" className="text-green-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">Лабораторный контроль</h4>
                        <p className="text-muted-foreground">Более 100 параметров проверяется на каждом этапе производства нашими специалистами</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Shield" className="text-blue-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">Международные сертификаты</h4>
                        <p className="text-muted-foreground">Соответствие стандартам ISO 9001, ISO 14001 и ХАССП</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Award" className="text-amber-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">Дегустационная комиссия</h4>
                        <p className="text-muted-foreground">Профессиональная экспертная оценка вкусовых качеств каждой партии продукции</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl opacity-90">Мы всегда рады вашим вопросам и предложениям</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  
                  <div className="space-y-6">
                    <button 
                      onClick={() => toast.info('Адрес', { description: 'г. Санкт-Петербург, 6-й Верхний переулок, д. 3' })}
                      className="flex items-start gap-4 w-full text-left hover:opacity-80 transition-opacity"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon name="MapPin" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Головной офис</h4>
                        <p className="opacity-90">г. Санкт-Петербург, 6-й Верхний переулок, д. 3</p>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => toast.info('Телефон', { description: '8 (800) 700-03-00' })}
                      className="flex items-start gap-4 w-full text-left hover:opacity-80 transition-opacity"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon name="Phone" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Телефон</h4>
                        <p className="opacity-90">8 (800) 700-03-00</p>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => toast.info('Email', { description: 'info@baltika.ru' })}
                      className="flex items-start gap-4 w-full text-left hover:opacity-80 transition-opacity"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon name="Mail" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="opacity-90">info@baltika.ru</p>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Социальные сети</h4>
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => toast.info('Instagram', { description: '@baltika_official' })}
                      variant="secondary" 
                      size="icon" 
                      className="rounded-lg bg-white/10 hover:bg-white/20"
                    >
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button 
                      onClick={() => toast.info('Facebook', { description: 'Baltika Official' })}
                      variant="secondary" 
                      size="icon" 
                      className="rounded-lg bg-white/10 hover:bg-white/20"
                    >
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button 
                      onClick={() => toast.info('Twitter', { description: '@baltika' })}
                      variant="secondary" 
                      size="icon" 
                      className="rounded-lg bg-white/10 hover:bg-white/20"
                    >
                      <Icon name="Twitter" size={20} />
                    </Button>
                    <Button 
                      onClick={() => toast.info('YouTube', { description: 'Baltika Breweries' })}
                      variant="secondary" 
                      size="icon" 
                      className="rounded-lg bg-white/10 hover:bg-white/20"
                    >
                      <Icon name="Youtube" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
              
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>Оставьте ваше сообщение и мы свяжемся с вами</CardDescription>
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
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
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
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
                <Icon name="Beer" className="text-amber-400" size={24} />
                <span className="text-xl font-bold">БАЛТИКА</span>
              </button>
              <p className="text-sm text-slate-400">Традиции качества с 1990 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => { setSelectedType('Светлое'); scrollToSection('products'); }} className="hover:text-white transition-colors">Светлое пиво</button></li>
                <li><button onClick={() => { setSelectedType('Тёмное'); scrollToSection('products'); }} className="hover:text-white transition-colors">Тёмное пиво</button></li>
                <li><button onClick={() => { setSelectedType('Крепкое'); scrollToSection('products'); }} className="hover:text-white transition-colors">Крепкое пиво</button></li>
                <li><button onClick={() => { setSelectedType('Безалкогольное'); scrollToSection('products'); }} className="hover:text-white transition-colors">Безалкогольное</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('values')} className="hover:text-white transition-colors">Ценности</button></li>
                <li><button onClick={() => toast.info('Раздел "Карьера" в разработке')} className="hover:text-white transition-colors">Карьера</button></li>
                <li><button onClick={() => toast.info('Раздел "Пресс-центр" в разработке')} className="hover:text-white transition-colors">Пресс-центр</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Контакты</button></li>
                <li><button onClick={() => toast.info('Раздел "Где купить" в разработке')} className="hover:text-white transition-colors">Где купить</button></li>
                <li><button onClick={() => toast.info('Раздел "Экскурсии" в разработке')} className="hover:text-white transition-colors">Экскурсии</button></li>
                <li><button onClick={() => toast.info('Раздел "FAQ" в разработке')} className="hover:text-white transition-colors">FAQ</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">© 2025 Балтика. Все права защищены.</p>
            <p className="text-xs text-slate-600">Чрезмерное употребление алкоголя вредит вашему здоровью</p>
          </div>
        </div>
      </footer>
    </div>
  );
}