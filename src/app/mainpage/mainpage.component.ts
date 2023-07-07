import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
  selectedMenuOption = 'all';
  gallaryImages = [
    '../../assets/images/deep_tissue.jpg',
    '../../assets/images/img_gallery4.jpg',
    '../../assets/images/gallary_3.avif',
    '../../assets/images/gallary_4.jpg',
    '../../assets/images/gallary_5.jpg',
    '../../assets/images/gallary_6.jpg',
  ];
  menuOption = [
    { key: 'all', name: 'All' },
    { key: 'aroma', name: 'Aroma Oil Massage' },
    { key: 'swedish', name: 'Swedish Massage' },
    { key: 'dry', name: 'Dry Massage' },
    { key: 'deep_tissue', name: 'Deep Tissue Massage' },
  ];

  allMassage: any = [
    {
      key: 'aroma',
      name: 'Aroma Oil Massage',
      price: 999,
      time: 45,
      img: '../../assets/images/img_aroma.webp',
    },
    {
      key: 'aroma',
      name: 'Aroma Oil Massage',
      price: 1299,
      time: 60,
      img: '../../assets/images/img_aroma.webp',
    },
    {
      key: 'aroma',
      name: 'Aroma Oil Massage',
      price: 1799,
      time: 90,
      img: '../../assets/images/img_aroma.webp',
    },
    {
      key: 'swedish',
      name: 'Swedish Massage',
      price: 1099,
      time: 45,
      img: '../../assets/images/img_swadesh.avif',
    },
    {
      key: 'swedish',
      name: 'Swedish Massage',
      price: 1299,
      time: 60,
      img: '../../assets/images/img_swadesh.avif',
    },
    {
      key: 'swedish',
      name: 'Swedish Massage',
      price: 1899,
      time: 90,
      img: '../../assets/images/img_swadesh.avif',
    },
    {
      key: 'dry',
      name: 'Dry Massage',
      price: 1199,
      time: 45,
      img: '../../assets/images/img_dry1.avif',
    },
    {
      key: 'dry',
      name: 'Dry Massage',
      price: 1399,
      time: 60,
      img: '../../assets/images/img_dry1.avif',
    },
    {
      key: 'dry',
      name: 'Dry Massage',
      price: 1699,
      time: 90,
      img: '../../assets/images/img_dry1.avif',
    },
    {
      key: 'deep_tissue',
      name: 'Deep Tissue Massage',
      price: 1299,
      time: 45,
      img: '../../assets/images/img_deeptissue.avif',
    },
    {
      key: 'deep_tissue',
      name: 'Deep Tissue Massage',
      price: 1699,
      time: 60,
      img: '../../assets/images/img_deeptissue.avif',
    },
    {
      key: 'deep_tissue',
      name: 'Deep Tissue Massage',
      price: 1999,
      time: 90,
      img: '../../assets/images/img_deeptissue.avif',
    },
  ];
  allMenu = this.allMassage;
  selectedMenu(e: any) {
    this.selectedMenuOption = e;
    // this.allMassage = this.allMenu.forEach((element: any) => {});
    if (e == 'all') {
      this.allMassage = this.allMenu;
    } else {
      this.allMassage = this.allMenu.filter((t: any) => t.key == e);
      console.log(this.allMassage);
    }
  }
}
