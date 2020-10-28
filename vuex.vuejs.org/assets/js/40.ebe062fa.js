(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{512:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api-リファレンス"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-リファレンス"}},[t._v("#")]),t._v(" API リファレンス")]),t._v(" "),s("h2",{attrs:{id:"vuex-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store"}},[t._v("#")]),t._v(" Vuex.Store")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("options "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"vuex-store-コンストラクタオプション"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store-コンストラクタオプション"}},[t._v("#")]),t._v(" Vuex.Store コンストラクタオプション")]),t._v(" "),s("h3",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" state")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("型: "),s("code",[t._v("Object | Function")])]),t._v(" "),s("p",[t._v("ストアのための ルートステートオブジェクトです。"),s("RouterLink",{attrs:{to:"/ja/guide/state.html"}},[t._v("詳細")])],1),t._v(" "),s("p",[t._v("オブジェクトを返す関数を渡す場合、返されたオブジェクトはルートステートとして使用されます。これは特にモジュールの再利用のためにステートオブジェクトを再利用する場合に便利です。"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#モジュールの再利用"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"mutations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutations"}},[t._v("#")]),t._v(" mutations")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("型: "),s("code",[t._v("{ [type: string]: Function }")])]),t._v(" "),s("p",[t._v("ストアにミューテーションを登録します。ハンドラ関数は第一引数に "),s("code",[t._v("state")]),t._v(" を常に受け取り(モジュール内で定義されていれば、モジュールのローカルステートを受け取り)、指定されていれば第二引数に "),s("code",[t._v("payload")]),t._v(" を受け取ります。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ja/guide/mutations.html"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" actions")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("型: "),s("code",[t._v("{ [type: string]: Function }")])]),t._v(" "),s("p",[t._v("ストアにアクションを登録します。ハンドラ関数は次のプロパティを持つ "),s("code",[t._v("context")]),t._v(" オブジェクトを受け取ります。:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `store.state` と同じか、モジュール内にあればローカルステート")]),t._v("\n  rootState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `store.state` と同じ。ただしモジュール内に限る")]),t._v("\n  commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `store.commit` と同じ")]),t._v("\n  dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `store.dispatch` と同じ")]),t._v("\n  getters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `store.getters` と同じか、モジュール内にあればローカルゲッター")]),t._v("\n  rootGetters "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `store.getters` と同じ。ただしモジュール内に限る")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("そして、第 2 引数の "),s("code",[t._v("payload")]),t._v(" があれば、それを受け取ります。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ja/guide/actions.html"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"getters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getters"}},[t._v("#")]),t._v(" getters")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("type: "),s("code",[t._v("{ [key: string]: Function }")])]),t._v(" "),s("p",[t._v("ストアにゲッターを登録します. ゲッター関数は次の引数を受け取ります:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("state,     // モジュール内で定義されていればモジュールのローカルステート\ngetters    // store.getters と同じ\n")])])]),s("p",[t._v("モジュールで定義されたときの仕様")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("state,       // モジュールで定義された場合、モジュールのローカルステート\ngetters,     // 現在のモジュールのモジュールのローカルゲッター\nrootState,   // グローバルステート\nrootGetters  // 全てのゲッター\n")])])]),s("p",[t._v("登録されたゲッターは "),s("code",[t._v("store.getters")]),t._v(" 上に公開されます。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ja/guide/getters.html"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" modules")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("型: "),s("code",[t._v("Object")])]),t._v(" "),s("p",[t._v("サブモジュールを含む次のような形式のオブジェクトはストアにマージされます。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mutations\n    actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    getters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("各モジュールは、ルートオプションに似た "),s("code",[t._v("state")]),t._v(" と "),s("code",[t._v("mutations")]),t._v(" を含むことができます。モジュールの状態は、モジュールのキーを使って、ストアのルートステートに結合されます。モジュールのミューテーションとゲッターは、第一引数としてルートステートの代わりに、モジュールのローカルステートだけを受け取り、モジュールのアクションの "),s("code",[t._v("context.state")]),t._v(" もローカルステートを指すようになります。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ja/guide/modules.html"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("型: "),s("code",[t._v("Array<Function>")])]),t._v(" "),s("p",[t._v("プラグイン関数の配列は、ストアに適用されます。このプラグインは、ストアだけを引数として受け取り、外部への永続化、ロギング、デバッギングのために、ミューテーションを監視するか、または、 websocket や observable のような外から渡されるデータのためにミューテーションをディスパッチします。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ja/guide/plugins.html"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"strict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strict"}},[t._v("#")]),t._v(" strict")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("型: "),s("code",[t._v("Boolean")])])]),t._v(" "),s("li",[s("p",[t._v("デフォルト: "),s("code",[t._v("false")])]),t._v(" "),s("p",[t._v("Vuex ストアを厳格モードにします。厳格モードでは、ミューテーションハンドラ以外で、 Vuex の状態の変更を行うと、エラーが投げられます。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ja/guide/strict.html"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"devtools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#devtools"}},[t._v("#")]),t._v(" devtools")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("型: "),s("code",[t._v("Boolean")])]),t._v(" "),s("p",[t._v("特定の Vuex インスタンスに対して開発ツールをオン、またはオフにします。インスタンスに false を渡すと、開発ツールのプラグインを購読しないように Vuex ストアに伝えます。1 ページに複数のストアがある場合に便利です。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  devtools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"vuex-store-インスタンスプロパティ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store-インスタンスプロパティ"}},[t._v("#")]),t._v(" Vuex.Store インスタンスプロパティ")]),t._v(" "),s("h3",{attrs:{id:"state-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-2"}},[t._v("#")]),t._v(" state")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("type: "),s("code",[t._v("Object")])]),t._v(" "),s("p",[t._v("ルートステート、読み取り専用です。")])])]),t._v(" "),s("h3",{attrs:{id:"getters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getters-2"}},[t._v("#")]),t._v(" getters")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("type: "),s("code",[t._v("Object")])]),t._v(" "),s("p",[t._v("登録されているゲッターを公開します。読み取り専用です。")])])]),t._v(" "),s("h2",{attrs:{id:"vuex-store-インスタンスメソッド"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store-インスタンスメソッド"}},[t._v("#")]),t._v(" Vuex.Store インスタンスメソッド")]),t._v(" "),s("h3",{attrs:{id:"commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[t._v("#")]),t._v(" commit")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("commit(type: string, payload?: any, options?: Object)")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("commit(mutation: Object, options?: Object)")])]),t._v(" "),s("p",[t._v("ミューテーションをコミットします。"),s("code",[t._v("options")]),t._v(" は"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#名前空間"}},[t._v("名前空間付きモジュール")]),t._v("で root なミューテーションにコミットできる "),s("code",[t._v("root: true")]),t._v(" を持つことできます。"),s("RouterLink",{attrs:{to:"/ja/guide/mutations.html"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"dispatch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch"}},[t._v("#")]),t._v(" dispatch")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("dispatch(type: string, payload?: any, options?: Object): Promise<any>")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("dispatch(action: Object, options?: Object): Promise<any>")])]),t._v(" "),s("p",[t._v("アクションをディスパッチします。"),s("code",[t._v("options")]),t._v(" は"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#名前空間"}},[t._v("名前空間付きモジュール")]),t._v("で root なアクションにディスパッチできる "),s("code",[t._v("root: true")]),t._v(" を持つことできます。 すべてのトリガーされたアクションハンドラを解決するPromiseを返します。"),s("RouterLink",{attrs:{to:"/ja/guide/actions.html"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"replacestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replacestate"}},[t._v("#")]),t._v(" replaceState")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("replaceState(state: Object)")])]),t._v(" "),s("p",[t._v("ストアのルートステートを置き換えます。これは、ステートのハイドレーションやタイムトラベルのためだけに利用すべきです。")])])]),t._v(" "),s("h3",{attrs:{id:"watch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("watch(fn: Function, callback: Function, options?: Object): Function")])]),t._v(" "),s("p",[s("code",[t._v("fn")]),t._v("が返す値をリアクティブに監視し、値が変わった時にコールバックを呼びます。"),s("code",[t._v("fn")]),t._v("は最初の引数としてストアのステートを、2番目の引数としてゲッターを受け取ります。 "),s("a",{attrs:{href:"https://jp.vuejs.org/v2/api/#watch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue の"),s("code",[t._v("vm.$watch")]),t._v("メソッド"),s("OutboundLink")],1),t._v("と同じオプションをオプションのオブジェクトとして受け付けます。")]),t._v(" "),s("p",[t._v("監視を止める場合は、返された unwatch 関数を呼び出します。")])])]),t._v(" "),s("h3",{attrs:{id:"subscribe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribe"}},[t._v("#")]),t._v(" subscribe")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("subscribe(handler: Function, options?: Object): Function")])]),t._v(" "),s("p",[t._v("ストアへのミューテーションを購読します。"),s("code",[t._v("handler")]),t._v(" は、全てのミューテーションの後に呼ばれ、引数として、ミューテーション ディスクリプタとミューテーション後の状態を受け取ります。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("デフォルトでは、新しい "),s("code",[t._v("handler")]),t._v(" はチェーンの最後に登録されます。つまり、先に追加された他の "),s("code",[t._v("handler")]),t._v(" が呼び出された後に実行されます。"),s("code",[t._v("prepend: true")]),t._v(" を "),s("code",[t._v("options")]),t._v(" に設定することで、"),s("code",[t._v("handler")]),t._v(" をチェーンの最初に登録することができます。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" prepend"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("購読を停止するには、返された unsubscribe 関数呼び出します。")]),t._v(" "),s("p",[t._v("プラグインの中でもっともよく利用されます。"),s("RouterLink",{attrs:{to:"/ja/guide/plugins.html"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"subscribeaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribeaction"}},[t._v("#")]),t._v(" subscribeAction")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("subscribeAction(handler: Function, options?: Object): Function")])]),t._v(" "),s("blockquote",[s("p",[t._v("2.5.0 で新規追加")])]),t._v(" "),s("p",[t._v("ストアアクションを購読します。"),s("code",[t._v("handler")]),t._v(" はディスパッチされたアクションごとに呼び出され、アクション記述子と現在のストア状態を引数として受け取ります:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("デフォルトでは、新しい "),s("code",[t._v("handler")]),t._v(" はチェーンの最後に登録されます。つまり、先に追加された他の "),s("code",[t._v("handler")]),t._v(" が呼び出された後に実行されます。"),s("code",[t._v("prepend: true")]),t._v(" を "),s("code",[t._v("options")]),t._v(" に設定することで、"),s("code",[t._v("handler")]),t._v(" をチェーンの最初に登録することができます。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" prepend"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("購読を停止するには、返された購読解除関数を呼びます。")]),t._v(" "),s("blockquote",[s("p",[t._v("3.1.0 で新規追加")])]),t._v(" "),s("p",[t._v("3.1.0 から、"),s("code",[t._v("subscribeAction")]),t._v(" は購読ハンドラがアクションディスパッチの"),s("em",[t._v("前 (before)")]),t._v("、または*後 (after)*に呼びだすべきかどうか(デフォルトの動作は、"),s("em",[t._v("before")]),t._v(" です)指定することもできます。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("before")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("before action ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("after")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("after action ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("3.4.0 で新規追加")])]),t._v(" "),s("p",[t._v("3.4.0から、"),s("code",[t._v("subscribeAction")]),t._v(" に "),s("code",[t._v("error")]),t._v(" ハンドラが追加されました。このハンドラでは、アクションディスパッチの中で投げられたエラーをキャッチすることができます。"),s("code",[t._v("error")]),t._v(" ハンドラは投げられた "),s("code",[t._v("error")]),t._v(" オブジェクトを第3引数として受け取ります。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("error action ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("subscribeAction")]),t._v(" メソッドはプラグインで最も一般的に使用されます。"),s("RouterLink",{attrs:{to:"/ja/guide/plugins.html"}},[t._v("詳細")])],1),t._v(" "),s("h3",{attrs:{id:"registermodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registermodule"}},[t._v("#")]),t._v(" registerModule")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("registerModule(path: string | Array<string>, module: Module, options?: Object)")])]),t._v(" "),s("p",[t._v("動的なモジュールを登録します。"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#dynamic-module-registration"}},[t._v("詳細")])],1),t._v(" "),s("p",[s("code",[t._v("options")]),t._v(" は前の状態を保存する "),s("code",[t._v("preserveState: true")]),t._v(" を持つことができます。サーバサイドレンダリングに役立ちます。")])])]),t._v(" "),s("h3",{attrs:{id:"unregistermodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unregistermodule"}},[t._v("#")]),t._v(" unregisterModule")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("unregisterModule(path: string | Array<string>)")])]),t._v(" "),s("p",[t._v("動的なモジュールを解除します。"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#dynamic-module-registration"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"hasmodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasmodule"}},[t._v("#")]),t._v(" hasModule")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("hasModule(path: string | Array<string>): boolean")])]),t._v(" "),s("p",[t._v("動的なモジュールがすでに登録されているかどうかを確認します。"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#dynamic-module-registration"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"hotupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hotupdate"}},[t._v("#")]),t._v(" hotUpdate")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("hotUpdate(newOptions: Object)")])]),t._v(" "),s("p",[t._v("新しいアクションとミューテーションをホットスワップします。"),s("RouterLink",{attrs:{to:"/ja/guide/hot-reload.html"}},[t._v("詳細")])],1)])]),t._v(" "),s("h2",{attrs:{id:"コンポーネントをバインドするヘルパー"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#コンポーネントをバインドするヘルパー"}},[t._v("#")]),t._v(" コンポーネントをバインドするヘルパー")]),t._v(" "),s("h3",{attrs:{id:"mapstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapstate"}},[t._v("#")]),t._v(" mapState")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("mapState(namespace?: string, map: Array<string> | Object<string | function>): Object")])]),t._v(" "),s("p",[t._v("ストアのサブツリーを返すコンポーネントの computed オプションを作成します。"),s("RouterLink",{attrs:{to:"/ja/guide/state.html#the-mapstate-helper"}},[t._v("詳細")])],1),t._v(" "),s("p",[t._v("第1引数は、オプションで名前空間文字列にすることができます。"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#binding-helpers-with-namespace"}},[t._v("詳細")])],1),t._v(" "),s("p",[t._v("第2引数のオブジェクトのメンバーには関数 "),s("code",[t._v("function(state: any)")]),t._v(" を指定できます。")])])]),t._v(" "),s("h3",{attrs:{id:"mapgetters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapgetters"}},[t._v("#")]),t._v(" mapGetters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("mapGetters(namespace?: string, map: Array<string> | Object<string>): Object")])]),t._v(" "),s("p",[t._v("ゲッターの評価後の値を返すコンポーネントの computed オプションを作成します。"),s("RouterLink",{attrs:{to:"/ja/guide/getters.html#the-mapgetters-helper"}},[t._v("詳細")])],1),t._v(" "),s("p",[t._v("第1引数は、オプションで名前空間文字列にすることができます。"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#binding-helpers-with-namespace"}},[t._v("詳細")])],1)])]),t._v(" "),s("h3",{attrs:{id:"mapactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapactions"}},[t._v("#")]),t._v(" mapActions")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("mapActions(namespace?: string, map: Array<string> | Object<string | function>): Object")])]),t._v(" "),s("p",[t._v("アクションをディスパッチするコンポーネントの methods オプションを作成します。"),s("RouterLink",{attrs:{to:"/ja/guide/actions.html#dispatching-actions-in-components"}},[t._v("詳細")])],1),t._v(" "),s("p",[t._v("第1引数は、オプションで名前空間文字列にすることができます。"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#binding-helpers-with-namespace"}},[t._v("詳細")])],1),t._v(" "),s("p",[t._v("第2引数のオブジェクトのメンバーには関数 "),s("code",[t._v("function(dispatch: function, ...args: any[])")]),t._v(" を指定できます。")])])]),t._v(" "),s("h3",{attrs:{id:"mapmutations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapmutations"}},[t._v("#")]),t._v(" mapMutations")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("mapMutations(namespace?: string, map: Array<string> | Object<string | function>): Object")])]),t._v(" "),s("p",[t._v("ミューテーションをコミットするコンポーネントの methods オプションを作成します。"),s("RouterLink",{attrs:{to:"/ja/guide/mutations.html#commiting-mutations-in-components"}},[t._v("詳細")])],1),t._v(" "),s("p",[t._v("第1引数は、オプションで名前空間文字列にすることができます。"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#binding-helpers-with-namespace"}},[t._v("詳細")])],1),t._v(" "),s("p",[t._v("第2引数のオブジェクトのメンバーには関数 "),s("code",[t._v("function(commit: function, ...args: any[])")]),t._v(" を指定できます。")])])]),t._v(" "),s("h3",{attrs:{id:"createnamespacedhelpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createnamespacedhelpers"}},[t._v("#")]),t._v(" createNamespacedHelpers")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("createNamespacedHelpers(namespace: string): Object")])]),t._v(" "),s("p",[t._v("名前空間付けられたコンポーネントバインディングのヘルパーを作成します。返されるオブジェクトは指定された名前空間にバインドされた "),s("code",[t._v("mapState")]),t._v("、"),s("code",[t._v("mapGetters")]),t._v("、"),s("code",[t._v("mapActions")]),t._v(" そして "),s("code",[t._v("mapMutations")]),t._v(" が含まれます。"),s("RouterLink",{attrs:{to:"/ja/guide/modules.html#binding-helpers-with-namespace"}},[t._v("詳細はこちら")])],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);