let value = 1;

const increment = () => {
    const minusIcon = document.getElementById("minus_icon");
    if (value == 1) minusIcon.style.opacity = 1;
    ++value;

    const units = document.getElementById("Units");
    units.style.translate = `0px -${1 + (value - 1) * 56}px`;

    const price = document.getElementById("price-img");
    price.src = `./images/${value}.png`;

   
};

const decrement = () => {
    const minusIcon = document.getElementById("minus_icon");
    const units = document.getElementById("Units");
    if (value > 1) {
        --value;
        units.style.translate = `0px -${1 + (value - 1) * 56}px`;

        const price = document.getElementById("price-img");
        price.src = `./images/${value}.png`;
        if (value == 1) {
            minusIcon.style.opacity = 0;
        }
    }
    
};

//we created an imgimp 3rd function in order to update the contents of the order_summary.html page.
//we also tried to "export default value" command variable but that caused the buttons in the index.html file to stop functioning.
//we also tried exporting the functions to the order_summary page and then importing them there but thaat failed as well.

//export default value

function imgimp()
{
    document.querySelector(".Path_2663").innerHTMl=value;
}






