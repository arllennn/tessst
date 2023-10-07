const newData = [
    {
        img: './src/img/favorite img-1.png',
        title: '25.01.2023',
        link: '#обзор',
        subtitle: 'BMC Kaius 01 идеальный гоночный гравийный велосипед',
    },
    {
        img: './src/img/favorite img-2.png',
        title: '24.01.2023',
        link: '#обзор',
        subtitle: 'Первые поездки на новой гоночной ракете Wilier Urta SLR 100mm XC MTB, всего 9,8 кг!',
    },
    {
        img: './src/img/favorite img-3.png',
        title: '24.01.2023',
        link: '#обзор',
        subtitle: 'Все новые гоночные велосипеды BMC Fourstroke XC оснащены волшебным подседельным штырем Autodrop.',
    },
    {
        img: './src/img/favorite img-1.png',
        title: '24.01.2023',
        link: '#обзор',
        subtitle: 'Велосипед Wilier Grantismo SLR для шоссейных гонок',
    },
];

const favoriteLeft = document.querySelector('.block__favorite--left')
const favoriteRight = document.querySelector('.block__favorite--right')
const blockFavorite = document.querySelector('.block__favorite')

newData.forEach((el, index) => {
    const blockFavoriteLeftImg = document.createElement('img')
    blockFavoriteLeftImg.className = 'block__favorite--left__img'
    blockFavoriteLeftImg.src = el.img

    blockFavoriteLeftImg.addEventListener('click', () => {
        favoriteRight.innerHTML = ''

       
        const favoriteRightImg = document.createElement('img')
        favoriteRightImg.src = el.img
        const title = document.createElement('h3')
        const link = document.createElement('a')
        const subtitle = document.createElement('p')
       
        title.textContent = el.title
        link.href = el.link
        link.textContent = el.link
        subtitle.textContent = el.subtitle

        favoriteRightImg.className = 'block__favorite--right__img'
        title.className = 'block__favorite--title'
        link.className = 'block__favorite--link'
        subtitle.className = 'block__favorite--subtitle'

        favoriteRight.append(favoriteRightImg)
        favoriteRight.append(title);
        favoriteRight.append(link);
        favoriteRight.append(subtitle);
    });

    blockFavoriteLeftImg.dataset.index = index
    favoriteLeft.appendChild(blockFavoriteLeftImg)
});


favoriteLeft.appendChild(favoriteLeft)

