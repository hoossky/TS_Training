import {createStore} from "redux";
import {createBrowserHistory} from 'history';
import reducers from "../reducers"
import {object} from "prop-types";

import rootReducer from './reducers';

export const history = createBrowserHistory()

function configureStore(history) {
    return createStore(
        reducers(history),
        window.__REDUX_DEVTOOLS_EXTENSION__
    )
}
export default configureStore