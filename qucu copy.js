// In src/index.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3700;
const mysql = require('mysql2');

app.set('views','public');
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('public_old'));

const mysqlhost='localhost';
 const mysqluser='qucu';
//const mysqluser='a0866413_database';
 const mysqlpassword='Gfhjkm123';
//const mysqlpassword='JnndTser';
  const mysqldatabase='excellent';
//const mysqldatabase='a0866413_database';
// SET PASSWORD FOR 'qucu'@'%' = 'Gfhjkm123';
// ALTER USER 'qucu'@'%' IDENTIFIED BY 'Gfhjkm123';
const fs =require('fs');
const path=require('path');
const jsonParser = express.json();
const cors = require('cors');


const connection = mysql.createConnection({
  host: mysqlhost,
  user: mysqluser,
  password: mysqlpassword,
  database:mysqldatabase
});

app.post('/allow-cors',jsonParser,cors(),(request,response)=>{
  console.log('oK');
  console.log('oKs');
  if (!request.body) return response.sendStatus(400);
  let scriptComments=fs.readFileSync('/public/script/script.js',"utf8",
  (error,data)=>{
    console.log("Async read file script.js");
    if(error) throw error;
    console.log(data);
  });
  response.send(scriptComments);
});// SCRIPT JS

app.get('/blozhik/',  function (request,response) {
  response.render('temporaryPage',{
      title: 'Бложик, веб мастерской имени барона сайтоверстаузена.',
      description: 'настоящий божик, несущий в своих недрах благое дело',

      url: 'blozhik'

    })
    response.send('oK');
  });

connection.connect(err=>{
  if(err){
    return err;
    console.log('err');
  }else{
    console.log('database--- oK');
  }
});
const sql = `SELECT * FROM article`;

connection.query(sql, function(err, results) {
  // console.log(results[0]['title']);
  if(err) console.log(err);
  //     console.log(results[1]['title']);
  for(let oj=0;oj<results.length;oj++){
    // console.log("/blozhik/"+`${results[oj]['url']}`);
    // console.log("/blozhik/"+`${results[oj]['description']}`);
    app.use("/blozhik/"+`${results[oj]['url']}`, function(request, response){
      response.render('blozhik', {
        title: `${results[oj]['title']}`,
        description: `${results[oj]['description']}`,
        article: `${results[oj]['text']}`,
        autor: `${results[oj]['autor']}`,
        url: `${results[oj]['url']}`,
        json: `${results[oj]['JSON']}`,
        id: `${results[oj]['id']}`
      });
    });
  }//for
   app.use(function(request,response,next){
    response.status(404).send('<div style="object-fit:contain;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;min-height:calc(100vh - 20px);background: url(/public/images/nlo.png);margin:0;border:0;background-size:cover;background-position: center;">sorry cant find that! Return to home or main page <span style="font-size:7vh;">404</span> <a href="/blozhik">^_^ Click here to BLOZHIK</a><hr><a href="/">O_o Click here to HomePage</a></div>');
  });
});//connection

app.use("/comments",(request,response)=>{
  response.render("indexPage",{
    title:"Comments",
    text: "Самописная система комментариев. Эта система комментариев без записи в базу данных. Сообщения записываются массивом в документ json форматa. После чего отправляются с сервера обратно в документ. С использованием одного только javascript. Как говорится в пословице: \"все гениальное просто\". Рабочую систему комментариев можно скачать по ссылки с моего гитхаба https://github.com/amir248/comments Вот вам пожалуйста рабочая система комментариев в открытом доступе, это не то что условно бесплатная система комментариев как \"дискус\". Сначало она бесплатная, а потом загромаждает все поля видимости жесточайшими ракламными блоками. Пример работы системы комментариев: https://amir248.github.io/localhost/ ^_^",
    warnings: "На сервере файлы кэшируются, поэтому иногда чтобы увидеть отправленное сообщение надо обновить страницу.",
    description: "Самописная система комментариев, для сайта."
  });
});




