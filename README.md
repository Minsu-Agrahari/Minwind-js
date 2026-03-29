# CSS with Minwind

A custom utility CSS engine built in JavaScript.

Minwind allows you to write classes like ```min-bg-grey``` or ```p5``` directly in HTML and dynamically applies styles at runtime.

## How it Works
Minwind does not generate CSS files.
Instead, it parses class names and applies inline styles using JavaScript

## Supported Properties
|Tag|CSS Property | Example Class | Output|
|---|-------------|--------------|------|
|bg | background | min-bg-grey | background: grey|
|text| color| min-text-green| color: green|
|p| padding| p-5| padding: 5px|
|m | margin | m-5| margin: 5px|

## Parser Flow
```
        HTML
         ↓
    Select all elements
         ↓
    Extract "-" classes
         ↓
    Parse Class (Property + values)
         ↓
    Apply styles via JS
         ↓
    DOM updates instantly
```

## Key Idea
Minwind treats class names as instructions, not style.
```
min-bg-grey → JS → element.style.background = "grey"
```

## Current Limitations
* Limited property support (bg, text, margin, padding)
* No responsive or state variants (hover, md, etc)
* No class deduplication
* Uses inline styles (not stylesheet)

## Future Improvements
* Add more utilities (flex, width, height, etc.)
* Introduce mapping sustem instead of switch
* Add responsive variants
* Build JIT-style CSS generator
* Optimize parsing performance