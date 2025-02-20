# 📞 Input Formatter

A simple JavaScript input formatter that formats user input as a phone number in real-time.

## 🚀 Features

- Formats input to `+(123) - 4567890` style automatically.
- Removes non-numeric characters.
- Works dynamically as the user types.

## 🛠️ Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/input-formatter.git
   ```
2. Open `index.html` in your browser.

## 📜 Usage

1. Add an `<input>` field in your HTML:
   ```html
   <input type="text" id="phone-input" placeholder="Enter phone number" />
   <script src="script.js"></script>
   ```
2. Include `script.js` which contains:

   ```js
   const input = document.querySelector("input");

   input.addEventListener("input", () => {
     let value = input.value.replace(/\D/g, "");
     input.value =
       value.length > 3
         ? `+(${value.substring(0, 3)}) - ${value.substring(3, 10)}`
         : value;
   });
   ```

## 🌐 Online Demo

🔗 **[Live Demo](https://your-demo-link.com)** – Try it out in your browser!

## 📌 Contributing

Feel free to submit pull requests or open issues. Any contributions are welcome! 🚀

## 📜 License

This project is licensed under the MIT License.
