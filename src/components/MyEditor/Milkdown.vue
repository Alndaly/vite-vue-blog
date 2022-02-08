<template>
  <div id="editor"><VueEditor :editor="editor" /></div>
</template>

<script>
import {
  defaultValueCtx,
  Editor,
  editorViewCtx,
  editorViewOptionsCtx,
  rootCtx,
} from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { VueEditor, useEditor } from "@milkdown/vue";
import { clipboard } from "@milkdown/plugin-clipboard";
import { emoji } from "@milkdown/plugin-emoji";
import { prism } from "@milkdown/plugin-prism";
import { history } from "@milkdown/plugin-history";
import { cursor } from "@milkdown/plugin-cursor";
import { math } from "@milkdown/plugin-math";
import { slash } from "@milkdown/plugin-slash";
import { tooltip } from "@milkdown/plugin-tooltip";
import { gfm } from "@milkdown/preset-gfm";
import { upload } from "@milkdown/plugin-upload";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { diagram } from "@milkdown/plugin-diagram";
import { menu } from "@milkdown/plugin-menu";
export default {
  name: "Milkdown",
  components: {
    VueEditor,
  },
  setup: () => {
    const readOnly = false;
    const editor = useEditor((root) =>
      Editor.make()
        .config((ctx) => {
          ctx.set(rootCtx, document.querySelector("#editor"));
          ctx.set(editorViewOptionsCtx, { editable: () => !readOnly });
          ctx.set(
            defaultValueCtx,
            `>给了不起的人，一些了不起的工具，让他们去做一些了不起的事情。`
          );
        })
        .use(nord)
        .use(emoji)
        .use(gfm)
        .use(history)
        .use(clipboard)
        .use(prism)
        .use(cursor)
        .use(math)
        .use(slash)
        .use(tooltip)
        .use(upload)
        .use(diagram)
        .use(menu())
    );
    return {
      editor,
    };
  },
};
</script>
<style scoped></style>
