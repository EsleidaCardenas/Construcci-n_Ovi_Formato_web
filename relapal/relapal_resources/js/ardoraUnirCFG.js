//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
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
var timeOnMessage=5; messageOk="¡Felicidades lo hiciste bien!"; messageTime="Se acabó el tiempo, recuerda que tienes 60 segundos"; messageError="Tu respuesta es errónea"; messageErrorG="Tu respuesta es errónea"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="cmVsYXBhbA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["SFRNTA", "TGVuZ3VhamUgZGUgcHJvZ3JhbWFjafNuIG9yaWVudGFkbyBhIGxhIGVzdHJ1Y3R1cmEgd2Vi"],["Q1NT", "TGVuZ3VhamUgdXRpbGl6YWRvIHBhcmEgZGFybGUgZXN0aWxvcywgY29sb3IgeSBkaXNl8W8gdmlzdWFsIGEgZG9jdW1lbnRvcywgZW4gZXNwZWNpYWwgaHRtbA"],["TW9ja3Vw", "Qm9zcXVlam8gbyBlc3RydWN0dXJhIGJvcnJhZG9yIGRlIHVuIHByb3llY3Rv"],["UmVwb3NpdG9yaW8", "RXNwYWNpbyB2aXJ0dWFsIGRlc3RpbmFkbyBhIGFsb2phciBpbmZvcm1hY2nzbiBkaWdpdGFsLg"],["RXRpcXVldGFzIEhUTUw", "RnJhZ21lbnRvcyBkZSB0ZXh0byBxdWUgdGllbmUgZnVuY2lvbmVzIHkgdXNvcyBlc3BlY2lmaWNvcw"]];
var c=[[4,54],[3,91],[6,45],[11,55],[14,58]];
var con1=["HTML","CSS","Mockup","Repositorio","Etiquetas HTML"];
var con2=["Lenguaje de programación orientado a la estructura web","Lenguaje utilizado para darle estilos, color y diseño visual a documentos, en especial html","Bosquejo o estructura borrador de un proyecto","Espacio virtual destinado a alojar información digital.","Fragmentos de texto que tiene funciones y usos especificos"];
var sel1=""; join1=[]; join2=[];
