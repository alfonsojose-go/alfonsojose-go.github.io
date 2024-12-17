let names = [];
let MonaVotes = 4;
let MaxwellVotes = 7;

function updatePoll(catName){
    // event.preventDefault();
                

    if (catName == "Mona"){
        MonaVotes += 1;
        $("#MonaVotes").html(MonaVotes);
    } else {
        MaxwellVotes += 1;
        $("#MaxwellVotes").html(MaxwellVotes);
    }
}
        
function checkUser(userName){
                
    let nameToFind = userName.toLowerCase();

    let result = names.find(name => name.toLowerCase() === nameToFind);

    if (result){
        return true;

    } else {
        names.push(userName);
        return false;
    }

}

function submitVote(){

    let userName = $("#userName").val();
    let favoriteCat = $("#favoriteCat").val();


    event.preventDefault();
    if (!userName || !favoriteCat) {
        alert("Please fill out the required fields.");
    } else {
        if (checkUser(userName)){
            alert("You have voted already. Thanks!");

        } else{
            updatePoll(favoriteCat);
            alert("Thank you " + userName + " for your vote!");
        }
                        
    };
};