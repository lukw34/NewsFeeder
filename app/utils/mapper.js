const countries = {
        pl: 'Poland',
        us: 'USA',
        gb: 'Great Britain',
        de: 'Germany',
        it: 'Italy',
        ru: 'Russia',
        jp: 'Japan',
        ua: 'Ukraine'
    },
    categories = {
        'top-headlines': {
            label: 'Top headlines',
            icon: 'bell',
            url: '',
            key: 'top-headlines'
        },
        business: {
            label: 'Business',
            key: 'business',
            icon: 'briefcase',
            url: 'business'
        },
        health: {
            label: 'Health',
            key: 'health',
            icon: 'pulse',
            url: 'health'
        },
        science: {
            label: 'Science',
            key: 'science',
            icon: 'beaker',
            url: 'science'
        },
        technology: {
            label: 'Technology',
            key: 'technology',
            icon: 'rocket',
            url: 'technology'
        }
    },
    mapCountries = countryCode => countries[countryCode],
    mapCategories = category => categories[category] || categories['top-headlines'];

export {
    mapCategories,
    mapCountries
}