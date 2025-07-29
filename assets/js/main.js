const arrow = document.querySelector(".sign");

function disclosefacts() {
  arrow.addEventListener("click", function () {
    document.querySelector(".Fact").classList.toggle("hidden");
  });
}

//The Search Food Js

const proteinFoods = {
  egg: {
    description:
      "Eggs are a complete source of protein, rich in essential amino acids.",
    proteinPer100g: 13,
    caloriesPer100g: 155,
  },
  "chicken breast": {
    description:
      "Chicken breast is a lean meat high in protein and low in fat.",
    proteinPer100g: 31,
    caloriesPer100g: 165,
  },
  tofu: {
    description:
      "Tofu is a soy-based protein source suitable for vegetarians and vegans.",
    proteinPer100g: 8,
    caloriesPer100g: 76,
  },
  lentils: {
    description:
      "Lentils are legumes packed with plant-based protein and fiber.",
    proteinPer100g: 9,
    caloriesPer100g: 116,
  },
  "cottage cheese": {
    description:
      "Cottage cheese is high in casein protein and great for muscle building.",
    proteinPer100g: 11,
    caloriesPer100g: 98,
  },
  "greek yogurt": {
    description:
      "Greek yogurt contains more protein than regular yogurt and supports digestion.",
    proteinPer100g: 10,
    caloriesPer100g: 59,
  },
  almonds: {
    description:
      "Almonds are protein-rich nuts, also containing healthy fats and fiber.",
    proteinPer100g: 21,
    caloriesPer100g: 579,
  },
  chickpeas: {
    description:
      "Chickpeas are high in protein, fiber, and support heart health.",
    proteinPer100g: 19,
    caloriesPer100g: 364,
  },
  "peanut butter": {
    description:
      "Peanut butter is a tasty spread rich in protein and healthy fats.",
    proteinPer100g: 25,
    caloriesPer100g: 588,
  },
  "fish (salmon)": {
    description:
      "Salmon is a protein-rich fish packed with omega-3 fatty acids.",
    proteinPer100g: 20,
    caloriesPer100g: 208,
  },
};

// document.getElementById("serched_item").innerText = "Not Searched Yet";

if (document.getElementById("food_macro")?.innerText == '') {
    document.getElementById("food_macro").classList.add("hidden");
}

function searchfood(params) {

     window.scrollTo({    top: document.body.scrollHeight, behavior: "smooth" });
   
 
  if(document.getElementById("food_macro").innerText != '') {
    document.getElementById("food_macro").classList.remove("hidden");
    document.getElementById("food_macro").classList.add("block");
}
    document.getElementById("serched_item").innerText = "The Searched Food";
    let input = document.getElementById("user-food").value.toLowerCase();
    let foodname = document.getElementById("food-title");
    let fooddescription = document.getElementById("food-description")
    let foodprotein = document.getElementById("food-protein")
    let foodcalories = document.getElementById("food-calories")

if (proteinFoods[input]) {

    document.getElementById("listtype").classList.add("list-disc")
    foodname.innerHTML =  `${input.charAt(0).toUpperCase() + input.slice(1)}`
    fooddescription.innerHTML = ` <strong>decription</strong> : ${proteinFoods[input].description}`
    foodprotein.innerHTML = `<strong>protein</strong> : ${proteinFoods[input].proteinPer100g}`
    foodcalories.innerHTML = `<strong>calories</strong> : ${proteinFoods[input].caloriesPer100g}`
} else {
    foodname.innerText = "Food not found. Please try another item.";
     document.getElementById("listtype").classList.remove("list-disc")
    fooddescription.innerHTML = ""
    foodcalories.innerHTML= ""
    foodprotein.innerHTML = ""
}


}



//Main page Headings
setTimeout(() => {
  document
    .getElementById("upper-heading")
    ?.classList.add("opacity-100", "translate-y-2");
  document
    .getElementById("sub-heading")
    ?.classList.add("opacity-100", "translate-y-2");
  document
    .getElementById("clicked")
    ?.classList.add("opacity-100", "translate-y-2");
}, 2000);

setTimeout(() => {
  document.getElementById("top-bar")?.classList.remove("translate-y-[-150%]");
  document.getElementById("top-bar")?.classList.add("translate-y-0");
}, 1000);

