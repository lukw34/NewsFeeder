const countries = {
        pl: 'Poland',
        us: 'USA',
        gb: 'Great Britain'

    },
    categories = {
        'top-headlines': 'Top headlines'
    },
    mapCountries = countryCode => countries[countryCode],
    mapCategories = category => categories[category] || categories['top-headlines'] ;

export {
    mapCategories,
    mapCountries
}