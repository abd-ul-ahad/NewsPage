const initialInput = "";

export default function changeSearch(state = initialInput, action) {
    switch (action.type) {
        case 'input':
            return action.payload;
        default:
            return initialInput;
    }
}