const value = "8451973335";

const isValid = (value) => (phoneNo = /^[6-9]\d{9}$/.test(value));

const isvalidMobileNumber = (value) => (phoneNo = /^[6-9]\d{9}$/.test(value));

if (isvalidMobileNumber(value)) {
  console.log("Valid Indian mobile phone number");
} else {
  console.log("Not a valid Indian mobile phone number");
}
