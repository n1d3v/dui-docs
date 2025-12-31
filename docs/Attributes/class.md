---
title: Class
---

The `class` attribute is used to define an element for use with stylesheets.

### Examples
This example shows on how the push button is used with a class, along with it being styled later on.

```xml
<CCPushButton class="push_btn" content="Push button" />
```
> This creates a push button with the class of `push_btn`.

```xml
<duixml>
    <element resid="main" sheet="examplesheet" layout="borderlayout()">
        <CCPushButton class="push_btn" content="Push button" />
    </element>
    <stylesheets>
        <style resid="examplesheet">
            <element />
            <if class="push_btn">
                <CCPushButton fontsize="9pt" />
            </if>
        </style>
    </stylesheets>
</duixml>
```
> This DirectUI code shows how to define a class within stylesheets.

### Notes
There are no notes are available for `class`.