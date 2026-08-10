let score = 0
let current = 0
let progress = 1
let answered = false
let a_question = [
    // Terracotta Warriors
    {   
        "q": "In which Chinese dynasty were the Terracotta Warriors created and buried?",
        "option": ["Han Dynasty", "Qin Dynasty", "Ming Dynasty", "Tang Dynasty"],
        "correct": 1,
        "context": "The Terracotta Warriors were commissioned by Emperor Qin Shi Huang, the first emperor to unify China. They were created during the Qin Dynasty to protect him in the afterlife."
    },
    {   
        "q": "Approximately how many Terracotta Warriors have been discovered in the pits near Xi'an?",
        "option": ["Over 2,000 warriors", "Over 5,000 warriors", "Over 8,000 warriors", "Over 12,000 warriors"],
        "correct": 2,
        "context": "Three major pits have been excavated. Pit 1 contains around 6,000 warriors, Pit 2 has roughly 1,400 warriors and cavalry, and Pit 3 holds about 70 officers and command staff. Many more remain unexcavated."
    },
    {   
        "q": "What was the primary purpose of creating and burying the Terracotta Army?",
        "option": ["To commemorate military victories", "To serve as a spiritual guardian force to protect the emperor in the afterlife", "To create a historical record of soldiers", "To honor the gods of war"],
        "correct": 1,
        "context": "Ancient Chinese beliefs held that the emperor would need an army in the afterlife just as he did in life. The life-sized warriors were meant to accompany and protect the emperor in death, reflecting his power and military might."
    },
    {   
        "q": "How were the individual Terracotta Warriors made, and what materials were used?",
        "option": ["Cast from bronze", "Made from local yellow clay using modular construction", "Carved from marble", "Made from stone and painted"],
        "correct": 1,
        "context": "Each warrior was hand-crafted by artisans. Different molds were used for heads, and individual facial features were added by hand, making each warrior unique. The pieces were then assembled, smoothed, and fired in kilns."
    },
    {   
        "q": "In what year was the Terracotta Army accidentally discovered by farmers?",
        "option": ["1954", "1964", "1974", "1984"],
        "correct": 2,
        "context": "Local farmers digging a well near Xi'an in Shaanxi Province stumbled upon pottery fragments. This accidental discovery led to one of the most significant archaeological finds of the 20th century."
    },
    // King Tutankhamun's Tomb
    {   
        "q": "In what year was King Tutankhamun's tomb discovered in the Valley of the Kings?",
        "option": ["1912", "1922", "1932", "1942"],
        "correct": 1,
        "context": "The tomb (KV62) was found on November 4, 1922, by archaeologist Howard Carter's team. It was one of the most intact pharaonic tombs ever discovered, largely hidden by debris from later royal burials."
    },
    {   
        "q": "Who was the British archaeologist that led the discovery of King Tut's tomb?",
        "option": ["Flinders Petrie", "Howard Carter", "Wallis Budge", "Herbert Winlock"],
        "correct": 1,
        "context": "Howard Carter, along with his patron Lord Carnarvon, led the archaeological expedition that uncovered Tutankhamun's tomb after years of searching in the Valley of the Kings. Carter spent a decade carefully documenting and excavating the tomb."
    },
    {   
        "q": "How old was King Tutankhamun when he died?",
        "option": ["Around 12 years old", "Around 18-19 years old", "Around 25 years old", "Around 30 years old"],
        "correct": 1,
        "context": "King Tut ascended to the throne around age 9 and ruled for approximately 10 years. Modern scientific analysis suggests he suffered from genetic disorders from royal inbreeding. His death was relatively sudden, and the exact cause continues to be investigated by scholars."
    },
    {   
        "q": "Approximately how many artifacts were found inside King Tut's tomb?",
        "option": ["Over 1,000 artifacts", "Over 2,500 artifacts", "Over 5,000 artifacts", "Over 8,000 artifacts"],
        "correct": 2,
        "context": "The tomb's incredible collection includes everything the pharaoh would need in the afterlife: ceremonial items, food, games, toiletries, and protective amulets. This vast collection has provided invaluable insights into ancient Egyptian life and culture."
    },
    {   
        "q": "Why is King Tutankhamun's tomb significant compared to other pharaonic tombs in Egypt?",
        "option": ["It was the largest tomb ever built", "It is the most intact pharaonic tomb ever discovered", "It contained the most gold of all tombs", "It was the first tomb to be discovered"],
        "correct": 1,
        "context": "Most royal tombs in the Valley of the Kings were heavily plundered over centuries. King Tut's tomb survived relatively unchanged, preserving original funerary arrangements and artifacts. This made it an unprecedented treasure trove for understanding Egyptian burial practices and royal material culture."
    },
    // Easter Island
    {   
        "q": "What are the massive stone figures on Easter Island called?",
        "option": ["Tiki", "Moai", "Totem", "Ahu"],
        "correct": 1,
        "context": "Moai are the iconic monumental statues carved from volcanic rock by the Rapa Nui people. They range in height from 2 to 10 meters (6.5 to 33 feet), with the largest completed moai standing about 10 meters tall. Most feature exaggerated facial features and elongated heads."
    },
    {   
        "q": "What materials did the Rapa Nui people use to construct the Easter Island statues?",
        "option": ["Granite and marble", "Limestone and sandstone", "Tuff volcanic rock with red scoria and coral", "Concrete and stone"],
        "correct": 2,
        "context": "The island is volcanic, providing abundant tuff stone ideal for carving. The statue bodies were carved from dense tuff, while the distinctive red topknots (pukao) were made from red scoria. Eye pupils were sometimes created from black obsidian or white coral, giving the finished statues a haunting appearance."
    },
    {   
        "q": "What theory explains the purpose of the moai statues on Easter Island?",
        "option": ["They were built for defense and fortification", "They represented deified ancestors or important chiefs for spiritual ceremonies", "They were used as water collection systems", "They marked navigation points for ships"],
        "correct": 1,
        "context": "The moai were likely erected to honor and venerate ancestors, believed to possess mana (spiritual power). They may have been associated with fertility rites, blessing of crops, or representations of ancestral lineages. Each family or clan appears to have had their own moai on their lands."
    },
    {   
        "q": "Approximately when did construction of the moai statues occur?",
        "option": ["From 800 to 1000 CE", "From 1100 to 1500 CE", "From 1600 to 1800 CE", "From 1900 to present day"],
        "correct": 1,
        "context": "The Rapa Nui people used stone hand tools (toki) to carve the moai. Transportation of the massive statues to their ahu platforms likely required significant labor and ingenious methods. The exact techniques remain partially mysterious, though recent research suggests they may have used rocking and sliding methods."
    },
    {   
        "q": "What environmental factors led to the decline of the Easter Island civilization?",
        "option": ["Volcanic eruptions", "Deforestation, soil depletion, and resource scarcity", "Tsunami waves", "Disease brought by explorers"],
        "correct": 1,
        "context": "Easter Island had extensive palm forests when first settled around 1200 CE. Over 300+ years, intensive farming and moai construction consumed vast timber resources. By 1500 CE, the island was almost completely deforested, leading to erosion, reduced food production, and societal collapse. This ecological crisis resulted in warfare between clans and abandonment of moai construction."
    },
    // Aztec Sun Stone
    {   
        "q": "What is the Aztec Sun Stone, and what does it primarily represent?",
        "option": ["A religious altar for sacrifices", "A massive circular stone carving representing the Aztec calendar and cosmos", "A map of Tenochtitlan", "A ceremonial weapon"],
        "correct": 1,
        "context": "The Stone of the Fifth Sun depicts the Aztec creation myth and their understanding of time cycles. According to Aztec belief, the world had been destroyed and recreated four times, and they lived in the fifth age. The stone was originally painted in bright colors and was a sacred object in the Templo Mayor complex in Tenochtitlan."
    },
    {   
        "q": "How much does the Aztec Sun Stone weigh?",
        "option": ["Approximately 10 metric tons", "Approximately 17.5 metric tons", "Approximately 24.5 metric tons", "Approximately 30 metric tons"],
        "correct": 2,
        "context": "The massive monolith measures 3.7 meters (12 feet) in diameter and 30 centimeters (12 inches) thick. The basalt rock likely came from a quarry outside Tenochtitlan, representing an enormous investment of labor to transport and carve the stone using only stone and copper tools."
    },
    {   
        "q": "When was the Aztec Sun Stone discovered?",
        "option": ["1650", "1720", "1790", "1850"],
        "correct": 2,
        "context": "After the Spanish conquest and destruction of Tenochtitlan in 1521, the stone was buried underground for nearly 270 years. Spanish colonizers had buried it, but colonial-era excavations rediscovered it. Today it remains one of Mexico's most iconic pre-Columbian artifacts."
    },
    {   
        "q": "Where is the Aztec Sun Stone housed today?",
        "option": ["Templo Mayor Museum", "National Museum of Anthropology", "Museo Nacional de Mexico", "Mexican History Museum"],
        "correct": 1,
        "context": "The Aztec Sun Stone is currently housed in the National Museum of Anthropology (Museo Nacional de Antropología) in Mexico City. It remains one of Mexico's most iconic and visited pre-Columbian artifacts."
    },
    {   
        "q": "What is at the center of the Aztec Sun Stone?",
        "option": ["Quetzalcoatl, the feathered serpent god", "Tonatiuh, the sun god", "Huitzilopochtli, the god of war", "Tezcatlipoca, the smoking mirror god"],
        "correct": 1,
        "context": "The center features Tonatiuh (the sun god) with his characteristic tongue protruding (representing human sacrifice). The four quadrants surrounding the center represent the four previous world ages. The outer rings contain the 20 Aztec day signs arranged in order. Four directional points (east, north, west, south) are also marked with specific glyphs."
    }
]
let numQues = 0
const STORAGE_KEY = 'quizProgress'
const SCORE_KEY = 'quizScore'
const COMPLETED_KEY = 'quizCompleted'
const FSCORE_KEY = 'quizFinalScore'
const PROGRESS_PERCENT_KEY = 'quizProgressPercent'

