console.log("Welcome to Spotify");
let songIndex = 0;
let masterSongName = document.getElementById("masterSongName");

let audioElement = new Audio("photo/0.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let i = 0;
const songs = [
	{
		songName: "Bad Liar",
		filePath: "photo/0.mp3",
		coverPath: "photo/badliar.jpg",
		count: 0,
	},
	{
		songName: "Radioactive",
		filePath: "photo/1.mp3",
		coverPath: "photo/radioactive.jpeg",
		count: 1,
	},
	{
		songName: "Believer",
		filePath: "photo/2.mp3",
		coverPath: "photo/believer.jpeg",
		count: 2,
	},
	{
		songName: "Demon",
		filePath: "photo/3.mp3",
		coverPath: "photo/demon.jpg",

		count: 3,
	},
	{
		songName: "Thunder",
		filePath: "photo/4.mp3",
		coverPath: "photo/thunder.jpg",
		count: 4,
	},
	{
		songName: "Enemy",
		filePath: "photo/5.mp3",
		coverPath: "photo/enemy.jpg",
		count: 5,
	},
	{
		songName: "Naturals",
		filePath: "photo/6.mp3",
		coverPath: "photo/naturals.jpg",
		count: 6,
	},
	{
		songName: "Bones",
		filePath: "photo/7.mp3",
		coverPath: "photo/bones.jpg",
		count: 7,
	},
	{
		songName: "Whatever it takes",
		filePath: "photo/8.mp3",
		coverPath: "photo/whatever.jpg",
		count: 8,
	},
	{
		songName: "Sharks",
		filePath: "./photo/9.mp3",
		coverPath: "photo/sharks.jpg",
		count: 9,
	},
];

songItems.forEach((element, j) => {
	element.getElementsByTagName("img")[0].src = songs[j].coverPath;
	element.getElementsByClassName("songName")[0].innerText = songs[j].songName;
});

masterPlay.addEventListener("click", () => {
	if (audioElement.paused || audioElement.currentTime <= 0) {
		audioElement.play();
		masterPlay.classList.remove("fa-circle-play");
		masterPlay.classList.add("fa-circle-pause");
		gif.style.opacity = 1;
	} else {
		audioElement.pause();
		masterPlay.classList.remove("fa-circle-pause");
		masterPlay.classList.add("fa-circle-play");
		gif.style.opacity = 0;
	}
});

audioElement.addEventListener("timeupdate", () => {
	progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
	myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
	audioElement.currentTime =
		(myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
	Array.from(document.getElementsByClassName("songItemPlay")).forEach(
		(element) => {
			element.classList.remove("fa-circle-pause");
			element.classList.add("fa-circle-play");
		}
	);
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
	(element) => {
		element.addEventListener("click", (e) => {
			makeAllPlays();
			songIndex = parseInt(e.target.id);
			e.target.classList.remove("fa-circle-play");
			e.target.classList.add("fa-circle-pause");
			audioElement.src = `photo/${songIndex}.mp3`;
			masterSongName.innerText = songs[songIndex].songName;
			audioElement.currentTime = 0;
			audioElement.play();
			gif.style.opacity = 1;
			masterPlay.classList.remove("fa-circle-play");
			masterPlay.classList.add("fa-circle-pause");
		});
	}
);

document.getElementById("next").addEventListener("click", () => {
	if (songIndex >= 9) {
		songIndex = 0;
	} else {
		songIndex += 1;
	}

	audioElement.src = `photo/${songIndex}.mp3`;
	masterSongName.innerText = songs[songIndex].songName;
	audioElement.currentTime = 0;
	audioElement.play();
	masterPlay.classList.remove("fa-circle-play");
	masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
	if (songIndex <= 0) {
		songIndex = 0;
	} else {
		songIndex -= 1;
	}

	audioElement.src = `photo/${songIndex}.mp3`;
	masterSongName.innerText = songs[songIndex].songName;
	audioElement.currentTime = 0;
	audioElement.play();
	masterPlay.classList.remove("fa-circle-play");
	masterPlay.classList.add("fa-circle-pause");
});
