
let figmaTitle;
let header;
let annotatio;
let figmaText;
let undText;
let siteLanguage =true;
if(window.location.search=='?utm_metka'){
    header = 'Заголовок! Специально для утем метки /?utm_metka';
    annotatio = 'Анотация к этому заголовку. Тут объяснени что это мультилендя на яваскрипте без серверного языка.';
    console.log(window.location.search);
    document.querySelector('meta[name="description"]').setAttribute("content", "Заказать мультилендинг с кучей ютм меток которые открывают то что нужно.");
    document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
    document.title="Еще один мультилендинг.";
    undText=" ";
    siteLanguage=false;
  }
  else if(window.location.search=='?multi_lending'){
        header = 'Мультилендинг! Ютем метки подменяют заголовок и контент.';
        annotatio = 'Анотация к этому заголовку. Тут объяснени что это мультилендинг успешно действует на яваскрипте без серверного языка.';
        console.log(`${header} ${annotatio}`);
        document.querySelector('meta[name="description"]').setAttribute("content", "Заказать мультилендинг с продвижением и SEO оптимизацией. Под тот контент что нужно показать широкому кругу.");
        document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
        undText=" ";
        siteLanguage=false;

  }else if(window.location.search=='?UTM'){
        header = 'Не бояться замарать руки по локоть в коде';
        annotatio = '<h3>🖥 Технология запиливать страницы на голом html/css/js под тот контент что нужно показать, обеспечивает высокую скорость, широкий охват и 🖥👩‍💻 SEO оптимизацию для показа в расширенных критериях поиска.</h3>';
        document.querySelector('meta[name="description"]').setAttribute("content", "Сайт на древней технологии html css JS. Доработка, исправление ,модификация. Или написать свой сайт с нуля.");
        document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
        undText=" ";
        siteLanguage=false;

  }else if(window.location.search=='?UTM2'){
        header = 'Заказать мультилендинг';
        annotatio = `<h3>Мультилендинг с адаптивной версткой и настройкой директа по ЦА <a href="https://nasobe.ru/feedback-form.html"><span class='ok'>👌Заказать!👍</span></a></h3>`;
        document.querySelector('meta[name="description"]').setAttribute("content", "Зказать Лендинг! Быстрые мобильные страницы, сайт с рекламой и SEO оптимизацией.");
        document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
        undText=" ";
        siteLanguage=false;

  }else if(window.location.search=='?top1'){
        header = '🎯Хочу в ТОП!? Значит Вы на правильном пути!';
        annotatio = '<strong>Стать заметным, легко! И веб мастерская имени Барона Сайтоверстаузена спешит на помощь ко всем! Все это выглядит как призвать супермена со своей супер силой! (...ну вот опять этот супермен.)</strong>';
        document.querySelector('meta[name="description"]').setAttribute("content", "Адаптивная верстка страниц с продвижением, поможет рассказать о себе всему миру!");
        document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
        undText=" ";
        siteLanguage=false;

  }else if(window.location.search=='?seo'){
        header = '<h1 style="font-size:4vh;">Лендинг с СЕО прибамбахами и турбо приводом в топ1.</h1>';
        annotatio = '<p>Тут делают адаптивную верстку с CEO прибамбахами и турбо приводом в топ 1 на планетарном уровне, по всей Земле и готовы пойти на контакс с любым предствителем Земной рассы, не смотря на его вероисповедание, социальный статус и материальное положение. (последнее под вопросом))) А так мы даже очень всем рады!</p>';
        document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
        undText=" ";
        siteLanguage=false;

  }else if(window.location.search=='?utm_metka_dlja_site'){
        header = '<h1>Heder</h1>';
        annotatio = '<h3>Annotation</h3>';
        siteLanguage=false;

  }else if(window.location.search=='?UTM3'){
        header = `сайт с ютеэм метками называется мультилендинг!`;
        annotatio = '<h3>Адаптивная верстка мобильной страницы.</h3>';
        undText=" ";
        siteLanguage=false;

  }else if(window.location.search=='?spa'){
        header = `<h1 style="text-align:center; font-size:3vh;"><img src="images/spanch.jpg" width='200px' alt='😃'>  <br> &nbsp Верстаю сайты с СЕО прибамбахами и турбо приводом в ТОП1 :-)!</h1>`;
        annotatio = '<h3>На планетарном уровне!</h3>';
        document.querySelector('meta[name="description"]').setAttribute("content", "Да поможет тебе сила адаптивной верстки");

        document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
        undText=" ";
        siteLanguage=false;

  }else if(window.location.search=='?frends'){
        header = `Добро пожаловать в наш дивный мир вебразработки!`;
        annotatio = '<h3>Мы запиливаем: сайты, лендинги, мультилендинги, сайты визитки и все в этом духе. На планетарном уровне!</h3>';
        document.querySelector('meta[name="description"]').setAttribute("content", "Сообщество веб разработчиков, делающих мир лушче и еще адаптивнее.");

        document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
        document.title="сообщество веб мастеров.";
        undText=" ";
        siteLanguage=false;

  }else if(window.location.search=='?Mashenka'){
        header = '<h1>О_о Машенька!</h1>';
        annotatio = '<h3>Машенька! Твои сообщения просто чудо, даже под самый конец весеннего обострения, все продолжает обостраться, по абостренному.</h3>';
        siteLanguage=false;

  }else if(window.location.search=='?figma'){
        header = '<h1>Лендинг по макету из фигмы</h1>';
        annotatio = '<h3>Лендинг, мультилендинг с SEO оптимизацией и продвижением в контекстной рекламе.</h3>';
        figmaTitle = '<h2>Фигма</h2>';
        figmaText ="<p style='margin:3%;'>Когда нужно &quot;запилить&quot; сайт по быстренькому внести изменения в существующий проект, по технологии &quot;HTML CODER&quot;, с использованием великой троицы веб разработки &quot;html,css,js&quot;.</p><p style='margin:3%;'>Пример сайта по макету из фигмы: &quot;<a href=https://www.figma.com/file/8T4byFDAV5REmnVyQlsFO1/clean_and_simple_website_freebie_work_file?node-id=3%3A2 style='overflow-wrap: breack-word;word-wrap: break-word;'>clean_and_simple_website_freebie_work_file</a>&quot; – Figma и данный сайт запиливается за один день, но! Стоит учесть что этот макет усовершенствован тегом вьюпорт и подходит для всех мобильных устройств. Что делает верстку приспособленной ко всем ситуациям. Даже необъяснимо &quot;форсмажорных&quot;. И на самом деле на одну только верстку ушли два дня. И пара консультационных вопросов со специалистами сообщества &quot;<a href=https://ru.stackoverflow.com/>стековерфлоу</a>&quot;. Все это даёт свои преимущества с возможностью лицезреть адаптивный вариант по макету из фигмы &quot;<a href=https://nasobe.ru/figma-simple-website.html>Примеры лендингом с веб мастерской имени барона сайтоверстаузена</a>&quot;</p><p style='margin:3%;'>Во времена постапокалипсиса, экономических штормов, сказочных абстракций. Существует проверенная техника: запиливать лендинг и мультилендинг по словесно устному, примерному описанию, по рисунку, по картинке, а лучше по макету из фигмы. С дополнительной SEO оптимизацией, семантическими тегами дающим современный подход. И будет всем счастье! И финансовая благополучность!</p>";
        document.querySelector('meta[name="description"]').setAttribute("content", "Лендинг по макету из фигмы! Качественно с системой SEO оптимизации, аналитикой и продвижением в контекстной рекламе.");
        document.title="Лендинг по макету из фигмы.";
        document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
        undText=" ";
        siteLanguage=false;

      }else if(window.location.search=="?Amirs_web_workshop"){
        header = 'Веб мастерская Амира';
        annotatio = '<img src="images/Amir.jpg" style="width:300px; border-radius:50%;"><h3>Верстка Лендингов, мультилендингов по технологии html,css,js &quotHTML CODER!&quot</h3>';

        document.querySelector('meta[name="description"]').setAttribute("content", "Лендинг по макету из фигмы! Качественно с системой SEO оптимизации, аналитикой и продвижением в контекстной рекламе.");
        document.title="Мультилендинг лучше чему у всех остальных! Будьте уверены!";
        document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
        undText="<span style='color:white; font-size:25px;text-shadow: 1px 1px 3px black;'>Когда О_очень надо! Редатировать, модифицировать, внести изминения. Запустить контекстную рекламу и продвинуть свой товар или услуги. </span>";
        siteLanguage=false;

      }else if(window.location.search=="?multilanding"){
        header="Мультилендинг";
        annotatio=`<strong style="font-size:28px; color:rgb(255,200,100);text-shadow:1px 1px 2px black; text-align:center;">Заказать мультилендинг</strong><br> На старых, добрых, древних технологиях великой троицы: <br><strong><span style="color:blue; font-size:30px;">html</span>, <span style="color:green; font-size:30px;">CSS</span>, <span style="color:yellow; font-size:30px; text-shadow:1px 1px 2px black;">JS</span>.</strong><br> ... &➕ <span style="font-size:15px;">Редактирование, исправление, модификация.</span>`;
        document.querySelector('meta[name="description"]').setAttribute("content", "Пример работающего мультилендинга.");
        document.title="Мультилендинг";
        document.querySelector("link[rel=canonical]").setAttribute("href", window.location);
        siteLanguage=false;

  }else{
    // console.log(window.location.href);
    header=`<p style='display:flex;flex-direction:column;'><span class='font-sizeH1'>Веб мастерская</span><span style='font-size:18px;'>имени Барона Сайтоверстаузена</span></p>`;
    annotatio=`<span style="width:500px;max-width:100%;">Заказать лендинг, мультилендинг по макету из фигмы! Сайты на JS <span style="color:black;text-shadow:white 1px 1px 2px;">&nbsp;(JavaScript)</span></span>`;
    headerEng=`<p style='display:flex;flex-direction:column;'><span class='font-sizeH1'>Web workshop</span><span style='font-size:18px;'>named after Baron Siterstauzen</span></p>`;
    annotatioEng=`<span style="width:500px;max-width:100%;">Order a landing page, a multi-landing page based on a figma layout! Sites on JS<span style="color:black;text-shadow:white 1px 1px 2px;">&nbsp;(JavaScript)</span></span>`;

    undText="<h2>And ... вместо предыстории: Откровенная правда!</h2><div style='max-width:100%; width:900px; text-align:center; background:rgba(0,128,0,0.3)';><p style='color:white; text-shadow:2px 2px 3px black'>Все страницы этого домена являются примером сверстанных веб страниц. И этот сайт, это совсем не огромная корпорация как можно вдруг случайно подумать(<span style='font-size:18px; color:grey; text-shadow:1px 1px 1px black;'>и случайно отправить на почту письмо с угрозами и обвинениями в незаконной трудовой деятельности</span>), а наоборот это настоящее портфолио одного человека, с одним именем и фантазией одной. И веб мастерская имени Барона Сайтоверстаузена - не просто как веб мастерская, а Самая Настоящая веб мастерская с элементами форсМажорных обстоятельств. ... и временами даже очень! Практикующая <a href=https://ru.wikipedia.org/wiki/%D0%AD%D0%BA%D1%81%D1%82%D1%80%D0%B5%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5 style='color:#ad2222;'>XP - экстремальное программирование</a>. Доработка, исправления, модификация, внесение изменений в существующие проекты. 'Основной стек html/css/js'</p>";

  }
  headers.innerHTML=`${header}`;
  annotation.innerHTML=`${annotatio}`;
