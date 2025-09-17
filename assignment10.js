const adj={
    1:"Crazy",
    2:"Amazing",
    3:"Fire",
}
const shop={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
const an_word={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}
function generate(){
    let rand1=Math.floor(Math.random()*3)+1;
    let rand2=Math.floor(Math.random()*3)+1;
    let rand3=Math.floor(Math.random()*3)+1;
    console.log(`Company Name: ${adj[rand1]} ${shop[rand2]} ${an_word[rand3]}`);//printing using template literals
}
generate();