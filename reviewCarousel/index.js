let btnPrev = document.querySelector("#btn-previous");
let btnNext = document.querySelector("#btn-next");
let reviewCarouselEl = document.querySelector("#review-carousel"); 
let counter = 0;

let reviews = [
    {
        img: "img1.jpg",
        name: "Laura",
        job: "Professor",
        review: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio illum aut! Aspernatur voluptatem itaque voluptatibus debitis incidunt deserunt?"
    },
    {
        img: "img2.jpg",
        name: "Jane",
        job: "Web developer",
        review: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio illum aut! Aspernatur voluptatem itaque voluptatibus debitis incidunt deserunt?"
    },
    {
        img: "img3.jpg",
        name: "Lisa",
        job: "Student",
        review: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio illum aut! Aspernatur voluptatem itaque voluptatibus debitis incidunt deserunt?"
    }
];

reviews.forEach((review, i)=> {

    reviewCarouselEl.innerHTML += `
                <div class="review" data-id="${i}">
                    <div class="user-image">
                        <img src="images/${review.img}" alt="woman">
                    </div>
                    <h3 class="user-name">${review.name}</h3>
                    <h4 class="user-job">${review.job.toLocaleUpperCase()}</h4>
                    <p class="user-review">${review.review}</p>
                </div>
    `;

});

btnPrev.addEventListener("click", e => {

    counter = counter <= 0 ? reviews.length - 1 : counter - 1; 

    carousel(counter);

});

btnNext.addEventListener("click", e => {

    counter = counter >= reviews.length - 1 ? 0 : counter + 1;

    carousel(counter);

});

function carousel(counter) {

    let userReviews = document.querySelectorAll(".review");
    let id;
    

    [...userReviews].forEach(userReview => {
        id = Number(userReview.dataset.id);
        

        if(id != counter) {
            userReview.classList.add("d-none");
        } else {
            userReview.classList.remove("d-none");
        }


    });

}

carousel(counter);