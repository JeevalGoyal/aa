var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b5f21c8e-3e26-4244-b3d9-dfebb199ed68","d048a08f-174b-46db-b321-9b8c81ea62e0","8bdbd2b6-6b19-40d9-9a62-f5bcff2ecfae","bbd9db3d-7923-4783-b04e-d1a5c638ea01","b1e67d7f-5b55-4d7e-9fc0-c3cf8111e264","de6817ff-7b6c-44d6-bc52-3d83a2da6654"],"propsByKey":{"b5f21c8e-3e26-4244-b3d9-dfebb199ed68":{"name":"background","sourceUrl":null,"frameSize":{"x":640,"y":460},"frameCount":1,"looping":true,"frameDelay":12,"version":"sEHEB.70qmZmUYFcvN8GML__D4PdRBqa","loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":460},"rootRelativePath":"assets/b5f21c8e-3e26-4244-b3d9-dfebb199ed68.png"},"d048a08f-174b-46db-b321-9b8c81ea62e0":{"name":"queen","sourceUrl":"assets/api/v1/animation-library/gamelab/1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U/category_people/gameplayadventure_06.png","frameSize":{"x":271,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":271,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U/category_people/gameplayadventure_06.png"},"8bdbd2b6-6b19-40d9-9a62-f5bcff2ecfae":{"name":"hero","sourceUrl":null,"frameSize":{"x":264,"y":243},"frameCount":1,"looping":true,"frameDelay":12,"version":"vy7Vw_zaENdoplZOMA_K08cKLujcrcSO","loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":243},"rootRelativePath":"assets/8bdbd2b6-6b19-40d9-9a62-f5bcff2ecfae.png"},"bbd9db3d-7923-4783-b04e-d1a5c638ea01":{"name":"ground_stone_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TPHSAheUsW_jnglQ_pb3mL_xEPLgWWnE/category_video_games/ground_stone.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"TPHSAheUsW_jnglQ_pb3mL_xEPLgWWnE","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TPHSAheUsW_jnglQ_pb3mL_xEPLgWWnE/category_video_games/ground_stone.png"},"b1e67d7f-5b55-4d7e-9fc0-c3cf8111e264":{"name":"dagger","sourceUrl":"assets/api/v1/animation-library/gamelab/eXlG3MLT4HNDEqxIodI3SvxDELS1Lfdi/category_video_games/dagger.png","frameSize":{"x":220,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"eXlG3MLT4HNDEqxIodI3SvxDELS1Lfdi","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eXlG3MLT4HNDEqxIodI3SvxDELS1Lfdi/category_video_games/dagger.png"},"de6817ff-7b6c-44d6-bc52-3d83a2da6654":{"name":"bomb","sourceUrl":"assets/api/v1/animation-library/gamelab/O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF/category_video_games/gameplayobject_item_02.png","frameSize":{"x":384,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF/category_video_games/gameplayobject_item_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200,1,1);
b.setAnimation("background");

var hero = createSprite(40,360,20,20);
hero.setAnimation("hero");
hero.scale=0.2;

var queen = createSprite(380,190,20,20);
queen.setAnimation("queen");
queen.scale=0.1;

var cage = createSprite(380,215,20,20);
cage.setAnimation("ground_stone_1");
cage.scale=0.1;

var cage1 = createSprite(355,188,5,50);
cage1.shapeColor="black";

var cage2 = createSprite(380,188,5,50);
cage2.shapeColor="black";

var cage3 = createSprite(375,160,45,5);
cage3.shapeColor="black";

var button = createSprite(400,50,50,50);
button.shapeColor="red";

var wall1 = createSprite(110,265,360,5);

var wall2 = createSprite(300,125,360,5);

var obstacle1 = createSprite(125,285,10,10);
obstacle1.setAnimation("dagger");
obstacle1.scale=0.1;

var obstacle2 = createSprite(240,285,10,10);
obstacle2.setAnimation("dagger");
obstacle2.scale=0.1;

var germ1 = createSprite(0,197,10,40);

var germ2 = createSprite(200,150,10,46);

var germ3 = createSprite(400,240,10,40);

var bomb = createSprite(20,60,1,1);
bomb.setAnimation("bomb");
bomb.scale=0.05;

function draw() {
  background("white");
  
  if (keyDown("space")) {
    obstacle1.setVelocity(0,3);
    obstacle2.setVelocity(0,3);
    germ1.setVelocity(2,0);
    germ2.setVelocity(2,0);
    germ3.setVelocity(-2,0);
    bomb.setVelocity(5,0);
  }

  if(keyDown(UP_ARROW)){
  hero.y=hero.y-4;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+4;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-4;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+4;
}

if (hero.isTouching(obstacle1)||hero.isTouching(obstacle2)){
  hero.x=40;
  hero.y=360;
}

if (hero.isTouching(germ1)||hero.isTouching(germ2)||hero.isTouching(germ3)){
  hero.x=40;
  hero.y=360;
}

if (hero.isTouching(bomb)){
  hero.x=40;
  hero.y=360;
}

if (hero.isTouching(queen)){
  textSize(50);
  fill("blue");
  text("YOU WIN",100,220);
}

if (hero.isTouching(button)){
  cage2.destroy();
  cage1.destroy();
  cage3.destroy();
  bomb.destroy();
  germ1.destroy();
  germ2.destroy();
  germ3.destroy();
  b.destroy();
  wall1.destroy();
  wall2.destroy();
  obstacle1.destroy();
  obstacle2.destroy();
}

  createEdgeSprites();
  hero.bounceOff(edges);
  hero.bounceOff(cage);
  hero.bounceOff(cage1);
  hero.bounceOff(cage2);
  hero.bounceOff(cage3);
  hero.bounceOff(wall1);
  hero.bounceOff(wall2);
  hero.bounceOff(button);
  obstacle1.bounceOff(wall1);
  obstacle2.bounceOff(wall1);
  obstacle1.bounceOff(edges);
  obstacle2.bounceOff(edges);
  germ1.bounceOff(cage1);
  germ2.bounceOff(cage1);
  germ3.bounceOff(edges);
  germ2.bounceOff(edges);
  germ1.bounceOff(edges);
  bomb.bounceOff(edges);
  bomb.bounceOff(button);
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
