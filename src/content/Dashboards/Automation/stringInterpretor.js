const excel = require('./excel');
const { CONCATENATE, TRIM, MID, IF, DATE, OR, AND, DAYS } = excel;
const EXCEL_START_DATE = new Date(Date.UTC(1900, 0, 1));

// console.log(CONCATENATE(1,2,3,4))

// export const givenA = `0000009920171003181624000000284    SENRECRE0102   CIDRRE07.010000000102T*VK976PH                 0000000496T*KV956SP                 20170109D  0000000000  20105NN912646*ITAS*                                                                                                       R                                                                                                                         00000000220000000416   G 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000DT 000000041640D000000000000000000000000000000000000R 0     201710030003254`;

// const columnE = calculateColumnE();
// const columnI = calculateColumnI();
// const columnJ = calculateColumnJ();
// const columnK = calculateColumnK();
// const columnN = calculateColumnN();
// const columnR = calculateColumnR();
// const columnS = calculateColumnS();
// const columnT = calculateColumnT();
// const columnU = calculateColumnU();
// const columnH = calculateColumnH();
// const columnL = calculateColumnL();
// const columnO = calculateColumnO();
// const columnD = calculateColumnD();
// const columnF = calculateColumnF();
// const columnG = calculateColumnG();
// const columnB = calculateColumnB();
// const columnC = calculateColumnC();
// const columnM = calculateColumnM();
// const columnP = calculateColumnP();
// const columnQ = calculateColumnQ();

export function calculateColumnB() {
  // get the days count in serial number format. Read here: https://www.wallstreetmojo.com/day-excel-function/
  const serialNumberColumnH = DAYS(columnH, EXCEL_START_DATE) + 1;

  return CONCATENATE(columnD, columnE, columnF, columnG, serialNumberColumnH);
}

export function calculateColumnC() {
  const serialNumberColumnH = DAYS(columnH, EXCEL_START_DATE) + 1;

  return CONCATENATE(columnD, columnF, serialNumberColumnH);
}

export function calculateColumnD(givenA) {
  console.log('Given a ' + givenA);
  return TRIM(
    IF(columnJ === columnE, MID(givenA, 73, 25), MID(givenA, 109, 25))
  );
}

export function calculateColumnE(givenA) {
  console.log('Given a ' + givenA);
  return MID(givenA, 45, 3);
}

export function calculateColumnF(givenA) {
  return TRIM(
    IF(columnJ === columnE, MID(givenA, 109, 25), MID(givenA, 73, 25))
  );
}

export function calculateColumnG(givenA) {
  return IF(columnE === columnJ, MID(givenA, 105, 3), columnJ);
}

export function calculateColumnH(givenA) {
  return DATE(MID(givenA, 134, 4), MID(givenA, 138, 2), MID(givenA, 140, 2));
}

export function calculateColumnI(givenA) {
  return MID(givenA, 424, 1);
}

export function calculateColumnJ(givenA) {
  return MID(givenA, 69, 3);
}

export function calculateColumnK(givenA) {
  return MID(givenA, 539, 2);
}

export function calculateColumnL(givenA) {
  return IF(TRIM(MID(givenA, 279, 2)) === 'R', 'T', TRIM(MID(givenA, 279, 2)));
}

export function calculateColumnM() {
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

export function calculateColumnN(givenA) {
  return MID(givenA, 157, 1);
}

export function calculateColumnO(givenA) {
  return DATE(MID(givenA, 586, 4), MID(givenA, 590, 2), MID(givenA, 592, 2));

  // return nullifyTimezone(date);
}

export function calculateColumnP(givenA) {
  return IF(
    MID(givenA, 542, 1) === '0',
    '-',
    DATE(MID(givenA, 542, 4), MID(givenA, 546, 2), MID(givenA, 548, 2))
  );
}

export function calculateColumnQ(givenA) {
  return IF(
    columnH < DATE(2017, 3, 1),
    IF(
      MID(givenA, 570, 1) === '0',
      '-',
      DATE(MID(givenA, 570, 4), MID(givenA, 574, 2), MID(givenA, 576, 2))
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

export function calculateColumnR(givenA) {
  return MID(givenA, 536, 3);
}

export function calculateColumnS(givenA) {
  return TRIM(MID(givenA, 527, 2));
}

export function calculateColumnT(givenA) {
  return TRIM(MID(givenA, 578, 2));
}

export function calculateColumnU(givenA) {
  return IF(MID(givenA, 32, 4) === 'FINE', 'FINE', '-');
}

// function resultTest() {
//   console.log('columnB', columnB === '*LK797YZ102*KL762VM10243014');
//   console.log('columnC', columnC === '*LK797YZ*KL762VM43014');
//   console.log('columnD', columnD === '*LK797YZ');
//   console.log('columnE', columnE === '102');
//   console.log('columnF', columnF === '*KL762VM');
//   console.log('columnG', columnG === '102');
//   console.log(
//     'columnH',
//     columnH.getTime() === new Date('2017-10-06T00:00:00.000Z').getTime()
//   );
//   console.log('columnI', columnI === 'D');
//   console.log('columnJ', columnJ === '102');
//   console.log('columnK', columnK === '40');
//   console.log('columnL', columnL === 'T');
//   console.log('columnM', columnM === 'R');
//   console.log('columnN', columnN === '2');
//   console.log(
//     'columnO',
//     columnO.getTime() === new Date('2017-10-09T00:00:00.000Z').getTime()
//   );
//   console.log('columnP', columnP === '-');
//   console.log('columnQ', columnQ === '-');
//   // console.log("columnR", columnR === "");
//   // console.log("columnS", columnS === "");
//   console.log('columnT', columnT === 'R');
//   console.log('columnU', columnU === '-');
// }

// export function resultShow() {
//   console.log('Cinquina', columnB);
//   console.log('Tripletta', columnC);
//   console.log('Targa NS', columnD);
//   console.log('Compagnia NS', columnE);
//   console.log('Targa CTP', columnF);
//   console.log('Compagnia CTP', columnG);
//   console.log('Data SX', columnH);
//   console.log('D o G', columnI);
//   console.log('Compagnia Mittente Flusso', columnJ);
//   console.log('Codice Responsabilità', columnK);
//   console.log('Dichiarazione Mittente', columnL);
//   console.log('Esito NS', columnM);
//   console.log('Numero Firme', columnN);
//   console.log('Data Flusso', columnO);
//   console.log('Data Max Risposta', columnP);
//   console.log('Data Max Arbitrato', columnQ);
//   console.log('Impresa Responsabile', columnR);
//   console.log('Responsabilità Definita', columnS);
//   console.log('Nuova colonna Esito NS', columnT);
//   console.log('Check Caricamento', columnU);
// }

// Remove timezone conversion and return the original date object
// function nullifyTimezone(date) {
//   const userTimezoneOffset = date.getTimezoneOffset() * 60000;
//   return (new Date(date.getTime() - userTimezoneOffset));
// }

// resultTest();
// resultShow();
