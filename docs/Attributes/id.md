---
title: ID (Atom)
---

The `id` attribute is used to define an element in code (C++).

### Examples
In this example, It will show the DirectUI code to show the element and the C++ code to open a message box when you click on the element.

```xml
<!-- atom() is used inside of the ID attribute to define the ID of the element. -->
<CCPushButton id="atom(PushBtn)" content="Push button" />
```
> This DirectUI code creates a push button with the ID of PushBtn.

```cpp
if (iev->peTarget->GetID() == StrToID(L"PushBtn")) {
    if (iev->uidType == PushButton::Click) {
        MessageBox(
            NULL,
            L"Hello from DirectUI!",
            L"DirectUI Documentation",
            MB_OK | MB_ICONINFORMATION
        );
    }
}
```
> This C++ code uses the ID we made earlier to find the element, then use the uidType of `PushButton::Click` to find if the element was clicked or not, then if it was, it'll spawn a message box.

### Notes
- You **need** to use `atom()` inside of the ID, otherwise your Control Panel applet will fail to load.