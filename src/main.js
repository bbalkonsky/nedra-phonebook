import Vue from 'vue'
import App from './App.vue'

import Framework7 from 'framework7';
import Framework7Vue from 'framework7-vue';
import Searchbar from "framework7/components/searchbar/searchbar.js";
import Panel from "framework7/components/panel/panel.js";
import Toggle from "framework7/components/toggle/toggle.js";
import ListIndex from "framework7/components/list-index/list-index.js";
import Popup from "framework7/components/popup/popup.js";
import Tabs from "framework7/components/tabs/tabs.js";
import Popover from "framework7/components/popover/popover.js";
import Preloader from "framework7/components/preloader/preloader.js";
import Dialog from "framework7/components/dialog/dialog";
import VirtualListComponent from "framework7/components/virtual-list/virtual-list";

Framework7.use([Framework7Vue, Searchbar, Panel, Toggle, ListIndex, Popup, Tabs, Popover, Preloader, Dialog, VirtualListComponent]);

import 'framework7/css/framework7.bundle.min.css';
import './css/app.css';

import './css/icons.css';
import store from './store'

import './registerServiceWorker'


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
