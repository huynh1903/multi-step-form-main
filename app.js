const price = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

const addOn = {
  onlineService: 1,
  langerStorage: 2,
  customizableProfile: 2,
};

//show content
const showStep1Btn = document.getElementById("show-step-1");

const showStep2Btn = document.getElementById("show-step-2");

const showStep3Btn = document.getElementById("show-step-3");

const showStep4Btn = document.getElementById("show-step-4");

const contents = document.querySelectorAll(".content");
const contentBtns = document.querySelectorAll(".sidebar-item");

const hideAllContents = () => {
  contents.forEach((content) => content.classList.add("hide"));
  contentBtns.forEach((btn) => btn.classList.remove("active"));
};

showStep1Btn.addEventListener("click", () => {
  hideAllContents();
  document.querySelector("#step-1").classList.remove("hide");
  showStep1Btn.classList.add("active");
});

showStep2Btn.addEventListener("click", () => {
  hideAllContents();
  document.querySelector("#step-2").classList.remove("hide");
  showStep2Btn.classList.add("active");
});

showStep3Btn.addEventListener("click", () => {
  hideAllContents();
  document.querySelector("#step-3").classList.remove("hide");
  showStep3Btn.classList.add("active");
});

showStep4Btn.addEventListener("click", () => {
  hideAllContents();
  document.querySelector("#step-4").classList.remove("hide");
  showStep4Btn.classList.add("active");
});

// step 1
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phone-number");

const checkInput = () => {
  if (!nameInput.value) {
    document.querySelector(".name-error").classList.remove("hide");
  } else {
    document.querySelector(".name-error").classList.add("hide");
  }

  if (!emailInput.value || !emailInput.value.includes("@")) {
    document.querySelector(".email-error").classList.remove("hide");
  } else {
    document.querySelector(".email-error").classList.add("hide");
  }

  if (!phoneNumberInput.value) {
    document.querySelector(".phone-error").classList.remove("hide");
  } else {
    document.querySelector(".phone-error").classList.add("hide");
  }

  if (
    nameInput.value &&
    emailInput.value &&
    emailInput.value.includes("@") &&
    phoneNumberInput.value
  ) {
    hideAllContents();
    document.querySelector("#step-2").classList.remove("hide");
    showStep2Btn.classList.add("active");
  }
};

const checkInputBtn = document.querySelector("#next-step-1");
checkInputBtn.addEventListener("click", checkInput);

//step 2
const items = document.querySelectorAll(".item.step-2");

// set giá trị cho step-2 theo tháng
const setMonthlyPriceValue = () => {
  document.querySelector(
    "#arcade-price-month"
  ).innerText = `$${price.arcade}/mo`;
  document.querySelector(
    "#advanced-price-month"
  ).innerText = `$${price.advanced}/mo`;
  document.querySelector("#pro-price-month").innerText = `$${price.pro}/mo`;
};
// set giá trị cho step-2 theo năm
const setYearlyPriceValue = () => {
  document.querySelector("#arcade-price-year").innerText = `$${
    price.arcade * 10
  }/yr`;
  document.querySelector("#advenced-price-year").innerText = `$${
    price.advanced * 10
  }/yr`;
  document.querySelector("#pro-price-year").innerText = `$${price.pro * 10}/yr`;
};

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

const step3ToggleBtn = document.querySelector(".toggle-btn");
step3ToggleBtn.addEventListener("click", () => {
  document.querySelector(".toggle-btn-circle").classList.toggle("float-right");
});

const toggleContent = () => {
  document.querySelectorAll(".yearly").forEach((element) => {
    element.classList.toggle("hide");
    document.querySelector(".yearly-selected").classList.toggle("blur");
    setMonthlyPriceValue();
  });
  document.querySelectorAll(".monthly").forEach((element) => {
    element.classList.toggle("hide");
    document.querySelector(".monthly-selected").classList.toggle("blur");
    setYearlyPriceValue();
  });
};

setMonthlyPriceValue();
const toggleContentStep2 = document.querySelector(".toggle-btn");
toggleContentStep2.addEventListener("click", toggleContent);

document.querySelector(
  "#online-service-price"
).innerHTML = `$${addOn.onlineService}/mo`;
document.querySelector(
  "#larger-storage-price"
).innerHTML = `$${addOn.langerStorage}/mo`;
document.querySelector(
  "#customizable-profile-price"
).innerHTML = `$${addOn.customizableProfile}/mo`;

document.querySelectorAll(".item.step-3").forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

let text = "";

if (document.querySelector(".monthly-selected").classList.contains("blur")) {
  text = Yearly;
} else {
  text = Monthly;
}

document.querySelector("#selected-item").innerHTML = `${
  document.querySelector(".item.step-2.active>h4").textContent
} (${text})`;
