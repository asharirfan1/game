 
//  let FirstCard = getRandomCard()

//  let SecondCard = getRandomCard()
 
// let Card = [FirstCard , SecondCard] //ARRAY // order list of item
//  let Sum = FirstCard + SecondCard
// creating player object

let player = {

     name : "john",
     chips : 190

     
}
 let Card = []
 let Sum = 0
 let  hasBlackJack = false 
 
 let  isAlive = true
 

 let message = ""
 
 let messageEl = document.getElementById("message-el") 
   
  let sumEl = document.getElementById("sum-el")


       
    let cardsEl = document.getElementById("cards-el")

     let playerEl = document.getElementById("player-el")
     playerEl.textContent = player.name + ": $" + player.chips
    


      // function getRandomCard(){  // make this function return value between 1 and 13

      //        return Math.floor(Math.random()*13) +1 //Math.floor(Math.random()*13) give value till 12 so to get till 13 we add 1 
       
         
      // }

      function getRandomCard(){  // make this function return value between 1 and 13

        let randomNUmber  = Math.floor(Math.random()*13) +1 //Math.floor(Math.random()*13) give value till 12 so to get till 13 we add 1 
   
        if (randomNUmber >  10) {

          return 10

        }


        else if(randomNUmber ===1) {

          return 11
        }
 
        else {

          return randomNUmber 
        }
      }


     function startGame(){

      let FirstCard = getRandomCard()

 let SecondCard = getRandomCard()
 
let Card = [FirstCard , SecondCard] //ARRAY // order list of item
  let Sum = FirstCard + SecondCard 
 
      renderGame()


     }

    function renderGame(){

      // cardsEl.textContent = "CARDS :" + Card[0] + " " +  Card[1]

      //  using for loop to render cards//

           cardsEl.textContent = "CARDS :" 

           for ( i =0; i<Card.length ; i++) {

             cardsEl.textContent += Card[i] + " "
           }

           cardsEl


      


        sumEl.textContent = "Sum :" + Sum
          

        if (Sum <21) { 

 
            message = ("do you want to draw a new card")
       
       
        }
         
       else if   ( Sum === 21) {
         
                message = ("WOHO YOU GOT A BLACKJACK")
       
             
                hasBlackJack = "true"
        } 
        
        else if ( Sum > 21){
       
            message = (" YOU ARE OUT OF GAME" )
                 
            
            isAlive = false
         }
           
           messageEl.textContent = message
        

    }



    // function newCard(){
      
    //   console.log("DRAWING A NEW CARD FROM THE DESK")

    //        let Card = getRandomCard()
    //       Sum += Card
           
    //       startGame()
  

    // }

    // let card=[6,2]
    //                  card.push (6)
    //                  console.log(card) // ==> output fill be  [6, 2, 6] because we pushed 6



    // let Message = [ "hi i am good how are u doing"]

    //                      let newMessage = ( "same here")


    //                      Message.push (newMessage)

    //                      console.log(Message)
              
               


    function newcard(){

      if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
      Sum += card

      // push card to cards array

      Card.push(card)
      renderGame()

      }

      

    }



              //  let player1Time = 100
              //      let player2Time = 150

              //      function FastestTime() {
                  
              //          if ( player1Time < player2Time) {

              //           return player1Time
              //          }
                      
              //          else if (player2Time < player1Time) {

              //           return player2Time
              //          } 
                     
              //          else{
              //             return player1Time
              //          }
              //      }

              //     let FastestRaceTime = FastestTime()

              //     console.log(FastestRaceTime)