// extract element
const element  = document.querySelectorAll("*");

// extract classes startWith "min-"
const customClass = [];
element.forEach(el =>{
    el.classList.forEach(cls => {

        if(!cls.includes("-")) return;

        console.log(cls);
        
        const parts = cls.split("-");
        // const property = parts[1];
        // const value = parts[2];
        // console.log(`--> ${property} - ${value}`)

        if(parts.length === 3){
            property = parts[1]; 
        }else{
            property = parts[0];
        }

        console.log(`${property} ---- ${parts.length}`);

        // background color
        switch(property){
            case "bg": // background color
                bg(el, parts[2]);
                break;
            case "text": // text color
                text(el, parts[2]);
                break;
            case "p": // padding
                padding(el, parts[1]);
                break;
            case "m": // margin
                margin(el, parts[1]);
                break;

            
            default:
                return "";
        }
    })
})

// background color
function bg(el, value) {
    el.style.background = value;
}
// text color
function text(el, value) {
    el.style.color = value;
}
function padding(el, value){
    el.style.padding = value + "px";
}
function margin(el, value){
    el.style.margin = value + "px";
}