setTimeout(() => {
  document.getElementById("Helo-User")?.classList.toggle("opacity-0");
  document.getElementById("Helo-User")?.classList.remove("translate-y-0");
  document.getElementById("Helo-User")?.classList.toggle("opacity-100");
  document.getElementById("Helo-User")?.classList.toggle("translate-y-2");
}, 3000);

//Main page Cards

const calorybtn = document.getElementById("clicked");
const form = document.getElementById("formContainer");
const formatbtn = document.getElementById("newcalculate");

calorybtn?.addEventListener("click", () => {
  // form.classList.toggle('opacity-0');// adjust height if needed
  form.classList.toggle("max-h-[100px]");
  form.classList.toggle("my-20");
  form.classList.toggle("max-h-[500px]");
  calorybtn.classList.toggle("hidden");
  formatbtn.classList.toggle("hidden");
  formatbtn.classList.toggle("block");
  formatbtn.classList.toggle("opacity-0");
  formatbtn.classList.toggle("translate-y-2");
});

function informationblog(params) {
  document.getElementById("Helo-User").classList.toggle("hidden");
  document.getElementById("generalinfo").classList.toggle("hidden");
  setTimeout(() => {
    document.getElementById("generalinfo").classList.toggle("opacity-0");
    document.getElementById("generalinfo").classList.toggle("opacity-100%");
  }, 100);
  document.getElementById("generalinfo").classList.toggle("translate-y-0");
  document.getElementById("generalinfo").classList.toggle("block");
}

let user_exercise = document.getElementById("activitystatus");

user_exercise?.addEventListener("click", (params) => {
  let check = document.getElementsByTagName("input");

  for (let index = 0; index < 3; index++) {
    if (!check[index].value) {
      document.getElementById("inputmessage").classList.remove("hidden" , "opacity-0");
      document.getElementById("inputmessage").classList.add("block" , "opacity-100");
      document.getElementById("activitystatus").setAttribute("disabled", "true");
    } else {
      document.getElementById("generalinfo").classList.toggle("block", "translate-y-1");
      document.getElementById("generalinfo").classList.toggle("hidden", "opacity-0");

      // document.getElementById("generalinfo").classList.toggle("hidden" , "translate-y-0","opacity-0")

      document.getElementById("activity").classList.toggle("hidden");
      document.getElementById("activity").classList.toggle("opacity-0");
      document.getElementById("activity").classList.toggle("block");
      document.getElementById("activity").classList.toggle("opacity-100%");
    }
  }
});

let resultspace = document.getElementById("Result");
resultspace?.addEventListener("click", (params) => {
  document
    .getElementById("resultcards")
    .classList.remove("opacity-0", "hidden");
  document.getElementById("resultcards").classList.add("block");
  document.getElementById("resultcards").classList.remove("max-h-0");
  document.getElementById("resultcards").classList.toggle("max-h-[500px]");
});

//recalculate btn

function formatblog(params) {
   let check = document.getElementsByTagName("input");

  for (let index = 0; index < 3; index++) {
  check[index].value = "";
    for (let index = 3; index <= 8 ; index++) {
      check[index].checked = false
    }
  }

  document.getElementById("generalinfo").classList.toggle("hidden");
  document.getElementById("generalinfo").classList.toggle("block");
  document.getElementById("activity").classList.toggle("hidden");
  document.getElementById("activity").classList.toggle("opacity-0");
  document.getElementById("activity").classList.toggle("block");
  document.getElementById("resultcards").classList.toggle("block");
  document.getElementById("resultcards").classList.toggle("opacity-0");
  document.getElementById("resultcards").classList.toggle("max-h-[500px]");
  document.getElementById("resultcards").classList.add("max-h-0");
}

//Plans Page

const params = new URLSearchParams(window.location.search);
const passkey = params.get("passkey");

