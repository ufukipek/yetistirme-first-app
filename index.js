/**
 * @format
 */

 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// App kısmı -> default export ile export edilmiş değişken
// {age,func} -> tekil olarak export edilmiş değişkenler
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

import ShoppingList from './ShoppingList';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ShoppingList);
