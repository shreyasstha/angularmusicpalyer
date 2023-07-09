import { Component } from '@angular/core';

import { Music } from './music';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Music-Player';
  audio = new Audio();
  musicList:Music[]=[
    {
      album:"Test",
      title:"Cold_mess",
      artist:"Prateek Kuhad",
      url:"/assets/-- Cold_mess - Prateek Kuhad (lyrics)(MP3_70K).mp3"
    },
    {
      album:"Test2",
      title:"Falling Again",
      artist:"Klang",
      url:"/assets/Love Alarm OST _ Falling Again - Klang.mp3"
    },
    {
      album:"Test3",
      title:"Christmas Tree",
      artist:"그 해 우리는",
      url:"/assets/Christmas Tree __ 그 해 우리는.mp3"
    }
  ];

  displayedColumns:string[]=['title','artist','album'];
  trackPointer:number=0;
  currentMusic:Music={
    album:"",
    title:"",
    artist:"",
    url:""
  }
  play(index?:number):void{
    if(index ===undefined){
      if(this.audio.paused){
        if(this.audio.readyState ===0){
          this.trackPointer = 0;
          this.currentMusic = this.musicList[0];
          this.audio.src = this.currentMusic.url;
        }
        this.audio.play();
      }
      else{
        this.audio.pause();
      }
    }
    else{
      this.trackPointer = index;
      this.currentMusic = this.musicList[index];
      this.audio.src = this.currentMusic.url;
      this.audio.play();
    }
  }

  prev():void{
    this.trackPointer --;
    this.currentMusic = this.musicList[this.trackPointer];
    this.audio.src=this.currentMusic.url;
    this.audio.play();
  }

  next():void{
    this.trackPointer ++;
    this.currentMusic = this.musicList[this.trackPointer];
    this.audio.src=this.currentMusic.url;
    this.audio.play();
  }

  volumeSlider(event:any){
    this.audio.volume=event.value /100;
    console.log(event)
  }
}
