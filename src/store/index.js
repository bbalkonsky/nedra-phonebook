import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // units: [
        //     {
        //         id: '0',
        //         name: 'Бухгалтерия',
        //         people: [
        //             {
        //                 id: 'e1',
        //                 name: 'Иванова Иван Ивановна',
        //                 position: 'Заместитель главного бухгалтера по развитию материально-сырьевой базы',
        //                 email: 'i.ivanova@nedra.gazprom.ru',
        //                 location: 'Красноярск',
        //                 phones: [
        //                     {
        //                         type: 'Газовый',
        //                         number: '721 11111'
        //                     }
        //                 ]
        //             },
        //         ],
        //         subDepartments: [
        //             {
        //                 id: '1',
        //                 name: 'Отдел консолидированной отчетности и методологии учета',
        //                 people: [
        //                     {
        //                         id: 'e2',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Начальник отдела',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Тюмень ',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         id: 'e3',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Главный специалист',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Москва',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             },
        //                             {
        //                                 type: 'Мобильный',
        //                                 number: '+7 555 111 99 99'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         id: 'e4',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Главный специалист',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Москва',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             },
        //                             {
        //                                 type: 'Городской',
        //                                 number: '+7 555 111 99 99'
        //                             }
        //                         ]
        //                     },
        //                 ],
        //                 subDepartments: [
        //                     {
        //                         id: '4',
        //                         name: 'Группа чего-то там',
        //                         people: [
        //                             {
        //                                 id: 'e5',
        //                                 name: 'Иванова Иван Ивановна',
        //                                 position: 'Главный специалист',
        //                                 email: 'i.ivanova@nedra.gazprom.ru',
        //                                 location: 'Москва',
        //                                 phones: [
        //                                     {
        //                                         type: 'Газовый',
        //                                         number: '721 11111'
        //                                     },
        //                                     {
        //                                         type: 'Городской',
        //                                         number: '+7 555 111 99 99'
        //                                     }
        //                                 ]
        //                             }
        //                         ],
        //                         subDepartments: []
        //                     }
        //                 ]
        //             },
        //             {
        //                 id: '2',
        //                 name: 'Отдел налогового учета и отчетности',
        //                 people: [
        //                     {
        //                         id: 'e6',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Главный специалист',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Москва',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             },
        //                             {
        //                                 type: 'Мобильный',
        //                                 number: '+7 555 111 99 99'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         id: 'e7',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Главный специалист',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Москва',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             },
        //                             {
        //                                 type: 'Городской',
        //                                 number: '+7 555 111 99 99'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         id: 'e8',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Главный специалист',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Москва',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             },
        //                             {
        //                                 type: 'Городской',
        //                                 number: '+7 555 111 99 99'
        //                             }
        //                         ]
        //                     }
        //                 ],
        //                 subDepartments: []
        //             },
        //             {
        //                 id: '3',
        //                 name: 'Отдел по учету доходов и расходов Администрации',
        //                 people: [
        //                     {
        //                         id: 'e9',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Начальник отдела',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Москва',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             },
        //                             {
        //                                 type: 'Городской',
        //                                 number: '+7 555 111 99 99'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         id: 'e10',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Заместитель начальника отдела',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Тюмень',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         id: 'e11',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Главный специалист',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Тюмень',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         id: 'e12',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Главный специалист',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Москва',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             },
        //                             {
        //                                 type: 'Городской',
        //                                 number: '+7 555 111 99 99'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         id: 'e13',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Главный специалист',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Москва',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             },
        //                             {
        //                                 type: 'Городской',
        //                                 number: '+7 555 111 99 99'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         id: 'e14',
        //                         name: 'Иванова Иван Ивановна',
        //                         position: 'Ведущий специалист',
        //                         email: 'i.ivanova@nedra.gazprom.ru',
        //                         location: 'Тюмень',
        //                         phones: [
        //                             {
        //                                 type: 'Газовый',
        //                                 number: '721 11111'
        //                             }
        //                         ]
        //                     }
        //                 ],
        //                 subDepartments: []
        //             }
        //         ]
        //     },
        //
        // ],
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
