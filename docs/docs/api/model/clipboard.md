---
title: Clipboard
sidebar_position: 14
---

> **@types** [IPublicModelClipboard](https://github.com/alibaba/lowcode-engine/blob/main/packages/types/src/shell/model/clipboard.ts)<br/>
> **@since** v1.1.0

## Method

### setData

Assign value to the clipboard

```typescript
/**
 * 给剪贴板赋值
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
 * 设置剪贴板数据设置的回调
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
