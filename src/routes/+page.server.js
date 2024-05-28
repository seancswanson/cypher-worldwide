import '$lib/types.js';
import { parseSheetData } from '$lib/dataProcessing.js';
import { getSheetData } from '$lib/helpers';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  /**
   * @type {PageData}
   * @description An object to store various types of page data.
   */
  let pageData = {};

  /**
   * @param {Array<SheetRow>} sheetData
   */
  const sheetDataHandler = (sheetData) => {
    const parsedPageData = parseSheetData(sheetData);
    pageData = parsedPageData;
  }

  await getSheetData({
    // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
    sheetID: "1kj_GPMPLTILOXRjnPQAXEbc6p0mW4wR64e9h6MaZk0w",
    // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
    sheetName: "Events",
    query: "SELECT *",
    callback: sheetDataHandler,
  });


  return { pageData };
}

