---
title: GetThemeColor (gtc)
---

The `gtc` attribute is used to get a color from the main .msstyles / theme of the system.

### Examples
In this example, it shows an element getting it's foreground (text color) from the ControlPanelStyle (ID 5)

```xml
<element content="Hello world!" foreground="gtc(CONTROLPANELSTYLE, 5, 0, 3803)" />
```

### Notes
- You need to find the styles yourself in the system .msstyles. This can be done by downloading [msstyleEditor](https://github.com/nptr/msstyleEditor) and going to `%windir%\Resources\aero` to find your .msstyles (usually `aero.msstyles`) and you have to look for something like ControlPanelStyle.