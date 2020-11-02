var shirt;
var fits;
var collarR,collarM;
var form,player;
var database
var shirtReg,shirtSl,shirtMod,shirtClas;
var shirt;

function preload(){
  shirtReg=loadImage("shirtImages/regularFitH.png");
  shirtSl=loadImage("shirtImages/SlimFitHalfSleeve.png");
  shirtMod=loadImage("shirtImages/ModernFitHalfSleeve.png");
  shirtClas=loadImage("shirtImages/ClassicFitHalfSleeve.png");

  shirtRegF=loadImage("shirtImages/regularFitFull.png");
  shirtSlF=loadImage("shirtImages/SlimFitFullSleeve.png");
  shirtModF=loadImage("shirtImages/ModernFitFullSleeve.png");
  shirtClasF=loadImage("shirtImages/ClassicFitFullSleeve.png");


  RcollarReg=loadImage("shirtImages/RegularFitHalfSleeveReularCollar.png");
  RcollarChin=loadImage("shirtImages/RegularFitHalfSleeveChineseCollar");
  RcollarPoint=loadImage("shirtImages/RegularFitHalfSleevePointedCollar");

  ScollarReg=loadImage("shirtImages/SlimFitHalfSleeveRegularCollar");
  ScollarChin=loadImage("shirtImages/SlimFitHalfSleeveChineseCollar");
  ScollarPoint=loadImage("shirtImages/SlimFitHalfSleevePointedCollar");

  McollarReg=loadImage("shirtImages/ModernFitHalfSleeveRegularCollar");
  McollarChin=loadImage("shirtImages/ModernFitHalfSleeveChineseCollar");
  McollarPoint=loadImage("shirtImages/SlimFitHalfSleevePointedCollar");

  CcollarReg=loadImage("shirtImages/ClassicFitHalfSleeveRegularCollar");
  CcollarChin=loadImage("shirtImages/ClassicFitHalfSleeveChineseCollar");
  CcollarPoint=loadImage("shirtImages/ClassicFitHalfSleevePointedCollar");

  
  RcollarRegF=loadImage("shirtImages/RegularFitFullSleeveReularCollar.png");
  RcollarChinF=loadImage("shirtImages/RegularFitFullSleeveChineseCollar");
  RcollarPointF=loadImage("shirtImages/RegularFitFullSleevePointedCollar");

  ScollarRegF=loadImage("shirtImages/SlimFitFullSleeveRegularCollar");
  ScollarChinF=loadImage("shirtImages/SlimFitFullSleeveChineseCollar");
  ScollarPointF=loadImage("shirtImages/SlimFitFullSleevePointedCollar");

  McollarRegF=loadImage("shirtImages/ModernFitFullSleeveRegularCollar");
  McollarChinF=loadImage("shirtImages/ModernFitFullSleeveChineseCollar");
  McollarPointF=loadImage("shirtImages/SlimFitFullSleevePointedCollar");

  CcollarRegF=loadImage("shirtImages/ClassicFitFullSleeveRegularCollar");
  CcollarChinF=loadImage("shirtImages/ClassicFitFullSleeveChineseCollar");
  CcollarPointF=loadImage("shirtImages/ClassicFitFullSleevePointedCollar");
  
  
  

   
}


function setup() {
  createCanvas(800,800);
 // database=firebase.database();

  textSize(52);   
  fits=createSelect();
  collarR=createSelect();
  collarM=createSelect();
  fits.position(200,200);
  fits.option('choose');
  fits.option('regular');
  fits.option('modern');
  fits.option('slim');
  fits.option('classic');
  fits.changed(mySelectEvent);
 
}
function draw(){
  drawSprites();
}


