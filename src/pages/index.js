import "./index.css";

import {
  enableValidation,
  settings,
  resetValidation,
  disableButton,
} from "../scripts/validation.js";

import Api from "../utils/api.js";

let selectedCard = null;
let selectedCardId = null;

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "b4c1a3d6-ab2b-4855-8b36-58571fb43cd1",
    "Content-Type": "application/json",
  },
});

api
  .getAppInfo()
  .then(([cards, getUserInfo]) => {
    cards.forEach((item) => {
      const cardElement = getCardElement(item);
      cardList.append(cardElement);
    });
    profileName.textContent = getUserInfo.name;
    profileDescription.textContent = getUserInfo.about;
    document.querySelector(".profile__avatar").src = getUserInfo.avatar;
  })
  .catch(console.error);

// Profile elements
const profileEditButton = document.querySelector(".profile__edit-btn");
const cardModalButton = document.querySelector(".profile__add-btn");
const avatarModalButton = document.querySelector(".profile__avatar-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const avatarImg = document.querySelector(".profile__avatar");

// Edit form elements
const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector(".modal__form");
const editModalCloseButton = editModal.querySelector(".modal__close-btn");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

// Avatar form elements
const avatarModal = document.querySelector("#avatar-modal");
const avatarFormElement = avatarModal.querySelector(".modal__form");
const avatarSubmitButton = avatarModal.querySelector(".modal__submit-btn");
const avatarModalCloseButton = avatarModal.querySelector(".modal__close-btn");
const avatarInput = avatarModal.querySelector("#profile-avatar-input");

// Delete form elements
const deleteModal = document.querySelector("#delete-modal");
const deleteModalCloseButton = deleteModal.querySelector(".modal__close-btn");

// Card form elements
const cardModal = document.querySelector("#add-card-modal");
const cardFormElement = cardModal.querySelector(".modal__form");
const cardSubmitButton = cardModal.querySelector(".modal__submit-btn");
const cardModalCloseButton = cardModal.querySelector(".modal__close-btn");
const confirmDeleteButton = deleteModal.querySelector(".delete-confirm-btn");
const cancelDeleteButton = deleteModal.querySelector(".delete-cancel-btn");
const cardModalNameInput = cardModal.querySelector("#add-card-name-input");
const cardModalLinkInput = cardModal.querySelector("#add-card-link-input");

const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");
const previewModalCloseButton = previewModal.querySelector(".modal__close-btn");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-btn");
  const cardDeleteButton = cardElement.querySelector(".card__delete-btn");

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.alt;

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-btn_liked");
  });

  cardImageEl.addEventListener("click", () => {
    openModal(previewModal);
    previewModalImageEl.src = data.link;
    previewModalCaptionEl.textContent = data.name;
    previewModalImageEl.alt = data.alt;
  });

  cardDeleteButton.addEventListener("click", () => {
    selectedCard = cardElement;
    selectedCardId = data._id;
    openModal(deleteModal);
  });

  return cardElement;
}

confirmDeleteButton.addEventListener("click", () => {
  if (!selectedCard || !selectedCardId) return;

  confirmDeleteButton.textContent = "Deleting...";

  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deleteModal);
    })
    .catch(console.error)
    .finally(() => {
      confirmDeleteButton.textContent = "Delete";
      selectedCard = null;
      selectedCardId = null;
    });
});

cancelDeleteButton.addEventListener("click", () => {
  closeModal(deleteModal);
  selectedCard = null;
  selectedCardId = null;
});

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

[editModal, cardModal, previewModal, avatarModal, deleteModal].forEach(
  (modal) => {
    modal.addEventListener("mousedown", (evt) => {
      if (evt.target === modal) closeModal(modal);
    });
  }
);

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  api
    .editUserInfo(editModalNameInput.value, editModalDescriptionInput.value)
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(editModal);
    })
    .catch(console.error);
}

// Function to handle card form submission
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  cardSubmitButton.textContent = "Saving...";

  const inputValues = {
    name: cardModalNameInput.value,
    link: cardModalLinkInput.value,
    alt: cardModalNameInput.value,
  };

  api
    .uploadCard({ name: inputValues.name, link: inputValues.link })
    .then((data) => {
      const cardElement = getCardElement(data);
      cardList.prepend(cardElement);
      cardFormElement.reset();
      disableButton(cardSubmitButton, settings);
      closeModal(cardModal);
    })
    .catch(console.error)
    .finally(() => {
      cardSubmitButton.textContent = "Submit";
    });
}

// Function to handle avatar submission
function handleAvatarSubmit(evt) {
  evt.preventDefault();
  api
    .editUserAvatar({
      avatar: avatarInput.value,
    })
    .then((data) => {
      avatarImg.src = data.avatar;
      avatarInput.value = "";
      disableButton(avatarSubmitButton, settings);
      closeModal(avatarModal);
    })
    .catch(console.error)
    .finally(() => {
      avatarSubmitButton.textContent = "Save";
    });
}

// Event listeners profile edit
profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  resetValidation(
    editFormElement,
    [editModalNameInput, editModalDescriptionInput],
    settings
  );
  openModal(editModal);
});

editModalCloseButton.addEventListener("click", () => {
  closeModal(editModal);
});

previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});

cardModalButton.addEventListener("click", () => {
  openModal(cardModal);
});

cardModalCloseButton.addEventListener("click", () => {
  closeModal(cardModal);
});

avatarModalButton.addEventListener("click", () => {
  openModal(avatarModal);
});

avatarModalCloseButton.addEventListener("click", () => {
  closeModal(avatarModal);
});

deleteModalCloseButton.addEventListener("click", () => {
  closeModal(deleteModal);
});

avatarFormElement.addEventListener("submit", handleAvatarSubmit);

editFormElement.addEventListener("submit", handleEditFormSubmit);
cardFormElement.addEventListener("submit", handleCardFormSubmit);

enableValidation(settings);
