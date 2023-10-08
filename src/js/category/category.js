const data = [
    {
        img: './src/img/bike 3 (3).png',
        title: 'Look 979 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018',
        price: '649 110 ₽',
        button: 'В 1 клик',
    },
    {
        img: './src/img/image 23 (1).png',
        title: 'Trek Dual Sport 2 Mulsanne Hybd 2022',
        price: '629 100 ₽',
        button: 'В 1 клик',
    },
    {
        img: './src/img/image 23 (1).png',
        title: 'Trek Marlin 4 Aloha ATB 27.5 2022 YELLOW',
        price: '73 300 ₽',
        button: 'В 1 клик',
    },
    {
        img: './src/img/image 23 (1).png',
        title: 'Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018',
        price: '89 100 ₽',
        button: 'В 1 клик',
    },
    {
        img: './src/img/image 23 (1).png',
        title: 'Trek Marlin 5 Lithium Grey Chrome ATB 27.5 2022',
        price: '84 499 ₽',
        button: 'В 1 клик',
    },
    {
        img: './src/img/image 23 (1).png',
        title: 'Trek Dual Sport 2 Mulsanne Hybd 2022',
        price: '90 968 ₽',
        button: 'В 1 клик',
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
        const categoryBtn = document.createElement('button')

        categoryImg.src = el.img
        
        categoryTitle.textContent = el.title
        categoryPrice.textContent = el.price
        categoryBtn.textContent = el.button

        categoryImg.className = 'category-img'
        categoryTitle.className = 'category-title'
        categoryPrice.className = 'category-price'
        categoryBtn.className = 'category-btn'

        categoryBox.append(categoryImg, categoryTitle, categoryPrice, categoryBtn)
        blockCategoryRight.append(categoryBox)
    })
}
category(data)


const categoryInput = document.querySelector('.block__category--left__input')


const search = () => {
    categoryInput.addEventListener('input', () => {
        const filterData = data.filter(item => item.title.toLowerCase().includes(categoryInput.value.toLowerCase()))
        category(filterData)
    })

    const btn = document.querySelector('.block__category--left__btn')
    btn.addEventListener('click', () => {
        const filterData = data.filter(item => item.title.toLowerCase().includes(categoryInput.value.toLowerCase()))
       category(filterData)
    })
};
search();

const categorySelect = document.querySelector('.block__category--left__select')

const select = () => {
    categorySelect.addEventListener('change', () => {
       if(categorySelect){
        const selectValue = categorySelect.value;
        const newFilterData = data.filter((item => item.price === selectValue) || data.filter(item => item.title === selectValue))  
        //const newFilterData = 
        category(newFilterData);
       }
       if(categorySelect.value === 'категории по ценам'){
        category(data)
       }
    });
};

select();

