(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{353:function(t,s,a){"use strict";a.r(s);var e=a(49),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"extending"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending","aria-hidden":"true"}},[t._v("#")]),t._v(" Extending")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#events"}},[t._v("Events")]),a("ul",[a("li",[a("a",{attrs:{href:"#auto-register-event-listeners"}},[t._v("Auto register event listeners")])]),a("li",[a("a",{attrs:{href:"#available-events"}},[t._v("Available events")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[t._v("The export process has a few events you can leverage to interact with the underlying\nclasses to add custom behaviour to the export.")]),t._v(" "),a("p",[t._v('You are able to hook into the parent package by using events.\nNo need to use convenience methods like "query" or "view", if you need full control over the export.')]),t._v(" "),a("p",[t._v("The events will be activated by adding the "),a("code",[t._v("WithEvents")]),t._v(" concern. Inside the "),a("code",[t._v("registerEvents")]),t._v(" method, you\nwill have to return an array of events. The key is the Fully Qualified Name (FQN) of the event and the value is a callable event listener.\nThis can either be a closure, array-callable or invokable class.")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Exports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Nikazooz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Simplesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Concerns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WithEvents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Nikazooz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Simplesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BeforeExport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Nikazooz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Simplesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BeforeSheet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Nikazooz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Simplesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BeforeWriting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InvoicesExport")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithEvents")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @return array\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerEvents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Handle by a closure.")]),t._v("\n            BeforeExport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BeforeExport "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("writer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCreator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Patrick'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array callable, refering to a static method.")]),t._v("\n            BeforeWriting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'beforeWriting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Using a class with an __invoke method.")]),t._v("\n            BeforeSheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeforeSheetHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeWriting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BeforeWriting "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br")])]),a("p",[t._v("Do note that using a "),a("code",[t._v("Closure")]),t._v(" will not be possible in combination with queued exports, as PHP cannot serialize the closure.\nIn those cases it might be better to use the "),a("code",[t._v("RegistersEventListeners")]),t._v(" trait.")]),t._v(" "),a("h3",{attrs:{id:"auto-register-event-listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-register-event-listeners","aria-hidden":"true"}},[t._v("#")]),t._v(" Auto register event listeners")]),t._v(" "),a("p",[t._v("By using the "),a("code",[t._v("RegistersEventListeners")]),t._v(" trait you can auto-register the event listeners,\nwithout the need of using the "),a("code",[t._v("registerEvents")]),t._v(". The listener will only be registered if the method is created.")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Exports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Nikazooz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Simplesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Concerns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("RegistersEventListeners")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Nikazooz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Simplesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Concerns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WithEvents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Nikazooz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Simplesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AfterSheet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Nikazooz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Simplesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BeforeExport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Nikazooz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Simplesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BeforeSheet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Nikazooz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Simplesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BeforeWriting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InvoicesExport")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WithEvents")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Exportable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RegistersEventListeners"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeExport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BeforeExport "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeWriting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BeforeWriting "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeSheet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BeforeSheet "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterSheet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AfterSheet "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br")])]),a("h3",{attrs:{id:"available-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-events","aria-hidden":"true"}},[t._v("#")]),t._v(" Available events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Event name")]),t._v(" "),a("th",[t._v("Payload")]),t._v(" "),a("th",[t._v("Explanation")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("Nikazooz\\Simplesheet\\Events\\BeforeExport")])]),t._v(" "),a("td",[a("code",[t._v("$event->writer : Writer")])]),t._v(" "),a("td",[t._v("Event gets raised at the start of the process.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Nikazooz\\Simplesheet\\Events\\BeforeWriting")])]),t._v(" "),a("td",[a("code",[t._v("$event->writer : Writer")])]),t._v(" "),a("td",[t._v("Event gets raised before the download/store starts.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Nikazooz\\Simplesheet\\Events\\BeforeSheet")])]),t._v(" "),a("td",[a("code",[t._v("$event->sheet : Sheet")])]),t._v(" "),a("td",[t._v("Event gets raised just after the sheet is created.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Nikazooz\\Simplesheet\\Events\\AfterSheet")])]),t._v(" "),a("td",[a("code",[t._v("$event->sheet : Sheet")])]),t._v(" "),a("td",[t._v("Event gets raised at the end of the sheet process.")])])])])])},[],!1,null,null,null);s.default=n.exports}}]);