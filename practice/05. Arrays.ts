// Arrays

const departaments: string[] = ["dev", "123", "marketing"];

const departament = departaments[1];

departaments.push("qwe");

const reports = departaments
  .filter((d) => d !== "dev")
  .map((d) => `${d} - done`);

const departamentNumber: number[][] = [[123], [123]];

const [first] = reports;

console.log(first);

// _____________________________
// * Practice

const electricityUserData = {
  readings: 95,
  units: "kWt",
  mode: "double",
};

const waterUserData = {
  readings: 3,
  units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0];

function calculatePayments(
  elData: {
    readings: number;
    units: string;
    mode: string;
  },
  wData: {
    readings: number;
    units: string;
  },
  elRate: number,
  wRate: number
): void {
  if (elData.mode === "double" && elData.readings < 50) {
    monthPayments[0] = elData.readings * elRate * 0.7;
  } else {
    monthPayments[0] = elData.readings * elRate;
  }

  monthPayments[1] = wData.readings * wRate;
}

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

function sendInvoice(
  monthPayments: number[],
  electricityUserData: {
    readings: number;
    units: string;
  },
  waterUserData: {
    readings: number;
    units: string;
  }
): string {
  const text = `
        Hello!
        this month you used ${electricityUserData.readings} ${electricityUserData.units} of electicity
        it will const: ${monthPayments[0]}$

        ok ? ${waterUserData.readings} ${waterUserData.units} of water
    `;

  return text;
}

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
