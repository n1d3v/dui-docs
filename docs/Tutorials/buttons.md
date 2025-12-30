---
title: Buttons!
---

Cool, you now know how to write basic DirectUI code and how to make simple stylesheets that change the font face and size, but what else can you do with DirectUI? 

DirectUI is basically a Win32 wrapper, meaning you can pretty much do anything you'd like, make a button, make a few combo boxes, make a Control Panel applet, basically everything that you can do in Win32, DirectUI can do too.

Below is an example of DirectUI code with some text and a button.

```xml
<duixml>
    <element resid="main" sheet="examplesheet" layout="borderlayout()">
        <element class="text" layoutpos="top" content="Hello world!" />
        <!-- For reference, there is a <button> element however it does not
             look like a native button and looks like a text element. -->
        <CCPushButton class="examplebuttons" layoutpos="top" content="Hello!" />
    </element>
    <stylesheets>
        <style resid="examplesheet">
            <element />
            <if class="text">
                <element fontsize="12pt" />
            </if>

            <!-- Added to look pretty, you can remove this if you'd like. -->
            <if class="examplebuttons">
                <CCPushButton fontsize="9pt" />
            </if>
        </style>
    </stylesheets>
</duixml>
```

Now that's cool and all, but extremely basic and lets be honest, no one is just writing an app with some text and a button. You of course can add more elements to your DirectUI app, for example, here's a button and a check box!

```xml
<duixml>
    <element resid="main" sheet="examplesheet" layout="borderlayout()">
        <element class="text" layoutpos="top" content="Hello world!" />
        <CCPushButton class="examplebuttons" layoutpos="top" content="Hello!" />
        <!-- The check box element is basically the same as the button element. -->
        <CCCheckBox class="examplebuttons" layoutpos="top" content="Tick me!" />
    </element>
    <stylesheets>
        <style resid="examplesheet">
            <element />
            <if class="text">
                <element fontsize="12pt" />
            </if>

            <!-- Added to look pretty, you can remove this if you'd like. -->
            <if class="examplebuttons">
                <CCPushButton fontsize="9pt" />
                <CCCheckBox fontsize="9pt" />
            </if>
        </style>
    </stylesheets>
</duixml>
```

And just for fun, you can add a radio button to your app because why not?

```xml
<duixml>
    <element resid="main" sheet="examplesheet" layout="borderlayout()">
        <element class="text" layoutpos="top" content="Hello world!" />
        <CCPushButton class="examplebuttons" layoutpos="top" content="Hello!" />
        <CCCheckBox class="examplebuttons" layoutpos="top" content="Tick me!" />
        <CCRadioButton class="examplebuttons" layoutpos="top" content="I'm a radio button!" />
    </element>
    <stylesheets>
        <style resid="examplesheet">
            <element />
            <if class="text">
                <element fontsize="12pt" />
            </if>

            <!-- Added to look pretty, you can remove this if you'd like. -->
            <if class="examplebuttons">
                <CCPushButton fontsize="9pt" />
                <CCCheckBox fontsize="9pt" />
                <CCRadioButton fontsize="9pt" />
            </if>
        </style>
    </stylesheets>
</duixml>
```

This gives you a better example on how other elements and other properties in stylesheets work, however there's way more to DirectUI to just buttons, you will get more of an example on that in later tutorials.

### Congrats!
You have made 3 types of buttons in DirectUI, along with more of how a stylesheet works with multiple elements. You can proceed to the next document.