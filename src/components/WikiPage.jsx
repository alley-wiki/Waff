import React, { useState, useEffect } from 'react';
import { Cherry, FileText, Users, Moon, Sun } from 'lucide-react';
import './WikiPage.css';
import avatar from "./rocker.png";

export default function WikiPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const rockerInfo = {
    name: "Рокер",
    nickname: "rocker7003",
    joinDate: "08.04.2023",
    age: "16 лет",
    birthDate: "17.11.08",
    birthPlace: "Казахстан"
  };

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
          <a href="https://alley-wiki.github.io/Pages/" className="nav-link">
            <FileText size={20} />
            <span>Статьи</span>
          </a>
          <a href="https://alley-wiki.github.io/creators/" className="nav-link">
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
          <div className="content-wrapper">
            <div className="main-info section">
              <h2>Основная информация</h2>
              <p>
                Рокер (rocker7003) - зашел на сервер 8 апреля 2023 года, найдя видео 
                <a href="/Cherru" className="link"> Черр </a> 
                в рекомендациях ютуба, в котором ему понравился стиль рисовки, и потом перейдя 
                по приглашению на сервер из описания видео.
              </p>

              <h2>Чем занимается</h2>
              <p>Общается на сервере, делает ии-каверы и редактирует эту википедию.</p>

              <h2>Интересные факты</h2>
              <ul>
                <li>Создал эту википедию, но была старая на фэндоме, но её удалили</li>
                <li>Часто меняет аватарки и никнеймы</li>
                <li>Иногда притворяется кем-то ради шутки</li>
              </ul>
            </div>

            <div className="infobox section">
              <h2>{rockerInfo.name}</h2>
              <img src={avatar} alt="Рокер" className="avatar" />
              <table>
                <tbody>
                  <tr>
                    <td>Никнейм</td>
                    <td>{rockerInfo.nickname}</td>
                  </tr>
                  <tr>
                    <td>Дата захода на сервер</td>
                    <td>{rockerInfo.joinDate}</td>
                  </tr>
                  <tr>
                    <td>Возраст</td>
                    <td>{rockerInfo.age}</td>
                  </tr>
                  <tr>
                    <td>Дата рождения</td>
                    <td>{rockerInfo.birthDate}</td>
                  </tr>
                  <tr>
                    <td>Место рождения</td>
                    <td>{rockerInfo.birthPlace}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}