function mySelectEvent(){
  var shirtFit=fits.value();
  if(shirtFit==="regular"){
    shirt=createSprite(400,400,200,200);
     shirt.addImage(shirtReg);

     collarR.position(300,200)
     collarR.option('regular');
     collarR.option('pointed');
     collarR.option('chinese');
     collorR.changed(mySelectEvent2);
  }
else if(shirtFit==="modern"){
  shirt=createSprite(400,400,200,200);
  shirt.addImage(shirtMod);
    
     collarM.position(300,200);
     collarM.option('regular');
     collarM.option('pointed');
     collarM.option('chinese');
     collarM.changed(mySelectEvent3);

  }else if(shirtFit==="slim"){
    shirt=createSprite(400,400,200,200);
    shirt.addImage(shirtSl);
   
    collarS.position(300,200);
    collarS.option('regular');
    collarS.option('pointed');
    collarS.option('chinese');
    collarS.changed(mySelectEvent4);

  }else if(shirtFit==="classic"){
    shirt=createSprite(400,400,200,200);
    shirt.addImage(shirtClas);

    collarC.position(300,200);
    collarC.option('regular');
    collarC.option('pointed');
    collarC.option('chinese');
    collarC.changed(mySelectEvent5);

  }
  function mySelectEvent2(){
    var collar=collarR.value();
    if(collarR==="regular"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(RcollarReg);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent6);
    }
    if(collarR==="pointed"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(RcollarPoint);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent7);
    }
    if(collarR==="chinese"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(RcollarChin);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent8);
    }
  }
  function mySelectEvent3(){
    var collar2=collarM.value();
    if(collarM==="regular"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(McollarReg);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent9);
    }
    if(collarM==="pointed"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(McollarPoint);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent10);
    }
    if(collarM==="chinese"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(McollarChin);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent11);
    }
  }
  function mySelectEvent4(){
    var collar2=collarS.value();
    if(collarS==="regular"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(ScollarReg);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent12);
    }
    if(collarS==="pointed"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(ScollarPoint);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent13);
    }
    if(collarS==="chinese"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(ScollarChin);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent14);
    }
  }
  function mySelectEvent5(){
    var collar2=collarC.value();
    if(collarC==="regular"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(CcollarReg);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent15);
    }
    if(collarC==="pointed"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(CcollarPoint);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent16);
    }
    if(collarC==="chinese"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(CcollarChin);

      sleeves.position(400,200);
      sleeves.option('fulll sleeve');
      sleeves.option('half sleeve');
      sleeves.changed(mySelectEvent17);
    }
  }
 function mySelectEvent6(){
   var sleeve=sleeves.value();
   if(sleeve==="half sleeves"){
    shirt=createSprite(400,400,200,200);
     shirt.addImage(shirtReg);
   }
    if(sleeve==="full sleeve"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(shirtRegF);
   }
   function mySelectEvent7(){
    var sleeve=sleeves.value();
    if(sleeve==="half sleeves"){
      shirt=createSprite(400,400,200,200);
      shirt.addImage(shirtMod);
    }
     if(sleeve==="full sleeve"){
      shirt=createSprite(400,400,200,200);
       shirt.addImage(shirtModF);
    }
    function mySelectEvent8(){
      var sleeve=sleeves.value();
      if(sleeve==="half sleeves"){
        shirt=createSprite(400,400,200,200);
        shirt.addImage(shirtSl);
      }
       if(sleeve==="full sleeve"){
        shirt=createSprite(400,400,200,200);
         shirt.addImage(shirtSlF);
      }
     function mySelectEvent9(){
        var sleeve=sleeves.value();
        if(sleeve==="half sleeves"){
          shirt=createSprite(400,400,200,200);
          shirt.addImage(shirtClas);
        }
         if(sleeve==="full sleeve"){
           shirt.addImage(shirtClasF);
        }
      function mySelectEvent10(){
      var sleeve=sleeves.value();
      if(sleeve==="half sleeves"){
            shirt.addImage();
        }
     if(sleeve==="full sleeve"){
          shirt.addImage();
        }
      }
    function mySelectEvent11(){
     var sleeve=sleeves.value();
    if(sleeve==="half sleeves"){
         shirt.addImage();
      }
     if(sleeve==="full sleeve"){
        shirt.addImage();
      } 
    }  
   function mySelectEvent12(){
     var sleeve=sleeves.value();
      if(sleeve==="half sleeves"){
         shirt.addImage();
      }
     if(sleeve==="full sleeve"){
        shirt.addImage();
      }  
    } 
     function mySelectEvent13(){
       var sleeve=sleeves.value();
        if(sleeve==="half sleeves"){
              shirt.addImage();
          }
        if(sleeve==="full sleeve"){
              shirt.addImage();
          } 
        }  
     function mySelectEvent14(){
        var sleeve=sleeves.value();
         if(sleeve==="half sleeves"){
                shirt.addImage();
           }
          if(sleeve==="full sleeve"){
                 shirt.addImage();
           } 
          }
      function mySelectEvent15(){
          var sleeve=sleeves.value();
             if(sleeve==="half sleeves"){
                    shirt.addImage();
              }
              if(sleeve==="full sleeve"){
                     shirt.addImage();
                } 
              }
      function mySelectEvent16(){
          var sleeve=sleeves.value();
            if(sleeve==="half sleeves"){
                    shirt.addImage();
              }
           if(sleeve==="full sleeve"){
                    shirt.addImage();
           } 
          }                                          
     function mySelectEvent17(){
        var sleeve=sleeves.value();
          if(sleeve==="half sleeves"){
             shirt.addImage();
            }
          if(sleeve==="full sleeve"){
               shirt.addImage();
            }  
            
     }
    }
  }
}
 }
}