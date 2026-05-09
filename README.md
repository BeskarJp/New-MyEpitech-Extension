# Epitech Tests Percentage

A lightweight and efficient browser extension designed to enhance the **my.epitech.eu** experience by automatically calculating and displaying the success percentage for test results.

---

## 🚀 Features

* **Automatic Calculation:** Instantly converts raw test scores (e.g., 64 / 72) into a readable percentage with one decimal point (e.g., 88.9%).

* **Dynamic Loading Support:** Uses a `MutationObserver` to detect when new test results are loaded or updated by the Mantine UI framework, ensuring the percentage is always visible without refreshing the page.

* **Clean Integration:** Injects the percentage directly into the existing badge labels for a seamless look that matches the original interface.

* **Privacy-Focused:** Only operates on `my.epitech.eu` and does not track or collect any user data.

---

## 🛠️ Installation

### Manual Installation (Developer Mode)

1. **Clone** or **Download** this repository.

2. Open your browser and navigate to the **Extensions** page:

* **Chrome/Brave:** `chrome://extensions/`

* **Firefox:** `about:debugging#/runtime/this-firefox`


3. Enable **Developer Mode**.

4. Click on **Load unpacked** (or **Load Temporary Add-on** in Firefox) and select the project folder containing the `manifest.json`.

---

## Technical Overview

The extension targets specific DOM elements within the Epitech results dashboard.

* **Manifest V3:** Built using the latest extension standards for better security and performance.

* **DOM Targeting:** The script identifies elements with the class `mantine-Badge-label` to locate score strings.

* **Regex Matching:** It uses a regular expression to parse the "X / Y TESTS" format and perform the math.

This project is inspired by community-driven tools that aim to restore useful metrics to student portals, similar to "MyEpitech" extension.

---

## ⚖️ License

This project is open-source. Feel free to contribute or adapt it for your needs.
