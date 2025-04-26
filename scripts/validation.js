const showInputError = (formElement, inputElement, errorMessage) => {
    const errorMessageID = inputElement.id + "-error";
    const errorMessageElement = formElement.querySelector("#" + errorMessageID);
    errorMessageElement.textContent = errorMessage;
    inputElement.classList.add("modal__input_type_error");
  };

  const hideInputError = (formElement, inputElement) => {
    const errorMessageID = inputElement.id + "-error";
    const errorMessageElement = formElement.querySelector("#" + errorMessageID);
    errorMessageElement.textContent = "";
    inputElement.classList.remove("modal__input_type_error");
  }; 

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement)}
};

const hasInvalidInput = (inputList) => {
   return inputList.some((input) => {
     return !input.validity.valid;
   });
 };

const toggleButtonState = (inputList, buttonEl) => {
    if (hasInvalidInput(inputList)) {
        disableButton(buttonEl);
    } else {
        buttonEl.disabled = false;
        buttonEl.classList.remove("modal__submit-btn_inactive");
    }
};

const disableButton = (buttonEl) => {
    buttonEl.disabled = true;
    buttonEl.classList.add("modal__submit-btn_inactive");
}

const resetValidation = (formElement, inputList) => {
    inputList.forEach((input) => {
        hideInputError(formElement, input);
    });
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
    const buttonElement = formElement.querySelector(".modal__submit-btn");

    toggleButtonState(inputList, buttonElement);
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
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