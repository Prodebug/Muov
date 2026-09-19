/**
 * Muov — интерактив шапки и формы заказа.
 *
 * Web3Forms: вставьте ваш личный access_key в скрытое поле
 * <input name="access_key"> в index.html (рядом с комментарием).
 * Ключ бесплатно: https://web3forms.com
 */

const form = document.getElementById("order-form");
const statusEl = document.getElementById("form-status");
const submitBtn = form?.querySelector('button[type="submit"]');

function setStatus(text, state) {
  if (!statusEl) return;
  statusEl.textContent = text;
  statusEl.classList.remove("is-pending", "is-success", "is-error");
  if (state) statusEl.classList.add(state);
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  setStatus("Отправка заказа...", "is-pending");
  if (submitBtn) submitBtn.disabled = true;

  const data = new FormData(form);
  const payload = JSON.stringify(Object.fromEntries(data.entries()));

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: payload,
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setStatus("Успешно! Muov принял ваш заказ", "is-success");
      form.reset();
    } else {
      const apiMessage = String(result.message || "").toLowerCase();
      setStatus(
        apiMessage.includes("api key")
          ? "Не удалось отправить заявку. Вставьте ваш ключ Web3Forms в код сайта."
          : result.message ||
            "Не удалось отправить заявку. Проверьте ключ Web3Forms и попробуйте снова.",
        "is-error",
      );
    }
  } catch (error) {
    setStatus("Ошибка сети. Проверьте соединение и попробуйте снова.", "is-error");
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
});
