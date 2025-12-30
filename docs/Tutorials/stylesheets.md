---
title: Stylesheets
---

### What are stylesheets?
Stylesheets in DirectUI is basically the same concept as it is in CSS, a way to define elements to have certain properties like font size, font family rather than define it in the element.

### How can I use them?
Here's a small example of DirectUI code using a stylesheet to make a text element's font size 12pt.

```xml
<duixml>
    <!-- You can see compared to the previous document, we have a new property called "sheet". -->
    <!-- This allows for stylesheets to hook onto that element. -->
    <element resid="main" sheet="examplesheet" layout="borderlayout()">
        <element class="text" layoutpos="top" content="Hello world!" />
    </element>
    <stylesheets>
        <!-- As you can see, we reused the "examplesheet" name from the sheet property in our element. -->
        <style resid="examplesheet">
            <element />
            <!-- Conditional statements are used to define elements from the classes instead of dots in CSS. -->
            <!-- There will be more on conditional statements later in the documentation. -->
            <if class="text">
                <element fontsize="12pt" />
            </if>
        </style>
    </stylesheets>
</duixml>
```

You can also change the font of a text element. This example changes the font to Segoe UI.

```xml
<duixml>
    <element resid="main" sheet="examplesheet" layout="borderlayout()">
        <element class="text" layoutpos="top" content="Hello world!" />
    </element>
    <stylesheets>
        <style resid="examplesheet">
            <element />
            <if class="text">
                <element fontsize="12pt" />
                <element fontface="Segoe UI" />
            </if>
        </style>
    </stylesheets>
</duixml>
```

### Congrats!
You have used stylesheets for the first time in DirectUI, there will be more on them later once you learn more about how DirectUI works and on how to use it. You can continue to the next document.