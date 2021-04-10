class Player {
    constructor(){
      this.index = null;      ;
      this.distance = 0;
      this.name = null;
    }

    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }

    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });

    }
    // write a update function to update player name from the form to the database
    update(){
      var playerindex = "players/player" + this.index;
      database.ref(playerindex).set({
        name : this.name,
        distance : this.distance
      });
    }

    //Player.getAllPlayerInfo
    static getAllPlayersInfo(){
      var getAllPlayersInfoRef = database.ref('players');
      getAllPlayersInfoRef.on("value", (data)=>{
        allPlayers = data.val();//allPlayers[[name,distance],[p2,p2dist],[p3name,dist],[p4name,dist]]

      });
    
    }
}