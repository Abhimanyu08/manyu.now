---
title: "Typography playground post"
date: 2026-03-01
draft: true
---

This post exists to be looked at, not read. Every element the site might render is here at least once, so that a change to the stylesheet can be checked in one place. If something looks wrong on this page, it will look wrong somewhere real.

The first paragraph is plain prose of an ordinary length. It should be long enough to wrap several times at the content width, so the line height, measure and paragraph spacing are all visible at once. A good body text setting is one you stop noticing after the second line; if your eye keeps snagging on the spacing, something is off.

Here is a second paragraph, so the gap _between_ paragraphs can be judged against the gap between lines. It also carries the inline styles: **bold text**, _italic text_, _**bold and italic together**_, ~~struck-through text~~, ++inserted text++, ==highlighted text==, `inline code`, and a superscript like E = mc^2^. Press <kbd>Cmd</kbd> + <kbd>K</kbd> to see keyboard keys, and hover <abbr title="Cascading Style Sheets">CSS</abbr> to see an abbreviation. Water is H<sub>2</sub>O, and <small>this is small print</small>.

## Links

Each of these should be styled according to where it leads:

- A relative link to [another post](/keyboard/).
- An anchor link that [jumps to the code section](#code) on this page.
- An external link to [the Hugo documentation](https://gohugo.io/documentation/).
- An absolute link to [this same site](https://manyu.now/writing/), which should look internal.
- An email link to [someone@example.com](mailto:someone@example.com).

<!--- A bare autolinked URL: <https://example.com/a/very/long/path/that/might/not/wrap/nicely/at/narrow/widths>.-->

A link in the middle of a sentence, like [this one](/keyboard/), shows whether the underline offset and color sit well within running text, and whether [a link that runs long enough to break across two lines](https://gohugo.io/documentation/) keeps its underline intact.

## Headings

The heading levels below test size, weight, spacing above and below, and how each one relates to the text that follows it.

### Third-level heading

A short paragraph after a third-level heading.

#### Fourth-level heading

A short paragraph after a fourth-level heading.

##### Fifth-level heading

A short paragraph after a fifth-level heading.

###### Sixth-level heading

A short paragraph after a sixth-level heading.

<!--### A heading long enough that it will definitely need to wrap onto a second line at the content width-->

The line height of a wrapped heading is often too loose or too tight, and this one makes it obvious.

## Lists

An unordered list:

- First item
- Second item, which is long enough to wrap onto a second line so the hanging indent can be checked against the bullet
- Third item
  - Nested item
  - Another nested item
    - A third level of nesting
- Fourth item

An ordered list:

1. First step
2. Second step
3. Third step, with a paragraph-length explanation that wraps, so the alignment of the number against the wrapped text is visible
4. Fourth step
   1. A nested ordered item
   2. Another nested ordered item
5. A double-digit number, to check that the markers stay aligned

A list where each item is its own paragraph:

- This is a loose list, because there are blank lines between the items.

- Markdown wraps each item in a `<p>`, which often adds unexpected spacing.

- Compare it with the tight lists above.

A task list:

- [x] Done item
- [ ] Not-yet-done item
- [ ] Another open item

A definition list:

Measure
: The length of a line of text, usually counted in characters.

Leading
: The vertical space between lines of text, named after strips of lead used in metal type.

## Quotes

> A blockquote with a single short line.

> A longer blockquote that runs across several lines, to check the left border or indent, the quote's text color against the body, and how it sits between the paragraphs around it. It should feel related to the body text but clearly set apart.
>
> A second paragraph inside the same quote.
>
> — An attribution line

> An outer quote.
>
> > A quote nested inside it.

<!--## Code

Inline code like `const x = 42;` should sit on the baseline without throwing off the line height, even when it contains `a_rather_long_identifier_name`.

A fenced code block with syntax highlighting:

```js
function greet(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}
```

A block with a line long enough to overflow, to check horizontal scrolling:

```css
:root {
  --accent-10: color-mix(in oklch, var(--accent) 10%, transparent);
  --accent-60: color-mix(in oklch, var(--accent) 60%, transparent);
}
```

A block with no language set:

```
plain preformatted text
    with indentation preserved
```
-->

## Tables

| Element                                              | Default size |         Notes         |
| ---------------------------------------------------- | -----------: | :-------------------: |
| Body                                                 |         20px |  Left-aligned column  |
| Heading 2                                            |         24px | Right-aligned numbers |
| Heading 1                                            |         32px |    Centered column    |
| A row with a much longer cell that will need to wrap |         16px |  Checks cell padding  |

## Footnotes

Footnotes test the small superscript reference[^1] and the list at the bottom of the page. A second footnote[^long] has more text, to check wrapping.

[^1]: A short footnote.

[^long]: A longer footnote that runs across more than one line, so the spacing between footnotes and the alignment of wrapped footnote text can be checked. It also contains a [link](https://gohugo.io/) and some `code`.

## Media and breaks

A horizontal rule follows.

---

An image with a caption:

<figure>
  <img src="https://picsum.photos/1200/600" alt="A random placeholder photograph">
  <figcaption>A caption below the image, set in a smaller size.</figcaption>
</figure>

A collapsible section:

<details>
<summary>Click to expand</summary>

Hidden content inside a details element, with **some formatting** to check that it renders.

</details>

## Edge cases

Smart punctuation: "double quotes", 'single quotes', it's an apostrophe, an en dash in 1990--2000, an em dash---like this---and an ellipsis...

Numbers and symbols: 0123456789, 1/2, 100%, $42.00, #hashtag, @mention, & ampersand, © 2026.

A very long word that might overflow narrow screens: Pneumonoultramicroscopicsilicovolcanoconiosis.

<!--A long unbroken string: aVeryLongCamelCaseIdentifierThatHasNoSpacesAndMightBreakTheLayoutOnMobile.-->

A single-sentence paragraph.

The final paragraph closes the post, to check the space between the last element and whatever comes after the article.
