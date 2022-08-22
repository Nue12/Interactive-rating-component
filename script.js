const starImgTag = document.getElementById("starImage");
const thanksImgTag = document.getElementById("thanksImage");
const beforeRatingContainerTag = document.getElementsByClassName("beforeRating-containe")[0];
const afterRatingContainerTag = document.getElementsByClassName("afterRating-container")[0];
const rateSubmitTag = document.querySelector(".rateSubmit");
const ratingTag = document.querySelectorAll(".rating");
const userSelectedRateTag = document.getElementById("userSelectedRate");

ratingTag.forEach((rating) => {
    rating.addEventListener("click", () => {
        console.log(rating.innerHTML);
        userSelectedRateTag.innerHTML = rating.innerHTML;
    })
});

rateSubmitTag.addEventListener("click", () => {
    starImgTag.style.display = "none";
    thanksImgTag.style.display = "block";
    beforeRatingContainerTag.style.display = "none";
    afterRatingContainerTag.style.display = "block";
    
    
})