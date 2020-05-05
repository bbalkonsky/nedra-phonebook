import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        units: [],
        staff: [],
        personPopupContent: {},
        isPersonPopupOpened: false,
        isDarkThemeActive: false,
    },
    mutations: {
        unitsResponse (state, units) {
            state.units = units;
        },
        staffResponse (state, staff) {
            state.staff = staff;
        },
        personPopupOpenedChange (state, isOpened) {
            state.isPersonPopupOpened = isOpened;
        },
        personPopupContentChange (state, id) {
            state.personPopupContent =  state.staff.find(person => person.cn === id);
        },
        themeSwitch (state, newThemeState) {
            state.isDarkThemeActive = newThemeState;
            localStorage.isDarkTheme = newThemeState;
        }
    },
    getters: {
        groupedStaff: state => {
            return getGroupedPeople(state.staff);
        },
        getStaffByUnit: state => id => {
            const result = [];
            state.staff.forEach(person => {
                if (person.company === id || person.division === id || person.departmentNumber === id || person.description === id) {
                    result.push(person);
                }
            });

            // const sortedRusult = result.sort((a, b) => return )

            console.log(result)
            return result;
        },
    },
})

function getGroupedPeople(units) {
    const groups = {};

    const groupedStaff =  units.reduce((accum, current) => {
        const firstLetter = current.cn.charAt(0);
        if (!groups[firstLetter]){
            groups[firstLetter] = [];
        }

        const entry = groups[firstLetter];
        entry.push(current);

        return groups;
    }, {});

    const orderedStaff = {};
    Object.keys(groupedStaff).sort().forEach(key => {
        orderedStaff[key] = groupedStaff[key];
    });

    return orderedStaff;
}
