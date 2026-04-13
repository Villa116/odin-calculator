# 📱 Modern Web Calculator

A sleek, fully functional, and responsive web calculator built with vanilla JavaScript, HTML5, and CSS3. This project demonstrates complex state management, event delegation, and precision math handling.

## ✨ Features

- **Core Math Operations:** Addition, subtraction, multiplication, and division.
- **Advanced Math:** - Square root ($\sqrt{x}$)
  - Exponentiation ($x^y$)
  - Squaring ($x^2$)
  - Percentage calculations (%)
  - Pi ($\pi$) constant (rounded to 7 decimal places)
- **Intelligent Logic:**
  - **Chained Operations:** Evaluate strings like `12 + 7 - 1` seamlessly. The calculator auto-evaluates the first pair when a second operator is pressed.
  - **Smart Reset:** Typing a number after hitting `=` automatically clears the previous result and starts a new calculation.
  - **Floating Point Fix:** Uses custom rounding to prevent common JS math glitches (e.g., 0.1 + 0.2).
- **User Experience:**
  - **Full Keyboard Support:** Use your physical keyboard or numpad.
  - **Visual Feedback:** Buttons "flash" with an active state when keys are pressed.
  - **Backspace/Delete:** Undo the last character input without clearing the whole screen.
  - **Sign Toggle:** Easily flip between positive and negative numbers.

## ⌨️ Keyboard Mapping

| Key                | Action            |
| :----------------- | :---------------- |
| `0-9`              | Digits            |
| `.`                | Decimal Point     |
| `+`, `-`, `*`, `/` | Operators         |
| `Enter` or `=`     | Calculate Result  |
| `Backspace`        | Delete last digit |
| `Escape`           | Clear (AC)        |

## 🛠️ Technical Implementation

### **Precision Handling**

JavaScript's native math can sometimes produce long floating-point trails. This project implements a `roundResult` helper to keep the display clean:

```javascript
function roundResult(num) {
  return Math.round(num * 10 ** 7) / 10 ** 7;
}
```

### **Event Delegation**

Instead of adding listeners to every button, a single listener is attached to the `.container`. It uses `dataset` attributes to distinguish between numbers and actions:

```javascript
const { number, action } = target.dataset;
if (number !== undefined) handleNumber(number);
else handleAction(action);
```

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/Villa116/odin-calculator.git
```

2. **Open the project:**

Simply double-click index.html to run it in your browser.

## 🎨 Styles

The UI is built using a CSS Flexbox grid for a responsive, centered layout. It includes a custom `.active` class triggered by JavaScript for tactile feedback.
