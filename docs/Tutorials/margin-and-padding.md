---
title: Margins and padding
---

You've learnt a lot of DirectUI in just 4 tutorials, however we still have a long way to go, especially with making your DirectUI output look aesthetically pleasing, like official Microsoft Control Panel applets. One of the things crucial to achieve this goal is using margin and padding.

Margin and padding is necessary to make anything look good, even apart from DirectUI. If you didn't have any of those elements, your page would be squished together and would look like a hackjob.

You might be asking, what is the difference between margin and padding?

- Margin: The space outside of an element, pushes the element outwards
- Padding: The space inside of an element, pushes the element inwards

The best way to display the difference between margin and padding is this example, you can tell by the color of the background what the difference is.

![Preview of margins](/img/Previews/margin-and-padding/margin-prev.png)

> Preview of margins (24rp, 18rp, 24rp, 18rp)

![Preview of padding](/img/Previews/margin-and-padding/padding-prev.png)

> Preview of padding (24rp, 18rp, 24rp, 18rp)

### Using margin and padding in DirectUI
To use margin in your DirectUI element, it'd look something like this:

```xml
<element layoutpos="top" content="Hello!" margin="rect(0rp, 0rp, 0rp, 0rp)" />
```

> The margin and padding syntax is `rect(LEFT, TOP, RIGHT, BOTTOM)`

The same way it goes for padding, just replace margin with padding.

### Congrats!
You have now learned how to use margins and padding in your DirectUI code, this will make a huge improvement to the way your output looks in the end. You can now proceed to the next document.