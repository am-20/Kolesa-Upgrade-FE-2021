import '../css/style.scss';

const clothes = [
    {
        id:    0,
        img:   './src/assets/image_4.png',
        title: 'Футболка "Эволюционируй или сдохни"',
        price: 220,
        isNew: true,
    },
    {
        id:    1,
        img:   './src/assets/image_4.png',
        title: 'Футболка "Эволюционируй или сдохни"',
        price: 220,
        isNew: false,
    },
    {
        id:    2,
        img:   './src/assets/sweatshirt.jpg',
        title: 'Свитшот',
        price: 100,
        isNew: true,
    },
    {
        id:    3,
        img:   './src/assets/sweatshirt.jpg',
        title: 'Свитшот',
        price: 100,
        isNew: false,
    },
    {
        id:    4,
        img:   './src/assets/polo.png',
        title: 'Поло',
        price: 340,
        isNew: true,
    },
    {
        id:    5,
        img:   './src/assets/polo.png',
        title: 'Поло',
        price: 340,
        isNew: false,
    },
];

const accessories = [
    {
        id:    6,
        img:   './src/assets/bottle.png',
        title: 'Бутылка для воды',
        price: 100,
        isNew: true,
    },
    {
        id:    7,
        img:   './src/assets/bottle.png',
        title: 'Бутылка для воды',
        price: 100,
        isNew: false,
    },
    {
        id:    8,
        img:   './src/assets/cap.png',
        title: 'Кепка',
        price: 150,
        isNew: true,
    },
    {
        id:    9,
        img:   './src/assets/cap.png',
        title: 'Кепка',
        price: 150,
        isNew: false,
    },
    {
        id:    10,
        img:   './src/assets/coffee_cup.jpg',
        title: 'Стакан для кофе',
        price: 50,
        isNew: true,
    },
    {
        id:    11,
        img:   './src/assets/coffee_cup.jpg',
        title: 'Стакан для кофе',
        price: 50,
        isNew: false,
    },
];

const makeCard = (title, img, price, isNew) => `<div class="card">
    <div class="card__image">
        <img
            src=${img}
            alt="Модная футболка"
            class="card__photo"
        >
        ${isNew ? '<span class="card__beige">new</span>' : ''}
    </div>
    <div class="card__description">
        <p class="card__price">${price} баллов</p>
        <h3 class="card__title">${title}</h3>
        <p class="card__size">Размеры S/M/L</p>
        <button
            type="button"
            class="card__btn"
            hidden
        >
            Заказать
        </button>
    </div>
    </div>`;

const tabsBtn = document.querySelectorAll('.tabs__btn');
const catalog = document.querySelector('.js__items');

const newSort = (x, y) => {
    if (x.isNew === y.isNew) {
        return 0;
    }

    if (x.isNew) {
        return -1;
    }

    return 1;
};

const addCard = (card) => {
    const {
        title, img, price, isNew,
    } = card;
    const cardHtml = makeCard(title, img, price, isNew);

    catalog.innerHTML += cardHtml;
};

const addActiveClass = (tab) => {
    tab.classList.add('tabs__btn--active');
};

const clearCatalog = () => {
    while (catalog.lastElementChild) {
        catalog.removeChild(catalog.lastElementChild);
    }
};

tabsBtn.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabsBtn.forEach((x) => {
            if (x.classList.contains('tabs__btn--active')) {
                x.classList.remove('tabs__btn--active');
            }
        });

        if (tab.dataset.key === 'clothes') {
            addActiveClass(tab);

            clearCatalog();

            clothes.sort(newSort);

            clothes.forEach(addCard);
        } else if (tab.dataset.key === 'accessories') {
            addActiveClass(tab);

            clearCatalog();

            accessories.sort(newSort);

            accessories.forEach(addCard);
        } else if (tab.dataset.key === 'all') {
            addActiveClass(tab);

            clearCatalog();

            const all = clothes.concat(accessories);

            all.sort(newSort);

            all.forEach(addCard);
        }
    });
});