app.post('/allow-cors',jsonParser,cors(),(request,response)=>{
  if (!request.body) return response.sendStatus(400);
  let scriptComments=fs.readFileSync('/public/script/script.js',"utf8",
  (error,data)=>{
    console.log("Async read file script.js");
    if(error) throw error;
    console.log(data);
  });
  response.send(scriptComments);
});// SCRIPT JS
//******************************************************************************************************************
// ----------------------------BOX comments system------------
// *******************************************************************************************************************
const registerUrl=['http://192.168.1.101','http://192.168.1.104:80/','http://192.168.1.104:3700/','https://amir248.github.io','http://localhost'];
app.use(cors({
  origin:registerUrl,
  method:'post',
  optionsSuccessStatus: 200
}));
const importantBag={}
if(importantBag=={}){
  console.log('bag there exists');
}else{

  console.log(importantBag.id);
  console.log('bag empty');
}
const id=['a000','a001','a002','a003','a004','a005','a777','git','nasoberu','test','resume','sweb','blozh'];

//**********************************************************************
//----------------------------abracotabra-------------------------------
//**********************************************************************
//'/comments/'+`${id[x]}`+'.json/post'
function comments(x){
  app.post('/'+`${id[x]}`+'.json'+'/', jsonParser,cors(), function (request, response) {

    importantBag.id=`${id[x]}`;
console.log(importantBag.id+"____IMOPRTANT BBAG id");

    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    // oK get
    // importantBag=request.body.idea;
    let gitJson=JSON.stringify(request.body)+'';
    const putGit='public/json/'+`${importantBag.id}`+'.json';//puth for

    if(request.body.idea.site.pathname!=='/'){
      fs.access("public/json/allDiscus", function(error){
          if (error) {
              console.log("Файл не найден");
              fs.mkdir('allDiscus', err => {
               if(err) throw err; // не удалось создать папку
               console.log('Папка успешно создана');
            });
          }else{
              console.log("Файл найден");
          }
      });//allDiscus


      let fileOnPath="public/json/allDiscus/"+`${importantBag.id}`;
      console.log(fileOnPath);
      // putGit=fileOnPath;
      fs.access(`${fileOnPath}`, function(error){
          if (error) {
              console.log("Файл не найден 424");
              fs.mkdir(`${fileOnPath}`, err => {
               if(err) throw err; // не удалось создать папку
               console.log('Папка успешно создана 427');
            });
          } else {
              console.log("Файл найден 430");
          }
      });//allDiscus/importantBag
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//------------------------------------------------------------------------------
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      function createPathOnMessage(){
        // console.log('y');
        function pathAbracatabruch(path){
          if(/\/$/.test(path)){
          //   (`${request.body.idea.site.pathname}`.slice(0,-1))+'.json'
          let newPath=path.slice(0,-1)+'.json';
          path = newPath;
          // console.log(path+ '999' +"oK");
          return path;
        }else if(/[html|ejs|php]$/.test(path)){
          console.log(path+ "00000000000000000000000000");
          let oKoKfilePath = 'firstPage';
          let oK='two.html.json';
          fs.access(`${oKoKfilePath}`, function(error){
              if (error) {
                  console.log("Файл не найден _"+ `${oKoKfilePath}`);
                  fs.mkdir('allDiscus', err => {
                   if(err) throw err; // не удалось создать папку
                   console.log('Папка успешно создана');
                });

                    fs.writeFile(`${oKoKfilePath}`, `${oK}`, function(err){
                        if(err){
                            console.log(err);
                        }else{
                            console.log("Файл создан");
                        }
                    });
              }else{
                  console.log("Файл найден 493");
                  fs.readFile(`${fileOnPathTwo}`, "utf8",
                  function(error,data){
                    console.log("Асинхронное чтение файла 496");
                    if(error) throw error; // если возникла ошибка
                    console.log(data);  // выводим считанные данные
                  });
              }
          });

        }else{
            // console.log(path +"not 999");
          }
          // console.log(path+".json"+"_<- it's it");
          return path+".json"
        }//pathAbracatabruch

        //----------------------------------------------------------
        //--------------------REGEX---FIRST IMPORTANT---------------
        //---------------------------------------------------------
        console.log(`${request.body.idea.site.pathname}`+"77777777777777777777777");
          let fileOnPathTwo;
        if(`${request.body.idea.site.pathname}`.split("/").length - 1==2){
          console.log(`${request.body.idea.site.host}` +' < 452 !!!!');
          console.log(`${request.body.idea.id}` +' < 458 !!!!');

          console.log(`${request.body.idea.site.pathname}` +' < 491 !!!!');
          let githubPathName;
          if(`${request.body.idea.site.pathname}`=='/localhost/threePage.html'){
            githubPathName='/threePage.html';
          }else if(`${request.body.idea.site.pathname}`=='/localhost/twoPage.html'){
            githubPathName='/twoPage.html';
          }else if(`${importantBag.pathname}`=='/localhost/index.html'){
            githubPathName='/index.html';
          }else{
            console.log('FF');
          }

          if(`${request.body.idea.site.host}`=='amir248.github.io'){
            console.log("//// amir248.github.io 460 ////////");
            //`${importantBag.id}`+'/threePage.html'
            console.log(`${request.body.idea.id.pathname}`+'-------_________------------')
            fileOnPathTwo='public/json/allDiscus/'+pathAbracatabruch(`${request.body.idea.id}`+`${githubPathName}`);
          }else{

            console.log('465');
            console.log(`${importantBag.pathname}`.split("/").length - 1);
            fileOnPathTwo='public/json/allDiscus'+pathAbracatabruch(request.body.idea.site.pathname);
            // onGetPath='public/json/allDiscus'+(`${importantBag.pathname}`);
          }
        }else if(`${request.body.idea.site.pathname}`.split("/").length - 1==3){
            console.log(`${request.body.idea.site.host}` +' < 452 !!!!');
            console.log(`${request.body.idea.id}` +' < 458 !!!!');
            if(`${request.body.idea.site.host}`=='amir248.github.io'){
              console.log("//// amir248.github.io 460 ////////");
              //`${importantBag.id}`+'/threePage.html'
              fileOnPathTwo='public/json/allDiscus/'+pathAbracatabruch(`${request.body.idea.id}`+`${githubPathName}`);
            }else{

              console.log('465');
              console.log(`${importantBag.pathname}`.split("/").length - 1);
              fileOnPathTwo='public/json/allDiscus'+pathAbracatabruch(request.body.idea.site.pathname);
              // onGetPath='public/json/allDiscus'+(`${importantBag.pathname}`);
            }
          }else{
          console.log('471');
          fileOnPathTwo='public/json/allDiscus/'+`${importantBag.id}`+pathAbracatabruch(request.body.idea.site.pathname);
        }


console.log(fileOnPathTwo+" <---fileOnPathTwo 476");
        fs.access(`${fileOnPathTwo}`, function(error){
            if (error) {
                console.log("Файл не найден _"+ `${fileOnPathTwo}`);
                fs.mkdir('allDiscus', err => {
                 if(err) throw err; // не удалось создать папку
                 console.log('Папка успешно создана');
              });

                  fs.writeFile(`${fileOnPathTwo}`, `${gitJson}`, function(err){
                      if(err){
                          console.log(err);
                      }else{
                          console.log("Файл создан");
                      }
                  });
            }else{
                console.log("Файл найден 493");
                fs.readFile(`${fileOnPathTwo}`, "utf8",
                function(error,data){
                  console.log("Асинхронное чтение файла 496");
                  if(error) throw error; // если возникла ошибка
                  console.log(data);  // выводим считанные данные
                });
            }
        });

        fs.stat(`${fileOnPathTwo}`,(err,stats)=>{
          if(err){
            fs.writeFileSync(`${fileOnPathTwo}`,'['+`${gitJson}`+']');
          }else if(stats){
            function returnForever(){
              let newFile=fs.readFileSync(`${fileOnPathTwo}`,"utf8",
              function(error,data){
                if(error) throw error;
                console.log(data);
              });
              let un=+0;
              let prov=JSON.stringify(newFile);
              if(prov.endsWith(']"')){
                un=-1;
              }else if(prov.endsWith('\n')){
                un=-2;
              }else{
                un=-2;
              }
              let str=newFile.slice(0,un);
              fs.writeFileSync(`${fileOnPathTwo}`, `${str}`+","+`${gitJson}`+']','utf8');
            }//returnForever
            returnForever();
          }else{console.log('ELSE 526')}
        });
        //------------------------------------------------------------------
        //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        //------------------------------------------------------------------
        // const pathOnSitePathname='public/json/allDiscus/'+`${importantBag.id}`+'.json';
        // fs.access(`${pathOnSitePathname}`, function(error){
        //     if (error) {
        //         console.log("Файл не найден111 _"+`${pathOnSitePathname}`+"<XX");
        //         fs.mkdir('allDiscus', err => {
        //          if(err) throw err; // не удалось создать папку
        //          console.log('Папка успешно создана 111');
        //       });
        //
        //           fs.writeFile(`${pathOnSitePathname}`, `${gitJson}`, function(err){
        //               if (err) {
        //                   console.log(err);
        //               } else {
        //                   console.log("Файл создан111");
        //               }
        //           });
        //     } else {
        //         console.log("Файл найден XXX");
        //         fs.readFile(`${pathOnSitePathname}`, "utf8",
        //         function(error,data){
        //           console.log("Асинхронное чтение файла111");
        //           if(error) throw error; // если возникла ошибка
        //           console.log(data);  // выводим считанные данные
        //         });
        //     }
        // });
      }//createPathOnMessage
      console.log("7777777777777777777777777777777777777 558");

      createPathOnMessage();
      console.log('-------------XXX--------------------------------');
      console.log(request.body.idea.site.pathname+'___________562');
      console.log('-------------XXX--------------------------------');
    }else{
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!565');
      fs.stat(`${putGit}`,(err,stats)=>{
        if(err){
          fs.writeFileSync(`${putGit}`,'['+`${gitJson}`+']');
        }else if(stats){
          function returnForever(){
            let newFile=fs.readFileSync(`${putGit}`,"utf8",
            function(error,data){
              if(error) throw error;
              console.log(data);
            });
            let un=+0;
            let prov=JSON.stringify(newFile);
            if(prov.endsWith(']"')){
              un=-1;
            }else if(prov.endsWith('\n')){
              un=-2;
            }else{
              un=-2;
            }
            let str=newFile.slice(0,un);
            fs.writeFileSync(`${putGit}`, `${str}`+","+`${gitJson}`+']','utf8');
          }//returnForever
          returnForever();
        }else{console.log('ELSE')}
      });
    }//if request body idea pathname!==''; ELSE
    // finalFantasy();

    response.json(request.body); // send the received response back
  });//FOR and final
  // send to message on frontend
	// '/comments/json/'+`${id[x]}`+'.json/allow-cors'
  app.post('/'+`${id[x]}`+'/',jsonParser,cors(),(request,response)=>{
    if (!request.body) return response.sendStatus(400);
    importantBag.id=`${id[x]}`;
    importantBag.pathname=request.body.site.pathname;
    importantBag.host=request.body.site.host;

    // importantBag=`${request.body.site}`;

    //if you specify the console.log('') prints messages every second

    // console.log(importantBag.id+'___BAG-ID');
    // console.log(request.body.site.hostname);
    // console.log(request.body.site.pathname);
    // console.log(importantBag.site+'___________7779');
      // console.log(request.body);
      //*********************************************************************
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      function createFolder(){
        fs.access("public/json/allDiscus", function(error){
          if (error) {
            console.log("Файл не найден 618");
            fs.mkdir('public/json/allDiscus', err => {
              console.log('====================> 620');
              if(err) throw err; // не удалось создать папку
            });
          }else{
            console.log("Файл найден");
          }
        });//allDiscus
      }//createFolder
      createFolder();


      console.log(`${importantBag.id}`+"-----631");
      let fileOnPath="public/json/allDiscus/"+`${importantBag.id}`;
      fs.access(`${fileOnPath}`, function(error){
        if (error) {
          console.log("Файл не найден 2");
          fs.mkdir(`${fileOnPath}`, err => {
            if(err) throw err; // не удалось создать папку
            console.log('Папка успешно создана 638');
          });
        }else{
          console.log("Файл найден in allDiscus! file 641 "+`${importantBag.id}`);
        }
      });//allDiscus/importantBag
      //*********************************************************************

      console.log(importantBag.id+" <important BAG 646");
        let puthScript;
      if(importantBag.pathname!=="/"){

        function pathAbracatabruch(path){
          if(/\/$/.test(path)){
          //   (`${request.body.idea.site.pathname}`.slice(0,-1))+'.json'
          let newPath=path.slice(0,-1)+'.json';
          path = newPath;
          // console.log(path+ '999' +"oK");
          return path;
          }else{
            // console.log(path +"not 999");
          }
          // console.log(path+".json"+"_<- it's it");
          return path+".json"
        }//pathAbracatabruch
        let onGetPath;
        //**************************************************
        // **********REGEX*****SECOND-IMPORTANT*************
        //**************************************************
        if(`${importantBag.pathname}`.split("/").length - 1==2){
          if(`${importantBag.host}`=='amir248.github.io'){

            let githubPathName;
            if(`${importantBag.pathname}`=='/localhost/threePage.html'){
              githubPathName='/threePage.html';
            }else if(`${importantBag.pathname}`=='/localhost/twoPage.html'){
              githubPathName='/twoPage.html';
            }else if(`${importantBag.pathname}`=='/localhost/index.html'){
              githubPathName='/index.html';
            }else{
              console.log('FF');
            }
            console.log(`${importantBag.id}`+`${importantBag.pathname}`+'/threePage.html'+'<------ 665');
              onGetPath='public/json/allDiscus/'+`${importantBag.id}`+`${`${githubPathName}`}`;
          }else{
            console.log('OOOOk str 686');
            console.log(`${importantBag.pathname}`.split("/").length - 1);
            onGetPath='public/json/allDiscus'+(`${importantBag.pathname}`);
            console.log(request.body.site.host+"<-------------------------XXXXXXXXXXXXX ID Two 675");

          }
        }else if(`${importantBag.pathname}`.split("/").length - 1==3){ // else / three <----------------
            if(`${importantBag.host}`=='amir248.github.io'){
              console.log(`${importantBag.id}`+'/threePage.html'+'<------ 665');
                onGetPath='public/json/allDiscus/'+`${importantBag.id}`+`${githubPathName}`;
            }else{
              console.log('OOOOk str 697');
              console.log(`${importantBag.pathname}`.split("/").length - 1);
              onGetPath='public/json/allDiscus'+(`${importantBag.pathname}`);
              console.log(request.body.site.host+"<-------------------------XXXXXXXXXXXXX ID Two 675");

            }
          }else if(`${importantBag.host}`=='amir248.github.io'){
          console.log(`${importantBag.id}`+"<-------------------------XXXXXXXXXX 679");
          onGetPath='public/json/allDiscus/'+`${importantBag.id}`+(`${importantBag.pathname}`);

        }else{
          console.log('oooooK');
          onGetPath='public/json/allDiscus/'+`${importantBag.id}`+(`${importantBag.pathname}`);
        }

        console.log(onGetPath+'_________________-<--------');


        console.log(onGetPath+'_________________-<--------');
        let dateFirst=new Date();
        fs.stat(pathAbracatabruch(`${onGetPath}`),(err,stats)=>{
          if(err){
            fs.writeFile(pathAbracatabruch(`${onGetPath}`), '[{"userName":"comments boot","message":"hi worD, it\'s first comment!","date":'+'"'+`${dateFirst}`+'"'+',"idea":{"id":"id","site":{"href":"localhostBot","origin":"test","protocol":"https:","host":"localhost","hostname":"localhost","port":"undefined","pathname":"oK","search":"","hash":""}}}]', function(err){
              if (err) {console.log(err)} else {console.log("Файл создан <---xxx")}});
              console.log(err);
            }else{
              // console.log(stats); // ЭТО ВЫВОДИТСЯ В КОНСОЛЕ КАЖДУЮ СЕКУНДУ ИЛИ ПАРУ СЕКУНД
              return ;
            }
          });//it's first comment!!
         puthScript=pathAbracatabruch(`${onGetPath}`);
         console.log(`${puthScript}`+'_oK');
      }else{
        fs.stat('public/json/'+`${importantBag.id}`+'.json',(err,stats)=>{
          if(err){
            fs.writeFile('public/json/'+`${importantBag.id}`+'.json', '[{"userName":"user"},{"Message","message"},{"date","00:00:00"},{"idea":"oK"}]', function(err){
              if (err) {console.log(err)} else {console.log("Файл создан")}});
              console.log(err);
            }else{
              // console.log(stats); // ЭТО ВЫВОДИТСЯ В КОНСОЛЕ КАЖДУЮ СЕКУНДУ ИЛИ ПАРУ СЕКУНД
              return ;
            }
          });
           puthScript='public/json/'+`${importantBag.id}`+'.json';
           console.log(`${puthScript}`+'<-------777- st 713');
      }
      let script=fs.readFileSync(`${puthScript}`,"utf8", //wonderful /
      (error,data)=>{
        console.log("Async read file script.ts");
        if(error) throw error;
        // console.log(data);
      });
      response.send(script);
    });//.json/allow-corse
}
// console.log(importantBag.id);
let x = `${importantBag.id}`;
comments(0);
comments(1);
comments(2);
comments(3);
comments(4);
comments(5);
comments(6);
comments(7);
comments(8);
comments(9);
comments(10);
comments(11);
comments(12);
comments(13);
comments(14);
comments(15);
comments(16);
comments(17);

// For testing purposes
app.get('/ok', (req, res) => {
    res.send("<h2>It's Working!</h2>");
});
app.get("/",(request,response)=>{
  response.render("main.ejs",{
  });
});

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
