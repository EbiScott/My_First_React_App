

function Food(){

    const Food1 = "Beans"
    const Food2 = "Rice"
    const Food3 = "Eba"
    const Food4 = "Pounded Yam"


    return(
        <ul>
            <li>Egusi</li>
            <li>{ Food1.toUpperCase() }</li>
            <li>{ Food2 }</li>
            <li>{ Food3.toUpperCase() }</li>
            <li>{ Food4 }</li>
            <li>Okra</li>
        </ul>
    );
};



export default Food;