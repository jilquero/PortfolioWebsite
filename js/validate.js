// function floatingLabel(onload) {
//   let input;
//   input = $(this);
//   if (onload) {
//     $.each($(".form__field input"), function (index, value) {
//       let current_input;
//       current_input = $(value);
//       if (current_input.val()) {
//         current_input.closest(".form__field").addClass("input__label--active");
//       }
//     });
//   }

//   setTimeout(function () {
//     if (input.val()) {
//       input.closest(".form__field").addClass("input__label--active");
//     } else {
//       input.closest(".form__field").removeClass("input__label--active");
//     }
//   }, 1);
// }

// function formToJson(form) {
//   let config = {};

//   jQuery(form)
//     .serializeArray()
//     .map(function (item) {
//       if (config[item.name]) {
//         if (typeof config[item.name] === "string") {
//           config[item.name] = [config[item.name]];
//         }
//         config[item.name].push(item.value);
//       } else {
//         config[item.name] = item.value;
//       }
//     });

//   return JSON.stringify(config);
// }

// function checkRequired(e) {
//   let valid = true;

//   $("#contact-me__form input[type='text'], #contact-me__form textarea").each(
//     function () {
//       if ($(this).val() === "" || $(this).val() === null) {
//         $(this).closest(".form__field").addClass("input__error--active");
//         valid = false;
//       } else {
//         $(this).closest(".form__field").removeClass("input__error--active");
//       }
//     }
//   );

//   return valid;
// }

// function checkEmail(e) {
//   let valid = true;
//   let email = $("#input__email").val();
//   let validRegex =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//   if (validRegex.test(email)) {
//     $("#input__email")
//       .closest(".form__field")
//       .removeClass("input__error--active");
//   } else {
//     $("#input__email").closest(".form__field").addClass("input__error--active");
//     valid = false;
//   }

//   return valid;
// }

// function checkNumber(e) {
//   let valid = true;
//   let number = $("#input__phoneNumber").val();
//   let validRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

//   if (validRegex.test(number)) {
//     $("#input__phoneNumber")
//       .closest(".form__field")
//       .removeClass("input__error--active");
//   } else {
//     $("#input__phoneNumber")
//       .closest(".form__field")
//       .addClass("input__error--active");
//     valid = false;
//   }

//   return valid;
// }

// function validateForm() {
//   let validFields = checkRequired();
//   let validEmail = checkEmail();
//   let validNumber = checkNumber();

//   let valid = validFields && validEmail && validNumber;

//   return valid;
// }

// $(".form__field input, .form__field textarea").keydown(floatingLabel);
// $(".form__field input, .form__field textarea").change(floatingLabel);

// $("#contact-me__form").submit(function (e) {
//   if (!validateForm()) {
//     e.preventDefault();
//   } else {
//     sessionStorage.setItem("formData", formToJson(this));
//   }
// });

// $("#contact-me__form").on("reset", function (e) {
//   sessionStorage.removeItem("formData");
// });

// $("#form__save").click(function (e) {
//   if (validateForm("#contact-me__form")) {
//     sessionStorage.setItem("formData", formToJson("#contact-me__form"));
//   }
// });

// $("#form__load").click(function (e) {
//   if (sessionStorage.getItem("formData") === null) {
//     alert("No saved message found");
//     return;
//   }
//   let formData = JSON.parse(sessionStorage.getItem("formData"));
//   console.log(formData.phoneNumber);
//   $.each(formData, function (key, value) {
//     if (key === "message") {
//       $("#contact-me__form textarea[name='" + key + "']").val(value);
//     } else {
//       $("#contact-me__form input[name='" + key + "']").val(value);
//     }
//   });
// });

let messages = [];

function floatingLabel(onload) {
  let input;
  input = $(this);
  if (onload) {
    $.each($(".form__field input"), function (index, value) {
      let current_input;
      current_input = $(value);
      if (current_input.val()) {
        current_input.closest(".form__field").addClass("input__label--active");
      }
    });
  }

  setTimeout(function () {
    if (input.val()) {
      input.closest(".form__field").addClass("input__label--active");
    } else {
      input.closest(".form__field").removeClass("input__label--active");
    }
  }, 1);
}

