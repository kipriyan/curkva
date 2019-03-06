var ipodqkon={x:500,y:0};
var dqkon={x:400,y:0};
var sveshtenik={x:600,y:0},m=0,n=0,k=0,yes=0,yes1=0,no=0,asdf0=false,asdf1=false,asdf2=false,gg0=false,a=0,b=0,c=0,fdsa=0,fdsa1=0,fdsa2=0,d=0,e=0,f=0,g=0,h=0,i=0,izbrah=0,counter=0,broi=0,pribavqne=false,vrushtane=false,f=true;
var rezultat='';
var stihar1={x:800,y:100,number:4};
var stihar2={x:650,y:400,number:8};
var orar={x:800,y:400,number:5};
var epitrahil={x:500,y:100,number:9}
var felon={x:650,y:100,number:6};
var nabedrenik={x:500,y:400,number:10};
var poqs={x:350,y:100,number:11};
var narakavnici1={x:350,y:400,number:12};
var narakavnici2={x:950,y:100,number:12};
class Odejda{
    constuctor(x1=5,y1=5,number1=5,name1="asdf",image1,izbrano1=0,vzet1=0){
        x1=this.x;
        y1=this.y;
        number1=this.number;
        name1=this.name;
        image1=this.image;
        izbrano1=this.izbrano;
        vzet1=this.vzet;
    }
}

var odejdi=[];
  for(let ind=0;ind<12;++ind){
    odejdi[ind] = new Odejda();
}
  for(let ind=0;ind<12;++ind){
    odejdi[ind].image=new Image();
}
  for(let ind=0;ind<12;++ind){
odejdi[ind].izbrano=0;
  }
  for(let ind=0;ind<12;++ind){
odejdi[ind].vzet=0;
  }
odejdi[0].x=800;
odejdi[0].y=100;
odejdi[0].number=4;
odejdi[0].image.src="220px-Stichaar.jpg";
odejdi[0].name="stihar1";
odejdi[1].x=650;
odejdi[1].y=400;
odejdi[1].number=8;
odejdi[1].image.src="oblacheniyasvyashennosluzhiteleycvetabog-bf6382d1.jpg";
odejdi[1].name="stihar2";
odejdi[2].x=800;
odejdi[2].y=400;
odejdi[2].number=5;
odejdi[2].image.src="overlay-4051957392.jpg";
odejdi[2].name="orar";
odejdi[3].x=500;
odejdi[3].y=100;
odejdi[3].number=9;
odejdi[3].image.src="oblachenie-svyashennika-odezhda-golovnie-ubori-poruchi-napersnij-krest_3.jpg";
odejdi[3].name="epitrahil";
odejdi[4].x=650;
odejdi[4].y=100;
odejdi[4].number=6;
odejdi[4].image.src="^F3C795732FE8749459098F6421EAD1E2FBDD028FA37AA7DA17^pimgpsh_fullsize_distr-450x586.jpg";
odejdi[4].name="felon";
odejdi[5].x=500;
odejdi[5].y=400;
odejdi[5].number=10;
odejdi[5].image.src="odejdi.jpg";
odejdi[5].name="nabedrenik";
odejdi[6].x=350;
odejdi[6].y=100;
odejdi[6].number=11;
odejdi[6].image.src="001.jpg";
odejdi[6].name="poqs";
odejdi[7].x=350;
odejdi[7].y=400;
odejdi[7].number=12;
odejdi[7].image.src="regalii.jpg";
odejdi[7].name="narakavnici1";
odejdi[8].x=950;
odejdi[8].y=100;
odejdi[8].number=12;
odejdi[8].image.src="regalii.jpg";
odejdi[8].name="narakavnici2";
var correct_order,real_click,correct=[3], real=[3],izbran=0,izbor_nomer=1,realorder=[12],permission=[];
  for(let ind=0;ind<12;++ind){
    permission[ind]=true;
  }

  for(let ind=0;ind<3;++ind){
    real[ind]=[13];
  }
  for(let ind=0;ind<3;++ind){
    correct[ind]=[13];
  }
