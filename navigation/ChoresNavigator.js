import { createStackNavigator } from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import ChoresListScreen from "../screens/ChoresList.js"
import ChoreDetails from "../screens/ChoresDetails.js"
import HomePage from "../screens/MainScreen.js"


const  ChoresNavigator = createStackNavigator({
    HomePage : HomePage,
    ChoreList : ChoresListScreen,
    ChoreDetails: ChoreDetails
})

export default createAppContainer(ChoresNavigator);