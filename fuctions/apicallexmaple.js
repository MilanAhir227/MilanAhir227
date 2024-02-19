const axios = require("axios");
const moment = require("moment");

// const url = "http://localhost:3001/"
const url = " https://76e0-1-38-164-177.ngrok-free.app/"
const day = Array.from({ length: 30 }, (_, i) => i + 1);
const month = Array.from({ length: 12 }, (_, i) => i + 1);
const year = [2022,2023,2024,2025,2026,2027];

function getRandomElement(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

const type = ["Income","Expense"]
const bank = ['hdfc','bob','sbi','varachha','pbi']
async function apiCaller(end) {
  let start = new Date().getTime();
  try {
    for (let i = 0; i < end; i++) {
      let randomDay = getRandomElement(day);
      let randomMonth = getRandomElement(month);
      let randomYear = getRandomElement(year);

      let date = moment(
        `${randomYear}-${randomMonth}-${randomDay}`,
        "YYYY-MM-DD"
      ).format("DD/MM/YYYY");
      let randomType = getRandomElement(type)
      let randomeBank = getRandomElement(bank)
      await axios.post(
        `${url}api/transaction/create`,
        {
          date: moment(date, "DD/MM/YYYY").toISOString(),
          type: randomType,
          amount: 1000,
          description: "zzz",
          paidBy: 5,
          bank: randomeBank,
          paymentStatus: "paid",
          transactionLabel: 4,
          color: `#F${i}f${i}`,
        },
        {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtaWxhbiIsImlhdCI6MTcwNjAxNDU2Nn0.igr-tBvH0fwkn-LB2Na58gsAyAH-U0q-Ui-Twqiz09A",
          },
        }
      );
      console.log(i);
    }
    console.log(`${new Date().getTime() - start} ms`);
  } catch (error) {
    console.error(error.message);
  }
}

apiCaller(1000);
