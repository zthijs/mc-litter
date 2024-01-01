## Mc Litter 2021
Bypass the McDonald's December calendar and complete all games on day 1

```typescript
export const toAppLink = (id : number) => {
    const templateUnlock = "https://x-masters.mcdonaldsnederland.app/unlock/";
    const templatePhone = "gmalite://gmalite-smartweb?weburl=";
    const enc = encodeURIComponent;
    return templatePhone + enc(`${templateUnlock}${id}`);
}
```

![image](https://github.com/zthijs/mc-litter/assets/56317280/aef7aff6-0964-431c-8bc7-910030dd4e10)
