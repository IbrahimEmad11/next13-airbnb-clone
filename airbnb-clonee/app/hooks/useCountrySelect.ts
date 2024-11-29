import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    // Use flag images instead of emojis
    flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`, 
    latlng: country.latlng,
    region: country.region,
}));

const useCountrySelect = () => {
    const getAll = () => formattedCountries;

    const getByValue = (value: string) => {
        return formattedCountries.find((country) => country.value === value);
    };

    return {
        getAll,
        getByValue,
    };
};

export default useCountrySelect;