if (passkey == "true") {
  document.getElementById("plansec").classList.toggle("underline")
  document.getElementById("plansec").classList.toggle("text-[#635252]")
  document.getElementById("plansec").classList.toggle("text-shadow-xs")
    document.getElementById("plansec").classList.toggle("text-shadow-white")
  document.getElementById("plansec").classList.toggle("underline-offset-8")
  document.getElementById("headerplansec").classList.toggle("underline")
  document.getElementById("headerplansec").classList.toggle("text-[#635252]")
  document.getElementById("headerplansec").classList.toggle("text-shadow-xs")
    document.getElementById("headerplansec").classList.toggle("text-shadow-white")
  document.getElementById("headerplansec").classList.toggle("underline-offset-8")
  document.getElementById("first-card")?.classList.remove("opacity-0");
  document.getElementById("second-card")?.classList.remove("opacity-0");
  document.getElementById("third-card")?.classList.remove("opacity-0");
  document.getElementById("Plan-heading")?.classList.remove("opacity-0");
}


// The scroll Button

const btn = document.getElementById("scrollButton");

window.addEventListener("scroll" , ()  => {
  if (window.scrollY > 20) {
        document.getElementById("footerdata")?.classList.remove("opacity-0");
    document.getElementById("footerdata")?.classList.add("opacity-100");
  } else if (window.screenY < 50) {
           document.getElementById("footerdata")?.classList.remove("opacity-100");
    document.getElementById("footerdata")?.classList.add("opacity-0");
  } 
}
)

window.addEventListener("scroll", () => {
  if (window.scrollY > 320) {
    btn?.classList.remove("hidden", "opacity-0", "translate-y-2");
    btn?.classList.add("opacity-100", "translate-y-0");

  } else {

    btn?.classList.add("opacity-0", "translate-y-2");
    btn?.classList.remove("opacity-100", "translate-y-0");
    setTimeout(() => {
      if (window.scrollY <= 100) btn?.classList.add("hidden");
    }, 300);
  }
});

btn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Search Food Js

const flag = new URLSearchParams(window.location.search);
const heighlight = flag.get("highlight");

if (heighlight == "true") {
    document.getElementById("foodsection").classList.toggle("underline")
    document.getElementById("foodsection").classList.toggle("text-[#635252]")
    document.getElementById("foodsection").classList.toggle("text-shadow-xs")
    document.getElementById("foodsection").classList.toggle("text-shadow-white")
  document.getElementById("foodsection").classList.toggle("underline-offset-8")
    document.getElementById("headsearchfood").classList.toggle("underline")
    document.getElementById("headsearchfood").classList.toggle("text-[#635252]")
    document.getElementById("headsearchfood").classList.toggle("text-shadow-xs")
    document.getElementById("headsearchfood").classList.toggle("text-shadow-white")
  document.getElementById("headsearchfood").classList.toggle("underline-offset-8")
  document.getElementById("search_bar")?.classList.remove("opacity-0");
  document.getElementById("search_bar")?.classList.add("translate-y-4");
  document.getElementById("food-section-heading").classList.remove("opacity-0");
  document
    .getElementById("food-section-heading")
    .classList.add("translate-y-1");
  document.getElementById("protein-heading").classList.remove("opacity-0");
  document.getElementById("protein-heading").classList.add("translate-y-1");
  document.getElementById("proteinfood").classList.remove("opacity-0");
  document.getElementById("proteinfood").classList.add("translate-y-1");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      document.getElementById("carbs-heading").classList.remove("opacity-0");
      document.getElementById("carbs-heading").classList.add("translate-y-1");
      document.getElementById("carbsfood").classList.remove("opacity-0");
      document.getElementById("carbsfood").classList.add("translate-y-1");
    } else {
      document.getElementById("carbs-heading").classList.toggle("opacity-0");
      document
        .getElementById("carbs-heading")
        .classList.toggle("translate-y-1");
      document
        .getElementById("carbsfood")
        .classList.toggle("opacity-0", "translate-y-1");
      document
        .getElementById("fat-heading")
        .classList.toggle("opacity-0", "translate-y-1");
      document
        .getElementById("fatyfood")
        .classList.toggle("opacity-0", "translate-y-1");
    }

    if (window.scrollY > 800) {
      document.getElementById("fat-heading").classList.remove("opacity-0");
      document.getElementById("fat-heading").classList.add("translate-y-2");
      document.getElementById("fatyfood").classList.remove("opacity-0");
      document.getElementById("fatyfood").classList.add("translate-y-2");
    } else {
      document
        .getElementById("fat-heading")
        .classList.toggle("opacity-0", "translate-y-2");
      document
        .getElementById("fatyfood")
        .classList.toggle("opacity-0", "translate-y-2");
    }
    if (window.pageYOffset > 1000) {
      document.getElementById("calories-note").classList.remove("opacity-0");
    } else {
      document.getElementById("calories-note").classList.add("opacity-0");
    }
  });
}

