// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------

let fields = document.querySelector("#fields");
for (let i = 0; i < formData.length; i++) {
  let input = document.createElement("input");

  if (formData[i].label != "Select Language") {
    if (formData[i].type != "textarea") {

      input.setAttribute("placeholder", formData[i].label);
      input.setAttribute("type", formData[i].type);
      input.setAttribute("id", formData[i].id);
      input.setAttribute("fa-", formData[i].icon);

      fields.appendChild(input);
    }
  }

  if (formData[i].options.length > 0) {
    let dropDown = document.createElement("select");

    let option1 = `${formData[i].label}`
    let dropDown3 = document.createElement("option");
    dropDown3.setAttribute("selected", "true");
    dropDown3.setAttribute("disabled", "disabled");
    dropDown3.innerHTML = `${option1}`;

    dropDown.appendChild(dropDown3);

    for (let x = 0; x < formData[i].options.length; x++) {
      let dropDown2 = document.createElement("option");

      dropDown2.setAttribute("value", formData[i].options[x].value);
      dropDown2.innerHTML = formData[i].options[x].label;
      dropDown.appendChild(dropDown2);
      fields.appendChild(dropDown);
    }

  }

  if (formData[i].type === "textarea") {
    let textBox = document.createElement("textarea");
    // textBox.setAttribute("rows", 50);
    // textBox.setAttribute("cols", 25);
    textBox.setAttribute("placeholder", `${formData[i].label}`);
    fields.appendChild(textBox);

  }
}
console.log(fields);
