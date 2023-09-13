const http = require("http");
const fs = require("fs");
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");

let url = "https://www.youtube.com/watch?v=ZrpEIw8IWwk";
const file = fs.createWriteStream("anime.mp3");
const vid = fs.createWriteStream("anime.mp4");
ytdl(url,{quality : 137}).pipe(vid).on("close",() => {

    ytdl(url, {filter: "audioonly"}).pipe(file).on("close", () => {

        ffmpeg.setFfmpegPath(ffmpegStatic);
        let com = ffmpeg()
            .input("anime.mp4")
            .input("anime.mp3")
            .format("mp4")
            .addOptions(["-map 0:v", "-map 1:a", "-c:v copy"])
            .on('error', error => console.error(error))
            .saveToFile("./Merged.mp4");
    });
} );
