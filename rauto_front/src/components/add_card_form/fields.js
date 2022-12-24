import { Language } from '../../lang/Languages'

const {
    madel,
    marka,
    color,
    colorru,
    yili,
    divigitel,
    transmission,
    transmissionru,
    yoqilgi,
    yoqilgiru,
    kuzuv,
    kuzuvru,
    perevod,
    perevodru,
    yurgani,
    narxi,
    aksiya,
    status
} = Language

export const fields = [
    // marka
    {
        key: 'marka',
        label: marka,
        select: [
            { value: '', name: '' },
            { value: 'Chevrolet', name: 'Chevrolet' },
            { value: 'Ravon', name: 'Ravon' },
        ],
    },
    // madel
    {
        key: 'madel',
        label: madel,
        select: [
            { value: '', name: '' },
            {
                label: 'Damas',
                optgroup: [
                    { value: 'Damas DLX', name: 'Damas DLX' },
                    { value: 'Damas Labo', name: 'Damas Labo' },
                ],
            },
            {
                label: 'Matiz',
                optgroup: [
                    { value: 'Matiz', name: 'Matiz' },
                    { value: 'Matiz Best', name: 'Matiz Best' },
                ],
            },
            {
                label: 'Nexia-2',
                optgroup: [
                    { value: 'Nexia DOHS', name: 'Nexia DOHS' },
                    { value: 'Nexia SOHS', name: 'Nexia SOHS' },
                ],
            },
            {
                label: 'Nexia-3',
                optgroup: [
                    { value: 'Nexia-3 1-позиция', name: 'Nexia-3 1-позиция' },
                    { value: 'Nexia-3 2-позиция', name: 'Nexia-3 2-позиция' },
                    { value: 'Nexia-3 3-позиция', name: 'Nexia-3 3-позиция' },
                    { value: 'Nexia-3 4-позиция', name: 'Nexia-3 4-позиция' },
                ],
            },
            {
                label: 'Spark',
                optgroup: [
                    { value: 'Spark 1-позиция', name: 'Spark 1-позиция' },
                    { value: 'Spark 1-евро позиция', name: 'Spark 1-евро позиция' },
                    { value: 'Spark 2-позиция', name: 'Spark 2-позиция' },
                    { value: 'Spark 2-евро позиция', name: 'Spark 2-евро позиция' },
                    { value: 'Spark 3-позиция', name: 'Spark 3-позиция' },
                    { value: 'Spark 3-евро позиция', name: 'Spark 3-евро позиция' },
                    { value: 'Spark 4-позиция', name: 'Spark 4-позиция' },
                    { value: 'Spark 4-евро позиция', name: 'Spark 4-евро позиция' },
                ],
            },
            {
                label: 'Cobalt',
                optgroup: [
                    { value: 'Cobalt 1-позиция', name: 'Cobalt 1-позиция' },
                    { value: 'Cobalt 2-позиция', name: 'Cobalt 2-позиция' },
                    { value: 'Cobalt 2-евро позиция', name: 'Cobalt 2-евро позиция' },
                    { value: 'Cobalt 3-позиция', name: 'Cobalt 3-позиция' },
                    { value: 'Cobalt 4-позиция', name: 'Cobalt 4-позиция' },
                    { value: 'Cobalt 4-евро позиция', name: 'Cobalt 4-евро позиция' },
                ],
            },
            {
                label: 'Lacetti-Gentra',
                optgroup: [
                    { value: 'Lacetti 1-п L-COMFORT PLUS', name: 'Lacetti 1-п L-COMFORT PLUS' },
                    {
                        value: 'Lacetti Full CDX A/T Elegant Plus',
                        name: 'Lacetti Full CDX A/T Elegant Plus',
                    },
                    { value: 'Lacetti L-Style MT', name: 'Lacetti L-Style MT' },
                    { value: 'Lacetti L-Style AT', name: 'Lacetti L-Style AT' },
                ],
            },
            {
                label: 'Malibu-1',
                optgroup: [
                    { value: 'Malibu-1 1-позиция', name: 'Malibu-1 1-позиция' },
                    { value: 'Malibu-1 2-позиция', name: 'Malibu-1 2-позиция' },
                    { value: 'Malibu-1 3-позиция', name: 'Malibu-1 3-позиция' },
                ],
            },
            {
                label: 'Malibu-2',
                optgroup: [
                    { value: 'Malibu-2 2.0L LTZ', name: 'Malibu-2 2.0L LTZ' },
                    { value: 'Malibu-2 2-позиция', name: 'Malibu-2 2-позиция' },
                    { value: 'Malibu-2 3-позиция', name: 'Malibu-2 3-позиция' },
                ],
            },
            {
                label: 'Tracker-2',
                optgroup: [
                    { value: 'Tracker-2 1.0T LT AT FWD', name: 'Tracker-2 1.0T LT AT FWD' },
                    {
                        value: 'Tracker-2 LT AT Redline 1.0L',
                        name: 'Tracker-2 LT AT Redline 1.0L',
                    },
                ],
            },
            {
                label: 'Equinox',
                optgroup: [
                    { value: 'Equinox AT 1LT FWD MH', name: 'Equinox AT 1LT FWD MH' },
                    { value: 'Equinox AT 1LT AWD MH', name: 'Equinox AT 1LT AWD MH' },
                    { value: 'Equinox AT 3LT AWD MH', name: 'Equinox AT 3LT AWD MH' },
                ],
            },
            {
                label: 'Traverse',
                optgroup: [
                    {
                        value: 'Traverse Начальная комплектация',
                        name: 'Traverse Начальная комплектация',
                    },
                    { value: 'Traverse Premier MY22', name: 'Traverse Premier MY22' },
                ],
            },
            {
                label: 'Trailblazer',
                optgroup: [{ value: 'Trailblazer LTZ 6АT', name: 'Trailblazer LTZ 6АT' }],
            },
            {
                label: 'Tahoe',
                optgroup: [
                    {
                        value: 'Tahoe Начальная комплектация',
                        name: 'Tahoe Начальная комплектация',
                    },
                    { value: 'Tahoe RST MY22', name: 'Tahoe RST MY22' },
                ],
            },
        ],
    },

    // color
    {
        key: 'color',
        label: color,
        select: [
            { value: '', name: '' },
            { value: `Oq`, name: `Oq` },
            { value: 'Yorqin kulrang', name: 'Yorqin kulrang' },
            { value: 'Qora Firuza', name: 'Qora Firuza' },
            { value: "Sarg'ish yashil", name: "Sarg'ish yashil" },
            { value: 'Kulrang', name: 'Kulrang' },
            { value: 'Moviy', name: 'Moviy' },
            { value: 'Qora', name: 'Qora' },
            { value: 'Qizil', name: 'Qizil' },
        ],
    },
    {
        key: 'colorru',
        label: colorru,
        select: [
            { value: '', name: '' },
            { value: `Белый`, name: `Белый` },
            { value: 'Глянцево-серый', name: 'Глянцево-серый' },
            { value: 'Темно бирюзовый', name: 'Темно бирюзовый' },
            { value: 'Желто зеленый', name: 'Желто зеленый' },
            { value: 'Серый', name: 'Серый' },
            { value: 'Синий', name: 'Синий' },
            { value: 'Черный', name: 'Черный' },
            { value: 'Красный', name: 'Красный' },
        ],
    },
    // yili
    {
        key: 'yili',
        label: yili,
        select: [
            { value: '', name: '' },
            { value: '2015', name: '2015' },
            { value: '2016', name: '2016' },
            { value: '2017', name: '2017' },
            { value: '2018', name: '2018' },
            { value: '2019', name: '2019' },
            { value: '2020', name: '2020' },
            { value: '2021', name: '2021' },
            { value: '2022', name: '2022' },
        ],
    },
    // divigitel
    { key: 'divigitel', label: divigitel, type: 'text' },
    // Yoqilg'i turi
    {
        key: 'yoqilgi',
        label: yoqilgi,
        select: [
            { value: '', name: '' },
            { value: 'Бензин', name: 'Benzin' },
            { value: 'Газ-Бензин', name: 'Gaz-Benzin' },
            { value: 'Дизель', name: 'Dizel' },
            { value: 'Электрокар', name: 'Electrocar' },
            { value: 'Гибрид', name: 'Gibrid' },
            { value: 'Газ', name: 'Gaz' },
        ],
    },
    {
        key: 'yoqilgiru',
        label: yoqilgiru,
        select: [
            { value: '', name: '' },
            { value: 'Бензин', name: 'Бензин' },
            { value: 'Газ-Бензин', name: 'Газ-Бензин' },
            { value: 'Дизель', name: 'Дизель' },
            { value: 'Электрокар', name: 'Электрокар' },
            { value: 'Гибрид', name: 'Гибрид' },
            { value: 'Газ', name: 'Газ' },
        ],
    },
    // transmission
    {
        key: 'transmission',
        label: transmission,
        select: [
            { value: '', name: '' },
            { value: 'mexanika', name: 'Mexanika' },
            { value: 'avtomat', name: 'Avtomat' },
        ],
    },
    {
        key: 'transmissionru',
        label: transmissionru,
        select: [
            { value: '', name: '' },
            { value: 'Механика', name: 'Механика' },
            { value: 'Автомат', name: 'Автомат' },
        ],
    },
    // kuzuv
    {
        key: 'kuzuv',
        label: kuzuv,
        select: [
            { value: '', name: '' },
            { value: 'Кроссовер', name: 'Krossover' },
            { value: 'Минивэн', name: 'Miniven' },
            { value: 'Седан', name: 'Sedan' },
            { value: 'Универсал', name: 'Universal' },
            { value: 'Фургон', name: 'Furgon' },
            { value: 'Хэтчбек', name: 'Xetchbek' },
        ],
    },
    {
        key: 'kuzuvru',
        label: kuzuvru,
        select: [
            { value: '', name: '' },
            { value: 'Кроссовер', name: 'Кроссовер' },
            { value: 'Минивэн', name: 'Минивэн' },
            { value: 'Седан', name: 'Седан' },
            { value: 'Универсал', name: 'Универсал' },
            { value: 'Фургон', name: 'Фургон' },
            { value: 'Хэтчбек', name: 'Хэтчбек' },
        ],
    },
    // perevod
    {
        key: 'perevod',
        label: perevod,
        select: [
            { value: '', name: '' },
            { value: 'Передный', name: 'Old' },
            { value: 'Задный', name: 'Orqa' },
            { value: 'Полный', name: 'Old-orqa' },
        ],
    },
    {
        key: 'perevodru',
        label: perevodru,
        select: [
            { value: '', name: '' },
            { value: 'Передный', name: 'Передный' },
            { value: 'Задный', name: 'Задный' },
            { value: 'Полный', name: 'Полный' },
        ],
    },
    // yurgani
    { key: 'yurgani', label: yurgani, type: 'number' },
    { key: 'narxi', label: narxi, type: 'number' },
    // aksiya
    {
        key: 'aksiya',
        label: aksiya,
        select: [
            { value: 'Not_aksiya', name: 'Kerak emas' },
            { value: 'Aksiya', name: 'Aksiya' },
        ],
    },
    {
        key: 'credit',
        label: status,
        select: [
            { value: 'Yangi', name: 'Yangi' },
            { value: 'Eski', name: 'Eski' },
        ],
    },
]
