let currentPage = 0
const backBtn = document.getElementById('backBtn')
const nextBtn = document.getElementById('nextBtn')

const gallaryData=[
    [   //Terracotta warriors  
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/stone_linedUp.jpg'},
        {id:2 ,span:'col-span-1',rowSpan:'row-span-2',image:'../assets/Terracotta/stone_poseUp.jpg'},
        {id:3 ,span:'col-span-1',rowSpan:'row-span-2',image:'../assets/Terracotta/stone_Kneeling.jpg'},
        {id:4 ,span:'col-span-1',rowSpan:'row-span-2',image:'../assets/Terracotta/stone_Frontfacing.jpg'},
        {id:5 ,span:'col-span-1',rowSpan:'row-span-1',image:'../assets/Terracotta/stone_closeUp.jpg'}
    ],

    [  //Hourse and Chariots
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'}
    ],
    [  //Weapons and armor
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'}
    ],
    [  //Command and Rituals
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'},
        {id:1 ,span:'col-span-2',rowSpan:'row-span-1',image:'../assets/Terracotta/'}
    ]
]

function getRandomEntrance() { //get random x and y value
    const directions = [
        { x: '-80px', y: '-60px' },
        { x: '80px', y: '-60px' },
        { x: '-80px', y: '60px' },
        { x: '80px', y: '60px' },
        { x: '0px', y: '-80px' },
        { x: '0px', y: '80px' },
        { x: '-80px', y: '0px' },
        { x: '80px', y: '0px' }
    ]

    const pick = directions[Math.floor(Math.random() * directions.length)]
    return pick
}

function renderGallery(){  //build the gallery
    const gallery = document.getElementById('gallery')

    if (!gallery) return

    gallery.innerHTML=''
    const items = gallaryData[currentPage]
    
    items.forEach(item => {
        const div = document.createElement('div')

        const rowspan = item.rowSpan || 'row-span-1'
        const span = item.span || 'col-span-1'
        const entrance = getRandomEntrance()
        div.className = `gallery-item group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-stone-900/80 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${rowspan} ${span} min-h-[220px] sm:min-h-[240px] opacity-0 will-change-transform will-change-opacity`
        div.style.setProperty('--start-x', entrance.x)   //adds style property value custom css
        div.style.setProperty('--start-y', entrance.y)
        div.style.setProperty('--delay', `${Math.random() * 120}ms`)

        if(item.image){
            const img = document.createElement('img')
            img.src = item.image
            img.alt = item.title || `Image ${item.id}`
            img.loading = 'lazy'
            img.className = 'h-full w-full object-cover object-center transition duration-500 group-hover:scale-105'
            div.appendChild(img)
        }

        gallery.appendChild(div)

        requestAnimationFrame(() => {    //animate after two browser frames
            requestAnimationFrame(() => {
                div.classList.remove('opacity-0')
                div.classList.add('opacity-100')
                div.animate([
                    { opacity: 0, transform: `translate(${entrance.x}, ${entrance.y}) scale(0.95)` },  //move away in random direction
                    { opacity: 1, transform: 'translate(0, 0) scale(1)' }
                ], {
                    duration: 600,
                    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    delay: parseFloat(div.style.getPropertyValue('--delay')) || 0,   //gets random delay
                    fill: 'forwards'
                })
            })
        })
    })
}

function next(){   //next func
    currentPage++
    if(currentPage === gallaryData.length){
        currentPage = 0
    }
    const galleryNum = document.getElementById('galleryNum')
    if (galleryNum) galleryNum.textContent = `${currentPage+1}`
    renderGallery()
}

function back(){  //prev func
    currentPage--
    if(currentPage === -1){
        currentPage = 3
    }
    const galleryNum = document.getElementById('galleryNum')
    if (galleryNum) galleryNum.textContent = `${currentPage+1}`
    renderGallery()
}

backBtn.addEventListener('click', back)
nextBtn.addEventListener('click', next)

window.addEventListener('DOMContentLoaded',renderGallery)   //call render after DOM tree built

