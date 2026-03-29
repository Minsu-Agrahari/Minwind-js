# CSS with Minwind

A Custom way to write CSS

## Steps to follow:

1. Extract classes 
    ```
    HTML -> collect all min-* classes
    ```

2. Make them unique

    ```
    const unique = [...new Set(classes)]
    ```

3. Replace with CSS rules

    ```
    Convert class → CSS rules
    ```

    ### Convert Class → CSS

    |Class            | CSS            |
    |-----------------|----------------|
    |min-bg-red       | background: red|
    |min-color-yellow | color: yellow  |
    |min-p6           | padding: 24px  |

    ```ts
    function generateCSS(cls) {

        const parts = cls.split("-"); // ["min", "bg", "red"]

        // < property, value >
        const property = parts[1];
        const value = parts[2];

        switch (property) {
            case "bg":
                return `/${cls}{ background:${value}; }`;

            case "color":
                return `.${cls} { color: ${value}; }`;

            case "p":
                return `.${cls} { padding: ${value * 4}px; }`;

            default:
                return "";
        }
    }

    ```
4. Combine all CSS

    ```js
        const styles = unique.map(generateCSS).join("\n");
    ```
5. Inject into ```Style```
    
    ```js
    const styleTag = document.createElement("style");
    styleTag.innerText = style;
    documnet.head.appendChild(styleTag);
    ```

## Final Flow 

```
HTML
  ↓
Extract min-* classes
  ↓
Remove duplicates
  ↓
Convert to CSS rules
  ↓
Inject style tag
  ↓
Browser applies styles automatically
```


## Propertys supports

|tag  | property Name    |
|-----|------------------|
|bg   | background color |
|text | color            |
|m    | margin           |
|p    | padding          |



```js
// select all the element
const element = document.querySelectorAll("*");

// Extract classes
element.forEach(el => {
    el.classList.forEach(cls => {
        if(cls.startsWith("min-")){
            
        }
    })
})

--------------------------------------

// // select element
// const el = document.querySelector("h1");
// console.log(el);

// // get classes
// const classes = [...el.classList];
// console.log(classes);

// // 
// classes.forEach(cls => {
//     if(!cls.startsWith("min-")) return;

//     const parts = cls.split("-");

//     // style handing
//     if(parts[1] === "bg"){
//         // background color
//         const color = parts[2];
//         el.style.backgroundColor = color;
//     }
//     {
//         // text color
//         const color = parts[1];
//         el.style.color = color;
//     }
// });
```