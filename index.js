const input = document.querySelector("input");

input.addEventListener("input", () => {
  let value = input.value.replace(/\D/g, "");
  let newValue = value.substring(0, 3);
  let lastValue = value.substring(3, 10);

  if (value.length > 3) {
    input.value = `+(${newValue}) - ${lastValue}`;
  } else {
    input.value = value;
  }
});
