(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{552:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),s("div",{staticClass:"scrimba"},[s("a",{attrs:{href:"https://scrimba.com/p/pnyzgAP/cvp8ZkCR",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tente esta lição no Scrimba")])]),t._v(" "),s("p",[t._v("Os "),s("em",[t._v("stores")]),t._v(" do Vuex aceitam a opção "),s("em",[t._v("plugins")]),t._v(" que expõe "),s("em",[t._v("hooks")]),t._v(" para cada mutação. Um "),s("em",[t._v("plugin")]),t._v(" Vuex é simplesmente uma função que recebe um "),s("em",[t._v("store")]),t._v(" como seu único argumento:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myPlugin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("store")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// chamado quando o store é inicializado")]),t._v("\n  store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// chamada após cada mutação.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A mutação vem no formato de `{ type, payload }`.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("E pode ser usada assim:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"confirmando-ou-fazendo-commit-de-mutacoes-dentro-de-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#confirmando-ou-fazendo-commit-de-mutacoes-dentro-de-plugins"}},[t._v("#")]),t._v(" Confirmando (ou fazendo "),s("em",[t._v("commit")]),t._v(" de) Mutações Dentro de Plugins")]),t._v(" "),s("p",[s("em",[t._v("Plugins")]),t._v(" não tem permissão para alterar o estado diretamente - similar aos componentes, eles podem apenas acionar mudanças fazendo o "),s("em",[t._v("commit")]),t._v(" de mutações.")]),t._v(" "),s("p",[t._v("Por fazer "),s("em",[t._v("commit")]),t._v(" de mutações, um "),s("em",[t._v("plugin")]),t._v(" pode ser usado para sincronizar uma fonte de dados ao "),s("em",[t._v("store")]),t._v(". Por exemplo, para sincronizar uma fonte de dados "),s("em",[t._v("websocket")]),t._v(" ao "),s("em",[t._v("store")]),t._v(" (isso é só um exemplo inventado, na realidade a função "),s("em",[t._v("createPlugin")]),t._v(" pode receber parâmetros adicionais para tarefas mais complexas):")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebSocketPlugin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("socket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("store")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'receiveData'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UPDATE_DATA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebSocketPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"capturando-os-momentos-do-estado"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#capturando-os-momentos-do-estado"}},[t._v("#")]),t._v(" Capturando os Momentos do Estado")]),t._v(" "),s("p",[t._v("Às vezes, um "),s("em",[t._v("plugin")]),t._v(' pode querer receber "momentos" do estado, e também comparar o estado pós-mutação com o estado de pré-mutação. Para conseguir isso, você precisará realizar uma cópia-profunda do objeto de estado:')]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myPluginWithSnapshot")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("store")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" prevState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneDeep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nextState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneDeep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compara `prevState` e `nextState`...")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// salva o estado para a próxima mutação")]),t._v("\n    prevState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextState\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[s("em",[t._v("Plugins")]),t._v(" que capturam momentos do estado devem ser usados apenas durante o desenvolvimento.")]),t._v(" Quando usamos "),s("em",[t._v("webpack")]),t._v(" ou "),s("em",[t._v("Browserify")]),t._v(", podemos construir nossas próprias ferramentas "),s("em",[t._v("build")]),t._v(" que lidam com isso para nós:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myPluginWithSnapshot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("O "),s("em",[t._v("plugin")]),t._v(" vai ser usado por padrão. Para produção, você vai precisar do "),s("a",{attrs:{href:"https://webpack.js.org/plugins/define-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefinePlugin"),s("OutboundLink")],1),t._v(" para webpack ou "),s("a",{attrs:{href:"https://github.com/hughsk/envify",target:"_blank",rel:"noopener noreferrer"}},[t._v("envify"),s("OutboundLink")],1),t._v(" para Browserify para converter o valor do "),s("code",[t._v("process.env.NODE_ENV !== 'production'")]),t._v(" para "),s("em",[t._v("false")]),t._v(" no "),s("em",[t._v("build")]),t._v(" final.")]),t._v(" "),s("h3",{attrs:{id:"plugin-de-log-integrado"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-de-log-integrado"}},[t._v("#")]),t._v(" Plugin de Log Integrado")]),t._v(" "),s("blockquote",[s("p",[t._v("Se você está usando "),s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-devtools"),s("OutboundLink")],1),t._v(" provavelmente não precisará disso.")])]),t._v(" "),s("p",[t._v("Vuex vem com um "),s("em",[t._v("plugin")]),t._v(" de "),s("em",[t._v("log")]),t._v(" para casos comuns de depuração:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" createLogger "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex/dist/logger'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("A função "),s("em",[t._v("createLogger")]),t._v(" tem algumas opções:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" logger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  collapsed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expande automaticamente mutações registradas no log")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stateBefore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stateAfter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// retorna `true` se uma mutação deve ser registrada no log")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `mutation` é um `{ type, payload }`")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aBlocklistedMutation"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transformer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// transforma o estado antes de regitrá-lo no log.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// por exemplo, retorna apenas uma sub-árvore específica")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subTree\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mutationTransformer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mutações são registradas no log no formato de `{ type, payload }`")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mas podemos formatá-las como quisermos.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  logger"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// implementação da API `console`, default `console`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("O arquivo de "),s("em",[t._v("log")]),t._v(" também pode ser incluído diretamente via "),s("em",[t._v("tag")]),t._v(" "),s("code",[t._v("<script>")]),t._v(", e vai expor a função "),s("em",[t._v("createVuexLogger")]),t._v(" globalmente.")]),t._v(" "),s("p",[t._v("Perceba que esses "),s("em",[t._v("plugins")]),t._v(" capturam momentos do estado, então use-os apenas durante o desenvolvimento.")])])}),[],!1,null,null,null);a.default=e.exports}}]);