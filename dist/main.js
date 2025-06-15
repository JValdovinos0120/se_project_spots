!(function () {
  "use strict";
  const e = {
      formSelector: ".modal__form",
      inputSelector: ".modal__input",
      submitButtonSelector: ".modal__submit-btn",
      inactiveButtonClass: "modal__submit-btn_inactive",
      inputErrorClass: "modal__input_type_error",
      errorClass: "modal__error",
    },
    t = (e, t, o) => {
      const n = t.id + "-error";
      (e.querySelector("#" + n).textContent = ""),
        t.classList.remove(o.inputErrorClass);
    },
    o = (e, t, o) => {
      ((e) => e.some((e) => !e.validity.valid))(e)
        ? n(t, o)
        : ((t.disabled = !1), t.classList.remove(o.inactiveButtonClass));
    },
    n = (e, t) => {
      (e.disabled = !0), e.classList.add(t.inactiveButtonClass);
    },
    r = document.querySelector(".profile__edit-btn"),
    a = document.querySelector(".profile__add-btn"),
    l = document.querySelector(".profile__name"),
    c = document.querySelector(".profile__description"),
    s = document.querySelector("#edit-modal"),
    i = s.querySelector(".modal__form"),
    d = s.querySelector(".modal__close-btn"),
    u = s.querySelector("#profile-name-input"),
    m = s.querySelector("#profile-description-input"),
    p = document.querySelector("#add-card-modal"),
    _ = p.querySelector(".modal__form"),
    f = p.querySelector(".modal__submit-btn"),
    y = p.querySelector(".modal__close-btn"),
    v = p.querySelector("#add-card-name-input"),
    S = p.querySelector("#add-card-link-input"),
    h = document.querySelector("#preview-modal"),
    q = h.querySelector(".modal__image"),
    g = h.querySelector(".modal__caption"),
    b = h.querySelector(".modal__close-btn"),
    w = document.querySelector("#card-template"),
    k = document.querySelector(".cards__list");
  function E(e) {
    const t = w.content.querySelector(".card").cloneNode(!0),
      o = t.querySelector(".card__title"),
      n = t.querySelector(".card__image"),
      r = t.querySelector(".card__like-btn"),
      a = t.querySelector(".card__delete-btn");
    return (
      (o.textContent = e.name),
      (n.src = e.link),
      (n.alt = e.alt),
      r.addEventListener("click", (e) => {
        r.classList.toggle("card__like-btn_liked");
      }),
      n.addEventListener("click", () => {
        L(h), (q.src = e.link), (g.textContent = e.name), (q.alt = e.alt);
      }),
      a.addEventListener("click", (e) => {
        e.target.closest(".card").remove();
      }),
      t
    );
  }
  function L(e) {
    e.classList.add("modal_opened"), document.addEventListener("keydown", x);
  }
  function C(e) {
    e.classList.remove("modal_opened"),
      document.removeEventListener("keydown", x);
  }
  function x(e) {
    if ("Escape" === e.key) {
      const e = document.querySelector(".modal_opened");
      e && C(e);
    }
  }
  var z;
  [s, p, h].forEach((e) => {
    e.addEventListener("mousedown", (t) => {
      t.target === e && C(e);
    });
  }),
    r.addEventListener("click", () => {
      var o, n;
      (u.value = l.textContent),
        (m.value = c.textContent),
        (o = i),
        (n = e),
        [u, m].forEach((e) => {
          t(o, e, n);
        }),
        L(s);
    }),
    d.addEventListener("click", () => {
      C(s);
    }),
    b.addEventListener("click", () => {
      C(h);
    }),
    a.addEventListener("click", () => {
      L(p);
    }),
    y.addEventListener("click", () => {
      C(p);
    }),
    i.addEventListener("submit", function (e) {
      e.preventDefault(),
        (l.textContent = u.value),
        (c.textContent = m.value),
        C(s);
    }),
    _.addEventListener("submit", function (t) {
      t.preventDefault();
      const o = E({ name: v.value, link: S.value, alt: v.value });
      k.prepend(o), _.reset(), n(f, e), C(p);
    }),
    [
      {
        name: "Val Thorens",
        alt: "Photo of Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
      },
      {
        name: "Restaurant terrace",
        alt: "Photo of a restaurant terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
      },
      {
        name: "An outdoor cafe",
        alt: "Photo of an outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
      },
      {
        name: "A very long bridge, over the forest and through the trees",
        alt: "Bridge over a forest",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
      },
      {
        name: "Tunnel with morning light",
        alt: "Tunnel with light coming through windows",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
      },
      {
        name: "Mountain house",
        alt: "A log house in the snowy mountains",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
      },
    ].forEach((e) => {
      const t = E(e);
      k.append(t);
    }),
    (z = e),
    document.querySelectorAll(z.formSelector).forEach((e) => {
      ((e, n) => {
        const r = Array.from(e.querySelectorAll(n.inputSelector)),
          a = e.querySelector(n.submitButtonSelector);
        o(r, a, n),
          r.forEach((l) => {
            l.addEventListener("input", function () {
              ((e, o, n) => {
                o.validity.valid
                  ? t(e, o, n)
                  : ((e, t, o, n) => {
                      const r = t.id + "-error";
                      (e.querySelector("#" + r).textContent = o),
                        t.classList.add(n.inputErrorClass);
                    })(e, o, o.validationMessage, n);
              })(e, l, n),
                o(r, a, n);
            });
          });
      })(e, z);
    });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvc2NyaXB0cy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX3N1Ym1pdC1idG5cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fc3VibWl0LWJ0bl9pbmFjdGl2ZVwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JcIixcbn07XG5cbmNvbnN0IHNob3dJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZUlEID0gaW5wdXRFbGVtZW50LmlkICsgXCItZXJyb3JcIjtcbiAgY29uc3QgZXJyb3JNZXNzYWdlRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBlcnJvck1lc3NhZ2VJRCk7XG4gIGVycm9yTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xufTtcblxuY29uc3QgaGlkZUlucHV0RXJyb3IgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZUlEID0gaW5wdXRFbGVtZW50LmlkICsgXCItZXJyb3JcIjtcbiAgY29uc3QgZXJyb3JNZXNzYWdlRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBlcnJvck1lc3NhZ2VJRCk7XG4gIGVycm9yTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjb25maWcuaW5wdXRFcnJvckNsYXNzKTtcbn07XG5cbmNvbnN0IGNoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBjb25maWcpID0+IHtcbiAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICBzaG93SW5wdXRFcnJvcihcbiAgICAgIGZvcm1FbGVtZW50LFxuICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlLFxuICAgICAgY29uZmlnXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBjb25maWcpO1xuICB9XG59O1xuXG5jb25zdCBoYXNJbnZhbGlkSW5wdXQgPSAoaW5wdXRMaXN0KSA9PiB7XG4gIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gIWlucHV0LnZhbGlkaXR5LnZhbGlkO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUJ1dHRvblN0YXRlID0gKGlucHV0TGlzdCwgYnV0dG9uRWwsIGNvbmZpZykgPT4ge1xuICBpZiAoaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbkVsLCBjb25maWcpO1xuICB9IGVsc2Uge1xuICAgIGJ1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uRWwuY2xhc3NMaXN0LnJlbW92ZShjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlQnV0dG9uID0gKGJ1dHRvbkVsLCBjb25maWcpID0+IHtcbiAgYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICBidXR0b25FbC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldFZhbGlkYXRpb24gPSAoZm9ybUVsZW1lbnQsIGlucHV0TGlzdCwgY29uZmlnKSA9PiB7XG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dCwgY29uZmlnKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9IChmb3JtRWxlbWVudCwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcuaW5wdXRTZWxlY3RvcilcbiAgKTtcbiAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZVZhbGlkYXRpb24gPSAoY29uZmlnKSA9PiB7XG4gIGNvbnN0IGZvcm1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcuZm9ybVNlbGVjdG9yKTtcbiAgZm9ybUxpc3QuZm9yRWFjaCgoZm9ybUVsZW1lbnQpID0+IHtcbiAgICBzZXRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCwgY29uZmlnKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZW5hYmxlVmFsaWRhdGlvbixcclxuICBzZXR0aW5ncyxcclxuICByZXNldFZhbGlkYXRpb24sXHJcbiAgZGlzYWJsZUJ1dHRvbixcclxufSBmcm9tIFwiLi4vc2NyaXB0cy92YWxpZGF0aW9uLmpzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJWYWwgVGhvcmVuc1wiLFxyXG4gICAgYWx0OiBcIlBob3RvIG9mIFZhbCBUaG9yZW5zXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMS1waG90by1ieS1tb3JpdHotZmVsZG1hbm4tZnJvbS1wZXhlbHMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlc3RhdXJhbnQgdGVycmFjZVwiLFxyXG4gICAgYWx0OiBcIlBob3RvIG9mIGEgcmVzdGF1cmFudCB0ZXJyYWNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMi1waG90by1ieS1jZWlsaW5lLWZyb20tcGV4ZWxzLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbiBvdXRkb29yIGNhZmVcIixcclxuICAgIGFsdDogXCJQaG90byBvZiBhbiBvdXRkb29yIGNhZmVcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8zLXBob3RvLWJ5LXR1YmFudXItZG9nYW4tZnJvbS1wZXhlbHMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkEgdmVyeSBsb25nIGJyaWRnZSwgb3ZlciB0aGUgZm9yZXN0IGFuZCB0aHJvdWdoIHRoZSB0cmVlc1wiLFxyXG4gICAgYWx0OiBcIkJyaWRnZSBvdmVyIGEgZm9yZXN0XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNC1waG90by1ieS1tYXVyaWNlLWxhc2NoZXQtZnJvbS1wZXhlbHMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlR1bm5lbCB3aXRoIG1vcm5pbmcgbGlnaHRcIixcclxuICAgIGFsdDogXCJUdW5uZWwgd2l0aCBsaWdodCBjb21pbmcgdGhyb3VnaCB3aW5kb3dzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNS1waG90by1ieS12YW4tYW5oLW5ndXllbi1mcm9tLXBleGVscy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTW91bnRhaW4gaG91c2VcIixcclxuICAgIGFsdDogXCJBIGxvZyBob3VzZSBpbiB0aGUgc25vd3kgbW91bnRhaW5zXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNi1waG90by1ieS1tb3JpdHotZmVsZG1hbm4tZnJvbS1wZXhlbHMuanBnXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHByb2ZpbGVFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ0blwiKTtcclxuY29uc3QgY2FyZE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnRuXCIpO1xyXG5jb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKTtcclxuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiKTtcclxuXHJcbmNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1tb2RhbFwiKTtcclxuY29uc3QgZWRpdEZvcm1FbGVtZW50ID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XHJcbmNvbnN0IGVkaXRNb2RhbENsb3NlQnV0dG9uID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlLWJ0blwiKTtcclxuY29uc3QgZWRpdE1vZGFsTmFtZUlucHV0ID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1uYW1lLWlucHV0XCIpO1xyXG5jb25zdCBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0ID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dFwiXHJcbik7XHJcblxyXG5jb25zdCBjYXJkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLW1vZGFsXCIpO1xyXG5jb25zdCBjYXJkRm9ybUVsZW1lbnQgPSBjYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcclxuY29uc3QgY2FyZFN1Ym1pdEJ1dHRvbiA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zdWJtaXQtYnRuXCIpO1xyXG5jb25zdCBjYXJkTW9kYWxDbG9zZUJ1dHRvbiA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idG5cIik7XHJcbmNvbnN0IGNhcmRNb2RhbE5hbWVJbnB1dCA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLW5hbWUtaW5wdXRcIik7XHJcbmNvbnN0IGNhcmRNb2RhbExpbmtJbnB1dCA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWxpbmstaW5wdXRcIik7XHJcblxyXG5jb25zdCBwcmV2aWV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctbW9kYWxcIik7XHJcbmNvbnN0IHByZXZpZXdNb2RhbEltYWdlRWwgPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XHJcbmNvbnN0IHByZXZpZXdNb2RhbENhcHRpb25FbCA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xyXG5jb25zdCBwcmV2aWV3TW9kYWxDbG9zZUJ1dHRvbiA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idG5cIik7XHJcblxyXG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIik7XHJcbmNvbnN0IGNhcmRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcclxuXHJcbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRUZW1wbGF0ZS5jb250ZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXHJcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICBjb25zdCBjYXJkTmFtZUVsID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcclxuICBjb25zdCBjYXJkSW1hZ2VFbCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XHJcbiAgY29uc3QgY2FyZExpa2VCdXR0b24gPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnRuXCIpO1xyXG4gIGNvbnN0IGNhcmREZWxldGVCdXR0b24gPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idG5cIik7XHJcblxyXG4gIGNhcmROYW1lRWwudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgY2FyZEltYWdlRWwuc3JjID0gZGF0YS5saW5rO1xyXG4gIGNhcmRJbWFnZUVsLmFsdCA9IGRhdGEuYWx0O1xyXG5cclxuICBjYXJkTGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgY2FyZExpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnRuX2xpa2VkXCIpO1xyXG4gIH0pO1xyXG5cclxuICBjYXJkSW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgb3Blbk1vZGFsKHByZXZpZXdNb2RhbCk7XHJcbiAgICBwcmV2aWV3TW9kYWxJbWFnZUVsLnNyYyA9IGRhdGEubGluaztcclxuICAgIHByZXZpZXdNb2RhbENhcHRpb25FbC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICAgIHByZXZpZXdNb2RhbEltYWdlRWwuYWx0ID0gZGF0YS5hbHQ7XHJcbiAgfSk7XHJcblxyXG4gIGNhcmREZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBldnQudGFyZ2V0LmNsb3Nlc3QoXCIuY2FyZFwiKTtcclxuICAgIGNhcmQucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NDbG9zZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xyXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY0Nsb3NlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XHJcbiAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgIGNvbnN0IG9wZW5lZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIik7XHJcbiAgICBpZiAob3BlbmVkTW9kYWwpIHtcclxuICAgICAgY2xvc2VNb2RhbChvcGVuZWRNb2RhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5bZWRpdE1vZGFsLCBjYXJkTW9kYWwsIHByZXZpZXdNb2RhbF0uZm9yRWFjaCgobW9kYWwpID0+IHtcclxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldnQpID0+IHtcclxuICAgIGlmIChldnQudGFyZ2V0ID09PSBtb2RhbCkgY2xvc2VNb2RhbChtb2RhbCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlRWRpdEZvcm1TdWJtaXQoZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBlZGl0TW9kYWxOYW1lSW5wdXQudmFsdWU7XHJcbiAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICBjbG9zZU1vZGFsKGVkaXRNb2RhbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNhcmRGb3JtU3VibWl0KGV2dCkge1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlucHV0VmFsdWVzID0ge1xyXG4gICAgbmFtZTogY2FyZE1vZGFsTmFtZUlucHV0LnZhbHVlLFxyXG4gICAgbGluazogY2FyZE1vZGFsTGlua0lucHV0LnZhbHVlLFxyXG4gICAgYWx0OiBjYXJkTW9kYWxOYW1lSW5wdXQudmFsdWUsXHJcbiAgfTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGlucHV0VmFsdWVzKTtcclxuICBjYXJkTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxuICBjYXJkRm9ybUVsZW1lbnQucmVzZXQoKTtcclxuICBkaXNhYmxlQnV0dG9uKGNhcmRTdWJtaXRCdXR0b24sIHNldHRpbmdzKTtcclxuICBjbG9zZU1vZGFsKGNhcmRNb2RhbCk7XHJcbn1cclxuXHJcbnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZWRpdE1vZGFsTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZU5hbWUudGV4dENvbnRlbnQ7XHJcbiAgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcclxuICByZXNldFZhbGlkYXRpb24oXHJcbiAgICBlZGl0Rm9ybUVsZW1lbnQsXHJcbiAgICBbZWRpdE1vZGFsTmFtZUlucHV0LCBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0XSxcclxuICAgIHNldHRpbmdzXHJcbiAgKTtcclxuICBvcGVuTW9kYWwoZWRpdE1vZGFsKTtcclxufSk7XHJcblxyXG5lZGl0TW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsb3NlTW9kYWwoZWRpdE1vZGFsKTtcclxufSk7XHJcblxyXG5wcmV2aWV3TW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsb3NlTW9kYWwocHJldmlld01vZGFsKTtcclxufSk7XHJcblxyXG5jYXJkTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBvcGVuTW9kYWwoY2FyZE1vZGFsKTtcclxufSk7XHJcblxyXG5jYXJkTW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsb3NlTW9kYWwoY2FyZE1vZGFsKTtcclxufSk7XHJcblxyXG5lZGl0Rm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVFZGl0Rm9ybVN1Ym1pdCk7XHJcbmNhcmRGb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUNhcmRGb3JtU3VibWl0KTtcclxuXHJcbmluaXRpYWxDYXJkcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChpdGVtKTtcclxuICBjYXJkTGlzdC5hcHBlbmQoY2FyZEVsZW1lbnQpO1xyXG59KTtcclxuXHJcbmVuYWJsZVZhbGlkYXRpb24oc2V0dGluZ3MpO1xyXG4iXSwibmFtZXMiOlsic2V0dGluZ3MiLCJmb3JtU2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsImhpZGVJbnB1dEVycm9yIiwiZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJjb25maWciLCJlcnJvck1lc3NhZ2VJRCIsImlkIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJpbnB1dExpc3QiLCJidXR0b25FbCIsInNvbWUiLCJpbnB1dCIsInZhbGlkaXR5IiwidmFsaWQiLCJoYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlQnV0dG9uIiwiZGlzYWJsZWQiLCJhZGQiLCJwcm9maWxlRWRpdEJ1dHRvbiIsImRvY3VtZW50IiwiY2FyZE1vZGFsQnV0dG9uIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJlZGl0TW9kYWwiLCJlZGl0Rm9ybUVsZW1lbnQiLCJlZGl0TW9kYWxDbG9zZUJ1dHRvbiIsImVkaXRNb2RhbE5hbWVJbnB1dCIsImVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQiLCJjYXJkTW9kYWwiLCJjYXJkRm9ybUVsZW1lbnQiLCJjYXJkU3VibWl0QnV0dG9uIiwiY2FyZE1vZGFsQ2xvc2VCdXR0b24iLCJjYXJkTW9kYWxOYW1lSW5wdXQiLCJjYXJkTW9kYWxMaW5rSW5wdXQiLCJwcmV2aWV3TW9kYWwiLCJwcmV2aWV3TW9kYWxJbWFnZUVsIiwicHJldmlld01vZGFsQ2FwdGlvbkVsIiwicHJldmlld01vZGFsQ2xvc2VCdXR0b24iLCJjYXJkVGVtcGxhdGUiLCJjYXJkTGlzdCIsImdldENhcmRFbGVtZW50IiwiZGF0YSIsImNhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsImNhcmROYW1lRWwiLCJjYXJkSW1hZ2VFbCIsImNhcmRMaWtlQnV0dG9uIiwiY2FyZERlbGV0ZUJ1dHRvbiIsIm5hbWUiLCJzcmMiLCJsaW5rIiwiYWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInRvZ2dsZSIsIm9wZW5Nb2RhbCIsInRhcmdldCIsImNsb3Nlc3QiLCJtb2RhbCIsImhhbmRsZUVzY0Nsb3NlIiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJvcGVuZWRNb2RhbCIsImZvckVhY2giLCJyZXNldFZhbGlkYXRpb24iLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwicHJlcGVuZCIsInJlc2V0IiwiaXRlbSIsImFwcGVuZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRFdmVudExpc3RlbmVycyIsIkFycmF5IiwiZnJvbSIsImJ1dHRvbkVsZW1lbnQiLCJjaGVja0lucHV0VmFsaWRpdHkiLCJzaG93SW5wdXRFcnJvciIsImVycm9yTWVzc2FnZSIsInZhbGlkYXRpb25NZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==
