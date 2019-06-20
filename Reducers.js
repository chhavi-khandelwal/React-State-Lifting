import { combineReducers } from "redux";

const initialState = {
	inputs: [],
	result: []
}
function reducer (state, action) {
	switch(action.type) {
		case 'ADD': {
			return {
				inputs: state.value
				result: state.reduce(function(a, b) { return a + b; }, 0);
		}
	}

}

export default Reducer;
