class Player 
{
    constructor()
    {
        this.index = null;
        this.distance = 0;
        this.name = null;                
    }
    getCount() 
    {
        var playerCountref = database.ref("PlayerCount");
        playerCountref.on("value",function(data) {
            playerCount = data.val()
        })
    }
    updateCount(count)
    {
        database.ref("/").update({
            playerCount : count
        })
    }
    update()
    {
        var playerindex = "Players/Player" + this.index;
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo() 
    {
        var playerInfoRef = database.ref("Players");
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}