//ipodqkon
correct[0][0]=1;
correct[0][1]=odejdi[0].number;
correct[0][2]=odejdi[2].number;
  for(let ind=3;ind<12;++ind){
    correct[0][ind]=0;
  }

//dqkon
correct[1][0]=1;
correct[1][1]=odejdi[0].number;
correct[1][2]=odejdi[8].number;
correct[1][3]=odejdi[2].number;
  for(let ind=4;ind<13;++ind){
    correct[1][ind]=0;
  }
  for(let ind=0;ind<3;++ind){
    for(let j=0;j<13;++j){
        real[ind][j]=0;
      //  console.log("1:  ",real[ind][j]);
    }
  }
//sveshtenik
correct[2][0]=1;
correct[2][1]=odejdi[1].number;
correct[2][2]=odejdi[6].number;
correct[2][3]=odejdi[7].number;
correct[2][4]=odejdi[5].number;
correct[2][5]=odejdi[3].number;
correct[2][6]=odejdi[4].number;
  for(let ind=7;ind<13;++ind){
    correct[2][ind]=0;
  }
  for(let ind=0;ind<12;++ind){
    realorder[ind]=0;
  }
var lol = new Image();
lol.src="0000368403-article2.jpg";
var lol1 = new Image();
lol1.src="20170304__3_20170304_1346357865.jpg";
var lol2 = new Image();
lol2.src="_k1c1895_std.jpg";
var lol3 = new Image();
lol3.src="thumbnail.jpg";
var lol4 = new Image();
lol4.src="220px-Stichaar.jpg";
var lol5 = new Image();
lol5.src="overlay-4051957392.jpg";
var lol6 = new Image();
lol6.src="^F3C795732FE8749459098F6421EAD1E2FBDD028FA37AA7DA17^pimgpsh_fullsize_distr-450x586.jpg";
var lol7 = new Image();
lol7.src="Stihar-copii-8.jpg";
var lol8 = new Image();
lol8.src="oblacheniyasvyashennosluzhiteleycvetabog-bf6382d1.jpg";
var lol9 = new Image();
lol9.src="oblachenie-svyashennika-odezhda-golovnie-ubori-poruchi-napersnij-krest_3.jpg";
var lol10 = new Image();
lol10.src="odejdi.jpg";
var lol11 = new Image();
lol11.src="001.jpg";
var lol12 = new Image();
lol12.src="regalii.jpg";
function update() {
    for(let ind=0;ind<12;++ind){
  if(odejdi[ind].vzet==1){
      odejdi[ind].x=mouseX;   
    odejdi[ind].y=mouseY; 
  }
     }
  counter=0;   
  for(let ind=0;ind<12;++ind){
      if(realorder[ind]>0){
          counter++;

      }
  }
pribavqne=false;
vrushtane=false;
  for(let ind=0;ind<12;++ind){
    //console.log("ind  ", ind);
    if(areColliding(100,0,200,600,odejdi[ind].x,odejdi[ind].y,100,100)){
      if(odejdi[ind].izbrano==0){
        odejdi[ind].izbrano=counter+1;
        ++counter;
        pribavqne=true;
        console.log("pribavqne  ", pribavqne);
      }
    }else{
      if(odejdi[ind].izbrano>0){
        odejdi[ind].izbrano=0;
        counter--;
       //if(pribavqne==true){
         vrushtane=true;
         console.log("vrushtane  ", vrushtane);
      // }
      }
    }
  }
    if(pribavqne==true || vrushtane==true){
      ++broi;
      console.log(broi);
    }
    if(broi>=12){
        f=false;
    }
   for(let ind=0;ind<12;++ind){

     if(odejdi[ind].izbrano>0){
         realorder[odejdi[ind].izbrano]=odejdi[ind].number;

     }
   }
    } 