function updateIntroButton(hasProgress) {
    const startBtn = document.getElementById('startBtn')
    if (startBtn) {
        startBtn.textContent = hasProgress ? 'Continue Quiz' : 'Begin Quiz'
    }
}

function saveProgress() {
    if (!a_question.length) return
    const nextQuestion = Math.min(current + 1, a_question.length)
    const percent = Math.round(((nextQuestion) / a_question.length) * 100)
    localStorage.setItem(STORAGE_KEY, String(nextQuestion))
    localStorage.setItem(SCORE_KEY, String(score))
    localStorage.setItem(PROGRESS_PERCENT_KEY, String(percent))
}

function clearProgress() {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(SCORE_KEY)
    localStorage.removeItem(PROGRESS_PERCENT_KEY)
    localStorage.removeItem(FSCORE_KEY)
    updateIntroButton(false)
}

function markCompleted() {
    sessionStorage.setItem(COMPLETED_KEY, 'true')
}

function clearCompletedFlag() {
    sessionStorage.removeItem(COMPLETED_KEY)
}

function restoreProgress() {
    if (sessionStorage.getItem(COMPLETED_KEY) === 'true') {
        current = 0
        score = 0
        progress = 1
        clearProgress()
        clearCompletedFlag()
        return
    }

    const savedValue = Number(localStorage.getItem(STORAGE_KEY))
    const savedScore = Number(localStorage.getItem(SCORE_KEY))

    if (!Number.isInteger(savedValue) || savedValue < 0 || savedValue >= a_question.length) {
        current = 0
        score = 0
        progress = 1
        clearProgress()
        return
    }

    current = savedValue
    score = Number.isInteger(savedScore) ? savedScore : 0
    progress = savedValue + 1
    updateIntroButton(true)
}

