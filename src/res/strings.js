

export const S = {
    // Pattern
    emailValidationPattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    userNamePattern: /^[aA-zZ\s аА-яЯ\s \d]+$/,
    phoneMaskPattern: ['+', /\d/, ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    bankCardMaskPattern: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
    bankCardExpiryDateMaskPattern: [/\d/, /\d/, '/', /\d/, /\d/],

    // Input error message
    emailNotValid: 'Invalid email address',
    phoneNumberNotValid: 'Invalid phone number',
    inputRequired: 'Required field',
    passwordNotValid: 'Password is incorrect',
    passwordMinimum: 'Minimum 8 characters',
    userNameExistError: 'This username is already taken, please choose another',
    userNameSymbolExclude: 'Name must not contain the following characters: < > \ " % ; ( ) &',

    // Role for sign up
    Contractor: 'Contractor',
    Singer: 'Singer',
    Musician: 'Musician',
    Band: 'Band',
    // Sort by
    SortByOptions: {
        dropHeader: 'Sort by',
        dropOptions: [
            'Sort by',
            'Best Match',
            'Rating',
            'Most Popular'
        ]
    },
    // Account tabs
    AccountTabs: {
        contractorTabs: [
            "Personal Information",
            "Payments and Payouts",
            "Change Password",
            "Notification",
            "My Ads",
            "Terms of Service",
        ],
        musicianTabs: [
            "Personal Information",
            "Payments and Payouts",
            "Change Password",
            "Notification",
            "Terms of Service",
        ],
    },
    // Sign up
    PositionOptions: {
        dropHeader: 'Choose your position',
        dropOptions: [
            'Event Coordinator',
            "Restaurant Manager",
            "Talent Acquisition",
            "Corporate Talent Acquisition",
            "Music Director",
            "Organization Leader",
            "Other",
        ]
    },
    Instruments: [
        "Accordion",
        "Balalaika",
        "Cello",
        "Cymbals",
        "Clarinet",
        "Drum",
        "Flute",
        "Grand piano",
        "Harp",
        "Organ",
        "Piano",
        "Saxophone",
        "Synthesizer",
        "Violin",
        "Bagpipe",
        "Bassoon",
        "Baton",
        "Chamber music",
        "Contrabass",
        "Horn",
        "Marimba",
        "Oboe",
        "Guitar",
        "Trumpet",
        "Tuba",
        "Contrabass",
        "Viola",
        "Percussion",
        "Trombone",
        "Wind group",
    ],
    Genres: [
        "Jazz",
        "Hip-Hop",
        "Electronic",
        "Rock",
        "Disco",
        "Fusion",
        "Pop",
        "Folk",
        "Rap",
        "Blues",
        "Reggae",
        "Indie",
        "Classical",
        "Funk",
        "Latin",
        "Techno",
        "Country",
    ],
    bandMembers: [
        "Bassist",
        "Cellist",
        "Conductor",
        "DJ",
        "Drummer",
        "Flautist",
        "Guitarist",
        "Organist",
        "Pianist",
        "Pop star",
        "Rapper",
        "Saxophonist",
        "Trumpeter",
        "Trombonist",
        "Keyboard player",
        "Violinist",
        "Singer",
    ],
    SignUpContentContractor: [
        {
            tabNumber: 1,
            fullNumber: 4,
            title: 'Welcome to MuzNet!',
            text: 'Please, pick a username',
            progressWidth: 15
        },
        {
            tabNumber: 2,
            fullNumber: 4,
            title: 'Welcome to MuzNet!',
            text: 'Select profile type according to your needs',
            progressWidth: 32
        },
        {
            tabNumber: 3,
            fullNumber: 4,
            title: 'Welcome to MuzNet!',
            text: 'Select profile position',
            progressWidth: 60
        },
        {
            tabNumber: 4,
            fullNumber: 4,
            title: 'Welcome to MuzNet!',
            text: 'Lets add profile information',
            progressWidth: 100
        },
    ],
    SignUpContentMusician: [
        {
            tabNumber: 1,
            fullNumber: 6,
            title: 'Welcome to MuzNet!',
            text: 'Please, pick a username',
            progressWidth: 15
        },
        {
            tabNumber: 2,
            fullNumber: 6,
            title: 'Welcome to MuzNet!',
            text: 'Select profile type according to your needs',
            progressWidth: 32
        },
        {
            tabNumber: 3,
            fullNumber: 6,
            title: 'Welcome to MuzNet!',
            text: 'Select profile type according to your needs',
            progressWidth: 50
        },
        {
            tabNumber: 4,
            fullNumber: 6,
            title: 'Welcome to MuzNet!',
            text: 'Please choose your musical instrument',
            progressWidth: 65
        },
        {
            tabNumber: 5,
            fullNumber: 6,
            title: 'Welcome to MuzNet!',
            text: 'Please choose your music genres',
            progressWidth: 85
        },
        {
            tabNumber: 6,
            fullNumber: 6,
            title: 'Welcome to MuzNet!',
            text: 'Lets add profile information',
            progressWidth: 100
        },
    ],
    SignUpContentBand: [
        {
            tabNumber: 1,
            fullNumber: 7,
            title: 'Welcome to MuzNet!',
            text: 'Please, pick a username',
            progressWidth: 14
        },
        {
            tabNumber: 2,
            fullNumber: 7,
            title: 'Welcome to MuzNet!',
            text: 'Select profile type according to your needs',
            progressWidth: 28
        },
        {
            tabNumber: 3,
            fullNumber: 7,
            title: 'Welcome to MuzNet!',
            text: 'Select profile type according to your needs',
            progressWidth: 42
        },
        {
            tabNumber: 4,
            fullNumber: 7,
            title: 'Welcome to MuzNet!',
            text: 'Please, choose group members',
            progressWidth: 56
        },
        {
            tabNumber: 5,
            fullNumber: 7,
            title: 'Welcome to MuzNet!',
            text: 'Please choose your musical instrument',
            progressWidth: 70
        },
        {
            tabNumber: 6,
            fullNumber: 7,
            title: 'Welcome to MuzNet!',
            text: 'Please choose your music genres',
            progressWidth: 84
        },
        {
            tabNumber: 7,
            fullNumber: 7,
            title: 'Welcome to MuzNet!',
            text: 'Lets add profile information',
            progressWidth: 100
        },
    ]

}
