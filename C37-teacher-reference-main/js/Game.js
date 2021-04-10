class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();//object for player class
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)

    Player.getAllPlayersInfo();

    if(allPlayers !== undefined){
      var displaypos = 100
      for(var eachplr in allPlayers){

        displaypos +=100;

        if(eachplr === "players"+ player.index){
          fill("blue");
        }
        else{
          fill("black");
        }

        text(allPlayers[eachplr].name +":"+ allPlayers[eachplr].distance, 100,displaypos);

      }
    }
      
  }
}