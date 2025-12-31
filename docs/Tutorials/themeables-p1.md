---
title: Themeables (Part 1)
---

So far, we have done 3 tutorials about DirectUI, learning how to make a page and render some text, learning how to make stylesheets using the `sheet` property and how to change font face and size and learning how to make 3 types of buttons.

However, what if you wanted to grab colors from the host computer to use for your text? This is where themeables come in handy.

The syntax for a themeable goes something like this, lets say we want `GetThemeFont` themeable for our CCPushButton:

```xml
<CCPushButton font="gtf(className, partID, stateID)" />
```

Basically, in this snippet it will fetch the font from the `className` defined in the .msstyles, the `partID` is the specific part in that class and the `stateID` is the state of the part.

A working example of this in the Control Panel is:

```xml
<CCPushButton font="gtf(CONTROLPANELSTYLE, 14, 0)" />
```

This basically does what we did earlier with the 9pt font size on the button. You can look at more of the styles if you dig deeper into your main .msstyles file in Windows.

Cool, you know how to get a font from your main Windows theme, but what else can you do? That is kind of useless on it's own, so lets try getting the font and the color in the same element!

Lets make a simple element that just says "Hello world!" for now:

```xml
<duixml>
    <element resid="main" layout="borderlayout()">
        <element layoutpos="top" content="Hello world!" />
    </element>
</duixml>
```

Now, lets say we want to make it look like the title of a Control Panel applet, lets first get the theme font like we practiced earlier:

```xml
<duixml>
    <element resid="main" layout="borderlayout()">
        <element layoutpos="top" content="Hello world!" font="gtf(CONTROLPANELSTYLE, 5, 0)" />
    </element>
</duixml>
```

> The partID 5 in our .msstyles is defined as "TITLE" in ControlPanelStyle.

Now, we are half way there but now we need to get the color of the text right for a Control Panel applet, now we have to learn about `GetThemeColor`.

To define the text color of the element in the first place, we need to use a `foreground` attribute which would look something like this:

```xml
<element layoutpos="top" content="Hello world!" foreground="argb(0, 0, 42, 156)" />
```

This sets the ARGB value to `0, 0, 42, 156` for the text and makes it look blue.

Now what if we try using `GetThemeColor`, well it would look something like this:

```xml
<element layoutpos="top" content="Hello world!" foreground="gtc(CONTROLPANELSTYLE, 5, 0, 3803)" />
```

> For reference, ID 3803 at the end is the generic ID for a text color property in the .msstyles file.

Now that has the color of a title in Control Panel, but they are no good separated, so lets combine them like this:

```xml
<duixml>
    <element resid="main" layout="borderlayout()">
        <element layoutpos="top" content="Hello world!" foreground="gtc(CONTROLPANELSTYLE, 5, 0, 3803)" font="gtf(CONTROLPANELSTYLE, 5, 0)" />
    </element>
</duixml>
```

And there you have it! You have a Control Panel applet style title with just theme elements!

There is a lot more you can do with themeables, like drawing backgrounds, getting theme margins for elements, getting part sizes, etc. These will come up in future tutorials for themeables, as this is only part 1 of it.

### Congrats!
You now know how to get a color and a font from the system theme, you will most definitely be using these throughout your span of DirectUI development to help out. You can now proceed to the next document.