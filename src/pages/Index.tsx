import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

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

export default function Index() {
  const [selectedType, setSelectedType] = useState("Все");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const filteredProducts = selectedType === "Все" 
    ? products 
    : products.filter(p => p.type === selectedType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <Icon name="Beer" className="text-amber-400" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  БАЛТИКА
                </h1>
                <p className="text-xs text-muted-foreground">С 1990 года</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Продукция</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
              <a href="#quality" className="text-sm font-medium hover:text-primary transition-colors">Качество</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
              Где купить
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[700px] overflow-hidden">
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
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Наша продукция
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
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

          <div className="flex justify-center gap-3 mb-12">
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
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
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
                  <div className="text-sm text-muted-foreground">наград</div>
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

          <div className="grid md:grid-cols-4 gap-8 mt-24">
            {achievements.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
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

      <section id="quality" className="py-24 bg-white">
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
                        <p className="text-sm text-muted-foreground">Отборный ячменный солод от проверенных поставщиков</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Droplet" className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Чистейшая вода</h4>
                        <p className="text-sm text-muted-foreground">Многоступенчатая система очистки воды</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Leaf" className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Натуральный хмель</h4>
                        <p className="text-sm text-muted-foreground">Ароматные сорта хмеля из лучших регионов</p>
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
                      <p className="text-sm text-muted-foreground">Традиционная технология варки с соблюдением температурных режимов</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">2</span>
                      </div>
                      <h4 className="font-semibold mb-2">Брожение</h4>
                      <p className="text-sm text-muted-foreground">Контролируемое брожение в современных танках</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">3</span>
                      </div>
                      <h4 className="font-semibold mb-2">Розлив</h4>
                      <p className="text-sm text-muted-foreground">Автоматизированная линия розлива с защитой от кислорода</p>
                    </div>
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
                        <p className="text-muted-foreground">Более 100 параметров проверяется на каждом этапе производства</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Shield" className="text-blue-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">Международные сертификаты</h4>
                        <p className="text-muted-foreground">Соответствие стандартам ISO и ХАССП</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Award" className="text-amber-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">Дегустационная комиссия</h4>
                        <p className="text-muted-foreground">Экспертная оценка вкусовых качеств каждой партии</p>
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
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon name="MapPin" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Головной офис</h4>
                        <p className="opacity-90">г. Санкт-Петербург, 6-й Верхний переулок, д. 3</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon name="Phone" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Телефон</h4>
                        <p className="opacity-90">8 (800) 700-03-00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon name="Mail" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="opacity-90">info@baltika.ru</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Социальные сети</h4>
                  <div className="flex gap-3">
                    <Button variant="secondary" size="icon" className="rounded-lg bg-white/10 hover:bg-white/20">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-lg bg-white/10 hover:bg-white/20">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-lg bg-white/10 hover:bg-white/20">
                      <Icon name="Twitter" size={20} />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-lg bg-white/10 hover:bg-white/20">
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
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Beer" className="text-amber-400" size={24} />
                <span className="text-xl font-bold">БАЛТИКА</span>
              </div>
              <p className="text-sm text-slate-400">Традиции качества с 1990 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Светлое пиво</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тёмное пиво</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Крепкое пиво</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безалкогольное</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">История</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресс-центр</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Где купить</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Экскурсии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
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
