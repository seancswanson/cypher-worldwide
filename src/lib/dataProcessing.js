import { countUnique, splitAndTrim } from "./helpers";

/**
 * @param {Array<SheetRow>} sheetData
 */
export const processData = (sheetData) => {
    /**
   * @type {Record<string, string[]>}
   */
    const countryCounts = {
        soloBboyWinner: [],
        soloBgirlWinner: [],
        crewWinner: [],
        twoVTwoBboyWinner: [],
        twoVTwoBgirlWinner: [],
        footworkWinner: [],
        youthBboyWinner: [],
        youthBgirlWinner: [],
        powerWinner: [],
        experimentalWinner: [],
        seven2SmokeWinner: [],
    };

    sheetData.forEach(row => {
        if (row.soloBboyWinnerCountry !== 'N/A') {
            countryCounts.soloBboyWinner.push(...splitAndTrim(row.soloBboyWinnerCountry));
        }
        if (row.soloBgirlWinnerCountry !== 'N/A') {
            countryCounts.soloBgirlWinner.push(...splitAndTrim(row.soloBgirlWinnerCountry));
        }
        if (row.crewCountries !== 'N/A') {
            countryCounts.crewWinner.push(...splitAndTrim(row.crewCountries));
        }
        if (row.twoVTwoBboyWinnerCountries !== 'N/A') {
            countryCounts.twoVTwoBboyWinner.push(...splitAndTrim(row.twoVTwoBboyWinnerCountries));
        }
        if (row.twoVTwoBgirlWinnerCountries !== 'N/A') {
            countryCounts.twoVTwoBgirlWinner.push(...splitAndTrim(row.twoVTwoBgirlWinnerCountries));
        }
        if (row.footworkWinnerCountry !== 'N/A') {
            countryCounts.footworkWinner.push(...splitAndTrim(row.footworkWinnerCountry));
        }
        if (row.youthBboyWinnerCountry !== 'N/A') {
            countryCounts.youthBboyWinner.push(...splitAndTrim(row.youthBboyWinnerCountry));
        }
        if (row.youthBgirlWinnerCountry !== 'N/A') {
            countryCounts.youthBgirlWinner.push(...splitAndTrim(row.youthBgirlWinnerCountry));
        }
        if (row.powerWinnerCountry !== 'N/A') {
            countryCounts.powerWinner.push(...splitAndTrim(row.powerWinnerCountry));
        }
        if (row.experimentalWinnerCountry !== 'N/A') {
            countryCounts.experimentalWinner.push(...splitAndTrim(row.experimentalWinnerCountry));
        }
        if (row.seven2SmokeCountry !== 'N/A') {
            countryCounts.seven2SmokeWinner.push(...splitAndTrim(row.seven2SmokeCountry));
        }
    });


    /**
      * @type {Record<string, Record<string, number>>}
      */
    const uniqueCountryCounts = {};
    for (const category in countryCounts) {
        uniqueCountryCounts[category] = countUnique(countryCounts[category]);
    }

    return uniqueCountryCounts;
};

/**
  * @param {Array<SheetRow>} sheetData
  */
export const parseSheetData = (sheetData) => {
    const parsedData = {};
    parsedData.raw = sheetData;
    parsedData.winsByCountry = processData(sheetData);
    parsedData.events = sheetData.map((row) => ({
        title: row.name,
        year: row.year,
        date: row.date,
        location: row.location,
    }));
    parsedData.countries = sheetData.map((row) => row.location).filter((value, index, self) => self.indexOf(value) === index);
    parsedData.bboys = sheetData
        .map((row) => ({ name: row.soloBboyWinner, country: row.soloBboyWinnerCountry }))
        .filter((winner) => winner.name !== 'N/A')
        .filter((value, index, self) => self.findIndex(v => v.name === value.name && v.country === value.country) === index);
    parsedData.bgirls = sheetData
        .map((row) => ({ name: row.soloBgirlWinner, country: row.soloBgirlWinnerCountry }))
        .filter((winner) => winner.name !== 'N/A')
        .filter((value, index, self) => self.findIndex(v => v.name === value.name && v.country === value.country) === index);
    parsedData.crews = sheetData
        .map((row) => ({ name: row.crewWinner, country: row.crewCountries }))
        .filter((winner) => winner.name !== 'N/A')
        .filter((value, index, self) => self.findIndex(v => v.name === value.name && v.country === value.country) === index);
    parsedData.twoVTwoBgirls = sheetData
        .map((row) => ({ name: row.twoVTwoBgirlWinners, country: row.twoVTwoBgirlWinnerCountries }))
        .filter((winner) => winner.name !== 'N/A')
        .filter((value, index, self) => self.findIndex(v => v.name === value.name && v.country === value.country) === index);
    parsedData.footwork = sheetData
        .map((row) => ({ name: row.footworkWinner, country: row.footworkWinnerCountry }))
        .filter((winner) => winner.name !== 'N/A')
        .filter((value, index, self) => self.findIndex(v => v.name === value.name && v.country === value.country) === index);
    parsedData.youthBboys = sheetData
        .map((row) => ({ name: row.youthBboyWinner, country: row.youthBboyWinnerCountry }))
        .filter((winner) => winner.name !== 'N/A')
        .filter((value, index, self) => self.findIndex(v => v.name === value.name && v.country === value.country) === index);
    parsedData.youthBgirls = sheetData
        .map((row) => ({ name: row.youthBgirlWinner, country: row.youthBgirlWinnerCountry }))
        .filter((winner) => winner.name !== 'N/A')
        .filter((value, index, self) => self.findIndex(v => v.name === value.name && v.country === value.country) === index);
    parsedData.power = sheetData
        .map((row) => ({ name: row.powerWinner, country: row.powerWinnerCountry }))
        .filter((winner) => winner.name !== 'N/A')
        .filter((value, index, self) => self.findIndex(v => v.name === value.name && v.country === value.country) === index);
    parsedData.experimental = sheetData
        .map((row) => ({ name: row.experimentalWinner, country: row.experimentalWinnerCountry }))
        .filter((winner) => winner.name !== 'N/A')
        .filter((value, index, self) => self.findIndex(v => v.name === value.name && v.country === value.country) === index);
    parsedData.seven2Smoke = sheetData
        .map((row) => ({ name: row.seven2SmokeWinner, country: row.seven2SmokeCountry }))
        .filter((winner) => winner.name !== 'N/A')
        .filter((value, index, self) => self.findIndex(v => v.name === value.name && v.country === value.country) === index);
    return parsedData;
}
