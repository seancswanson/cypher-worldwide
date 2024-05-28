/**
 * Helper function to split a string by comma and trim whitespace
 * @param {string} str
 * @returns {Array<string>}
 */
export const splitAndTrim = (str) => str.split(',').map(s => s.trim());

/**
 * Helper function to count unique values in an array
 * @param {Array<string>} arr
 * @returns {Object.<string, number>}
 */
export const countUnique = (arr) => {
    /**
     * @type {Object.<string, number>}
     */
    const acc = {};
      return arr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, acc);
  };
  

  /**
   * @param {string} res
   */
  export function responseToObjects(res) {
    // credit to Laurence Svekis https://www.udemy.com/course/sheet-data-ajax/
    const jsData = JSON.parse(res.substring(47).slice(0, -2));
    let data = [];
    const columns = jsData.table.cols;
    const rows = jsData.table.rows;
    /** @type {Object.<string, string|Date>} */
    let rowObject;
    let cellData;
    let propName;
    for (let r = 0, rowMax = rows.length; r < rowMax; r++) {
      rowObject = {};
      for (let c = 0, colMax = columns.length; c < colMax; c++) {
        cellData = rows[r]["c"][c];
        propName = columns[c].label;
        if (cellData === null) {
          rowObject[propName] = "";
        } else if (
          typeof cellData["v"] == "string" &&
          cellData["v"].startsWith("Date")
        ) {
          rowObject[propName] = new Date(cellData["f"]);
        } else {
          rowObject[propName] = cellData["v"];
        }
      }
      data.push(rowObject);
    }
    return data;
  }

  // Adapted from https://github.com/theotrain/load-google-sheet-data-using-sql
/**
 * @param {{ sheetID: string, sheetName: string, query: string, callback: (response: any) => void }} options
 */
export const getSheetData = async ({ sheetID, sheetName, query, callback }) => {
    const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
    const url = `${base}&sheet=${encodeURIComponent(sheetName)}&tq=${encodeURIComponent(query)}`;
  
    const response = await fetch(url);
    const text = await response.text();
    
    callback(responseToObjects(text));
  };
  