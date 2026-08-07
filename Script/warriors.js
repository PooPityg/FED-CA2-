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

function renderGallery(){  //build the gallery
    const gallery = document.getElementById('gallery')

    if (!gallery) return

    gallery.innerHTML=''
    const items = gallaryData[currentPage]
    
    items.forEach(item => {
        const div = document.createElement('div')

        const rowspan = item.rowSpan || 'row-span-1'
        const span = item.span || 'col-span-1'
        div.className = `gallery-item group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-stone-900/80 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${rowspan} ${span} min-h-[220px] sm:min-h-[240px]`

        if(item.image){
            const img = document.createElement('img')
            img.src = item.image
            img.alt = item.title || `Image ${item.id}`
            img.loading = 'lazy'
            img.className = 'h-full w-full object-cover object-center transition duration-500 group-hover:scale-105'
            div.appendChild(img)
        }

        gallery.appendChild(div)
    })
}

function next(){
    currentPage++
    if(currentPage === gallaryData.length){
        currentPage = 0
    }
    const galleryNum = document.getElementById('galleryNum')
    if (galleryNum) galleryNum.textContent = `${currentPage+1}`
    renderGallery()
}

function back(){
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

window.addEventListener('DOMContentLoaded',renderGallery)

