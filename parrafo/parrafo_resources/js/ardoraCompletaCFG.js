//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#00FFFF"; colorText="#000000"; colorSele="#00FFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicitaciones has finalizado la actividad!"; messageTime=""; messageError="Debes mejorar tu agilidad mental."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>Las hojas de estilo de <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> son un conjunto de reglas que enumeran en un fichero.css y que describen el aspecto que deben tener los diferentes elementos <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> de una página.  </p><p>  </p><p> Por su parte el HTML es un <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> que permite indicar por medio de código como va ordenado el contenido de una <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly>. Esto lo hace por medio de <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>. </p><p>  </p><p> Las etiquetas se <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> porque van entre los caracteres <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> y <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly>  y dentro de estos lleva su nombre, para de esta manera realizar la <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> de etiqueta. </p><p> </p>'];
var answers=["Menor que","Etiquetas","Lenguaje","Página Web","Caracterizan","Mayor que","apertura","CSS","HTML"];
var a=["Nw","NQ","Mw","NA","Ng","OA","OQ","MQ","Mg"];
var itemCorr=["0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="cGFycmFmbw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fHelp="Verdana, Geneva, sans-serif";
