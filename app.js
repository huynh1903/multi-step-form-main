const payments = {
  arcade: {
    title: "Arcade",
    price: 9,
  },
  advanced: {
    title: "Advanced",
    price: 12,
  },
  pro: {
    title: "Pro",
    price: 15,
  },
  surcharge: {
    onlineService: {
      title: "Online Service",
      price: 1,
    },
    langerStorage: {
      title: "Larger Storage",
      price: 2,
    },
    customizableProfile: {
      title: "Customizable Profile",
      price: 2,
    },
  },
};

const plane = {
  product: {},
  time: "",
  surcharge: {},
};

// kiểm tra thông tin nhập vào sau đó chuyển sang bước 2 nếu khong có lỗi
const nextStep1Btn = document.querySelector("#next-step-1");
nextStep1Btn.addEventListener("click", () => {
  //kiểm tra name và hiển thị lỗi
  if (document.querySelector("#name").value === "") {
    document.querySelector(".name-error").classList.remove("hide");
  } else {
    document.querySelector(".name-error").classList.add("hide");
  }
  //kiểm tra email và hiển thị lỗi
  if (
    document.querySelector("#email").value === "" ||
    !document.querySelector("#email").value.includes("@")
  ) {
    document.querySelector(".email-error").classList.remove("hide");
  } else {
    document.querySelector(".email-error").classList.add("hide");
  }
  //kiểm tra phone-number và hiển thị lỗi
  if (document.querySelector("#phone-number").value === "") {
    document.querySelector(".phone-error").classList.remove("hide");
  } else {
    document.querySelector(".phone-error").classList.add("hide");
  }
  //keeimr tra và chuyển sang step-2
  if (
    document.querySelector("#name").value &&
    document.querySelector("#phone-number").value &&
    document.querySelector("#email").value &&
    document.querySelector("#email").value.includes("@")
  ) {
    document.querySelector("#step-1").classList.add("hide");
    document.querySelector("#step-2").classList.remove("hide");
    document.querySelector("#show-step-1").classList.remove("active");
    document.querySelector("#show-step-2").classList.add("active");
  }
});

//lựa chọn plan sau đó chuyển sang bước 3
//hiển thị các content step-2
document.querySelectorAll(".item.step-2").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelectorAll(".item.step-2").forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.add("active");
  });
});
//hiển thị mức giá theo tháng
const displayPriceValueMonthly = () => {
  document.querySelectorAll(".yearly").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelectorAll(".monthly").forEach((element) => {
    element.classList.remove("hide");
  });

  document.querySelector(
    "#arcade-price-month"
  ).textContent = `$${payments.arcade.price}/mo`;
  document.querySelector(
    "#advanced-price-month"
  ).textContent = `$${payments.advanced.price}/mo`;
  document.querySelector(
    "#pro-price-month"
  ).textContent = `$${payments.pro.price}/mo`;

  document.querySelector(".monthly-selected").classList.remove("blur");
  document.querySelector(".yearly-selected").classList.add("blur");
  document.querySelector(".toggle-btn-circle").classList.remove("float-right");
};
const displayPriceValueYearly = () => {
  document.querySelectorAll(".monthly").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelectorAll(".yearly").forEach((element) => {
    element.classList.remove("hide");
  });

  document.querySelector("#arcade-price-year").textContent = `$${
    payments.arcade.price * 10
  }/yr`;
  document.querySelector("#advenced-price-year").textContent = `$${
    payments.advanced.price * 10
  }/yr`;
  document.querySelector("#pro-price-year").textContent = `$${
    payments.pro.price * 10
  }/yr`;

  document.querySelector(".monthly-selected").classList.add("blur");
  document.querySelector(".yearly-selected").classList.remove("blur");
  document.querySelector(".toggle-btn-circle").classList.add("float-right");
};
displayPriceValueMonthly();

document.querySelector(".toggle-btn").addEventListener("click", () => {
  if (
    document.querySelector(".item.step-2 .monthly").classList.contains("hide")
  ) {
    displayPriceValueMonthly();
    return;
  }
  displayPriceValueYearly();
});

// trở lại step-1
document.querySelector("#step-2 .prev-btn").addEventListener("click", () => {
  document.querySelector("#step-1").classList.remove("hide");
  document.querySelector("#step-2").classList.add("hide");
  document.querySelector("#show-step-1").classList.add("active");
  document.querySelector("#show-step-2").classList.remove("active");
});
// lấy data và sang step 3

document.querySelector("#step-2 .next-btn").addEventListener("click", () => {
  const productSelected = document.querySelector(
    ".item.step-2.active h4"
  ).textContent;

  switch (productSelected) {
    case payments.arcade.title:
      plane.product = payments.arcade;
      break;
    case payments.advanced.title:
      plane.product = payments.advanced;
      break;
    case payments.pro.title:
      plane.product = payments.pro;
      break;
    default:
      break;
  }



  if (document.querySelector(".monthly-selected").classList.contains("blur")) {
    plane.time = "Yearly";
  } else {
    plane.time = "Monthly";
  }

  document.querySelector("#step-2").classList.add("hide");
  document.querySelector("#step-3").classList.remove("hide");
  document.querySelector("#show-step-2").classList.remove("active");
  document.querySelector("#show-step-3").classList.add("active");
});

//hiển thị giá trong step 3
document.querySelector(
  "#online-service-price"
).textContent = `+$${payments.surcharge.onlineService.price}/mo`;
document.querySelector(
  "#larger-storage-price"
).textContent = `+$${payments.surcharge.langerStorage.price}/mo`;
document.querySelector(
  "#customizable-profile-price"
).textContent = `+$${payments.surcharge.customizableProfile.price}/mo`;

document.querySelectorAll(".item.step-3").forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});
//trở lại step 2
document.querySelector("#step-3 .prev-btn").addEventListener("click", () => {
  document.querySelector("#step-2").classList.remove("hide");
  document.querySelector("#step-3").classList.add("hide");
  document.querySelector("#show-step-2").classList.add("active");
  document.querySelector("#show-step-3").classList.remove("active");
});
//lấy data đã lựa chọn và sang step-4
document.querySelector("#step-3 .next-btn").addEventListener("click", () => {
  document.querySelectorAll(".item.step-3.active h4").forEach((element) => {
    if (element.textContent === payments.surcharge.onlineService.title) {
      plane.surcharge.onlineService = payments.surcharge.onlineService;
    }

    if (element.textContent === payments.surcharge.langerStorage.title) {
      plane.surcharge.langerStorage = payments.surcharge.langerStorage;
    }

    if (element.textContent === payments.surcharge.customizableProfile.title) {
      plane.surcharge.customizableProfile =
        payments.surcharge.customizableProfile;
    }
  });

  document.querySelector("#step-3").classList.add("hide");
  document.querySelector("#step-4").classList.remove("hide");
  document.querySelector("#show-step-3").classList.remove("active");
  document.querySelector("#show-step-4").classList.add("active");
});

//step 4
document.querySelector('#step-4 #selected-item').textContent = `${plane.product.title}(${plane.time})`


