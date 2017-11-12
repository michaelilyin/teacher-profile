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

  public literature = [
    {
      name: "5 класс",
      resources: [{
        name: "Коровина",
        link: "http://www.alleng.ru/d/lit/lit157.htm"
      }]
    }, {
      name: "6 класс",
      resources: [{
        name: "Коровина",
        link: "http://www.alleng.ru/d/lit/lit158.htm"
      }]
    }, {
      name: "7 класс",
      resources: [{
        name: "Коровина",
        link: "http://www.alleng.ru/d/lit/lit170.htm"
      }]
    }, {
      name: "8 класс",
      resources: [{
        name: "Коровина",
        link: "http://www.alleng.ru/d/lit/lit109.htm"
      }]
    }, {
      name: "9 класс",
      resources: [{
        name: "Коровина",
        link: "http://www.alleng.ru/d/lit/lit153.htm"
      }]
    }
  ];

  public resources = [
    {
      name: "Ассоциация учителей литературы и русского языка",
      link: "http://uchitel-slovesnik.ru/"
    }, {
      name: "Справочно-информационный портал о русском языке. На нём можно проверить правописание слова",
      link: "http://gramota.ru/"
    }, {
      name: "Культура письменной речи",
      link: "http://gramma.ru/"
    }, {
      name: "Институт русской литературы (пушкинский дом) РАН",
      link: "http://www.pushkinskijdom.ru/"
    }, {
      name: "Русская виртуальная библиотека. Подборка произведений русской литературы XVIII, XIX и XX вв",
      link: "http://rvb.ru/"
    }, {
      name: "Некоммерческая электронная библиотека",
      link: "http://imwerden.de/avtory.html"
    }, {
      name: "Фундаментальная электронная библиотека",
      link: "http://feb-web.ru/"
    }, {
      name: "Литературная энциклопедия: В 11 т.",
      link: "http://feb-web.ru/feb/litenc/encyclop/"
    }, {
      name: "Литературная энциклопедия: Словарь литературных терминов: В 2-х т.",
      link: "http://feb-web.ru/feb/slt/abc/"
    }, {
      name: "Подборка словарей русского языка",
      link: "http://www.slovari.ru/start.aspx?s=0&p=3050"
    }, {
      name: "Квятковский А. П. Поэтический словарь",
      link: "http://www.wysotsky.com/0009/150.htm"
    }, {
      name: "Словарь по литературоведению П. А. Николаева",
      link: "http://nature.web.ru/litera/"
    }, {
      name: "Сборник сочинений",
      link: "http://www.litra.ru/"
    }, {
      name: "Крупнейший энциклопедический ресурс интернета",
      link: "http://www.rubricon.com/"
    }, {
      name: "Единое окно доступа к образовательным ресурсам",
      link: "http://window.edu.ru/"
    }, {
      name: "Библиотека биографической литературы",
      link: "http://zzl.lib.ru/catalog/01_a.shtml"
    }, {
      name: "Сайт о поэтах серебряного века",
      link: "http://slova.org.ru/"
    }, {
      name: "Библиотека методической литературы",
      link: "http://www.zavuch.ru/?option=com_mtree&Itemid=92"
    }, {
      name: "Научно – методический совет при ОО «АССУЛ»",
      link: "https://www.nmsovet.ru/"
    }, {
      name: "«Весь Пушкин»",
      link: "http://ves-pushkin.ru/"
    }, {
      name: "«Весь Лермонтов»",
      link: "http://lermontov.info/all-lermontov.shtml"
    }, {
      name: "«Весь Толстой»",
      link: "http://www.readingtolstoy.ru/"
    }, {
      name: "«Весь Достоевский»",
      link: "http://www.alldostoevsky.ru/"
    }, {
      name: "«Весь Чехов»",
      link: "http://www.allchekhov.ru/"
    }, {
      name: "Булгаковская энциклопедия",
      link: "http://www.bulgakov.ru/"
    }, {
      name: "Н.С.Гумилев",
      link: "https://gumilev.ru/"
    }, {
      name: "Сайт Мандельштамовского общества",
      link: "http://rvb.ru/mandelstam/"
    }, {
      name: "Аудиокниги",
      link: "https://audiokniga.club/zhanry/klassicheskaya-otechestvennaya-literatura/"
    }
  ];

  public dictionaries = [
    {
      name: "Толковые словари",
      resources: [{
        name: "С.И.Ожегов, Н.Ю.Шведова. ",
        link: "http://lib.ru/DIC/OZHEGOW/ozhegow_a_d.txt"
      }, {
        name: "В.И.Даль",
        link: "http://slovardalja.net/"
      }, {
        name: "Д.Н.Ушаков",
        link: "http://ushakovdictionary.ru/"
      }]
    }, {
      name: "Орфографические словари",
      resources: [{
        link: "http://www.dict.t-mm.ru/lopatin"
      }, {
        link: "https://slovar.cc/rus/orfo-rus.html"
      }]
    }, {
      name: "Словообразовательный словарь",
      resources: [{
        name: "А.Н.Тихонов",
        link: "https://studfiles.net/preview/5274998/page:13/"
      }]
    }, {
      name: "Этимологические словари",
      resources: [{
        link: "https://etymological.academic.ru/"
      }, {
        link: "http://evartist.narod.ru/text15/001.htm"
      }]
    }, {
      name: "Орфоэпические словари",
      resources: [{
        name: "Р. И. Аванесов (источник 1)",
        link: "http://dazor.narod.ru/russkie/slovari/orfoepicheskij-avanesov-1988/orfoepicheskij-avanesov-1988_0021.htm"
      }, {
        name: "Р. И. Аванесов (источник 2)",
        link: "http://uchitel-slovesnosti.ru/slovari/4.pdf"
      }]
    }, {
      name: "Р. И. Аванесов",
      resources: [{
        name: "З.Е.Александровой (файл)",
        icon: "file_download",
        link: "/assets/files/dictionaries/словарь синонимов.pdf",
        local: true
      }, {
        name: "З.Е.Александровой (онлайн)",
        link: "http://sinonim.org/"
      }]
    }, {
      name: "Словарь антонимов",
      resources: [{
        name: "М.Р.Львова (файл)",
        icon: "file_download",
        local: true,
        link: "/assets/files/dictionaries/словарь антонимов.pdf",
      }, {
        name: "М.Р.Львова (онлайн)",
        link: "http://antonymonline.ru/"
      }]
    }, {
      name: "Словарь омонимов",
      resources: [{
        name: "О.С.Ахмановой (файл)",
        link: "/assets/files/dictionaries/Ахманова О.С. Словарь омонимов русского языка (1986).djvu",
        local: true,
        icon: "file_download"
      }, {
        name: "О.С.Ахмановой (онлайн, источник 1)",
        link: "http://padaread.com/?book=80120"
      }, {
        name: "О.С.Ахмановой (онлайн, источник 2)",
        link: "http://files.school-collection.edu.ru/dlrstore/0a1e9c66-1b4f-4e47-8a7f-18ec428e4ef1/%5BRUS5_059%5D_%5BTD_021%5D.html"
      }]
    }, {
      name: "Словарь паронимов",
      resources: [{
        name: "О.В.Вишняковой (источник 1)",
        link: "http://paronymonline.ru/download/paronyms-vishnyakova.pdf"
      }, {
        name: "О.В.Вишняковой (источник 2)",
        link: "https://paronimov.slovaronline.com/"
      }]
    }, {
      name: "Фразеологический словарь",
      resources: [{
        name: "А.Н.Тихонов (файл)",
        link: "/assets/files/dictionaries/Tihonov_A._Frazeologicheskii_slovar_russkogo_yazyka_Litmir.net_bid194456_original_d7dc1.pdf.zip",
        local: true,
        icon: "file_download"
      }, {
        name: "А.Н.Тихонов (онлайн)",
        link: "http://www.onlinedics.ru/slovar/frazeolog.html"
      }]
    }, {
      name: "Грамматический словарь",
      resources: [{
        link: "https://gufo.me/dict/zaliznyak"
      }]
    }, {
      name: "Словарь иностранных слов",
      resources: [{
        link: "http://www.onlinedics.ru/slovar/inyaz.html"
      }]
    }
  ]
}
