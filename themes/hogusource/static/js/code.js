document.addEventListener("DOMContentLoaded", () => {

  function enhanceCodeBlocks() {
    document.querySelectorAll("pre").forEach((pre) => {

      // 子が <code> のみの場合だけ実行（内側の <pre><code> をスキップ）
      const onlyChild = pre.firstElementChild;

      if (!onlyChild) return;                           // 空は無視
      if (onlyChild.tagName.toLowerCase() !== "code") return; // code 以外は無視
      if (pre.closest(".code-wrapper")) return;         // すでに加工済

      const code = onlyChild;

      // wrapper
      const wrapper = document.createElement("div");
      wrapper.className = "code-wrapper card-glass";

      // header
      const header = document.createElement("div");
      header.className = "code-header";

      const lang =
        [...code.classList].find(c => c.startsWith("language-"))
          ?.replace("language-", "") || "markdown";

      const label = document.createElement("span");
      label.className = "lang-label";
      label.textContent = lang;

      const copyBtn = document.createElement("button");
      copyBtn.className = "copy-btn";
      copyBtn.innerHTML = "⧉";
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(code.innerText);
        copyBtn.innerHTML = "✔";
        setTimeout(() => (copyBtn.innerHTML = "⧉"), 1200);
      });

      header.append(label, copyBtn);

      // body
      const body = document.createElement("div");
      body.className = "code-body";

      // pre を clone して入れる（循環問題回避）
      const clonedPre = pre.cloneNode(true);
      body.appendChild(clonedPre);

      wrapper.append(header, body);

      // 元の pre を wrapper に置換
      pre.replaceWith(wrapper);

    });
  }

  enhanceCodeBlocks();
});
