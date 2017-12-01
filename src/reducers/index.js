import {
    combineReducers
} from 'redux'
import Homereducers from './homereducers'

const reducers = combineReducers({
    Homelist: Homereducers
})

export default reducers;