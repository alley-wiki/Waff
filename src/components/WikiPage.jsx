import React, { useState, useEffect } from 'react';
import { Cherry, FileText, Users, Moon, Sun } from 'lucide-react';
import './WikiPage.css';
import avatar from "./avatar.png";

export default function WikiPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const peopleInfo = {
    name: "Вафф",
    nickname: "wafflinte_ivory",
    joinDate: "01.08.2022",
    age: "18 лет",
    birthDate: "10.12.06",
    birthPlace: "Украина",
    post: "Администратор"
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
              Вафф (wafflinte_ivory) - на данный момент владелец дискорд-сервера <a href="https://alley-wiki.github.io/" className="link"> Вишневые Аллеи</a>. Живет в Германии, увлекается рисованием. Самый близкий человек для Вафф - <a href="/Sai" className='link'>Сай</a>.
              </p>

              <h2>Попадание на сервер</h2>
              <p>30 июля 2022 г. один из старых знакомых <a href='/Cherru' className='link'>Черр</a> скинул ссылку на приватный дружеский сервер (где находилась Вафф), ведущий на её видеоролик, с анимацией под названием "punk tactics" (на данный момент анимация недоступна и скрыта). Вафф сразу узнала стиль <a href='/Cherru' className='link'>Черр</a> и перешла по ссылке, подписалась на канал старой подруги, начав активно следить за творчеством авторши.

01.08.2022 на канале <a href='https://www.youtube.com/@cherru_' className='link'>cherru</a> выходит анимация <a href='https://youtu.be/KI3MkN5Hfq4' className='link'>"How did you love"</a>, в описании которой была ссылка-приглашение на её дискорд-сервер. Вафф не раздумывая заходит туда, так как ей хотелось найти новых друзей, попытаться отвлечься от негатива и вновь восстановить общение с самой <a href='/Cherru' className='link'>Черр</a>, что в последствии ей удалось. В дальнейшем, <a href='/Cherru' className='link'>Черр</a> и Вафф вновь начнут хорошо дружить/общаться, Вафф начнёт помогать <a href='/Cherru' className='link'>Черр</a> с управлением сервера, встав на должность администратора.</p>

              <h2>Уходы из сервера</h2>
              <ul>
                <li>В один из дней Вафф выходит c сервера из-за страха перед, в прошлом, близким человеком, который очень негативно относился к <a href='/Cherru' className='link'>Черр</a>, но, успокоившись, вскоре возвращается обратно.</li>
                <li>Один из уходов был связан с тем, что, когда <a href='/Sai' className='link'>Сай</a> и Вафф устроили первый в истории сервера хэллоуинский ивент, с запланированным большим сюжетом, который они прописывали в скрытых каналах на сервере. По просьбе Вафф открыть нужный канал, где была готова следующая часть ивента (на тот момент права администратора у Вафф были "обрезаны"), <a href='/Dunkan' className='link'>Дункан</a> открывает абсолютно все каналы на всеобщее обозрение, что полностью обрушает всю инициативу и желание обоих работать, в ходе чего они уходят из сервера.</li>
              </ul>

              <h2>Интересные факты</h2>
              <ul>
                <li>На сервере, из-за шутки <a href='/Cherru' className='link'>Черр</a>, Вафф поставила себе ник "Хагги Ванги", что на долгое время стало её основным никнеймом на сервере.</li>
                <li>Изначально Вафф использовала по отношению к себе мужские местоимения, притворяясь парнем из-за неприятного опыта в общении. Псевдоним "Вафф" возник случайно и забавно, однажды Вафф написала, что хочет вафли и <a href='/Cherru' className='link'>Черр</a> написала "ваф ли", что случайным образом подтолкнуло на создание данного никнейма.</li>
                <li>Вафф и <a href='/Cherru' className='link'>Черр</a> были знакомы ещё с 2019-2020-го года, благодаря чатам в Ютубе, которые в скором времени Ютуб и удалил. Активно начали общаться 2020-го года. 20.05.2021 общение прекращается до создания дискорд-сервера <a href="https://alley-wiki.github.io/" className="link"> Вишневые Аллеи</a>.</li>
              </ul>
            </div>

            <div className="infobox section">
              <h2>{peopleInfo.name}</h2>
              <img src={avatar} alt="Вафф" className="avatar" />
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