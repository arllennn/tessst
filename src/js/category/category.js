const data = [
    {
        img: '/src/img/bike 3 (3).png',
        title: 'Look 979 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018',
        price: '649 110 ₽',
    },
    {
        img: '/src/img/image 23 (1).png',
        title: 'Scott Scale 700 SL 2016',
        price: '629 100 ₽',
    },
    {
        img: '/src/img/image 23 (1).png',
        title: 'Trek Marlin 4 Aloha ATB 27.5 2022',
        price: '73 300 ₽',
    },
    {
        img: '/src/img/image 23 (1).png',
        title: 'Orbea RUDE 10 Черный 2022',
        price: '89 100 ₽',
    },
    {
        img: '/src/img/image 23 (1).png',
        title: 'Trek Marlin 5 Lithium Grey Chrome ATB 27.5 2022',
        price: '84 499 ₽',
    },
    {
        img: '/src/img/image 23 (1).png',
        title: 'Trek Dual Sport 2 Mulsanne Hybd 2022',
        price: '90 968 ₽',
    }
]

const blockCategoryRight = document.querySelector('.block__category--right')

const category = (data) => {
    blockCategoryRight.innerHTML = ''
    data.forEach(el => {
        const categoryBox = document.createElement('div')

        const categoryImg = document.createElement('img')
        const categoryTitle = document.createElement('h3')
        const categoryPrice = document.createElement('p')

        categoryImg.src = el.img
        
        categoryTitle.textContent = el.title
        categoryPrice.textContent = el.price

        categoryImg.className = 'category-img'
        categoryTitle.className = 'category-title'
        categoryPrice.className = 'category-price'

        categoryBox.append(categoryImg, categoryTitle, categoryPrice)
        blockCategoryRight.append(categoryBox)
    })
}
category(data)


const categoryInput = document.querySelector('.block__category--left__input')
// const categoryBtn = document.querySelector('.block__category--left__btn')

const search = () => {
    categoryInput.addEventListener('input', () => {
        const filterData = data.filter(item => item.title.toLowerCase().includes(categoryInput.value.toLowerCase()));
        category(filterData)
    })
}
search()