const makeModal = (title, price, details, img) => `
    <div class="modal__backdrop"></div>
    <div class="modal">
        <div class="modal__content">
            <button type="button">
                <img
                    src="./src/assets/Close/close_big.svg"
                    alt="close sign"
                    class="modal__close"
                >
            </button>
            <div class="modal__body">
                <div class="modal__images">
                    <img
                        src=${img}
                        alt="Самая модная футболка"
                    >
                    <div class="modal__previews">
                        <img
                        class="modal__img"
                            src="./src/assets/image.png"
                            alt="Третья модная фотка"
                        >
                        <img
                        class="modal__img"
                            src="./src/assets/image_1.png"
                            alt="Первая модная фотка"
                        >
                        <img
                        class="modal__img"
                            src="./src/assets/image_2.png"
                            alt="Вторая модная фотка"
                        >
                    </div>
                </div>
                <div class="modal__description">
                    <div class="modal__description-head">
                        <h1 class="modal__title">${title}</h1>
                        <p class="modal__price">${price}</p>
                        <button
                            type="button"
                            class="modal__buy"
                        >
                            Заказать
                        </button>
                    </div>
                    <div class="modal__balance">
                        <div class="modal__balance-details">
                            <p class="modal__balance-text">Твой баланс:</p>
                            <p class="modal__balance-amount">3 945 баллов</p>
                        </div>
                        <span class="modal__balance-icon">🛍</span>
                    </div>
                    <!-- colors -->
                    <div class="modal__colors">
                        <h3 class="modal__subtitle modal__subtitle--bottom">
                            Цвета:
                        </h3>
                        <form class="modal__form">
                            <div class="modal__colors-btn">
                                <input
                                    class="modal__input"
                                    id="radio-1"
                                    type="radio"
                                    name="radio"
                                    value="blue"
                                    checked
                                >
                                <div class="modal__color-block modal__color-block--blue"></div>
                                <label class="modal__label" for="radio-1">Синий</label>
                            </div>

                            <div class="modal__colors-btn">
                                <input
                                class="modal__input"
                                id="radio-2"
                                type="radio"
                                name="radio"
                                value="beige"
                                >
                                <div class="modal__color-block modal__color-block--beige"></div>
                                <label class="modal__label" for="radio-2">Бежевый</label>
                            </div>

                            <div class="modal__colors-btn">
                                <input
                                class="modal__input"
                                id="radio-3"
                                type="radio"
                                name="radio"
                                value="gray"
                                >
                                <div class="modal__color-block modal__color-block--gray"></div>
                                <label class="modal__label" for="radio-3">Серый</label>
                            </div>
                        </form>
                    </div>
                    <!-- size -->
                    <div class="modal__sizes">
                        <h3 class="modal__subtitle modal__subtitle--bottom">
                            Размер:
                        </h3>
                        <form class="modal__form">
                            <div class="modal__sizes-btn">
                                <input
                                class="modal__input"
                                id="radio-4"
                                type="radio"
                                name="radio"
                                value="small"
                                checked
                                >
                                <div class="size-block"></div>
                                <label class="modal__label" for="radio-4">S</label>
                            </div>

                            <div class="modal__sizes-btn">
                                <input
                                class="modal__input"
                                id="radio-5"
                                type="radio"
                                name="radio"
                                value="medium"
                                >
                                <div class="size-block"></div>
                                <label class="modal__label" for="radio-5">M</label>
                            </div>

                            <div class="modal__sizes-btn">
                                <input
                                class="modal__input"
                                id="radio-6"
                                type="radio"
                                name="radio"
                                value="large"
                                >
                                <div class="size-block"></div>
                                <label class="modal__label" for="radio-6">L</label>
                            </div>
                        </form>
                    </div>
                    <!-- details -->
                    <div class="modal__details">
                        <h3 class="modal__subtitle modal__subtitle--weight">
                            Детали:
                        </h3>
                        <p class="modal__text">${details}</p>
                    </div>
                    <!-- how to choose -->
                    <div class="modal__choose">
                        <h3 class="modal__subtitle modal__subtitle--weight">
                            Как выбрать размер:
                        </h3>
                        <p class="modal__text">Написать дяде Рику для уточнения.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

const cards = document.querySelectorAll('.card');
const buyBtn = document.querySelectorAll('.card__btn');

const clothesModals = [
    {
        id:      't-shirt',
        title:   clothes[0].title,
        price:   clothes[0].price,
        details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        img:     clothes[0].img,
    },
    {
        id:      't-shirt_2',
        title:   clothes[1].title,
        price:   clothes[1].price,
        details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        img:     clothes[1].img,
    },
    {
        id:      'sweatshirt',
        title:   clothes[2].title,
        price:   clothes[2].price,
        details: 'Брендированный свитшот от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        img:     clothes[2].img,
    },
    {
        id:      'sweatshirt_2',
        title:   clothes[3].title,
        price:   clothes[3].price,
        details: 'Брендированный свитшот от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        img:     clothes[3].img,
    },
    {
        id:      'polo',
        title:   clothes[4].title,
        price:   clothes[4].price,
        details: 'Брендированное поло от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        img:     clothes[4].img,
    },
    {
        id:      'polo_2',
        title:   clothes[5].title,
        price:   clothes[5].price,
        details: 'Брендированное поло от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        img:     clothes[5].img,
    },
];

const accessoriesModals = [
    {
        id:      'bottle',
        title:   accessories[0].title,
        price:   accessories[0].price,
        details: 'Бутылка для воды с трубочкой',
        img:     accessories[0].img,
    },
    {
        id:      'bottle_2',
        title:   accessories[1].title,
        price:   accessories[1].price,
        details: 'Бутылка для воды с трубочкой',
        img:     accessories[1].img,
    },
    {
        id:      'cap',
        title:   accessories[2].title,
        price:   accessories[2].price,
        details: 'Кепка',
        img:     accessories[2].img,
    },
    {
        id:      'cap_2',
        title:   accessories[3].title,
        price:   accessories[3].price,
        details: 'Кепка',
        img:     accessories[3].img,
    },
    {
        id:      'coffee_cup',
        title:   accessories[4].title,
        price:   accessories[4].price,
        details: 'Стакан для кофе',
        img:     accessories[4].img,
    },
    {
        id:      'coffee_cup_2',
        title:   accessories[5].title,
        price:   accessories[5].price,
        details: 'Стакан для кофе',
        img:     accessories[5].img,
    },
];

const addModal = (modal) => {
    const {
        title, price, details, img,
    } = modal;
    const modalHtml = makeModal(title, price, details, img);

    document.body.innerHTML += modalHtml;
};

buyBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        clothesModals.forEach(addModal);
    });
});

cards.forEach((card) => {
    card.addEventListener('click', () => {
        accessoriesModals.forEach(addModal);
    });
});
