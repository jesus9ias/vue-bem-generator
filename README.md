# vue-bem-generator

Generate programmatically BEM classes with a light-weight vue plugin.

## Install
```
npm install --save vue-bem-generator
```

## Configuration
```
import VueBemGenerator from 'vue-bem-generator';

Vue.use(VueBemGenerator);
```

## Basic usage
```
<template>
  <div :class="bem()">
    <div :class="bemElem('content')">
      <button :class="bemElem('button', ['primary', 'big'])">Go Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-block',
};
</script>

// Renders
<div class="main-block">
  <div class="main-block__content">
    <button
      class="main-block__button main-block__button--primary main-block__button--big"
    >
      Go Next
    </button>
  </div>
</div>
```

## Using block name
```
<template>
  <div :class="bem()">
    Content
  </div>
</template>

<script>
export default {
  name: 'main-block',
};
</script>

// Renders
<div class="main-block">
  Content
</div>
```

If don't want to use component name, could be used block.

```
<template>
  <div :class="bem()">
    Content
  </div>
</template>

<script>
export default {
  name: 'main-block',
  block: 'section-block'
};
</script>

// Renders
<div class="section-block">
  Content
</div>
```

Also block and name would be overwritten with bem method.

```
<template>
  <div :class="bem('custom-block')">
    Content
  </div>
</template>

<script>
export default {
  name: 'main-block',
  block: 'section-block'
};
</script>

// Renders
<div class="custom-block">
  Content
</div>
```

## Using elements
```
<template>
  <div :class="bem()">
    <div :class="bemElem('content')">
      Content
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-block',
};
</script>

// Renders
<div class="main-block">
  <div class="main-block__content">
    Content
  </div>
</div>
```

Usually you don't need nested elements but it could be used by sending an array.

```
<template>
  <div :class="bem()">
    <div :class="bemElem(['content', 'subcontent'])">
      Content
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-block',
};
</script>

// Renders
<div class="main-block">
  <div class="main-block__content__subcontent">
    Content
  </div>
</div>
```

If you need an element with different block name use bem method instead bemElem (usually that means you need another component but I'm not going to judge you).

```
<template>
  <div :class="bem()">
    <div :class="bemElem('content')">
      Content
    </div>
    <div :class="bem('side-block')">
      Content
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-block',
};
</script>

// Renders
<div class="main-block">
  <div class="main-block__content">
    Content
  </div>
  <div class="side-block">
    Content
  </div>
</div>
```

On elements array, values can be disabled if used falsy values (to enable it should be used any truthy value).

```
<template>
  <div :class="bem()">
    <div :class="bemElem([content, subcontent])">
      Content
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-block',
  data() {
    return {
      content: 'content'
      subcontent: false
    };
  }
};
</script>

// Renders
<div class="main-block">
  <div class="main-block__content">
    Content
  </div>
</div>
```

## Using modifiers
```
<template>
  <div :class="bem()">
    <div :class="bemElem('content')">
      <button :class="bemElem('btn', 'primary')">Update</button>
      <button :class="bemElem('btn', ['danger', 'big'])">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-block',
};
</script>

// Renders
<div class="main-block">
  <div class="main-block__content">
    <button class="main-block__btn main-block__btn--primary">Update</button>
    <button class="main-block__btn main-block__btn--danger main-block__btn--big">Delete</button>
  </div>
</div>
```

Of course only modifiers could be used.

```
<template>
  <div :class="bemMod('fullsize')">
    <div :class="bemElem('head')">
      Head
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
};
</script>

// Renders
<div class="dialog dialog--fullsize">
  <div class="dialog__head">
    Head
  </div>
</div>
```

For modifiers an array could be used too, and in same way to elements, falsy values can disable them.

```
<template>
  <ul :class="bem()">
    <li
      v-for="(item, i) in items"
      :key="i"
      :class="bemElem('item', [item.selected])"
    >
      {{ item.value }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      items: [
        { value: 'One task', selected: false },
        { value: 'Other task', selected: true }
      ]
    };
  }
};
</script>

// Renders
<ul class="list">
  <li class="list__item">One task</li>
  <li class="list__item list__item--selected">Other task</li>
</ult>
```

Instead sending string or array for modifiers, send an object allowing you to use hyphenate notation.

```
<template>
  <div :class="bemMod({size: 'fullsize', type: 'confirm'})">
    <div :class="bemElem('head')">
      Head
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
};
</script>

// Renders
<div class="dialog dialog--size-fullsize dialog--type-confirm">
  <div class="dialog__head">
    Head
  </div>
</div>
```

## Api

#### bem(block, element, modifiers)

Defines BEM class with all 3 optional parameters. If no one is sent, block name is set with block or name component value.

#### bemElem(element, modifiers)

Set BEM element and modifiers without overwriting block name.

#### bemMod(modifiers)

Set BEM modifiers without overwriting block name.

#### Parameters definition

|Parameter        |Type                  |Description                                |
|-----------------|----------------------|-------------------------------------------|
|block            |string                |Overwrite block and name component value   |
|element          |string, array         |Define class element value                 |
|modifiers        |string, array, object |Define modifiers for current block/element |

## Contribution

All pull requests and suggestions are welcome.
