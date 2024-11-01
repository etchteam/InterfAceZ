---
tags: component
layout: component.webc
title: Input size
---

A utility class for sizing form fields appropriately.

<article aria-label="Component example">
  <input placeholder="Large" class="input-size-lg" />
  <input placeholder="Medium" class="input-size-md" />
  <input placeholder="Small" class="input-size-sm" />
  <input placeholder="Custom" class="input-size" style="--input-size: 50ch" />
</article>

## Installation

### Manual

1. [Copy the CSS code](#)
2. Include it in your websites CSS

### NPM

1. Install the library `npm install @etchteam/interfacez`
2. Import the CSS `@import url('node_modules/@etchteam/interfacez/input-size/input-size.css);`

## Usage

Adding the class to your form fields will set their width.

```html
<input class="input-size-md">
```

A custom width can be provided by using the base class and modifying the CSS variable.

```html
<input placeholder="Custom" class="input-size" style="--input-size: 50ch">
```

## Recommendations

Form fields should be made as wide as the value that they should contain. This provides users with an indication of what the form expects them to enter.

The input should still be wide enough to accommodate the largest possible expected value.