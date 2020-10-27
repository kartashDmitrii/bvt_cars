export default class Tabs {
    constructor(tabButtons, tabs) {
        this.tabButtons = tabButtons;
        this.tabs = tabs;
        this.tabButtons.forEach( (elem, i) => {
            elem.addEventListener('click', () => {
                this.closeAllTabs();
                this.tabs[i].classList.add('active');
                elem.classList.add('active')
            })
        });
    }
    closeAllTabs(){
        this.tabButtons.forEach( button => {
            button.classList.remove('active')
        });
        this.tabs.forEach( tab => {
            tab.classList.remove('active')
        })
    }
}