//User maintenance calories calculation
let selectedgender;
let selectedactivity;
let result;

function fetchdata(params) {
  const userage = document.getElementsByClassName("userinputage")[0].value;
  const userheight =
    document.getElementsByClassName("userinputheight")[0].value;
  const userweight =
    document.getElementsByClassName("userinputweight")[0].value;
  const usergenderradio = document.getElementsByName("gender");
  const useractivityradio = document.getElementsByName("activity");

  for (let radio of usergenderradio) {
    if (radio.checked) {
      selectedgender = radio.value;

      break;
    }
  }

  if (selectedgender) {
    // console.log(selectedgender);
  } else {
    alert("Select gender first ");
  }

  for (let radio of useractivityradio) {
    if (radio.checked) {
      selectedactivity = radio.value;
    }
  }

  if (selectedactivity) {
    // console.log(selectedactivity);
  } else {
    alert("Select activity");
  }

  if (!selectedgender || !selectedactivity) {
    window.location.href = "index.html";
  }

  //Men calories Calculation

  if (selectedgender === "male") {
    let BMR = 10 * userweight + 6.25 * userheight - 5 * userage + 5;

    if (selectedactivity.startsWith("Inactive")) {
      result = BMR * 1.2;
    } else if (selectedactivity.startsWith("Somewhat")) {
      result = BMR * 1.375;
    } else if (selectedactivity.startsWith("Active")) {
      result = BMR * 1.55;
    } else {
      result = BMR * 1.9;
    }

    console.log(result);

    //Female calories Calculation
  } else {
    let BMR = 10 * userweight + 6.25 * userheight - 5 * userage - 161;

    if (selectedactivity.startsWith("Inactive")) {
      result = BMR * 1.2;
    } else if (selectedactivity.startsWith("Somewhat")) {
      result = BMR * 1.375;
    } else if (selectedactivity.startsWith("Active")) {
      result = BMR * 1.55;
    } else {
      result = BMR * 1.9;
    }
    console.log(result);
  }

  //Displaying the calories

  let maintenance_calories = parseInt(result);
  let firstcard = document.getElementById("firstcardtitle");
  firstcard.innerHTML = ` <u> ${maintenance_calories - 300} </u> `;
  let secondcard = document.getElementById("secondcardtitle");
  secondcard.innerHTML = ` <u> ${maintenance_calories} </u> `;
  let thirdcard = document.getElementById("thirdcardtitle");
  thirdcard.innerHTML = `<u> ${maintenance_calories + 300} </u>`;
}

// Menu Btn Js

const menu = document.getElementById("menubtn")
const option = document.getElementById("menuchange")
const crossbtn = document.getElementById("disablemenu")

menu?.addEventListener("click" , () => {
  document.getElementById("main-container")?.classList.add("blur-sm" , "transition-all" , "duration-1000")
  document.getElementById("disablemenu").classList.toggle("opacity-0")
  if (passkey == "true") {
    
    document.getElementById("plain-container")?.classList.add("blur-sm" , "transition-all" , "duration-1000")
  }
  if (heighlight == "true") {
    
    document.getElementById("searchfood-container")?.classList.add("blur-sm" , "transition-all" , "duration-1000")
  }
  document.getElementById("dragmenu")?.classList.toggle("left-[-100%]")
  document.getElementById("dragmenu")?.classList.toggle("left-0")

  
})

crossbtn?.addEventListener("click" , () => {
  
  
    document.getElementById("main-container")?.classList.remove("blur-sm" , "transition-all" , "duration-1000")
    if (passkey == "true") {
      
      document.getElementById("plain-container")?.classList.remove("blur-sm" , "transition-all" , "duration-1000")
    }
    if (heighlight == "true") {
      
      document.getElementById("searchfood-container")?.classList.remove("blur-sm" , "transition-all" , "duration-1000")
    }
  document.getElementById("dragmenu")?.classList.toggle("left-[-100%]")
  document.getElementById("dragmenu")?.classList.toggle("left-0")
  document.getElementById("disablemenu").classList.toggle("opacity-0")

}
)

