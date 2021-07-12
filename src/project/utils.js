export const getFields = () => {
    const fields = [
        {
            name: 'name',
            type: 'input',
            title: 'ПІБ',
            placeholder: 'Введіть ФИО'
        }, 
        {
            name: 'type',
            type: 'select',
            title: 'Роль',
            options: [
                {
                    id: 1,
                    value: 'sport',
                    alias: 'Спортсмен'
                },
                {
                    id: 1,
                    value: 'lider',
                    alias: 'Лідер спорту'
                },
                {
                    id: 1,
                    value: 'event',
                    alias: 'Учасник заходу'
                },
            ],
            placeholder: ''
        },
        {
            name: 'date',
            type: 'date',
            title: 'Дата народження',
            placeholder: 'Оберіть дату народження'
        },
        {
            name: 'phone',
            type: 'phone',
            title: 'Телефон',
            placeholder: 'Введіть номер'
        },
        {
            name: 'email',
            type: 'input',
            title: 'Email',
            placeholder: 'Введіть email'
        },
        {
            name: 'sport_id',
            type: 'select',
            title: 'Вид спорту',
            options: [
                {
                    id: 1,
                    value: 'Футбол',
                    alias: 'Футбол'
                },
                {
                    id: 1,
                    value: 'Волейбол',
                    alias: 'Волейбол'
                },
                {
                    id: 1,
                    value: 'Баскетбол',
                    alias: 'Баскетбол'
                },
                {
                    id: 1,
                    value: 'Кроссфит',
                    alias: 'Кроссфит'
                },
                {
                    id: 1,
                    value: 'Воркаут',
                    alias: 'Воркаут'
                },
                {
                    id: 1,
                    value: 'Смешанные единоборства',
                    alias: 'Смешанные единоборства'
                },
                {
                    id: 1,
                    value: 'Бег',
                    alias: 'Бег'
                },
                {
                    id: 1,
                    value: 'Скалолазание',
                    alias: 'Скалолазание'
                },
                {
                    id: 1,
                    value: 'Борьба',
                    alias: 'Борьба'
                },
                {
                    id: 1,
                    value: 'Йога',
                    alias: 'Йога'
                },
                {
                    id: 1,
                    value: 'Альпинизм',
                    alias: 'Альпинизм'
                },
                {
                    id: 1,
                    value: 'Бокс',
                    alias: 'Бокс'
                },
                {
                    id: 1,
                    value: 'Гимнастика',
                    alias: 'Гимнастика'
                },
                {
                    id: 1,
                    value: 'Настольный теннис',
                    alias: 'Настольный теннис'
                },
                {
                    id: 1,
                    value: 'Скандинавская ходьба',
                    alias: 'Скандинавская ходьба'
                },
                {
                    id: 1,
                    value: 'Теннис',
                    alias: 'Теннис'
                },
                {
                    id: 1,
                    value: 'Шахматы',
                    alias: 'Шахматы'
                },
                {
                    id: 1,
                    value: 'Другой',
                    alias: 'Другой'
                },
            ],
            placeholder: ''
        },
        {
            name: 'district',
            type: 'select',
            title: 'Район',
            options: [
                {
                    id: 1,
                    value: 'Центральный',
                    alias: 'Центральний'
                },
                {
                    id: 1,
                    value: 'Левобережный',
                    alias: 'Лівобережний'
                },
                {
                    id: 1,
                    value: 'Приморский',
                    alias: 'Приморський'
                },
                {
                    id: 1,
                    value: 'Кальмиуский',
                    alias: 'Кальміуський'
                },
            ],
            placeholder: ''
        },
        {
            name: 'adress',
            type: 'input',
            title: 'Адрес',
            placeholder: 'Введіть адресу'
        },
        {
            name: 'children',
            type: 'radio',
            title: 'Чи є у Вас діти до 16 років?',
            options: [
                {
                    id: 1,
                    value: 'true',
                    alias: 'Так'
                },
                {
                    id: 1,
                    value: 'false',
                    alias: 'Ні'
                },                
            ],
            placeholder: ''
        },
        {
            name: 'sports_count',
            type: 'radio',
            title: 'Чи займаєтесь Ви спортом регулярно? (2 і більше разів на тиждень)',
            options: [
                {
                    id: 1,
                    value: 'true',
                    alias: 'Так'
                },
                {
                    id: 1,
                    value: 'false',
                    alias: 'Ні'
                },                
            ],
            placeholder: ''
        },
        {
            name: 'sports_child',
            type: 'radio',
            title: 'Чи займалися Ви спортом у дитинстві?',
            options: [
                {
                    id: 1,
                    value: 'true',
                    alias: 'Так'
                },
                {
                    id: 1,
                    value: 'false',
                    alias: 'Ні'
                },                
            ],
            placeholder: ''
        },
        {
            name: 'politic',
            type: 'check',
            title: 'Ознайомився(лась) та приймаю',
            link: 'умови участі в Клубі',
            url: '/peoples/politic'
        },
        {
            name: 'dataTrue',
            type: 'check',
            title: 'Я згоден(а) на ',
            link: 'обробку моїх персональних даних',
            url: '/peoples/datatrue'
        }

    ]
    return {
        fields
    }
}

export const getData = async(
    url
) => {
    const res = await fetch(url, {
        headers: {
            "access-control-allow-origin" : "*",
            'Content-Type': 'application/json;charset=UTF-8'
        },
    }).then((response) => {
        if (response.status === 200) {
           
        }
        return response
    })
    return await res.json()
}

export const getGridHandlers = (updateHandler, qrHandler, deleteHandler) => {
    return {
        buttons: { 
            qr: (id) => qrHandler(id),
            delete: (id) => deleteHandler(id),
        }
    }
}
