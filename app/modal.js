const $$ = {};

function _createModal(options) {
  const modal = document.createElement("div");
  const DEFAULT_WIDTH = "600px";
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="width: ${
              options.width || DEFAULT_WIDTH
            }">
                <div class="modal-header">
                    ${
                      options.closable
                        ? `<span class="modal-close" data-close="true">&times;</span>`
                        : ""
                    }
                </div>
                <div class="modal-body" data-content>
                ${options.content || ""}
                </div>
            </div>
        </div>
        `
  );
  document.body.appendChild(modal);
  return modal;
}

$$.modal = function (options) {
  const animation_speed = 200;
  const $modal = _createModal(options);
  let closing = false;
  destroyed = false;

  const modal = {
    open() {
      if (destroyed) {
        return console.log("Modal is destroyed");
      }
      !closing && $modal.classList.add("open");
    },
    close() {
      closing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.remove("hide");
        closing = false;
      }, animation_speed);
    },
  };

  const listener = (event) => {
    if (event.target.dataset.close) {
      modal.close();
    }
  };

  $modal.addEventListener("click", listener);

  return Object.assign(modal, {
    destroy() {
      $$modal.parentNode.removeChild($$modal);
      $$modal.removeEventListener("click", listener);
      destroyed = true;
    },
    setContent(html) {
      $modal.querySelector("[data-content]").innerHTML = html;
    },
  });
};

const familiarNoteModal = $$.modal({
  closable: true,
  width: "50%",
});

document.addEventListener("click", (event) => {
  if (event.target.dataset.textKind) {
    return false;
  }
  const clickedNote = +event.target.dataset.note;
  const page = event.target.dataset.page;
  if (clickedNote) {
    const note = footnotes.find((f) => f.id === clickedNote && f.page === page);
    familiarNoteModal.setContent(`<div>${note.note}</div>`);
    familiarNoteModal.open();
    tippy("[data-tippy-content]", {
      theme: "light-yellow",
      allowHTML: true,
      // trigger: "click",
      interactive: true,
    });
  }
});
