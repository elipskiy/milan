# Milan 3-Day Travel Planner 🏛️

Интерактивный планировщик путешествий по Милану. Создайте идеальный маршрут на 3 дня с лучшими местами для Instagram, ресторанами и достопримечательностями.

## 🚀 Демо

Сайт автоматически деплоится на GitHub Pages: `https://[your-username].github.io/[repository-name]/`

## ✨ Возможности

- 📍 **25+ тщательно отобранных мест** с описаниями на русском языке
- 🗓️ **Планировщик маршрута на 3 дня** с возможностью перетаскивания
- ❤️ **Избранное** для сохранения интересных мест
- 🔍 **Поиск и фильтры** по категориям, времени посещения
- 📷 **Instagram-фокус** — места с лучшими фото-локациями
- 🔗 **Поделиться маршрутом** через ссылку
- 💾 **Автосохранение** в браузере
- 📱 **Адаптивный дизайн** для мобильных устройств

## 🛠️ Технологии

- **Vanilla HTML5, CSS3, JavaScript ES6+**
- **Tailwind CSS** через CDN для стилизации
- **Lucide Icons** для иконок
- **LocalStorage** для сохранения данных
- **GitHub Pages** для хостинга

## 📂 Структура проекта

```
milan/
├── index.html          # Главная страница
├── style.css          # Дополнительные стили
├── script.js          # Основная логика приложения
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions для автодеплоя
└── README.md          # Этот файл
```

## 🚀 Быстрый старт

### Локальная разработка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/[your-username]/milan.git
cd milan
```

2. Откройте `index.html` в браузере или запустите локальный сервер:
```bash
# Python 3
python -m http.server 8000

# Node.js (если установлен live-server)
npx live-server

# VS Code Live Server extension
# Кликните правой кнопкой на index.html -> "Open with Live Server"
```

3. Откройте http://localhost:8000 в браузере

### Деплой на GitHub Pages

1. Создайте новый репозиторий на GitHub
2. Загрузите файлы:
```bash
git init
git add .
git commit -m "Initial commit: Milan travel planner"
git branch -M main
git remote add origin https://github.com/[your-username]/[repository-name].git
git push -u origin main
```

3. В настройках репозитория:
   - Перейдите в **Settings** → **Pages**
   - Выберите **Source**: GitHub Actions
   - Workflow автоматически запустится при пуше в main

4. Сайт будет доступен по адресу: `https://[your-username].github.io/[repository-name]/`

## 📝 Кастомизация

### Добавление новых мест

Отредактируйте массив `PLACES` в файле `script.js`:

```javascript
{
  id: "unique_place_id",
  title: "Название места",
  area: "Район",
  category: "classic|modern|museum|food|bar|rooftop|park",
  tags: ["тег1", "тег2", "insta"],
  bestTime: "morning|day|sunset|night",
  hype: 1-5, // Популярность
  price: "€|€€|€€€",
  bookingNeeded: true/false,
  hours: "10:00-22:00",
  img: "https://example.com/image.jpg",
  why: "Почему это место попало в рекомендации",
  desc: "Подробное описание места"
}
```

### Изменение стандартного маршрута

Отредактируйте объект `DEFAULT_ITINERARY` в `script.js`:

```javascript
const DEFAULT_ITINERARY = {
  1: ["place_id_1", "place_id_2", "place_id_3"],
  2: ["place_id_4", "place_id_5"],
  3: ["place_id_6", "place_id_7", "place_id_8"]
};
```

### Настройка дизайна

- Основные стили: Tailwind CSS классы в `index.html`
- Кастомные стили: `style.css`
- Цвета и анимации: CSS переменные в `:root`

## 🔧 Возможные улучшения

- [ ] Добавить карту с маршрутами
- [ ] Интеграция с Google Maps API
- [ ] Темная тема
- [ ] Многоязычность
- [ ] PWA с оффлайн-режимом
- [ ] Экспорт в PDF/календарь
- [ ] Отзывы пользователей
- [ ] Информация о погоде

## 🐛 Проблемы и решения

### Сайт не обновляется на GitHub Pages
- Проверьте статус workflow в разделе **Actions**
- Убедитесь, что в **Settings** → **Pages** выбран источник "GitHub Actions"

### Изображения не загружаются
- Проверьте CORS-политику внешних изображений
- Используйте локальные изображения или CDN с поддержкой CORS

### Не работает на мобильных устройствах
- Проверьте мета-тег viewport в `<head>`
- Тестируйте на реальных устройствах или в dev tools

## 📄 Лицензия

MIT License. Можете свободно использовать для личных и коммерческих проектов.

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Коммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Пушьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📞 Контакты

Если у вас есть вопросы или предложения:
- Создайте [Issue](../../issues)
- Напишите в [Discussions](../../discussions)

---

**Приятных путешествий по Милану! 🇮🇹✨**