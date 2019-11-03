//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#00FFFF"; colorText="#000000"; colorSele="#00FFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades! Ha completado la actividad"; messageTime=""; messageError="¡Felicidades! Ha completado la actividad"; messageErrorG="¡Felicidades! Ha completado la actividad"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["Rw","SQ","VA","SA","VQ","Qg","IA","SA","VA","TQ","TA","IA","Qw","Uw","Uw","IA","Rg","Tw","Tw","VA","RQ","Ug","IA","Qg","QQ","Qw","Sw","Rw","Ug","Tw","VQ","Tg","RA","IA","Qg","Tw","Ug","RA","RQ","Ug"];
var que=["Es una plataforma que me permite asociar archivos para trabajos en cooperación, se conoce como repositorio web","Lenguaje de programación orientado al desarrollo de la estructura de páginas web","Por medio de este lenguaje se asocian efectos visuales y de diseño a un documento de HTML.","Etiqueta que define el pie de pagina de un documento en html","Atributo que define el fondo de un objeto (color o imagen) CSS","Atributo que define el borde de un objeto en CSS"];
var yCell=["R0lUSFVC","SFRNTA","Q1NT","Rk9PVEVS","QkFDS0dST1VORA","Qk9SREVS"];
var pos=[["1","2","3","4","5","6"],["8","9","10","11"],["13","14","15"],["17","18","19","20","21","22"],["24","25","26","27","28","29","30","31","32","33"],["35","36","37","38","39","0"]];
var upos=[["","","","","",""],["","","",""],["","",""],["","","","","",""],["","","","","","","","","",""],["","","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colCount=22;
var showE=true;
var typeD=0;var tiCor=true;
var colDef=0; col=1; row=1; inQue=0; colorError="#FF0000";
var wordsGame="RGFtZXJv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
