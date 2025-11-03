import {
  MapPin,
  Users,
  Camera,
  Globe,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [stats, setStats] = useState({ tours: 0, users: 0, cities: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x: x - 50, y: y - 50 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ tours: 500, users: 2000, cities: 15 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: MapPin,
      title: "Интерактивни мапи",
      description:
        "Креирајте детални тури со GPS локации и интерактивни мапи за секоја знаменитост",
    },
    {
      icon: Camera,
      title: "360° приказ",
      description:
        "Премиум функција со 360° приказ за да се види како изгледале локациите во минатото",
    },
    {
      icon: Globe,
      title: "Глобална платформа",
      description:
        "Проширување на платформата на повеќе земји и градови за глобално искуство",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white shadow-sm border-b border-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer">
              <img
                src="https://ucarecdn.com/41be5cf7-c30d-44fc-b381-7b277b6ed138/-/format/auto/"
                alt="Local Lands"
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold text-gray-900">
                Local Lands
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-[#cc8700] transition-colors font-medium"
              >
                Функции
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-[#cc8700] transition-colors font-medium"
              >
                Како функционира
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-[#cc8700] transition-colors font-medium"
              >
                Цени
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-[#cc8700] transition-colors font-medium"
              >
                Контакт
              </a>
            </nav>
            <button className="bg-[#ffbd59] hover:bg-[#cc8700] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Започни сега
            </button>
          </div>
        </div>
      </header>

      {/* Competition Banner Section */}
      <section className="relative py-12 bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 overflow-hidden">
        {/* Wavy background SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-purple-300"
          />
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-purple-200"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-purple-900">
                🏆 Конкурент во milioner.mk
              </span>
            </div>
            <a
              href="https://milioner.mk/vote/327624fc-58b1-43b8-ba54-ea0cafb426a0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
            >
              ГЛАСАЈ
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ffbd59] to-[#cc8700] text-white py-24 relative overflow-hidden">
        {/* Parallax Background Container */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ pointerEvents: "none" }}
        >
          {/* Layer 1 - Back trees (slowest) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-25"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            style={{
              transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <g>
              {/* Back left trees */}
              <rect
                x="30"
                y="380"
                width="25"
                height="140"
                fill="#7cb342"
                opacity="0.4"
              />
              <circle cx="42" cy="330" r="45" fill="#9ccc65" opacity="0.35" />
              <circle cx="12" cy="315" r="40" fill="#9ccc65" opacity="0.3" />
              <circle cx="72" cy="320" r="43" fill="#9ccc65" opacity="0.35" />

              {/* Back right trees */}
              <rect
                x="1140"
                y="400"
                width="30"
                height="120"
                fill="#7cb342"
                opacity="0.4"
              />
              <circle cx="1155" cy="350" r="55" fill="#9ccc65" opacity="0.35" />
              <circle cx="1125" cy="330" r="50" fill="#9ccc65" opacity="0.3" />
              <circle cx="1185" cy="340" r="52" fill="#9ccc65" opacity="0.35" />
            </g>
          </svg>

          {/* Layer 2 - Mid trees (medium speed) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-35"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            style={{
              transform: `translate(${mousePosition.x * 0.25}px, ${mousePosition.y * 0.25}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <g>
              {/* Mid left trees */}
              <rect x="80" y="360" width="35" height="160" fill="#8bc34a" />
              <circle cx="97" cy="300" r="55" fill="#c5e1a5" />
              <circle cx="60" cy="280" r="50" fill="#c5e1a5" />
              <circle cx="135" cy="290" r="52" fill="#c5e1a5" />

              {/* Mid center-left */}
              <rect
                x="250"
                y="390"
                width="30"
                height="130"
                fill="#8bc34a"
                opacity="0.8"
              />
              <circle cx="265" cy="345" r="45" fill="#c5e1a5" opacity="0.8" />
              <circle cx="235" cy="325" r="42" fill="#c5e1a5" opacity="0.7" />
              <circle cx="295" cy="335" r="44" fill="#c5e1a5" opacity="0.8" />

              {/* Mid right trees */}
              <rect x="1080" y="360" width="35" height="160" fill="#8bc34a" />
              <circle cx="1097" cy="300" r="55" fill="#c5e1a5" />
              <circle cx="1060" cy="280" r="50" fill="#c5e1a5" />
              <circle cx="1135" cy="290" r="52" fill="#c5e1a5" />

              {/* Mid center-right */}
              <rect
                x="870"
                y="390"
                width="30"
                height="130"
                fill="#8bc34a"
                opacity="0.8"
              />
              <circle cx="885" cy="345" r="45" fill="#c5e1a5" opacity="0.8" />
              <circle cx="855" cy="325" r="42" fill="#c5e1a5" opacity="0.7" />
              <circle cx="915" cy="335" r="44" fill="#c5e1a5" opacity="0.8" />
            </g>
          </svg>

          {/* Layer 3 - Front trees (fastest) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-45"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            style={{
              transform: `translate(${mousePosition.x * 0.35}px, ${mousePosition.y * 0.35}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <g>
              {/* Front left tree */}
              <rect x="20" y="340" width="45" height="180" fill="#558b2f" />
              <circle cx="42" cy="270" r="65" fill="#aed581" />
              <circle cx="0" cy="245" r="58" fill="#aed581" />
              <circle cx="85" cy="260" r="62" fill="#aed581" />

              {/* Front left-center bushes */}
              <circle cx="200" cy="420" r="35" fill="#7cb342" />
              <circle cx="220" cy="440" r="28" fill="#9ccc65" />
              <circle cx="175" cy="435" r="25" fill="#9ccc65" />

              {/* Front right tree */}
              <rect x="1135" y="340" width="45" height="180" fill="#558b2f" />
              <circle cx="1157" cy="270" r="65" fill="#aed581" />
              <circle cx="1115" cy="245" r="58" fill="#aed581" />
              <circle cx="1200" cy="260" r="62" fill="#aed581" />

              {/* Front right-center bushes */}
              <circle cx="950" cy="420" r="35" fill="#7cb342" />
              <circle cx="930" cy="440" r="28" fill="#9ccc65" />
              <circle cx="975" cy="435" r="25" fill="#9ccc65" />
            </g>
          </svg>

          {/* Layer 4 - Foreground bushes (very fast) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-40"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            style={{
              transform: `translate(${mousePosition.x * 0.45}px, ${mousePosition.y * 0.45}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <g>
              {/* Foreground bushes left */}
              <circle cx="150" cy="480" r="40" fill="#7cb342" />
              <circle cx="130" cy="500" r="32" fill="#9ccc65" />
              <circle cx="180" cy="510" r="30" fill="#9ccc65" />

              {/* Foreground bushes center */}
              <circle cx="600" cy="500" r="45" fill="#558b2f" />
              <circle cx="575" cy="520" r="35" fill="#aed581" />
              <circle cx="635" cy="525" r="35" fill="#aed581" />

              {/* Foreground bushes right */}
              <circle cx="1050" cy="480" r="40" fill="#7cb342" />
              <circle cx="1070" cy="500" r="32" fill="#9ccc65" />
              <circle cx="1020" cy="510" r="30" fill="#9ccc65" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-20 rounded-full">
              <p className="text-sm font-semibold text-yellow-50">
                🚀 Учесник на milioner.mk
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Откријте ги автентичните
              <br />
              <span className="text-yellow-200">локални искуства</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-yellow-100 max-w-3xl mx-auto animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              Виртуелен tour guide што преку локалци овозможува креирање на
              туристички тури со мапа и приказ на автентични места од секој град
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="https://milioner.mk/vote/327624fc-58b1-43b8-ba54-ea0cafb426a0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#cc8700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                Погледни демо
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#cc8700] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Започни бесплатно
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-[#cc8700] mb-2">
                {stats.tours}+
              </div>
              <p className="text-gray-600 font-semibold">Активни тури</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-[#cc8700] mb-2">
                {stats.users}+
              </div>
              <p className="text-gray-600 font-semibold">Верни корисници</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-[#cc8700] mb-2">
                {stats.cities}+
              </div>
              <p className="text-gray-600 font-semibold">Градови</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Проблемот кој го решаваме
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Многу туристички водичи не се жители на градовите каде што водат
                тури, па посетителите често добиваат генерализирани или површни
                информации.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#ffbd59] hover:shadow-md transition-shadow cursor-pointer transform hover:scale-105 origin-left">
                <h3 className="font-bold text-gray-900 mb-2">Нашето решение</h3>
                <p className="text-gray-600">
                  Туристите ќе добијат пристап до автентични приказни и
                  историски факти што се пренесуваат од колено на колено преку
                  локалците.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 origin-center">
              <div className="text-center">
                <div className="inline-block p-4 bg-[#ffbd59] bg-opacity-10 rounded-full mb-4">
                  <Users className="h-16 w-16 text-[#cc8700]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Автентични локални искуства
                </h3>
                <p className="text-gray-600">
                  Платформа каде локалците можат да креираат и споделуваат
                  сопствени тури со фотографии, мапи и описи на знаменитости.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Функции на платформата
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Сè што ви треба за да создадете и искусите автентични локални тури
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  onClick={() =>
                    setExpandedFeature(expandedFeature === index ? null : index)
                  }
                  className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-[#ffbd59]"
                >
                  <div className="bg-gradient-to-br from-[#ffbd59] to-[#cc8700] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                  {expandedFeature === index && (
                    <div className="mt-4 p-4 bg-[#ffbd59] bg-opacity-10 rounded-lg">
                      <p className="text-sm text-gray-700 font-semibold">
                        ✨ Ова е премиум функција
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Како функционира
            </h2>
            <p className="text-xl text-gray-600">
              Едноставни чекори до автентично локално искуство
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="bg-gradient-to-br from-[#ffbd59] to-[#cc8700] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold hover:shadow-lg transition-shadow">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step === 1 && "Регистрирај се"}
                  {step === 2 && "Креирај или избери тура"}
                  {step === 3 && "Искуси автентичноста"}
                </h3>
                <p className="text-gray-600">
                  {step === 1 &&
                    "Создај профил како локален водич или како турист кој сака да истражува"}
                  {step === 2 &&
                    "Локалците креираат тури, туристите избираат од достапните опции"}
                  {step === 3 &&
                    "Уживај во вистински локални приказни и скриени бисери на градот"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Бизнис модел
            </h2>
            <p className="text-xl text-gray-600">
              Транспарентни цени за сите корисници
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#ffbd59] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Основен план
              </h3>
              <p className="text-gray-600 mb-6">
                За туристи кои сакаат основни функции
              </p>
              <div className="text-3xl font-bold text-[#cc8700] mb-6">
                Бесплатно
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center hover:translate-x-2 transition-transform">
                  <Star className="h-5 w-5 text-[#ffbd59] mr-3" />
                  <span>Пристап до основни тури</span>
                </li>
                <li className="flex items-center hover:translate-x-2 transition-transform">
                  <Star className="h-5 w-5 text-[#ffbd59] mr-3" />
                  <span>Интерактивни мапи</span>
                </li>
                <li className="flex items-center hover:translate-x-2 transition-transform">
                  <Star className="h-5 w-5 text-[#ffbd59] mr-3" />
                  <span>Оценки и коментари</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-[#ffbd59] hover:text-white transition-all duration-300 transform hover:scale-105">
                Започни бесплатно
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#ffbd59] to-[#cc8700] p-8 rounded-xl shadow-lg text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#ffbd59]">
              <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Препорачано ⭐
              </div>
              <h3 className="text-2xl font-bold mb-4">Премиум план</h3>
              <p className="text-yellow-100 mb-6">
                За комплетно искуство со сите функции
              </p>
              <div className="text-3xl font-bold mb-6">$9.99/месец</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center hover:translate-x-2 transition-transform">
                  <Star className="h-5 w-5 text-yellow-200 mr-3" />
                  <span>Сите основни функции</span>
                </li>
                <li className="flex items-center hover:translate-x-2 transition-transform">
                  <Star className="h-5 w-5 text-yellow-200 mr-3" />
                  <span>360° приказ на локации</span>
                </li>
                <li className="flex items-center hover:translate-x-2 transition-transform">
                  <Star className="h-5 w-5 text-yellow-200 mr-3" />
                  <span>Историски приказ</span>
                </li>
                <li className="flex items-center hover:translate-x-2 transition-transform">
                  <Star className="h-5 w-5 text-yellow-200 mr-3" />
                  <span>Приоритетна поддршка</span>
                </li>
              </ul>
              <button className="w-full bg-white text-[#cc8700] py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-bold">
                Започни премиум
              </button>
            </div>
          </div>

          <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <p className="text-gray-600">
              <strong className="text-gray-900">За лиценцирани водичи:</strong>{" "}
              Процентуална провизија од секоја продадена тура
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ffbd59] to-[#cc8700] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold mb-4">Готови сте да започнете?</h2>
          <p className="text-xl text-yellow-100 mb-8">
            Придружете се на револуцијата на локалните туристички искуства
          </p>
          <button className="bg-white text-[#cc8700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center transform hover:scale-110 hover:shadow-lg">
            Започни денес
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-900 text-white py-12 hover:bg-gray-800 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://ucarecdn.com/41be5cf7-c30d-44fc-b381-7b277b6ed138/-/format/auto/"
                  alt="Local Lands"
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold">Local Lands</span>
              </div>
              <p className="text-gray-400">
                Автентични локални искуства за секој патник
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#ffbd59] transition-colors"
                  >
                    Функции
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-[#ffbd59] transition-colors"
                  >
                    Цени
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ffbd59] transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компанија</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ffbd59] transition-colors"
                  >
                    За нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ffbd59] transition-colors"
                  >
                    Кариера
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ffbd59] transition-colors"
                  >
                    Блог
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Поддршка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ffbd59] transition-colors"
                  >
                    Помош
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ffbd59] transition-colors"
                  >
                    Контакт
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#ffbd59] transition-colors"
                  >
                    Статус
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Local Lands. Сите права се задржани.</p>
            <p className="mt-2">Учесник во натпреварот milioner.mk</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
