export default function(state = [], action) {
    // console.log(state);
    let newS;
    switch (action.type) {
        case "Home_Add":
        newS = [...state];
            newS.push(action.payload);
        console.log(newS);
            return newS;
        default:
            return state;
    }
}