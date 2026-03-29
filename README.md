# Minwind CSS

Minwind CSS is a lightweight JavaScript runtime CSS engine that converts custom utility classes into inline styles directly in the browser.

Instead of writing CSS, you can use a simple syntax like:

```html
<h1 class="min-bg-red min-text-white min-p-10">Hello</h1>
```

Minwind CSS parses these classes and applies styles automatically.

## Installation

### From npm
```Bash
npm i minwindcss
```
---
### From GitHub
```Bash
git clone https://github.com/Minsu-Agrahari/minwindcss.git
```
```Bash
cd minwindcss
```

Then include the script file:
```Bash
<script src="./script.js"><script>
```
---

## Usage

### Using npm
```js
import "minwindcss";
```

### Using CDN/ Script
<script src="node_modules/minwindcss/script.js"></script>

### Example
```HTML
<h1 class="min-bg-red min-text-white min-p-10">
  Heading
</h1>

<p class="min-m-5 min-fs-20">
  Paragraph text
</p>
```
---

## Supported Utilities
|Minwind Class |CSS Applied     |
|--------------|----------------|
|min-text-red  |color: red      |
|min-bg-blue   |background: blue|
|min-fs-20     |font-size: 20px |
|min-fw-bold   |font-weight: bold|
|min-p-10      |padding: 10px   |
|min-m-10	     |margin: 10px;   | 
|min-border-2	|border: 2px;    |
|min-rounded-5	|border-radius: 5px;|
|min-w-100	|width: 100px;   |
|min-h-100	|height: 100px;  |
|min-top-10	|top: 10px;      |
|min-left-10	|left: 10px;     |

---

## Syntax
```bash
min-<property>-<value>
```

### Examples
* ```min-bg-red```     → background color
* ```min-text-white``` → text color
* ```min-p-10```       → padding
* ```min-m-5```        → margin 
---
## How it works
```
HTML
  ↓
Scan all elements
  ↓
Extract classes starting with "min-"
  ↓
Split class into property & value
  ↓
Map property to CSS
  ↓
Apply inline styles using JS
```

---
## File Strucutre
```
minwind/
│── demo_index.html
│── package.json
│── README.md
│── script.js
```

     demo_index.html is a live demo/playground file to showcase how Minwind works in real time.

---

## Contribution
Contributions are welcome.

### Steps
1. Fork the repository

2. Create a new branch

     ```Bash
     git checkout -b feature-name
     ```

3. Make your changes

4. Commit your changes
     ```bash
     git commit -m "feat: your message"
     ```

5. Push to your branch
     ```bash
     git push origin feature-name
     ```

6. Open a Pull Request

---
## Current Limitations
* Limited utility support
* No responsive (sm, md, lg) support
* No pseudo states (hover, focus)
* Uses inline styles only

## Future Improvements
* Add more utilities (flex, grid, etc.)
* Add responsive variants
* Add hover/focus states
* Build JIT-style CSS engine
* Improve parsing performance

--- 
## Author
Minsu Agrahari

## Summary

MinWind CSS is a beginner-friendly utility-first CSS engine that helps you understand how frameworks like Tailwind work internally while providing a simple and extendable styling system.

---