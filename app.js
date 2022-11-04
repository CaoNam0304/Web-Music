const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playList = $('.main__playlist')

const pauseBtn = $('.main__control-icon-pause')
const playBtn = $('.main__control-icon-play')
const playing = $('.playing-btn')

const audio = $('#audio')
debugger
const appMusic = {
    isPlaying : true,
    currentIndex: 0,
    songs: [
        {
            id: 1,
            name: "Có Chơi Có Chịu",
            singer: "KARIK x ONLY C",
            path: "./assets/Music/song2.mp3",
            image: "./assets/img/img2.jpg",
        },
        {
            id: 2,
            name: "Waiting For You",
            singer: "MONO x Onionn",
            path: "./assets/Music/song1.mp3",
            image: "./assets/img/img1.jpg",
        },
        {
            id: 3,
            name: "Mặt Mộc",
            singer: "Phạm Nguyên Ngọc x VAnh x Ân Nhi",
            path: "./acsets/Music/song3.mp3",
            image: "./assets/img/img3.jpg",
        },
        {
            id: 4,
            name: "Em Còn Nhớ Anh Không?",
            singer: "Hoàng Tôn (Feat. Koo)",
            path: "./assets/Music/song4.mp3",
            image: "./assets/img/img4.jpg",
        },
        {
            id: 5,
            name: "Lời Tạm Biệt Chưa Nói",
            singer: "Kai Đinh x CaoTri",
            path: "./assets/Music/song5.mp3",
            image: "./assets/img/img5.jpg",
        },
        {
            id: 6,
            name: "Chờ Đợi Có Đáng Sợ",
            singer: "Andiez",
            path: "./assets/Music/song6.mp3",
            image: "./assets/img/img6.jpg",
        },
        {
            id: 7,
            name: "Yêu Một Nguời Có Lẽ",
            singer: "Miu Le x Lou Hoang",
            path: "./assets/Music/song7.mp3",
            image: "./assets/img/img7.jpg",
        },
    ],
    
    // Hàm define
    defineProperty: function() {
        Object.defineProperty(this, 'currentSong', {
          get: function() {
            return this.songs[this.currentIndex]
          }
        })
      },
    //   Hàm Render Code
    renderPlaylist: function () {
        
        const html = this.songs.map(function (song) {
            return `
            <div class="main__playlist-item">
                    <div class="main__playlist-group">
                        <span class="main__playlist-index">${song.id}</span>
                        <img src="./${song.image}" alt="" class="main__playlist-img">
                        <div class="main__playlist-info">
                            <p class="main__playlist-name">${song.name}</p>
                            <p class="main__playlist-singer">${song.singer}</p>
                        </div>
                    </div>
                    <div class="main__playlist-control">
                        <span class="material-symbols-outlined main__playlist-like"> favorite </span>
                        <i class="fa-solid fa-ellipsis main__playlist-option"></i>
                    </div>
            </div>
            `
        })
        playList.innerHTML = html.join("");
        // Hàm bắt sự kiện
        
    },

    // Hàm tải bài hát đầu tiên
    loodCurrentSong: function() {
        audio.src = this.currentSong.path

    },

    handleEvent: function(){
        const _this = this;

        // Xử Lí khi chạy Play
        playBtn.onclick = function(){
            if(_this.isPlaying) {
                audio.play()
                _this.isPlaying = false;
                playing.innerHTML = `<ion-icon name="pause"></ion-icon>`
            } else {
                audio.pause()
                _this.isPlaying = true;
                playing.innerHTML = `<ion-icon name="play"></ion-icon>`
            }
        }
    },
    start: function () {
        this.renderPlaylist();
        this.defineProperty();
        this.loodCurrentSong();
        this.handleEvent();
    }
}

appMusic.start()