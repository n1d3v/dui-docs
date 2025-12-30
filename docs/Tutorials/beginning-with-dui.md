---
title: Beginning with DirectUI
---

### Downloading the necessary tools
To actually write up DirectUI, you need [Leet's DUI Toolkit](https://github.com/leetftw/Leet.UI.DuiKit), specifically the notepad in the releases. This provides a real-time preview of your markup and if there's an error, it tells you where and how.

Once you've downloaded the tool, you can proceed to the next section.

### Trying out DirectUI
In DirectUI, pages always start with a `<duixml>` element and end with a `</duixml>`, just like HTML's `<html>` and `</html>` system. However, you also need something called an `<element>` which in DirectUI is used for multiple purposes, you'll see this coming up. To make a valid page, it would go along the lines of:

```xml
<duixml>
    <!-- resid="main" is used to reference an ID for stylesheets and elements -->
        <!-- Also the DirectUI doesn't compile if it isn't "main", atleast in DUI Notepad. -->
    <!-- layout="borderlayout()" seems to be related to layout postion (?) -->
    <element resid="main" layout="borderlayout()">
        <!-- Content, I'm also a way to teach you how to comment in DirectUI! -->
    </element>
</duixml>
```

You can see in this example that element is the main layout / body of the page, just like HTML. However, in DirectUI you do not need a `<head>` like in HTML.

### Rendering text in DirectUI
In DirectUI, text is drawn using the `<element>` element, so if you'd like to render any text at all, it would go something like this:

```xml
<duixml>
    <element resid="main" layout="borderlayout()">
        <element class="text" layoutpos="top" content="Hello world!" />
    </element>
</duixml>
```

However, `<element>` has many other purposes other than rendering text, as we described earlier.

### Congrats!
You can now make a basic page and render text in DirectUI! Wasn't so hard right? Now you can continue with the next example, or take a look at the elements in the 'Elements' section of the sidebar.