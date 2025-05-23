const menuData = {
    categories: [
        { id: 'coffee', name: 'Кофе', icon: 'fa-coffee' },
        { id: 'desserts', name: 'Десерты', icon: 'fa-cookie' },
        { id: 'special-drinks', name: 'Специальные напитки', icon: 'fa-glass-cheers' },
        { id: 'tea', name: 'Чай', icon: 'fa-mug-hot' }
    ],
    items: [
        {
            id: 1,
            name: 'Эспрессо',
            category: 'coffee',
            price: 3.50,
            description: 'Классический итальянский эспрессо с насыщенным вкусом и густой пенкой',
            image: 'fotki/espresso.jpg',
            tags: ['Классика', 'Крепкий'],
            energy: 'Энергетическая ценность: 2 ккал',
            ingredients: ['Молотый кофе арабика', 'Вода']
        },
        {
            id: 2,
            name: 'Капучино',
            category: 'coffee',
            price: 4.50,
            description: 'Идеальное сочетание эспрессо, молока и воздушной молочной пенки',
            image: 'fotki/cappuccino.jpg',
            tags: ['С молоком', 'Популярный'],
            energy: 'Энергетическая ценность: 120 ккал',
            ingredients: ['Эспрессо', 'Молоко', 'Молочная пенка']
        },
        {
            id: 3,
            name: 'Тирамису',
            category: 'desserts',
            price: 6.50,
            description: 'Классический итальянский десерт с кофе, маскарпоне и какао',
            image: 'fotki/tiramisu.jpg',
            tags: ['Итальянский', 'С кофе'],
            energy: 'Энергетическая ценность: 350 ккал',
            ingredients: ['Печенье савоярди', 'Сыр маскарпоне', 'Кофе эспрессо', 'Какао-порошок']
        },
        {
            id: 4,
            name: 'Карамельный раф',
            category: 'special-drinks',
            price: 5.50,
            description: 'Нежный кофейный напиток с карамельным сиропом и взбитыми сливками',
            image: 'fotki/caramel-raf.jpg',
            tags: ['Сладкий', 'Сезонный'],
            energy: 'Энергетическая ценность: 280 ккал',
            ingredients: ['Эспрессо', 'Молоко', 'Карамельный сироп', 'Взбитые сливки']
        },
        {
            id: 5,
            name: 'Мятный чай',
            category: 'tea',
            price: 3.00,
            description: 'Освежающий зеленый чай с натуральной мятой и лимоном',
            image: 'fotki/mint-tea.jpg',
            tags: ['Зеленый', 'Освежающий'],
            energy: 'Энергетическая ценность: 5 ккал',
            ingredients: ['Зеленый чай', 'Свежая мята', 'Лимон', 'Мед (по желанию)']
        },
        {
            id: 6,
            name: 'Чай латте',
            category: 'tea',
            price: 4.00,
            description: 'Нежный чай с молоком и ванильным сиропом',
            image: 'fotki/tea-latte.jpg',
            tags: ['С молоком', 'Сладкий'],
            energy: 'Энергетическая ценность: 150 ккал',
            ingredients: ['Черный чай', 'Молоко', 'Ванильный сироп']
        }
    ]
}; 