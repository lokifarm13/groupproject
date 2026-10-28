<div align="center">

<img src="images/logo.svg" width="110" alt="Логотип аптеки Мята">

# 💊 Аптека «Мята»

**Современный сайт-визитка аптеки: быстро, адаптивно, с темной темой и анимациями**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-открыть_сайт-00a86b?style=for-the-badge)](https://ВАШ_ЛОГИН.github.io/apteka/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-181717?style=for-the-badge&logo=github)](https://pages.github.com/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Адаптивный-да-00a86b?style=flat-square)
![Dark Mode](https://img.shields.io/badge/Тёмная_тема-да-0b1620?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

[Демо](#-демо) · [Возможности](#-возможности) · [Структура](#-структура-проекта) · [Запуск](#-быстрый-старт) · [Команда](#-команда)

</div>

---

## 🌿 О проекте

**«Мята»** — учебный командный проект: статический многостраничный сайт вымышленной аптеки.
Мы показываем, как несколько разработчиков могут вместе работать над одним репозиторием с помощью **Git** и **GitHub**, и при этом получить аккуратный, современный и удобный сайт.

> 💡 Сайт не требует сборки и серверной части: чистые **HTML + CSS + JS**, публикация через **GitHub Pages**.

## 🖼 Демо

> 📸 Добавьте сюда скриншоты в папку `docs/` и подключите их так:

| ☀️ Светлая тема | 🌙 Тёмная тема | 📱 Мобильная версия |
|:---:|:---:|:---:|
| `docs/light.png` | `docs/dark.png` | `docs/mobile.png` |

🔗 **Сайт:** https://ВАШ_ЛОГИН.github.io/apteka/

## ✨ Возможности

| | Функция | Описание |
|---|---|---|
| 🌗 | **Переключатель темы** | Светлая и тёмная тема, выбор запоминается, учитывает настройки системы |
| 💊 | **Анимированный блистер** | Капсулы «падают» на главной странице и плавно покачиваются |
| 🎞 | **Бегущая строка** | Категории товаров, пауза при наведении |
| 🔢 | **Счётчики** | Цифры плавно набираются при прокрутке |
| 🛒 | **Мини-корзина** | Счётчик в шапке, уведомления, сохранение между страницами |
| 🔎 | **Фильтр каталога** | Мгновенная фильтрация товаров по категориям |
| 📝 | **Форма обратной связи** | Валидация полей и всплывающее уведомление |
| 📱 | **Адаптивность** | Корректно выглядит на телефоне, планшете и компьютере |
| ♿ | **Доступность** | Видимый фокус, поддержка «уменьшения движения» |

## 🗺 Карта сайта

```mermaid
flowchart TD
    A([🏠 index.html<br/>Главная]):::main --> B[💊 catalog.html<br/>Каталог]
    A --> C[🩺 services.html<br/>Услуги]
    A --> D[🏪 about.html<br/>О нас]
    A --> E[📞 contacts.html<br/>Контакты]
    A -.-> F[⚠️ 404.html<br/>Ошибка]

    B --> B1{{Фильтр по категориям}}
    B --> B2{{🛒 Добавить в корзину}}
    E --> E1{{📝 Форма обратной связи}}

    classDef main fill:#00a86b,stroke:#007a4d,color:#fff,stroke-width:2px;
    style B fill:#dff3ea,stroke:#00a86b,color:#0e2233
    style C fill:#dff3ea,stroke:#00a86b,color:#0e2233
    style D fill:#dff3ea,stroke:#00a86b,color:#0e2233
    style E fill:#dff3ea,stroke:#00a86b,color:#0e2233
    style F fill:#ffe3df,stroke:#ff6b5b,color:#0e2233
```

## 🧭 Путь посетителя

```mermaid
journey
    title Покупка в аптеке «Мята»
    section Знакомство
      Заходит на главную: 5: Посетитель
      Переключает тёмную тему: 4: Посетитель
    section Выбор
      Открывает каталог: 5: Посетитель
      Фильтрует по витаминам: 5: Посетитель
      Добавляет товар в корзину: 5: Посетитель
    section Связь
      Пишет фармацевту: 4: Посетитель
      Получает ответ: 5: Фармацевт
```

## ⚙️ Как работает корзина

```mermaid
sequenceDiagram
    actor U as 👤 Пользователь
    participant B as 🔘 Кнопка «В корзину»
    participant J as ⚙️ main.js
    participant S as 💾 localStorage
    participant H as 🛒 Шапка сайта

    U->>B: Нажимает
    B->>J: Событие click
    J->>S: Сохраняет количество
    J->>H: Обновляет счётчик и анимирует
    J-->>U: Показывает уведомление
```

## 🌳 Ветки проекта

```mermaid
gitGraph
    commit id: "Initial commit"
    branch dev
    checkout dev
    commit id: "Структура проекта"
    branch feature-catalog
    checkout feature-catalog
    commit id: "Каталог и фильтр"
    checkout dev
    branch feature-theme
    checkout feature-theme
    commit id: "Тёмная тема"
    checkout dev
    merge feature-catalog
    merge feature-theme
    commit id: "README и финальные правки"
    checkout main
    merge dev tag: "v1.0"
```

| Ветка | Назначение |
|---|---|
| `main` | Стабильная версия, из неё публикуется сайт |
| `dev` | Основная разработка |
| `feature-*` | Новые функции (по желанию) |
| `hotfix-*` | Срочные исправления (по желанию) |

## 📁 Структура проекта

```text
apteka/
├── 📄 index.html          # Главная
├── 📄 catalog.html        # Каталог товаров
├── 📄 services.html       # Услуги
├── 📄 about.html          # О нас
├── 📄 contacts.html       # Контакты и форма
├── 📄 404.html            # Страница ошибки
│
├── 📁 css/
│   └── 📄 style.css       # Стили, темы, адаптив
├── 📁 js/
│   └── 📄 main.js         # Тема, корзина, фильтр, форма, анимации
├── 📁 images/
│   ├── 🖼 logo.svg
│   ├── 🖼 hero.svg
│   └── 🖼 about.svg
│
├── 📄 README.md
└── 📄 .gitignore
```

## 🚀 Быстрый старт

```bash
# 1. Клонировать репозиторий
git clone https://github.com/ВАШ_ЛОГИН/apteka.git
cd apteka

# 2. Перейти в ветку разработки
git checkout dev

# 3. Открыть сайт
#    двойной клик по index.html
#    или расширение Live Server в VS Code
```

### 🌐 Публикация на GitHub Pages

1. Откройте **Settings → Pages**
2. В **Source** выберите **Deploy from a branch**
3. Ветка `main`, папка `/ (root)` → **Save**
4. Через 1–2 минуты сайт будет доступен по адресу из раздела «Демо»

## 🎨 Дизайн

| Роль | Цвет | HEX |
|---|---|---|
| Основной | 🟩 Мятный зелёный | `#00a86b` |
| Акцент | 🟥 Коралловый | `#ff6b5b` |
| Светлый фон | ⬜ Холодный белый | `#f2f7f9` |
| Тёмный фон | ⬛ Глубокий синий | `#0b1620` |

**Шрифты:** [Unbounded](https://fonts.google.com/specimen/Unbounded) для заголовков и [Onest](https://fonts.google.com/specimen/Onest) для текста.

## 👥 Команда

| Роль | Участник | Зона ответственности |
|---|---|---|
| 👑 Тимлид | [@логин](https://github.com/логин) | Репозиторий, координация, ревью |
| 💻 Разработчик 1 | [@логин](https://github.com/логин) | Главная, каталог |
| 💻 Разработчик 2 | [@логин](https://github.com/логин) | Услуги, о нас |
| 💻 Разработчик 3 | [@логин](https://github.com/логин) | Контакты, стили, JS |

## 🤝 Как участвовать

```bash
git pull                              # обновиться перед работой
git checkout -b feature-моя-задача    # создать ветку
git add .
git commit -m "Добавил ..."           # понятное сообщение
git push -u origin feature-моя-задача # отправить и открыть Pull Request
```

## ⚠️ Дисклеймер

Аптека, адрес, телефон и цены вымышленные. Проект создан в учебных целях и не заменяет консультацию врача.

---

<div align="center">

Сделано с 💚 командой «Мята»

⭐ Поставьте звезду, если проект понравился

</div>
