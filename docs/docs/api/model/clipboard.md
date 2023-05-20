---
title: Clipboard
sidebar_position: 14
---

> **@types** [IPublicModelClipboard](https://github.com/samkenxstream/SAMkenxlowcode-engine/blob/main/packages/types/src/shell/model/clipboard.ts)<br/>
> **@since** v1.1.0

## Method

### setData

Assign value to the clipboard

```typescript
/**
 * assign value to the clipboard
 * set data to clipboard
 *
 * @param {*} data
 * @since v1.1.0
 */
setData(data: any): void;
```

### waitPasteData

Callback for setting clipboard data settings

```typescript
/**
 * set the callback for clipboard data settings
 * set callback for clipboard provide paste data
 *
 * @param {KeyboardEvent} keyboardEvent
 * @param {(data: any, clipboardEvent: ClipboardEvent) => void} cb
 * @since v1.1.0
 */
waitPasteData(
    keyboardEvent: KeyboardEvent,
    cb: (data: any, clipboardEvent: ClipboardEvent) => void,
  ): void;
```
