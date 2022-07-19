// code your solution here
function saturdayFun (event) {
    if(event === undefined){
        return "This Saturday, I want to roller-skate!"
    }   else {
        return "This Saturday, I want to bathe my dog!"
    }
}
function mondayWork (job) {
    if(job === undefined){
        return "This Monday, I will go to the office."
    }   else {
        return "This Monday, I will work from home."
    }
}
function wrapAdjective (wrap = '*') {
    return function(anything){
        return `You are ${wrap}${anything}${wrap}!`
    }
}