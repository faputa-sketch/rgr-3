const InputData = {
  21: {
    1: {
      title: 'Бег 60 м',
      xi1: 10.1,
      hValue: 0.7,
      arrN: [1, 3, 7, 11, 8, 8, 7, 5],
      specX: 12.9,
      sko: 1.3,
      significanceLevel: 0.05,

      /* xPircon и t - изменяемое */
      xPirson: 11.07,
      tValue: 1.96,
    },
    2: {
      type: 'no-connection',
      title: 'Лыжные гонки 15 км',
      x1Arr: [36.74, 37.82, 38.12, 36.91, 37.28, 38.21, 37.51, 37.56],
      x2Arr: [35.61, 35.02, 35.53, 35.12, 35.12, 26.12, 36.49],

      significanceLevel: 0.01,
      criticalTStudent: 3.012,
    },
  },
  22: {
    1: {
      title: 'Бег 60 м',
      xi1: 10.0,
      hValue: 0.5,
      arrN: [4, 2, 5, 12, 10, 8, 7, 2],
      specX: 11.8,
      sko: 0.9,
      significanceLevel: 0.05,

      /* xPircon и t - изменяемое */
      xPirson: 11.07,
      tValue: 1.96,
    },
    2: {
      type: 'connection',
      title: 'Прирост результата в сумме двоеборья',
      x1Arr: [0, 5, 7.5, 7.5, 10, 10, 15, 13],
      x2Arr: [0, 0, 5, 7.5, 10, 10, 12.5, 12.5],

      significanceLevel: 0.01,
      criticalTStudent: 2.977,
    },
  },
};

export default InputData;
