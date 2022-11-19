const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://picsum.photos/id/151/200",
        text: "Et corrupti galisum eos expedita natus sit laudantium iure a dolorem facere qui aperiam alias? Qui reiciendis magnam eum dignissimos culpa sed quidem rerum et corrupti modi 33 architecto velit ab facere eligendi quo dolores laborum."
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://picsum.photos/id/200/200",
        text: "Hic consequatur doloremque et sunt fuga et sunt corrupti. Ut quisquam corporis eum laboriosam porro sit ducimus adipisci ut quod assumenda ea voluptates dolor non nostrum dolores. Et neque quae est animi illo aut nemo nemo ut aliquam sapiente et doloremque ipsa."
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://picsum.photos/id/20/200",
        text: "Lorem ipsum dolor sit amet. Ad dolorem odit non veritatis dolorem At consequatur dolores et voluptatibus asperiores qui saepe mollitia! Ut sint beatae et facere maiores ea quam laboriosam ea laborum molestias."
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://picsum.photos/id/399/200",
        text: "Id odio dolor qui dolor deleniti sit delectus dolor ut incidunt galisum eum rerum exercitationem est rerum omnis aut quaerat rerum! Et eaque aperiam est dolorem tempore sed dolorem quasi et accusamus nisi qui numquam omnis est tempora harum."
    }
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentReview = 0;

window.addEventListener('DOMContentLoaded', () => {
    getReview(currentReview)
})

prev.addEventListener('click', () => {
    if (currentReview > 0) {
        currentReview -= 1
        getReview(currentReview)
    } else {
        currentReview = reviews.length - 1
        getReview(currentReview)
    }
})

next.addEventListener('click', () => {
    if (currentReview < reviews.length - 1) {
        currentReview += 1
        getReview(currentReview)
    } else {
        currentReview = 0
        getReview(currentReview)
    }
})

randomBtn.addEventListener('click', () => {
    getRandomReview()
})

function getReview(currentReview) {
    const review = reviews[currentReview]
    img.src = review.img
    author.textContent = review.name
    job.textContent = review.job
    info.textContent = review.text
}

function getRandomReview() {
    const index = Math.floor(Math.random() * reviews.length)
    getReview(index)
}