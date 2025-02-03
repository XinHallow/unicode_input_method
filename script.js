/**
 * 创建基本的按钮
 * @param {string} id 按钮的id
 * @param {Function} callback 监听到点击按钮的回调函数
 * @param {string[]} className 类名
 * @returns {HTMLButtonElement}
 */
function createNormalButton(className, content, callback) {
  let btn = document.createElement("button");
  btn.type = "button";
  btn.classList.add(...className);
  btn.textContent = content;
  btn.addEventListener("click", callback);
  return btn;
}

/**
 * 创建并渲染输入使用的按钮
 */
function renderButton() {
  let root = doms.buttonRenderingPosition;
  let fragment = document.createDocumentFragment();
  // 常规按钮
  for (let i = 0; i < 16; i++) {
    let btn = createNormalButton(
      normalButtonsClassList,
      allHEX[i],
      function () {
        inputArray.push(allHEX[i]);
      }
    );
    fragment.appendChild(btn);
  }
  // 退格
  fragment.appendChild(
    (function () {
      let btn = createNormalButton(
        normalButtonsClassList,
        "Backspace",
        function () {
          inputArray.pop();
        }
      );
      return btn;
    })()
  );
  // 清空
  fragment.appendChild(
    (function () {
      let btn = createNormalButton(
        normalButtonsClassList,
        "Clear",
        function () {
          inputArray = [];
        }
      );
      return btn;
    })()
  );
  // 确认
  fragment.appendChild(
    (function () {
      let btn = createNormalButton(
        specialButtonsClassList,
        "Enter",
        function () {
          inputValue = parseInt(inputArray.join(""), 16);

          if (1114111 >= inputValue > 65535) {
            newCharacter = String.fromCharCode(inputValue);
          } else if (0 <= inputValue <= 63335) {
            newCharacter = String.fromCodePoint(inputValue);
          }
          characterArray.push(newCharacter);
          inputArray = [];
        }
      );
      return btn;
    })()
  );

  // 最后添加至需要渲染的根节点
  root.appendChild(fragment);
  console.log(`成功创建按钮`);
}

/**
 * 创建并渲染待选项
 */
function renderChoice() {
  let root = doms.displayChoicePosition;
  let p = (() => {
    let dom = document.createElement("p");
    dom.className = "m-0";
    dom.textContent = "暂未实现待选项功能";
    return dom;
  })();
  root.appendChild(p);
}

/**
 * 创建并渲染结果菜单栏
 */
function renderResult() {
  let root = doms.displayResultPosition;
  let divP = (() => {
    let dom = document.createElement("div");
    dom.classList.add(...["container-fluid", "border", "p-2"]);
    dom.appendChild(
      (() => {
        let dom = document.createElement("p");
        dom.classList.add("m-0");
        dom.textContent = "请输入Unicode码获取文字";

        document.addEventListener("click", () => {
          if (characterArray.length !== 0) {
            dom.textContent = characterArray.join("");
          } else {
            dom.textContent = "请输入Unicode码获取文字";
          }
        });
        return dom;
      })()
    );
    return dom;
  })();
  let container = (() => {
    let div = (() => {
      let dom = document.createElement("div");
      dom.classList.add(...["row", "border"]);
      let backspaceButton = createNormalButton(
        normalButtonsClassList,
        "Backspace",
        () => {
          characterArray.pop();
        }
      );
      let clearButton = createNormalButton(
        normalButtonsClassList,
        "Clear",
        () => {
          characterArray = [];
        }
      );
      dom.appendChild(backspaceButton);
      dom.appendChild(clearButton);
      return dom;
    })();
    let dom = document.createElement("div");
    dom.classList.add(...["container-fluid", "border"]);
    dom.appendChild(div);
    return dom;
  })();

  root.appendChild(divP);
  root.appendChild(container);
}

/**
 * 创建并渲染输入栏
 */
function renderInput() {
  let root = doms.displayInputPosition;
  let contextP = (() => {
    let dom = document.createElement("p");
    dom.classList.add("m-0");
    dom.textContent = "\\u ";
    return dom;
  })();

  root.appendChild(contextP);

  document.addEventListener("click", () => {
    contextP.textContent = "\\u " + inputArray.join("");
  });
}

renderInput();
renderButton();
renderResult();
renderChoice();
