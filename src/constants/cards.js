// Такие данные карточки мы получаем в ответе NewsAPI:

//     название издания находится в свойстве source.name;
//     заголовок — в title,
//     дата публикации — в publishedAt;
//     подзаголовок — в description;
//     изображение — urlToImage.

const news = [
  {
    source: {
      id: "engadget",
      name: "Engadget"
    },
    title: 'Национальное достояние – парки',
    publishedAt: '2 августа, 2019',
    description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    url: 'https://google.com',
    urlToImage: 'https://images.unsplash.com/photo-1571680233390-b0061928cea0',
    keyWord: 'Природа',
    content: "Belkin wants you stop using its Portable Wireless Charger + Stand Special Edition device if you have one. The accessory-maker has issued a voluntary recall for the power bank/charging stand due to a … [+877 chars]",
    _id: 1
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge"
    },
    title: 'Лесные огоньки: история одной фотографии',
    publishedAt: '2 августа, 2019',
    description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    urlToImage: 'https://images.unsplash.com/photo-1550399741-599433fae4d1',
    keyWord: 'Природа',
    url: 'https://google.com',
    content: "Belkin wants you stop using its Portable Wireless Charger + Stand Special Edition device if you have one. The accessory-maker has issued a voluntary recall for the power bank/charging stand due to a … [+877 chars]",
    _id: 2
  },
  {
    source: {
      id: "engadget",
      name: "Engadget"
    },
    title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
    publishedAt: '2 августа, 2019',
    description: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где',
    urlToImage: 'https://images.unsplash.com/photo-1545736522-b347030de513',
    keyWord: 'Тайга',
    url: 'https://google.com',
    content: "Belkin wants you stop using its Portable Wireless Charger + Stand Special Edition device if you have one. The accessory-maker has issued a voluntary recall for the power bank/charging stand due to a … [+877 chars]",
    _id: 3
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge"
    },
    title: 'Национальное достояние – парки',
    publishedAt: '2 августа, 2019',
    description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    urlToImage: 'https://images.unsplash.com/photo-1536012354193-8bb300dc3ce6',
    keyWord: 'Природа',
    url: 'https://google.com',
    content: "Belkin wants you stop using its Portable Wireless Charger + Stand Special Edition device if you have one. The accessory-maker has issued a voluntary recall for the power bank/charging stand due to a … [+877 chars]",
    _id: 4
  },
  {
    source: {
      id: "engadget",
      name: "Engadget"
    },
    title: 'Лесные огоньки: история одной фотографии',
    publishedAt: '2 августа, 2019',
    description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    urlToImage: 'https://images.unsplash.com/photo-1490879112094-281fea0883dc',
    keyWord: 'Природа',
    url: 'https://google.com',
    content: "Belkin wants you stop using its Portable Wireless Charger + Stand Special Edition device if you have one. The accessory-maker has issued a voluntary recall for the power bank/charging stand due to a … [+877 chars]",
    _id: 5
  },


];

export { news };