window.addEventListener('load', () => {
    console.log('Loaded', a_question.length, 'questions')
    restoreProgress()
})

function updatebar() {
    const percentage = (progress / a_question.length) * 100
    document.getElementById('progress-bar').style.width = percentage + '%'
}

function render_questions() {
    answered = false
    const ques = a_question[current]
    document.getElementById('lognum').textContent = `QUESTION${current + 1}/${a_question.length}`
    document.getElementById('logscore').textContent = `SCORE ${score}`
    document.getElementById('question').textContent = ques.q
    const el = document.getElementById('opions')
    const letter = ['A', 'B', 'C', 'D']
    el.innerHTML = ''
    ques.option.forEach((opt, i) => {
        const btn = document.createElement('button')
        btn.className = 'opt'
        btn.innerHTML = `<span class="opt-letter">${letter[i]}</span><span class="opt-text">${opt}</span>`
        btn.onclick = () => sel_answer(i, btn)
        el.appendChild(btn)
    })
    document.getElementById('qcontext').classList.add('hidden')
    document.getElementById('action').classList.add('hidden')
    document.getElementById('nextBtn').textContent = current === a_question.length - 1 ? 'See results' : 'Next Question'
    const returnBtn = document.getElementById('returnBtn')
    if (returnBtn) {
        returnBtn.classList.toggle('hidden', current === a_question.length - 1)
    }
    updatebar()
}

function toQuiz() {
    clearCompletedFlag()
    document.getElementById('intro').classList.add('hidden')
    document.getElementById('quiz').classList.remove('hidden')
    render_questions()
}

function sel_answer(i, btn) {
    if (answered) return
    answered = true
    const q = a_question[current]
    const allopt = document.querySelectorAll('#opions .opt')
    allopt.forEach(o => o.disabled = true)

    if (i === q.correct) {
        score++
        btn.classList.add('correct')
    } else {
        btn.classList.add('incorrect')
        allopt[q.correct].classList.add('correct')
    }

    document.getElementById('logscore').textContent = `SCORE ${score}`
    const cxt = document.getElementById('qcontext')
    cxt.textContent = q.context
    cxt.classList.remove('hidden')
    document.getElementById('action').classList.remove('hidden')
    saveProgress()
}

function nextQues() {
    current++
    progress++
    if (current >= a_question.length) {
        showEnd()
    } else {
        saveProgress()
        render_questions()
    }
}

function showEnd() {
    localStorage.setItem(FSCORE_KEY, String(score))
    markCompleted()
    clearProgress()
    document.getElementById('quiz').classList.add('hidden')
    document.getElementById('end').classList.remove('hidden')
    document.getElementById('finalscore').innerHTML = `${score}<span>/${a_question.length}</span>`
    let finalScore = score
    localStorage.setItem(FSCORE_KEY,String(score))
    let line
    if (score >= 18) line = 'Amazing'
    else if (score >= 15) line = 'WOW'
    else if (score >= 10) line = 'Can do better'
    else line = 'Failure'
    document.getElementById('resultline').textContent = line
}

function restartQuiz() {
    current = 0
    score = 0
    progress = 1
    clearCompletedFlag()
    clearProgress()
    document.getElementById('end').classList.add('hidden')
    document.getElementById('quiz').classList.remove('hidden')
    updateIntroButton(false)
    render_questions()
}

function returnCollection() {
    saveProgress()
    window.location.href = './collections.html'
}