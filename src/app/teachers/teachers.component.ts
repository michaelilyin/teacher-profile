import {Component} from '@angular/core';

@Component({
  selector: 'teachers',
  templateUrl: './teachers.component.html'
})
export class TeachersComponent {
  public russian = [
    {
      resources: [{
        name: "Рабочая программа по Тростенцовой, Ладыженской с 5 по 9 класс по ФГОС",
        link: "http://www.prosv.ru/_data/assistance/122/cb0bddd8-8eb7-11dd-9bf4-0019b9f502d0.pdf"
      }, {
        name: "Рабочая программа по Разумовской",
        link: "https://kopilkaurokov.ru/russkiyYazik/planirovanie/rabochaia-proghramma-fgos-russkii-iazyk-6-kl"
      }]
    }, {
      name: "5 класс",
      resources: [{
        link: "https://nsportal.ru/shkola/russkiy-yazyk/library/2015/04/22/rabochaya-programma-po-fgos-5-klass-po-umk-m-m-razumovskoy"
      }, {
        link: "https://nsportal.ru/shkola/russkiy-yazyk/library/2015/03/14/rabochaya-programma-po-russkomu-yazyku-5-klass-po-programme"
      }]
    }, {
      name: "6 класс",
      resources: [{
        link: "https://nsportal.ru/shkola/russkiy-yazyk/library/2012/08/29/rabochaya-programma-po-russkomu-yazyku-6-klass-razumovskaya"
      }, {
        link: "https://nsportal.ru/shkola/russkiy-yazyk/library/2013/10/20/rabochaya-programma-po-russkomu-yazyku-6-klass-po-programme"
      }, {
        link: "https://edu.tatar.ru/upload/images/files/6_класс_РЯ.pdf"
      }]
    }, {
      name: "7 класс",
      resources: [{
        link: "https://nsportal.ru/shkola/russkiy-yazyk/library/2014/05/05/rabochaya-programma-po-russkomu-yazyku-dlya-7-klassa-po-0"
      }, {
        link: "https://nsportal.ru/shkola/russkiy-yazyk/library/2016/09/08/rabochaya-programma-po-russkomu-yazyku-dlya-7-klassa-2016"
      }]
    }, {
      name: "8 класс",
      resources: [{
        link: "https://nsportal.ru/shkola/russkiy-yazyk/library/2014/05/06/rabochaya-programma-po-russkomu-yazyku-dlya-8-klassa-po-1"
      }, {
        link: "https://nsportal.ru/shkola/russkiy-yazyk/library/2016/01/08/rabochaya-programma-po-russkomu-yazyku-8-klass-po-programme"
      }, {
        link: "https://edu.tatar.ru/upload/images/files/8_класс_РЯ.pdf"
      }]
    }, {
      name: "9 класс",
      resources: [{
        link: "https://nsportal.ru/shkola/russkiy-yazyk/library/2013/10/07/rabochaya-programma-po-russkomu-yazyku-9-klass-po-uchebniku"
      }, {
        link: "https://nsportal.ru/shkola/russkiy-yazyk/library/2015/09/15/rabochaya-programma-po-russkomu-yazyku-9-klass-k-umk-m-m"
      }, {
        link: "http://www.openclass.ru/lessons/129678"
      }]
    }
  ];

  public literature = [
    {
      name: "5 класс",
      resources: [{
        link: "https://nsportal.ru/shkola/literatura/library/2016/09/10/rabochaya-programma-po-literature-5-klass-102-chasa-fgos"
      }, {
        link: "https://nsportal.ru/shkola/rodnoy-yazyk-i-literatura/library/2015/08/13/ktp-literatura-5-9-fgos-ooo-korovina-v-ya"
      }]
    }, {
      name: "6 класс",
      resources: [{
        link: "https://nsportal.ru/shkola/literatura/library/2015/01/10/rabochaya-programma-po-literature-6-klass-korovina-fgos-102-sch"
      }, {
        link: "https://nsportal.ru/shkola/literatura/library/2015/03/23/rabochaya-programma-i-kalendarno-tematicheskoe-planirovanie-p-0"
      }, {
        link: "https://www.prodlenka.org/index.php?option=com_mtree&task=att_download&link_id=123977&cf_id=24"
      }]
    }, {
      name: "7 класс",
      resources: [{
        link: "https://nsportal.ru/shkola/literatura/library/2016/09/10/rabochaya-programma-po-literature-7-klass-fgos-68-chasov"
      }]
    }, {
      name: "8 класс",
      resources: [{
        link: "https://nsportal.ru/shkola/literatura/library/2013/04/07/rabochaya-programma-po-literature-k-uchebniku-8-klassa-pod"
      }, {
        link: "https://nsportal.ru/shkola/literatura/library/2012/09/28/rabochaya-programma-po-literature-dlya-8-klassa-k-uchebniku"
      }]
    }, {
      name: "9 класс",
      resources: [{
        link: "https://nsportal.ru/shkola/literatura/library/2014/08/20/rabochaya-programma-literatura-9-klass-korovina"
      }]
    }
  ];

