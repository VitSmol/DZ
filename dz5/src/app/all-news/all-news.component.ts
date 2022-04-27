import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.sass']
})
export class AllNewsComponent implements OnInit {

  news = [
    {
      title: `1 new`,
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quam expedita blanditiis ex, at inventore veniam, voluptatem voluptate soluta dignissimos quas porro dolor reprehenderit dolorum quidem aliquid, nobis nam commodi!`,
      date: `14.12.1985`
    },
    {
      title: `2 new`,
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quam expedita blanditiis ex, at inventore veniam, voluptatem voluptate soluta dignissimos quas porro dolor reprehenderit dolorum quidem aliquid, nobis nam commodi!`,
      date: `14.12.1985`
    },
    {
      title: `3 new`,
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quam expedita blanditiis ex, at inventore veniam, voluptatem voluptate soluta dignissimos quas porro dolor reprehenderit dolorum quidem aliquid, nobis nam commodi!`,
      date: `14.12.1985`
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