function draw() {
     //context.drawImage(curkva,0,0,1250,700);
    context.drawImage(lol,ipodqkon.x,ipodqkon.y,100,100);
                 context.font="20px Times New Roman";
        context.fillText("ipodqkon",500,50);  
     context.drawImage(lol2,sveshtenik.x,sveshtenik.y,100,100);
     context.drawImage(lol1,dqkon.x,dqkon.y,100,100);
             context.font="20px Times New Roman";
        context.fillText("dqkon",400,50);  
                 context.font="20px Times New Roman";
        context.fillText("sveshtenik",600,50);  
   context.drawImage(lol3,100,0,200,600);
    for(let ind=0;ind<9;++ind){
        context.drawImage(odejdi[ind].image,odejdi[ind].x,odejdi[ind].y,100,200);
    }
    context.fillStyle="green";
    context.fillRect(800,0,200,100);
    
  if(izbrah==1){{
    for(let ind = 0;ind < 12;++ind){
      if(areColliding(100,0,200,600,odejdi[ind].x,odejdi[ind].y,100,100)){
 //context.drawImage(lol7,100,0,200,600);
        if (real[izbran][odejdi[ind].izbrano] == 0)
        {
         real[izbran][odejdi[ind].izbrano]=odejdi[ind].number;
            ++izbor_nomer;
        }  
      }
    }
  }
if(izbor_nomer>=12){
    
      //      context.font="200px Times New Roman";
       // context.fillText("aide svurshi",200,200);
}

            for(let ind=0;ind<12;++ind){
        console.log("8:  ",correct[izbran][ind],real[izbran][ind]);
    }
if(correct[izbran][0]==real[izbran][0] && 
  correct[izbran][1]==real[izbran][1] &&
   correct[izbran][2]==real[izbran][2] && 
  correct[izbran][3]==real[izbran][3] &&
   correct[izbran][4]==real[izbran][4] && 
  correct[izbran][5]==real[izbran][5] &&
   correct[izbran][6]==real[izbran][6] && 
  correct[izbran][7]==real[izbran][7] &&
   correct[izbran][8]==real[izbran][8] && 
  correct[izbran][9]==real[izbran][9] &&
   correct[izbran][10]==real[izbran][10] && 
  correct[izbran][11]==real[izbran][11] 
  ){
        rezultat='correct';
}else{
      rezultat='incorrect';     
}
                izbrah=0;
 }
    context.font="200px Times New Roman";
 context.fillText(rezultat,200,200);
       if(f==false){
                  context.font="60px Times New Roman";
        context.fillText("click at the green boton",100,200);  
   }
}

function keyup(key) {
    console.log(key);
};
 
function mousedown() {
    
  for(let ind=0;ind<3;++ind){
    real[ind][0]=0;
  }      
    
  if(areColliding(mouseX,mouseY,1,1,ipodqkon.x,ipodqkon.y,100,100)){
    izbran=0;
    console.log(izbran);
  }
  if(areColliding(mouseX,mouseY,1,1,dqkon.x,dqkon.y,100,100)){
      izbran=1;
    console.log(izbran);
  }
  if(areColliding(mouseX,mouseY,1,1,sveshtenik.x,sveshtenik.y,100,100)){
      izbran=2;
    console.log(izbran);
  }
 real[izbran][0]=1;  
    for(let ind=0;ind<12;++ind){
  if(areColliding(mouseX,mouseY,1,1,odejdi[ind].x,odejdi[ind].y,100,200) && f==true){
odejdi[ind].vzet=1;
   }
    }
};
 
function mouseup(){
for(let ind=0;ind<12;++ind){
    if(odejdi[ind].vzet==1){
        odejdi[ind].vzet=0;
    }
}
    if(areColliding(800,0,200,100,mouseX,mouseY,1,1)){
    izbrah=1;
    }
};