import React, { useState, useEffect } from 'react';
import { Cherry, FileText, Search, Users, Moon, Sun } from 'lucide-react';
import './WikiPage.css';

export default function WikiPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Все', 'Участники', 'Модераторы', 'Админы', 'Бывшие Участники/Модераторы'];

  const articles = [
    { title: "Вафф", link: "/Waff", category: ["Участники", "Админы"] },
    { title: "Главная страница", link: "/", category: ["Все"] },
    { title: "Дункан", link: "/Dunkan", category: ["Участники", "Бывшие Участники/Модераторы"] },
    { title: "Крейген", link: "/Kreygen", category: ["Участники"] },
    { title: "Луикон", link: "/Lyikon", category: ["Участники", "Модераторы"] },
    { title: "Правила сервера", link: "/Rules", category: ["Все"] },
    { title: "Разносчик", link: "/Raznoschik", category: ["Участники", "Модераторы"] },
    { title: "Рокер", link: "/Rocker", category: ["Участники"] },
    { title: "Сай", link: "/Sai", category: ["Участники", "Админы"] },
    { title: "Соня", link: "/Sonya", category: ["Участники"] },
    { title: "Тарелка", link: "/Tarelca", category: ["Участники"] },
    { title: "Ток", link: "/Tok", category: ["Участники"] },
    { title: "Фред", link: "/Fred", category: ["Участники", "Модераторы"] },
    { title: "Черр", link: "/Cherru", category: ["Участники", "Бывшие Участники/Модераторы"] }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  const filteredArticles = articles.filter(article =>
    (activeCategory === 'Все' || article.category.includes(activeCategory)) &&
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (searchQuery.toLowerCase() === 'пидор') {
    filteredArticles.push({ title: "Крейген", link: "/Kreygen" });
  }

  return (
    <div className={`wiki-page ${isDarkMode ? 'dark-theme' : ''}`}>
      <nav className="top-nav">
        <div className="nav-left">
          <a href="/" className="logo">
            <Cherry size={24} className="cherry-icon" />
            <span>Вишневые Аллеи</span>
          </a>
        </div>
        <div className="nav-links">
          <a href="/Pages" className="nav-link">
            <FileText size={20} />
            <span>Статьи</span>
          </a>
          <a href="/creators" className="nav-link">
            <Users size={20} />
            <span>Создатели/Редакторы</span>
          </a>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      <main className="main-content">
        <div className="content-layout">
          <div className="section categories-section">
            <h2>Категории</h2>
            <div className="categories-list">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="section search-section">
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Поиск по вики..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="section articles-section">
            <div className="articles-grid">
              {filteredArticles.map((article, index) => (
                <a key={index} href={article.link} className="link">{article.title}</a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}