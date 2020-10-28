(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{571:function(t,s,n){"use strict";n.r(s);var e=n(42),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"структура-приложения"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#структура-приложения"}},[t._v("#")]),t._v(" Структура приложения")]),t._v(" "),n("p",[t._v("В действительности Vuex не накладывает каких-то значительных ограничений на используемую структуру кода. Однако, он требует соблюдения нескольких высокоуровневых принципов:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Глобальное состояние приложения должно содержаться в глобальном хранилище;")])]),t._v(" "),n("li",[n("p",[t._v("Единственным механизмом изменения этого состояния являются "),n("strong",[t._v("мутации")]),t._v(", являющиеся синхронными транзакциями;")])]),t._v(" "),n("li",[n("p",[t._v("Асинхронные операции инкапсулируются в "),n("strong",[t._v("действия")]),t._v(" или их комбинации.")])])]),t._v(" "),n("p",[t._v("Покуда вы следуете этим правилам, можно использовать любую структуру проекта. Если ваш файл хранилища становится слишком большим, просто начните выносить действия, мутации и геттеры в отдельные файлы.")]),t._v(" "),n("p",[t._v("Для любого нетривиального приложения скорее всего понадобится использование модулей. Вот пример возможной структуры проекта:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("├── index.html\n├── main.js\n├── api\n│   └── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# абстракции для выполнения запросов к API")]),t._v("\n├── components\n│   ├── App.vue\n│   └── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n└── store\n    ├── index.js          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# здесь мы собираем модули и экспортируем хранилище")]),t._v("\n    ├── actions.js        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# корневые действия")]),t._v("\n    ├── mutations.js      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# корневые мутации")]),t._v("\n    └── modules\n        ├── cart.js       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# модуль корзины")]),t._v("\n        └── products.js   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# модуль товаров")]),t._v("\n")])])]),n("p",[t._v("Для справки можно использовать "),n("a",{attrs:{href:"https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart",target:"_blank",rel:"noopener noreferrer"}},[t._v("пример корзины покупок"),n("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=a.exports}}]);