function formToJson(form) {
  let config = {};

  jQuery(form)
    .serializeArray()
    .map(function (item) {
      if (config[item.name]) {
        if (typeof config[item.name] === "string") {
          config[item.name] = [config[item.name]];
        }
        config[item.name].push(item.value);
      } else {
        config[item.name] = item.value;
      }
    });

  return JSON.stringify(config);
}

function checkRequired(e) {
  let valid = true;

  $("#contact-me__form input[type='text'], #contact-me__form textarea").each(
    function () {
      if ($(this).val() === "" || $(this).val() === null) {
        $(this).closest(".form__field").addClass("input__error--active");
        valid = false;
      } else {
        $(this).closest(".form__field").removeClass("input__error--active");
      }
    }
  );

  return valid;
}

function checkEmail(e) {
  let valid = true;
  let email = $("#input__email").val();
  let validRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (validRegex.test(email)) {
    $("#input__email")
      .closest(".form__field")
      .removeClass("input__error--active");
  } else {
    $("#input__email").closest(".form__field").addClass("input__error--active");
    valid = false;
  }

  return valid;
}

function checkNumber(e) {
  let valid = true;
  let number = $("#input__phoneNumber").val();
  let validRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

  if (validRegex.test(number)) {
    $("#input__phoneNumber")
      .closest(".form__field")
      .removeClass("input__error--active");
  } else {
    $("#input__phoneNumber")
      .closest(".form__field")
      .addClass("input__error--active");
    valid = false;
  }

  return valid;
}

function validateForm() {
  let validFields = checkRequired();
  let validEmail = checkEmail();
  let validNumber = checkNumber();

  let valid = validFields && validEmail && validNumber;

  return valid;
}

$(".form__field input, .form__field textarea").keydown(floatingLabel);
$(".form__field input, .form__field textarea").change(floatingLabel);

$("#contact-me__form").submit(function (e) {
  if (!validateForm()) {
    e.preventDefault();
  } else {
    localStorage.setItem("formData", formToJson(this));
  }
});

$("#form__clear").click(function (e) {
  let oof = Number($("#form__load-mes").val());
  messages.splice(oof, 1);
  localStorage.setItem("formData", JSON.stringify(messages));
  $(`#form__load-mes option[value=${messages.length}]`).remove();
});

$("#form__save").click(function (e) {
  if (!validateForm("#contact-me__form")) return;

  if (Number($("#form__load-mes").val()) !== -1) {
    messages[Number($("#form__load-mes").val())] =
      formToJson("#contact-me__form");
    localStorage.setItem("formData", JSON.stringify(messages));
    return;
  }

  messages.push(formToJson("#contact-me__form"));
  localStorage.setItem("formData", JSON.stringify(messages));

  $("#form__load-mes").append(
    $("<option></option>")
      .attr("value", messages.length - 1)
      .text("Message " + messages.length)
  );

  $("#form__load-mes").val(messages.length - 1);
  console.log($("#form__load-mes").val());
});

$("#form__load-mes").change(function (e) {
  if (Number($(this).val()) === -1) {
    $("#contact-me__form").trigger("reset");
    return;
  }
  let index = $(this).val();
  let formData = JSON.parse(localStorage.getItem("formData"));
  $.each(JSON.parse(formData[index]), function (key, value) {
    if (key === "message") {
      $("#contact-me__form textarea[name='" + key + "']").val(value);
    } else {
      $("#contact-me__form input[name='" + key + "']").val(value);
    }
  });
});

if (localStorage.getItem("formData") !== null) {
  messages = JSON.parse(localStorage.getItem("formData"));
  let test = JSON.parse(messages[0]);
  for (let i = 0; i < messages.length; i++) {
    $("#form__load-mes").append(
      $("<option></option>")
        .attr("value", i)
        .text("Message " + (i + 1))
    );
  }
}
