(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{542:function(t,e,a){"use strict";a.r(e);var s=a(42),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"referencia-da-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#referencia-da-api"}},[t._v("#")]),t._v(" Referência da API")]),t._v(" "),a("h2",{attrs:{id:"vuex-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store"}},[t._v("#")]),t._v(" Vuex.Store")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"vuex-store-opcoes-do-construtor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store-opcoes-do-construtor"}},[t._v("#")]),t._v(" Vuex.Store Opções do Construtor")]),t._v(" "),a("h3",{attrs:{id:"estado"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estado"}},[t._v("#")]),t._v(" estado")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type: "),a("code",[t._v("Object | Function")])]),t._v(" "),a("p",[t._v("O objeto raiz de estado para o "),a("em",[t._v("store")]),t._v(" Vuex. "),a("RouterLink",{attrs:{to:"/ptbr/guide/state.html"}},[t._v("Detalhes")])],1),t._v(" "),a("p",[t._v("Se você passar uma função que retorna um objeto, o objeto retornado é usado como o estado da raiz. Isso é útil quando você deseja reutilizar o objeto de estado, especialmente para reutilização de módulos. "),a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html#reutilizacao-do-modulo"}},[t._v("Detalhes")])],1)])]),t._v(" "),a("h3",{attrs:{id:"mutacoes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutacoes"}},[t._v("#")]),t._v(" mutações")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type: "),a("code",[t._v("{ [type: string]: Function }")])]),t._v(" "),a("p",[t._v("Registra mutações no "),a("em",[t._v("store")]),t._v(". A função do manipulador sempre recebe "),a("code",[t._v("estado")]),t._v(" como o 1º argumento (será o estado local do módulo se definido em um módulo) e receberá um 2º argumento "),a("em",[t._v("payload")]),t._v(" se houver um.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ptbr/guide/mutations.html"}},[t._v("Detalhes")])],1)])]),t._v(" "),a("h3",{attrs:{id:"acoes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acoes"}},[t._v("#")]),t._v(" ações")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type: "),a("code",[t._v("{ [type: string]: Function }")])]),t._v(" "),a("p",[t._v("Registra ações no "),a("em",[t._v("store")]),t._v(". A função do manipulador recebe um objeto "),a("em",[t._v("context")]),t._v(" que expõe as seguintes propriedades:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o mesmo que `store.state`, ou estado local se estiver em módulos")]),t._v("\n  rootState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o mesmo que `store.state`, apenas em módulos")]),t._v("\n  commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o mesmo que `store.commit`")]),t._v("\n  dispatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o mesmo que `store.dispatch`")]),t._v("\n  getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o mesmo que `store.getters`, ou com getters locais se estiver em módulos")]),t._v("\n  rootGetters "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o mesmo que `store.getters`, apenas em módulos")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("E também recebe um 2º argumento "),a("em",[t._v("payload")]),t._v(" se houver um.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ptbr/guide/actions.html"}},[t._v("Detalhes")])],1)])]),t._v(" "),a("h3",{attrs:{id:"getters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getters"}},[t._v("#")]),t._v(" getters")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type: "),a("code",[t._v("{ [key: string]: Function }")])]),t._v(" "),a("p",[t._v("Registra "),a("em",[t._v("getters")]),t._v(" no "),a("em",[t._v("store")]),t._v(". A função "),a("em",[t._v("getter")]),t._v(" recebe os seguintes argumentos:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("state,     // será estado local do módulo se definido em um módulo.\ngetters    // o mesmo que store.getters\n")])])]),a("p",[t._v("Específico quando definido em um módulo")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("state,       // será estado local do módulo se definido em um módulo.\ngetters,     // módulo de getters locais do módulo atual\nrootState,   // estado global\nrootGetters  // todos os getters\n")])])]),a("p",[t._v("Os "),a("em",[t._v("getters")]),t._v(" registrados estão expostos em "),a("em",[t._v("store.getters")]),t._v(".")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ptbr/guide/getters.html"}},[t._v("Detalhes")])],1)])]),t._v(" "),a("h3",{attrs:{id:"modulos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modulos"}},[t._v("#")]),t._v(" módulos")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type: "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("Um objeto contendo sub módulos a serem incorporados no "),a("em",[t._v("store")]),t._v(", de forma que:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    namespaced"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mutations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    actions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    getters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Cada módulo pode conter "),a("code",[t._v("estado")]),t._v(" e "),a("code",[t._v("mutações")]),t._v(" semelhantes às opções raiz. O estado de um módulo será anexado ao estado da raiz do "),a("em",[t._v("store")]),t._v(" usando a chave do módulo. As mutações e "),a("em",[t._v("getters")]),t._v(" de um módulo receberão apenas o estado local do módulo como o 1º argumento em vez do estado da raiz e as ações do módulo "),a("em",[t._v("context.state")]),t._v(" também apontarão para o estado local.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html"}},[t._v("Detalhes")])],1)])]),t._v(" "),a("h3",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type: "),a("code",[t._v("Array<Function>")])]),t._v(" "),a("p",[t._v("Um "),a("em",[t._v("Array")]),t._v(" de funções de plug-in a serem aplicadas no "),a("em",[t._v("store")]),t._v(". O plug-in simplesmente recebe o "),a("em",[t._v("store")]),t._v(" como o único argumento e pode ouvir mutações (para persistência de dados de saída, registro ou depuração) ou mutações de despacho (para dados de entrada, por exemplo, websockets ou "),a("em",[t._v("observables")]),t._v(").")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ptbr/guide/plugins.html"}},[t._v("Detalhes")])],1)])]),t._v(" "),a("h3",{attrs:{id:"strict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strict"}},[t._v("#")]),t._v(" strict")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type: "),a("code",[t._v("boolean")])])]),t._v(" "),a("li",[a("p",[t._v("default: "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Força o "),a("em",[t._v("store")]),t._v(" Vuex em modo estrito. No modo estrito, qualquer mutação ao estado do Vuex fora dos manipuladores de mutação acusará um erro.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ptbr/guide/strict.html"}},[t._v("Detalhes")])],1)])]),t._v(" "),a("h3",{attrs:{id:"devtools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devtools"}},[t._v("#")]),t._v(" devtools")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type: "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Ative ou desative as ferramentas de desenvolvedor para uma determinada instância vuex. Passar "),a("em",[t._v("false")]),t._v(" à instância diz ao "),a("em",[t._v("store")]),t._v(" Vuex para não se integrar ao "),a("em",[t._v("devtools")]),t._v(". Útil para quando se tem vários "),a("em",[t._v("stores")]),t._v(" em uma "),a("em",[t._v("single page")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  devtools"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"vuex-store-propriedades-da-instancia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store-propriedades-da-instancia"}},[t._v("#")]),t._v(" Vuex.Store Propriedades da Instância")]),t._v(" "),a("h3",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" state")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type: "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("O estado raiz. Apenas leitura.")])])]),t._v(" "),a("h3",{attrs:{id:"getters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getters-2"}},[t._v("#")]),t._v(" getters")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type: "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("Expõe os "),a("em",[t._v("getters")]),t._v(" registrados. Apenas leitura.")])])]),t._v(" "),a("h2",{attrs:{id:"vuex-store-metodos-da-instancia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store-metodos-da-instancia"}},[t._v("#")]),t._v(" Vuex.Store Métodos da Instância")]),t._v(" "),a("h3",{attrs:{id:"commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[t._v("#")]),t._v(" commit")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("commit(type: string, payload?: any, options?: Object)")])]),t._v(" "),a("li",[a("code",[t._v("commit(mutation: Object, options?: Object)")])])]),t._v(" "),a("p",[t._v("Confirma (ou faz um "),a("em",[t._v("Commit")]),t._v(" de) uma mutação. "),a("em",[t._v("options")]),t._v(" pode ter "),a("em",[t._v("root: true")]),t._v(" que permite confirmar mutações da raiz em "),a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html#namespacing"}},[t._v("módulos namespaced")]),t._v(". "),a("RouterLink",{attrs:{to:"/ptbr/guide/mutations.html"}},[t._v("Detalhes")])],1),t._v(" "),a("h3",{attrs:{id:"dispatch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dispatch"}},[t._v("#")]),t._v(" dispatch")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("dispatch(type: string, payload?: any, options?: Object): Promise<any>")])]),t._v(" "),a("li",[a("code",[t._v("dispatch(action: Object, options?: Object): Promise<any>")])])]),t._v(" "),a("p",[t._v("Despacha uma ação. "),a("em",[t._v("options")]),t._v(" pode ter "),a("em",[t._v("root: true")]),t._v(" que permite despachar ações para raiz em "),a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html#namespacing"}},[t._v("módulos namespaced")]),t._v(". Retorna um "),a("em",[t._v("Promise")]),t._v(" que resolve todos os manipuladores de ação acionados. "),a("RouterLink",{attrs:{to:"/ptbr/guide/actions.html"}},[t._v("Detalhes")])],1),t._v(" "),a("h3",{attrs:{id:"replacestate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacestate"}},[t._v("#")]),t._v(" replaceState")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("replaceState(state: Object)")])])]),t._v(" "),a("p",[t._v("Substitua o estado da raiz do "),a("em",[t._v("store")]),t._v(". Use isso apenas para fins de "),a("em",[t._v("hydration")]),t._v(" / "),a("em",[t._v("time-travel")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("watch(fn: Function, callback: Function, options?: Object): Function")])])]),t._v(" "),a("p",[t._v("Visualiza de forma reativa um valor de retorno de "),a("code",[t._v("fn")]),t._v(", e chama o "),a("em",[t._v("callback")]),t._v(" para o retorno de chamada quando o valor for alterado. O "),a("code",[t._v("fn")]),t._v(" recebe o estado do "),a("em",[t._v("store")]),t._v(" como o 1º argumento, e os "),a("em",[t._v("getters")]),t._v(" como o 2º argumento. Aceita um objeto de opções opcional que leva as mesmas opções que o método "),a("em",[t._v("vm.$watch")]),t._v(" do Vue.")]),t._v(" "),a("p",[t._v("Para parar um "),a("em",[t._v("watch")]),t._v(", chame a função "),a("em",[t._v("unwatch")]),t._v(" retornada.")]),t._v(" "),a("h3",{attrs:{id:"subscribe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribe"}},[t._v("#")]),t._v(" subscribe")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("subscribe(handler: Function): Function")])])]),t._v(" "),a("p",[t._v("Assina as mutações do "),a("em",[t._v("store")]),t._v(". O "),a("code",[t._v("manipulador")]),t._v(" é chamado após cada mutação e recebe o descritor de mutação e o estado pós-mutação como argumentos:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Para cancelar a assinatura, chame a função "),a("em",[t._v("unsubscribe")]),t._v(" retornada.")]),t._v(" "),a("p",[t._v("Mais comumente usado em plugins. "),a("RouterLink",{attrs:{to:"/ptbr/guide/plugins.html"}},[t._v("Detalhes")])],1),t._v(" "),a("h3",{attrs:{id:"subscribeaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribeaction"}},[t._v("#")]),t._v(" subscribeAction")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("subscribeAction(handler: Function): Function")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Novo na 2.5.0")])]),t._v(" "),a("p",[t._v("Assina as ações do "),a("em",[t._v("store")]),t._v(". O "),a("code",[t._v("manipulador")]),t._v(" é chamado para cada ação despachada e recebe o descritor de ação e o estado atual do "),a("em",[t._v("store")]),t._v(" como argumentos:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Para cancelar a assinatura, chame a função "),a("em",[t._v("unsubscribe")]),t._v(" retornada.")]),t._v(" "),a("blockquote",[a("p",[t._v("Novo em 3.1.0")])]),t._v(" "),a("p",[t._v("A partir da 3.1.0, "),a("code",[t._v("subscribeAction")]),t._v(" também pode especificar se o manipulador do "),a("em",[t._v("subscribe")]),t._v(" deve ser chamado "),a("em",[t._v("antes de")]),t._v(" ou "),a("em",[t._v("depois de")]),t._v(" um despacho de ação (o comportamento padrão é "),a("em",[t._v("antes")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("antes da action ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("after")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("depois da action ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Mais comumente usado em plugins. "),a("RouterLink",{attrs:{to:"/ptbr/guide/plugins.html"}},[t._v("Detalhes")])],1),t._v(" "),a("h3",{attrs:{id:"registermodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registermodule"}},[t._v("#")]),t._v(" registerModule")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("registerModule(path: string | Array<string>, module: Module, options?: Object)")])])]),t._v(" "),a("p",[t._v("Registra um módulo dinâmico. "),a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html#registro-de-modulo-dinamico"}},[t._v("Detalhes")])],1),t._v(" "),a("p",[a("em",[t._v("options")]),t._v(" can have "),a("em",[t._v("preserveState: true")]),t._v(" que permite preservar o estado anterior. Útil com renderização do lado do servidor ("),a("em",[t._v("server-side-rendering")]),t._v(").")]),t._v(" "),a("h3",{attrs:{id:"unregistermodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unregistermodule"}},[t._v("#")]),t._v(" unregisterModule")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("unregisterModule(path: string | Array<string>)")])])]),t._v(" "),a("p",[t._v("Cancela o registro de um módulo dinâmico. "),a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html#registro-de-modulo-dinamico"}},[t._v("Detalhes")])],1),t._v(" "),a("h3",{attrs:{id:"hotupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotupdate"}},[t._v("#")]),t._v(" hotUpdate")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("hotUpdate(newOptions: Object)")])])]),t._v(" "),a("p",[t._v("Faz "),a("em",[t._v("Hot")]),t._v(" "),a("em",[t._v("swap")]),t._v(" de novas ações e mutações. "),a("RouterLink",{attrs:{to:"/ptbr/guide/hot-reload.html"}},[t._v("Detalhes")])],1),t._v(" "),a("h2",{attrs:{id:"metodos-auxiliares-dos-componentes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metodos-auxiliares-dos-componentes"}},[t._v("#")]),t._v(" Métodos Auxiliares dos Componentes")]),t._v(" "),a("h3",{attrs:{id:"mapstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapstate"}},[t._v("#")]),t._v(" mapState")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("mapState(namespace?: string, map: Array<string> | Object<string | function>): Object")])])]),t._v(" "),a("p",[t._v("Criar dados computados do componente que retornam a subárvore do "),a("em",[t._v("store")]),t._v(" Vuex. "),a("RouterLink",{attrs:{to:"/ptbr/guide/state.html#o-auxiliar-mapstate"}},[t._v("Detalhes")])],1),t._v(" "),a("p",[t._v("O 1º argumento pode ser opcionalmente uma "),a("em",[t._v("String")]),t._v(" com "),a("em",[t._v("namespace")]),t._v(". "),a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html#usando-metodos-auxiliares-com-namespace"}},[t._v("Detalhes")])],1),t._v(" "),a("p",[t._v("O segundo objeto que compõem os argumentos pode ser uma função. "),a("code",[t._v("function(state: any)")])]),t._v(" "),a("h3",{attrs:{id:"mapgetters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapgetters"}},[t._v("#")]),t._v(" mapGetters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("mapGetters(namespace?: string, map: Array<string> | Object<string>): Object")])])]),t._v(" "),a("p",[t._v("Criar dados computados do componente que retornam o valor calculado de um "),a("em",[t._v("getter")]),t._v(". "),a("RouterLink",{attrs:{to:"/ptbr/guide/getters.html#o-auxiliar-mapgetters"}},[t._v("Detalhes")])],1),t._v(" "),a("p",[t._v("O 1º argumento pode ser opcionalmente uma "),a("em",[t._v("String")]),t._v(" com "),a("em",[t._v("namespace")]),t._v(". "),a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html#usando-metodos-auxiliares-com-namespace"}},[t._v("Detalhes")])],1),t._v(" "),a("h3",{attrs:{id:"mapactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapactions"}},[t._v("#")]),t._v(" mapActions")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("mapActions(namespace?: string, map: Array<string> | Object<string | function>): Object")])])]),t._v(" "),a("p",[t._v("Criar opções de métodos nos componentes que despacham uma ação. "),a("RouterLink",{attrs:{to:"/ptbr/guide/actions.html#acoes-de-despacho-em-componentes"}},[t._v("Detalhes")])],1),t._v(" "),a("p",[t._v("O 1º argumento pode ser opcionalmente uma "),a("em",[t._v("String")]),t._v(" com "),a("em",[t._v("namespace")]),t._v(". "),a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html#usando-metodos-auxiliares-com-namespace"}},[t._v("Detalhes")])],1),t._v(" "),a("p",[t._v("O segundo objeto que compõem os argumentos pode ser uma função. "),a("code",[t._v("function(dispatch: function, ...args: any[])")])]),t._v(" "),a("h3",{attrs:{id:"mapmutations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapmutations"}},[t._v("#")]),t._v(" mapMutations")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("mapMutations(namespace?: string, map: Array<string> | Object<string | function>): Object")])])]),t._v(" "),a("p",[t._v("Criar opções de métodos nos componentes que confirmam (ou fazem um "),a("em",[t._v("commit")]),t._v(" de) uma mutação. "),a("RouterLink",{attrs:{to:"/ptbr/guide/mutations.html#confirmando-ou-fazendo-commits-de-mutacoes-em-componentes"}},[t._v("Detalhes")])],1),t._v(" "),a("p",[t._v("O 1º argumento pode ser opcionalmente uma "),a("em",[t._v("String")]),t._v(" com "),a("em",[t._v("namespace")]),t._v(". "),a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html#usando-metodos-auxiliares-com-namespace"}},[t._v("Detalhes")])],1),t._v(" "),a("p",[t._v("O segundo objeto que compõem os argumentos pode ser uma função. "),a("code",[t._v("function(commit: function, ...args: any[])")])]),t._v(" "),a("h3",{attrs:{id:"createnamespacedhelpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createnamespacedhelpers"}},[t._v("#")]),t._v(" createNamespacedHelpers")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("createNamespacedHelpers(namespace: string): Object")])])]),t._v(" "),a("p",[t._v("Cria um componente "),a("em",[t._v("namespaced")]),t._v(" dos métodos auxiliares. O objeto retornado possui "),a("em",[t._v("mapState")]),t._v(", "),a("em",[t._v("mapGetters")]),t._v(", "),a("em",[t._v("mapActions")]),t._v(" e "),a("em",[t._v("mapMutations")]),t._v(", que estão conectados com o dado "),a("em",[t._v("namespace")]),t._v(". "),a("RouterLink",{attrs:{to:"/ptbr/guide/modules.html#usando-metodos-auxiliares-com-namespace"}},[t._v("Detalhes")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);