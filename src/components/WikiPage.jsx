import React, { useState, useEffect } from 'react';
import { Cherry, FileText, Users, Moon, Sun } from 'lucide-react';
import './WikiPage.css';
import avatar from "./avatar.jpg";

export default function WikiPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const peopleInfo = {
    name: "Вадим Александрович",
    nickname: "lord.reivun",
    joinDate: "24.07.2022",
    age: "19 лет",
    birthDate: "14.01.05",
    birthPlace: "Украина",
    post: "Основатель, Бывший Модератор"
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
              Дункан (lord.reivun) - бывший и первый администратор дискорд-сервера <a href="https://alley-wiki.github.io/" className="link"> Вишневые Аллеи</a>, зашел на сервер 24 июля 2022 года, наткнувшись на работы Черр и предложив помочь с сервером.

Проживает в городе Воронеж, учится на юриста с 2023 года. Имеет опыт в работе с ботами-дискорд, организации РП-проектов как на ВА так и на других серверах. Является одним из основателей майнкрафт-сервера "Вишнёвые Выживания". Ушел из сервера в августе 2024 года.
              </p>

              <h2>Интересные факты</h2>
              <ul>
                <li>Создатель <a href="https://alley-wiki.github.io/" className="link"> Вишневых Аллей</a> и Вишневых Выживаний</li>
                <li>До знакомства с <a href='/Cherru' className='link'>Черр</a> был администратором нескольких полит-рп серверов и дискорд-сервера ютубера по <a href="https://ru.wikipedia.org/wiki/Hearts_of_Iron_IV" className="link">Hearts of Iron 4</a>.</li>
                <li>В определенный период, он добровольно ушел с поста администратора и временно был модератором.
                Стал снова модератором дискорд-сервера <a href="https://alley-wiki.github.io/" className="link"> Вишневые Аллеи</a> но ушел из поста модератора и с <a href="https://alley-wiki.github.io/" className="link">сервера</a></li>
                <li>Были временные проблемы с алкоголем и табакокурением, на данный момент контролирует себя.</li>
                <li>Часто менял образ персонажа и заказывал множество артов для своей новеллы, которую так и не реализовал.</li>
                <li>Псевдоним выбрал благодаря игре "<a href="https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_V" className="link">Герои Меча и Магии 5</a>", взяв имя одного из второстепенных героев. Фамилия "Ворон" была основа из-за увлечения, интереса к одноимённой птице.</li>
                <li>Увлекается такими играми как <a href="https://ru.wikipedia.org/wiki/Crusader_Kings_III" className="link">Crusader Kings 3</a>, <a href='https://ru.wikipedia.org/wiki/Honkai:_Star_Rail' className='link'>Honkai Star Rail</a>, <a href='https://ru.wikipedia.org/wiki/S.T.A.L.K.E.R._(%D1%81%D0%B5%D1%80%D0%B8%D1%8F_%D0%B8%D0%B3%D1%80)' className='link'>Stalker</a>, <a href='https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_(%D1%81%D0%B5%D1%80%D0%B8%D1%8F_%D0%B8%D0%B3%D1%80)' className='link'>Герои Меча и Магии</a>, <a href='https://ru.wikipedia.org/wiki/Minecraft' className='link'>Minecraft</a>.</li>
              </ul>
            </div>

            <div className="infobox section">
              <h2>{peopleInfo.name}</h2>
              <img src={avatar} alt="Человек" className="avatar" />
              <table>
                <tbody>
                  <tr>
                    <td>Никнейм</td>
                    <td>{peopleInfo.nickname}</td>
                  </tr>
                  <tr>
                    <td>Дата захода на сервер</td>
                    <td>{peopleInfo.joinDate}</td>
                  </tr>
                  <tr>
                    <td>Возраст</td>
                    <td>{peopleInfo.age}</td>
                  </tr>
                  <tr>
                    <td>Дата рождения</td>
                    <td>{peopleInfo.birthDate}</td>
                  </tr>
                  <tr>
                    <td>Место рождения</td>
                    <td>{peopleInfo.birthPlace}</td>
                  </tr>
                  <tr>
                    <td>Должность</td>
                    <td>{peopleInfo.post}</td>
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