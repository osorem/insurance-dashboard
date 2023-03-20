/* tslint:disable */
import { useState, useEffect } from 'react';

import excel from './excel';

import { Card } from '@mui/material';

const EXCEL_START_DATE = new Date(Date.UTC(1900, 0, 1));
const { CONCATENATE, TRIM, MID, IF, DATE, OR, AND, DAYS } = excel;

function GenratedReport({ searchText }: any) {
  const [generatedHeaders, setGeneratedHeaders] = useState([]);
  const [generatedItems, setGeneratedItems] = useState([]);

  let columnE;
  let columnI;
  let columnJ;
  let columnK;
  let columnN;
  let columnR;
  let columnS;
  let columnT;
  let columnU;
  let columnH;
  let columnL;
  let columnO;
  let columnD;
  let columnF;
  let columnG;
  let columnB;
  let columnC;
  let columnM;
  let columnP;
  let columnQ;
  let column18;

  useEffect(() => {
    if (searchText !== '') {
      let givenA = searchText;
      console.log('given a is ' + searchText);

      columnE = calculateColumnE();
      columnI = calculateColumnI();
      columnJ = calculateColumnJ();
      columnK = calculateColumnK();
      columnN = calculateColumnN();
      columnR = calculateColumnR();
      columnS = calculateColumnS();
      columnT = calculateColumnT();
      columnU = calculateColumnU();
      columnH = calculateColumnH();
      columnL = calculateColumnL();
      columnO = calculateColumnO();
      columnD = calculateColumnD();
      columnF = calculateColumnF();
      columnG = calculateColumnG();
      columnB = calculateColumnB();
      columnC = calculateColumnC();
      columnM = calculateColumnM();
      columnP = calculateColumnP();
      columnQ = calculateColumnQ();
      column18 = calculateColumn18();

      function calculateColumnB() {
        // get the days count in serial number format. Read here: https://www.wallstreetmojo.com/day-excel-function/
        const serialNumberColumnH = DAYS(columnH, EXCEL_START_DATE) + 1;

        return CONCATENATE(
          columnD,
          columnE,
          columnF,
          columnG,
          serialNumberColumnH
        );
      }

      function calculateColumnC() {
        const serialNumberColumnH = DAYS(columnH, EXCEL_START_DATE) + 1;

        return CONCATENATE(columnD, columnF, serialNumberColumnH);
      }

      function calculateColumnD() {
        return TRIM(
          IF(columnJ === columnE, MID(givenA, 73, 25), MID(givenA, 109, 25))
        );
      }

      function calculateColumnE() {
        return MID(givenA, 45, 3);
      }

      function calculateColumnF() {
        return TRIM(
          IF(columnJ === columnE, MID(givenA, 109, 25), MID(givenA, 73, 25))
        );
      }

      function calculateColumnG() {
        return IF(columnE === columnJ, MID(givenA, 105, 3), columnJ);
      }

      function calculateColumnH() {
        return DATE(
          Number(MID(givenA, 134, 4)),
          Number(MID(givenA, 138, 2)),
          Number(MID(givenA, 140, 2))
        );
      }

      function calculateColumnI() {
        return MID(givenA, 424, 1);
      }

      function calculateColumnJ() {
        return MID(givenA, 69, 3);
      }

      function calculateColumnK() {
        return MID(givenA, 539, 2);
      }

      function calculateColumnL() {
        return IF(
          TRIM(MID(givenA, 279, 2)) === 'R',
          'T',
          TRIM(MID(givenA, 279, 2))
        );
      }

      function calculateColumnM() {
        return IF(
          columnH < DATE(2017, 3, 1),
          IF(
            columnS === '',
            '',
            IF(
              OR(columnS === 'C', columnS === 'NA', columnS === 'NE'),
              columnS,
              IF(AND(columnS === 'T', OR(columnR === columnE)), 'T', 'R')
            )
          ),
          IF(
            OR(
              AND(columnT === 'T', columnJ === columnE),
              AND(columnT === 'R', columnJ !== columnE)
            ),
            'T',
            IF(AND(columnT === 'T', columnJ !== columnE), 'R', columnT)
          )
        );
      }

      function calculateColumnN() {
        return MID(givenA, 157, 1);
      }

      function calculateColumnO() {
        return DATE(
          Number(MID(givenA, 586, 4)),
          Number(MID(givenA, 590, 2)),
          Number(MID(givenA, 592, 2))
        );

        // return nullifyTimezone(date);
      }

      function calculateColumnP() {
        return IF(
          MID(givenA, 542, 1) === '0',
          '-',
          DATE(
            Number(MID(givenA, 542, 4)),
            Number(MID(givenA, 546, 2)),
            Number(MID(givenA, 548, 2))
          )
        );
      }

      function calculateColumnQ() {
        return IF(
          columnH < DATE(2017, 3, 1),
          IF(
            MID(givenA, 570, 1) === '0',
            '-',
            DATE(
              Number(MID(givenA, 570, 4)),
              Number(MID(givenA, 574, 2)),
              Number(MID(givenA, 576, 2))
            )
          ),
          IF(
            OR(columnG === columnE, columnK !== '40'),
            '-',
            IF(
              OR(
                columnT === 'R',
                columnI === '1',
                AND(columnT === 'C', columnL === 'C')
              ),
              '-',
              '40 2°'
            )
          )
        );
      }

      function calculateColumnR() {
        return MID(givenA, 536, 3);
      }

      function calculateColumnS() {
        return TRIM(MID(givenA, 527, 2));
      }

      function calculateColumnT() {
        return TRIM(MID(givenA, 578, 2));
      }

      function calculateColumnU() {
        return IF(MID(givenA, 32, 4) === 'FINE', 'FINE', '-');
      }

      function calculateColumn18() {
        return IF(
          columnH < DATE(2017, 3, 1),
          IF(
            columnS === '',
            '',
            IF(
              OR(columnS === 'C', columnS === 'NA', columnS === 'NE'),
              columnS,
              IF(AND(columnS === 'T', columnR === columnE), 'T', 'R')
            )
          ),
          IF(
            OR(
              AND(columnT === 'T', columnJ === columnE),
              AND(columnT === 'R', columnJ !== columnE)
            ),
            'T',
            IF(AND(columnT === 'T', columnJ !== columnE), 'R', columnT)
          )
        );
      }

      function resultShow() {
        let list = [
          `${columnB}`,
          `${columnC}`,
          `${columnD}`,
          `${columnE}`,
          `${columnF}`,
          `${columnG}`,
          `${columnH}`,
          `${columnI}`,
          `${columnJ}`,
          `${columnK}`,
          `${columnL}`,
          `${columnM}`,
          `${columnN}`,
          `${columnO}`,
          `${columnP}`,
          `${columnQ}`,
          `${columnR}`,
          `${columnS}`,
          `${columnT}`,
          `${columnU}`,
          `${column18}`
        ];
        let headersList = [
          `Cinquina`,
          `Tripletta`,
          `Targa NS`,
          `Compagnia NS`,
          `Targa CTP`,
          `Compagnia CTP`,
          `Data SX`,
          `D o G`,
          `Compagnia Mittente Flusso`,
          `Codice Responsabilità`,
          `Dichiarazione Mittente`,
          `Esito NS`,
          `Numero Firme`,
          `Data Flusso`,
          `Data Max Risposta`,
          `Data Max Arbitrato`,
          `Impresa Responsabile`,
          `Responsabilità Definita`,
          `Nuova colonna Esito NS`,
          `Check Caricamento`,
          `Colonna 18`
        ];
        setGeneratedItems(list);
        setGeneratedHeaders(headersList);
      }

      resultShow();
    }
  }, [searchText]);

  return (
    <Card
      sx={{
        width: '100%',
        marginLeft: '0px',
        paddingTop: '10px',
        paddingLeft: '20px'
      }}
    >
      <h1>Generated Report</h1>
      {searchText !== '' &&
        generatedItems.length > 0 &&
        generatedItems.map((generatedItem, item) => (
          <>
            <p key={item}>
              <span
                style={{
                  fontWeight: 'bold',
                  marginRight: '4px',
                  fontSize: '14px'
                }}
              >
                {generatedHeaders[item]}:
              </span>{' '}
              {generatedItem}
            </p>
          </>
        ))}
    </Card>
  );
}

export default GenratedReport;
