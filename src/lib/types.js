/**
 * @typedef {Object} SheetRow
 * @property {number} eventId
 * @property {string} name
 * @property {number} year
 * @property {string} date
 * @property {string} location
 * @property {string} soloBboyWinner
 * @property {string} soloBboyWinnerCrew
 * @property {string} soloBboyWinnerCountry
 * @property {string} soloBgirlWinner
 * @property {string} soloBgirlWinnerCrew
 * @property {string} soloBgirlWinnerCountry
 * @property {string} crewWinner
 * @property {string} crewCountries
 * @property {string} twoVTwoBboyWinners
 * @property {string} twoVTwoBboyWinnerCrews
 * @property {string} twoVTwoBboyWinnerCountries
 * @property {string} twoVTwoBgirlWinners
 * @property {string} twoVTwoBgirlWinnersCrews
 * @property {string} twoVTwoBgirlWinnerCountries
 * @property {string} footworkWinner
 * @property {string} footworkWinnerCrew
 * @property {string} footworkWinnerCountry
 * @property {string} youthBboyWinner
 * @property {string} youthBboyWinnerCrew
 * @property {string} youthBboyWinnerCountry
 * @property {string} youthBgirlWinner
 * @property {string} youthBgirlWinnerCrew
 * @property {string} youthBgirlWinnerCountry
 * @property {string} powerWinner
 * @property {string} powerWinnerCrew
 * @property {string} powerWinnerCountry
 * @property {string} experimentalWinner
 * @property {string} experimentalWinnerCrew
 * @property {string} experimentalWinnerCountry
 * @property {string} seven2SmokeWinner
 * @property {string} seven2SmokeWinnerCrew
 * @property {string} seven2SmokeCountry
 */

/**
 * @typedef {Object} EventData
 * @property {string} title
 * @property {number} year
 * @property {string} date
 * @property {string} location
 */

/**
 * @typedef {Object} WinnerData
 * @property {string} name
 * @property {string} country
 */

/**
 * @typedef {Object} PageData
 * @property {Array<SheetRow>} [raw]
 * @property {Array<EventData>} [events]
 * @property {Record<string, Record<string, number>>} [winsByCountry]
 * @property {Array<string>} [countries]
 * @property {Array<WinnerData>} [bboys]
 * @property {Array<WinnerData>} [bgirls]
 * @property {Array<WinnerData>} [crews]
 * @property {Array<WinnerData>} [twoVTwoBgirls]
 * @property {Array<WinnerData>} [footwork]
 * @property {Array<WinnerData>} [youthBboys]
 * @property {Array<WinnerData>} [youthBgirls]
 * @property {Array<WinnerData>} [power]
 * @property {Array<WinnerData>} [experimental]
 * @property {Array<WinnerData>} [seven2Smoke]
 * 
 * 
 */