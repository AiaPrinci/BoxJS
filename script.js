let boxLi = document.querySelectorAll('.box-li');

let boxDiv = document.querySelectorAll('.box-div');

boxDiv.forEach((listItem) => {
    listItem.addEventListener('click', () => {
        boxDiv.forEach((item) => {
            item.style.backgroundColor = 'rgb(41, 0, 17)';
            item.style.scale = '1';
        })
        listItem.style.backgroundColor = 'rgba(28, 0, 11, 0.357)';
        listItem.style.backdropFilter = 'blur(4px)';
        listItem.style.scale = '1.3';
        listItem.style.transition = 'scale 0.3s';
    })
})

const play = () => {
    var audio = document.getElementById("audio");
    audio.play();
}
