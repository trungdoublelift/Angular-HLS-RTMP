import { Component, OnInit } from '@angular/core';
import HLS from 'hls.js'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hlstest';

  ngOnInit(){
    this.bindVideo()
  }

  bindVideo(){
    var video =<HTMLVideoElement>document.getElementById('video');
    var videoSrc = 'http://192.168.0.108:8000/live/1234/index.m3u8';
      var hls = new HLS();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);

  }
}
