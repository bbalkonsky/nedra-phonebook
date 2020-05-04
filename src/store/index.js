import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        departments: [
            {
                id: '0',
                name: 'Бухгалтерия',
                people: [
                    {
                        id: 'e1',
                        name: 'Иванова Иван Ивановна',
                        position: 'Заместитель главного бухгалтера по развитию материально-сырьевой базы',
                        email: 'i.ivanova@nedra.gazprom.ru',
                        location: 'Красноярск',
                        phones: [
                            {
                                type: 'Газовый',
                                number: '721 11111'
                            }
                        ]
                    },
                ],
                subDepartments: [
                    {
                        id: '1',
                        name: 'Отдел консолидированной отчетности и методологии учета',
                        people: [
                            {
                                id: 'e2',
                                name: 'Иванова Иван Ивановна',
                                position: 'Начальник отдела',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Тюмень ',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    }
                                ]
                            },
                            {
                                id: 'e3',
                                name: 'Иванова Иван Ивановна',
                                position: 'Главный специалист',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Москва',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    },
                                    {
                                        type: 'Мобильный',
                                        number: '+7 555 111 99 99'
                                    }
                                ]
                            },
                            {
                                id: 'e4',
                                name: 'Иванова Иван Ивановна',
                                position: 'Главный специалист',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Москва',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    },
                                    {
                                        type: 'Городской',
                                        number: '+7 555 111 99 99'
                                    }
                                ]
                            },
                        ],
                        subDepartments: [
                            {
                                id: '4',
                                name: 'Группа чего-то там',
                                people: [
                                    {
                                        id: 'e5',
                                        name: 'Иванова Иван Ивановна',
                                        position: 'Главный специалист',
                                        email: 'i.ivanova@nedra.gazprom.ru',
                                        location: 'Москва',
                                        phones: [
                                            {
                                                type: 'Газовый',
                                                number: '721 11111'
                                            },
                                            {
                                                type: 'Городской',
                                                number: '+7 555 111 99 99'
                                            }
                                        ]
                                    }
                                ],
                                subDepartments: []
                            }
                        ]
                    },
                    {
                        id: '2',
                        name: 'Отдел налогового учета и отчетности',
                        people: [
                            {
                                id: 'e6',
                                name: 'Иванова Иван Ивановна',
                                position: 'Главный специалист',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Москва',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    },
                                    {
                                        type: 'Мобильный',
                                        number: '+7 555 111 99 99'
                                    }
                                ]
                            },
                            {
                                id: 'e7',
                                name: 'Иванова Иван Ивановна',
                                position: 'Главный специалист',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Москва',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    },
                                    {
                                        type: 'Городской',
                                        number: '+7 555 111 99 99'
                                    }
                                ]
                            },
                            {
                                id: 'e8',
                                name: 'Иванова Иван Ивановна',
                                position: 'Главный специалист',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Москва',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    },
                                    {
                                        type: 'Городской',
                                        number: '+7 555 111 99 99'
                                    }
                                ]
                            }
                        ],
                        subDepartments: []
                    },
                    {
                        id: '3',
                        name: 'Отдел по учету доходов и расходов Администрации',
                        people: [
                            {
                                id: 'e9',
                                name: 'Иванова Иван Ивановна',
                                position: 'Начальник отдела',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Москва',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    },
                                    {
                                        type: 'Городской',
                                        number: '+7 555 111 99 99'
                                    }
                                ]
                            },
                            {
                                id: 'e10',
                                name: 'Иванова Иван Ивановна',
                                position: 'Заместитель начальника отдела',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Тюмень',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    }
                                ]
                            },
                            {
                                id: 'e11',
                                name: 'Иванова Иван Ивановна',
                                position: 'Главный специалист',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Тюмень',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    }
                                ]
                            },
                            {
                                id: 'e12',
                                name: 'Иванова Иван Ивановна',
                                position: 'Главный специалист',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Москва',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    },
                                    {
                                        type: 'Городской',
                                        number: '+7 555 111 99 99'
                                    }
                                ]
                            },
                            {
                                id: 'e13',
                                name: 'Иванова Иван Ивановна',
                                position: 'Главный специалист',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Москва',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    },
                                    {
                                        type: 'Городской',
                                        number: '+7 555 111 99 99'
                                    }
                                ]
                            },
                            {
                                id: 'e14',
                                name: 'Иванова Иван Ивановна',
                                position: 'Ведущий специалист',
                                email: 'i.ivanova@nedra.gazprom.ru',
                                location: 'Тюмень',
                                phones: [
                                    {
                                        type: 'Газовый',
                                        number: '721 11111'
                                    }
                                ]
                            }
                        ],
                        subDepartments: []
                    }
                ]
            },

        ],
        popupOpened: false,
        popupEmployee: {},
        isUserAuthorized: false,
        isDarkThemeActive: false
    },
    mutations: {
        popupOpenChange (state, isOpened) {
            state.popupOpened = isOpened;
        },
        popupEmployeeChange (state, id) { // вытаскиваем список всех работников вместе с подразделением
            const flatDepartments = toFlat(state.departments);
            const allPeople = flatDepartments.reduce((accum, current) => {
                return [
                    ...accum,
                    ...current.people.map(employee => { // добавляем подразделение работника
                        return {
                            ...employee,
                            department: current.name
                        }
                    }
                    )
                ]
            }, []);
            state.popupEmployee =  allPeople.find(employee => employee.id === id);
        },
        loginUser (state, isLoggedIn) {
            state.isUserAuthorized = isLoggedIn;
            localStorage.isUserAuthorized = isLoggedIn;
        },
        // logoutUser (state) {
        //     state.isUserAuthorized = false;
        //     localStorage.isUserAuthorized = false;
        // },
        themeSwitch (state, newThemeState) {
            state.isDarkThemeActive = newThemeState;
            localStorage.isDarkTheme = newThemeState;
        }
    },
    getters: {
        getAllPeople: state => {
            return getGroupedPeople(state.departments);
        },
        getPeopleByDepartment: state => id => {
            let foundDep;

            foundDep = state.departments.find(department => department.id === id);
            if (foundDep) {
                return getGroupedPeople([foundDep]);
            }

            const firstChildren = getChildren(state.departments);
            foundDep = firstChildren.find(department => department.id === id);
            if (foundDep) {
                return getGroupedPeople([foundDep]);
            }

            const secondChildren = getChildren(firstChildren);
            foundDep = secondChildren.find(department => department.id === id);
            return getGroupedPeople([foundDep]);
        },
    },
    actions: {
        authorization({commit}, {username, password}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (username === 'user' && password === 'user') {
                        resolve(commit('loginUser', true));
                    } else {
                        reject('штото не так');
                    }
                }, 1000);
            })
        }
    }
})

function getGroupedPeople(departments) {
    const groups = {};

    const flatDepartments = toFlat(departments);

    const people = flatDepartments.reduce((accum, current) => {
        return [...accum, ...current.people.map(worker => {
            return {
                id: worker.id,
                name: worker.name,
                position: worker.position
            }
        })]
    }, []);

    const groupPeople =  people.reduce((accum, current) => {
        const firstLetter = current.name.charAt(0);
        if (!groups[firstLetter]){
            groups[firstLetter] = [];
        }

        const entry = groups[firstLetter];
        entry.push(current);

        return groups;
    }, {});

    const orderedPeople = {};
    Object.keys(groupPeople).sort().forEach(key => {
        orderedPeople[key] = groupPeople[key];
    });

    return orderedPeople;
}

function toFlat(array) {
    let result = [];

    array.forEach(el => {
        result.push(el);
        if (el.subDepartments.length) {
            result = [...result, ...toFlat(el.subDepartments)];
        }
    });

    return result;
}

function getChildren(array) {
    let result = [];

    array.forEach(el => {
        result = [...result, ...el.subDepartments];
    });

    return result;
}
