import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      container: true,
      'is-clicked': this.post.data.clicked
    }

    return classes
  }

  onClick(post){
    post.data.clicked = !post.data.clicked;
    window.open(post.data.url, "_blank");
  }

  hasThumbnail(){
    if (['default', 'self', 'image'].includes(this.post.data.thumbnail))
      return false;
    return true;
  }
}