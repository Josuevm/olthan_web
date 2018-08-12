import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  category: string = 'kitchen';

  constructor() { }

  ngOnInit() {
  }

  setCategory(category) {
    this.category = category;
  }

}