  public lessons = [
    {
      name: "5 класс",
      resources: [{
        name: "5 кл. Тех.карта.Повторение имени прилагательного",
        file: "5 кл. Тех.карта.Повторение имени прилагательного"
      }]
    }, {
      name: "6 класс",
      resources: [{
        name: "6 и 8 кл. Русский язык в современном мире",
        file: "6 и 8 кл. Русский язык в современном мире"
      }]
    }, {
      name: "7 класс",
      resources: [{
        name: "7 кл. Подготовка к написанию сжатого изложения",
        file: "7 кл. Подготовка к написанию сжатого изложения"
      }]
    }, {
      name: "8 класс",
      resources: [{
        name: "6 и 8 кл. Русский язык в современном мире",
        file: "6 и 8 кл. Русский язык в современном мире"
      }, {
        name: "8 кл. Жан Батист Мольер. Мещанин во дворянстве",
        file: "8 кл. Жан Батист Мольер. Мещанин во дворянстве"
      }, {
        name: "8 кл. Закреп.мат. Строение и грамматическое значение предложений",
        file: "8 кл. Закреп.мат. Строение и грамматическое значение предложений"
      }, {
        name: "8 кл. Нов. мат. Строение и грамматическое значение словосочетаний",
        file: "8 кл. Нов. мат. Строение и грамматическое значение словосочетаний"
      }, {
        name: "8 кл. Нов.ур. Строение и грамматическое значение предложений",
        file: "8 кл. Нов.ур. Строение и грамматическое значение предложений"
      }, {
        name: "8 кл. Повторение изученного. Морфология",
        file: "8 кл. Повторение изученного. Морфология"
      }, {
        name: "8 кл. Повторение изученного. Лексика и фразеология",
        file: "8 кл. Повторение изученного. Лексика и фразеология"
      }, {
        name: "8 кл. Словосочетания",
        file: "8 кл. Словосочетания"
      }, {
        name: "8 кл. Строение и грамматическое значение предложений",
        file: "8 кл. Строение и грамматическое значение предложений"
      }, {
        name: "8 кл. Строение и грамматическое значение словосочетаний",
        file: "8 кл. Строение и грамматическое значение словосочетаний"
      }, {
        name: "8 кл. 8 кл. Строение текста. Стили речи",
        file: "8 кл. 8 кл. Строение текста. Стили речи"
      }, {
        name: "8 кл. 8 кл. Творческий метод, художественная система и литературное направление",
        file: "8 кл. 8 кл. Творческий метод, художественная система и литературное направление"
      }, {
        name: "8 кл. Томас Мэлори",
        file: "8 кл. Томас Мэлори"
      }, {
        name: "8 кл. Уильям Шекспир «Гамлет»",
        file: "8 кл. Уильям Шекспир «Гамлет»"
      }, {
        name: "8 кл. урок подготовки к сочинению по картине",
        file: "8 кл. урок подготовки к сочинению по картине"
      }, {
        name: "8 кл. Хождение Богородицы по мукам",
        file: "8 кл. Хождение Богородицы по мукам"
      }]
    }, {
      name: "11 класс",
      resources: [{
        name: "11 кл. Подготовка к сочинению по поэме Блока Двенадцать",
        file: "11 кл. Подготовка к сочинению по поэме Блока Двенадцать"
      }]
    }
  ];

}
