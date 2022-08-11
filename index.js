function writeCards(array, event){
    const newCards = [];
    for(let i=0; i < array.length; i++){
        newCards[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`; 
    }
    return newCards;
}
function countDown(num){
    let i = num;
    while(0 <= i){
        console.log(num);
        num = num -1;
        i--;
    }
}