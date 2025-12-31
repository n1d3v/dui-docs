---
title: GetThemeFont (gtf)
---

The `gtf` attribute is used to get a font from the main .msstyles / theme of the system.

### Examples
In this example, it shows an element getting it's font from the ControlPanelStyle (ID 5)

```xml
<element content="Hello world!" font="gtf(CONTROLPANELSTYLE, 5, 0)" />
```

### Notes
- You need to find the styles yourself in the system .msstyles. This can be done by downloading [msstyleEditor](https://github.com/nptr/msstyleEditor) and going to `%windir%\Resources\aero` to find your .msstyles (usually `aero.msstyles`) and you have to look for something like ControlPanelStyle.