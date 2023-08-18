import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  images: any = [
    {
      img: 'https://rukminim1.flixcart.com/image/832/832/allinone-desktop/m/x/g/apple-imac-original-imaejxpjgm4xrtym.jpeg?q=70',
      desc: 'Apple Desktop',
    },
    {
      img: 'https://rukminim1.flixcart.com/image/832/832/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70',
      desc: 'Vivo Mobile',
    },
    {
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/smart-headphone/y/b/m/liquid-earbuds-madrabbit-original-imagmzgye5rqqkeh.jpeg?q=70',
      desc: 'Boat Earpods',
    },
    {
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/smartwatch/b/h/v/-original-imagkfm8rcrrjznb.jpeg?q=70',
      desc: 'Digital Watch',
    },
  ];

  onClick() {
    this.route.navigate(['/home']);
  }
}
