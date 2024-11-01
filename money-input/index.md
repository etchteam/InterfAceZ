---
tags: component
layout: component.webc
title: Money Input
---

An input for collecting monetary values.

<article aria-label="Component example">
  <label for="cost">
    Amount in pounds
  </label>
  <az-money-input currency="£">
    <input id="cost" name="cost" />
  </az-money-input>
</article>

## Installation

### Manual

1. [Copy the JS code](#)
2. Include it in your websites JS

### NPM

1. Install the library `npm install @etchteam/interfacez`
2. Import the JS `import '@etchteam/interfacez/money-input'`

## Usage

The web component should be added to your HTML by wrapping around an `<input>` element.

```html
<az-money-input currency="£">
  <input id="cost" name="cost" />
</az-money-input>
```

This will provide:

- Input attributes
  - `type="text"`
  - `inputmode="decimal"`
  - `placeholder="0.00"`
- Validation
  - No non-numeric values
  - Disallow more than two decimal places
  - Default required
- A sensible max-width
- A currency prop to prefix the input with a currency symbol

### Configuration

#### Max width

Use [input-size](/input-size) to override the max-width setting.

#### Currency

Providing `currency="£"` will prefix the input with “£”.

Remove the prop to provide a custom affix instead.

## Recommendations

### Affix the input

An input “affix” is the bit that goes either side of the field where users input their value.

For the majority of currency formats, a currency symbol or code can be added before the input as a “prefix”.

Affixing monetary inputs with the currency symbol is a quick win, it shows the expected currency and signals that a monetary value is expected.

The affix is especially helpful for mobile or touchscreen users, as it allows a numeric keyboard to be displayed so they can skip finding the currency symbol.

If users are expected to enter a value in a different currency, consider using a currency select box instead of a affix.

### Add a placeholder

A placeholder is a hint that appears in the input field before the user starts typing.

Monetary inputs are a good use-case for placeholders because they can show the expected format of the input, without affecting validity.

Use zero for the placeholder though – suggesting a price might be a bit cheeky.

### Size the input appropriately

Making the input as wide as the expected value indicates to users what they’re expected to enter.

The input should be wide enough to accommodate the largest possible value, so unless you anticipate users entering values in the millions, the input will probably be quite small.

### Use a "text" input type

We recommend using the type="text" attribute instead of type="number". The number input type is designed to capture non-decimal, incrementable numbers.

For example, entering "1.5" and either scrolling inside the input or clicking the up/down arrows that most browsers add to number type inputs, causes the number to be rounded up or down.

This isn’t good for monetary values where decimal place precision is usually crucial.

Additionally, the [Gov UK team identified several other usability and accessibility issues](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) to consider when using number inputs.

### Set the inputmode to "decimal"

This is an important step to ensure the correct keyboard is displayed on mobile devices.

For monetary values, we want a keyboard with numbers, a decimal point, and a comma to cover all possible currency formats.

We suggest using inputmode="decimal" instead of inputmode="numeric" because during testing we found that some IOS devices displayed a keypad that lacked a decimal point.

### Expect unexpected formats

Users will likely enter values in ways we don’t anticipate, but if the input isn’t technically wrong, we should avoid requiring them to amend it. Here are some possible formats to expect:

- Numbers with comma separators "1,000.00"
- Including the currency symbol "£1,000.00"
- Not including decimal places "10"

Including the currency code "1,000.00 GBP" or "GBP 1,000.00" might be going above and beyond, but could be worth considering if you’re expecting international users.

### Validate the input

Validation should catch:

- Non-numeric values (excluding the currency code mentioned above if applicable)
- Values with more than two decimal places
- Missing values if the field is required

You may want to consider if setting an maximum or minimum value limit is appropriate to warn the customer about before they submit the form.

### Remember to add a label

Labels should be added as well as the placeholder. It’s especially important for users of screen readers where the placeholder won't be announced.

*Read the full post on [etch.co/blog/money-input](https://etch.co/blog/money-input)*