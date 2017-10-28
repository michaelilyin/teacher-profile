import {Component} from '@angular/core';

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html'
})
export class LessonsComponent {
  public russian = [
    {
      name: "5 Класс",
      resources: [{
        name: "Ладыженская",
        link: "http://www.alleng.ru/d/rusl/rusl366.htm"
      }, {
        name: "Все авторы",
        link: "http://vklasse.org/5-klass/uchebniki/russkij-yazyk"
      }, {
        name: "Разумовская",
        link: "http://padabum.com/x.php?id=77965"
      }]
    }, {
      name: "6 класс",
      resources: [{
        name: "Ладыженская",
        link: "http://www.alleng.ru/d/rusl/rusl435.htm"
      }, {
        name: "Ладыженская",
        link: "http://11klasov.ru/russian-language/675-russkiy-yazyk-6-klass-uchebnik-v-2-chast-baranov-mt-ladyzhenskaya-ta-trostencova-la-i-dr.html"
      }, {
        name: "Разумовская",
        link: "http://vklasse.org/6-klass/uchebniki/russkij-yazyk/mm-razumovskaya-si-lvova-vi-kapinos-vv-lvov-2013"
      }]
    }, {
      name: "7 класс",
      resources: [{
        name: "Ладыженская",
        link: "http://www.alleng.ru/d/rusl/rusl368.htm"
      }, {
        name: "Разумовская",
        link: "http://avidreaders.ru/book/russkiy-yazyk-7-klass.html"
      }, {
        name: "Разумовская",
        link: "http://edu1ife.ru/russkiy-yazyk-7-klass-uchebnik-5018.html"
      }]
    }, {
      name: "8 класс",
      resources: [{
        name: "Ладыженская",
        link: "http://www.alleng.ru/d/rusl/rusl369.htm"
      }, {
        name: "Разумовская",
        link: "http://www.pomogala.ru/russky/razumovskaya_russky_8.html"
      }]
    }, {
      name: "9 класс",
      resources: [{
        name: "Ладыженская",
        link: "http://www.alleng.ru/d/rusl/rusl324.htm"
      }, {
        name: "Ладыженская",
        link: "http://shcolara.ru/download/2715.html"
      }, {
        name: "Разумовская",
        link: "http://11klasov.ru/russian-language/103-russkiy-yazyk-9-klass-uchebnik-razumovskaya-mm-lvova-si.html"
      }]
    }
  ];
  public literature = [{
    name: "5 класс",
    resources: [{
      name: "Коровина",
      link: "http://www.alleng.ru/d/lit/lit157.htm"
    }]
  }]
}
