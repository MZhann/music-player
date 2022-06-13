// const player = document.querySelector('.player'),
//       playBtn = document.querySelector('.play'),
//       prevBtn = document.querySelector('.prev'),
//       nextBtn = document.querySelector('.next'),
//       audio = document.querySelector('.audio'),
//       progressContainer = document.querySelector('.progress_container'),
//       progress = document.querySelector('.progress')
//       title = document.querySelector('.song'),
//       preview = document.querySelector('.cover_img'),
//       imgSrc = document.querySelector('.img_src')

// // названия песен
// const songs = ['Otyzdan asyp baramyn','Up&Up','Останемся здесь']
// // песня по умолчанию
// let songIndex = 0;

// //load

// function loadSong(song){
//     title.innerHtml = song
//     audio.src = `${song}.mp3`
//     cover.src = `cover${songIndex+1}.png`
    
// }

// loadSong(songs[songIndex]);

// //PLay

// function playSong() {
//     player.classList.add('play')
//     audio.play()
// }

// //Pause
// function pauseSong(){
//     player.classList.remove('play')
//     audio.pause()
// }

// playBtn.addEventListener('click', ()=>{
//     const isPLaying = player.classList.contains('play')
//     if(isPLaying){
//         pauseSong()
//     }else{
//         playSong()
//     }
// })
