const showInputError = (formElement, inputElement, errorMessage) => {
    const errorMessageID = inputElement.id + "-error";
    const errorMessageElement = document.querySelector("#" + errorMessageID);
    errorMessageElement.textContent = errorMessage;
  };

const checkInputValidity = (formElement, inputElement) => {
    console.log(inputElement.validationMessage);
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);}
    } 
   // else {
   //   hideInputError(formElement, inputElement);
   // };

//const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

//const toggleButtonState = (inputList, buttonElement) => {
//    if (hasInvalidInput(inputList)) {
//      buttonElement.classList.add("button_inactive");
//    } else {
//        buttonElement.classList.remove("button_inactive");
//    }
//};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
    const buttonElement = formElement.querySelector(".modal__submit-btn");

    //toggleButtonState(inputList, buttonElement);
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formElement, inputElement);
            //toggleButtonState(inputList, buttonElement);
        });
    });
}

const enableValidation = () => {
    const formList = document.querySelectorAll(".modal__form");
    formList.forEach((formElement) => {
        setEventListeners(formElement);
})
};
enableValidation();