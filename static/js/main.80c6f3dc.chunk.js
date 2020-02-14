(this["webpackJsonpreact-patterns"]=this["webpackJsonpreact-patterns"]||[]).push([[0],{31:function(e,t,n){e.exports=n(43)},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n.n(r),c=n(26),l=n.n(c),s=n(27),i=n.n(s),u=n(28),m=n.n(u),p=n(11),b=n(13),d=n(3),h={},j="wrapper";function O(e){var t=e.components,n=Object(d.a)(e,["components"]);return Object(a.b)(j,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Overview"),Object(a.b)("p",null,"The project is created to experiment with different approaches to use\nReact and create a list of do's, dont's, problematic approaches and best\npractice in terms of performance, readability, extensibility and\nmaintainability."))}O.isMDXComponent=!0;var f=n(4),v=n(5),g=n(7),E=n(6),C=n(8),y=n(15),x=function(){var e=o.a.useState(),t=Object(y.a)(e,2)[1];return function(){return t({})}},w=n(17),N=o.a.memo((function(e){var t=o.a.useRef(0);return t.current+=1,o.a.createElement("div",{style:Object(w.a)({},e.style,{borderStyle:"solid",borderWidth:3,borderColor:e.color,position:"relative",width:"70%",marginTop:4,marginBottom:4})},o.a.createElement("div",{style:{position:"absolute",right:0,top:0,background:"black",color:"white",fontFamily:"monospace",padding:2}},"Render count: ",t.current),e.children)})),S=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"red"},"Child Class Component: ",this.props.value)}}]),t}(r.Component),k=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.value!==this.props.value}},{key:"render",value:function(){return o.a.createElement(N,{color:"red"},"Child Class Component ",o.a.createElement("strong",null,"Memoized"),": ",this.props.value)}}]),t}(r.Component),R=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"green"},"Child Pure Component: ",this.props.value)}}]),t}(r.PureComponent),T=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"green"},"Child Pure Component ",o.a.createElement("strong",null,"Memoized"),": ",this.props.value)}}]),t}(r.PureComponent),M=function(e){return o.a.createElement(N,{color:"blue"},"Child Function Component: ",e.value)},P=o.a.memo((function(e){return o.a.createElement(N,{color:"blue"},"Child Function Component ",o.a.createElement("strong",null,"Memoized"),": ",e.value)})),D=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"black"},o.a.createElement("p",null,"Container"),o.a.createElement(S,{value:1}),o.a.createElement(R,{value:1}),o.a.createElement(M,{value:1}))}}]),t}(r.Component),F=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"black"},o.a.createElement("p",null,"Container"),o.a.createElement(k,{value:1}),o.a.createElement(T,{value:1}),o.a.createElement(P,{value:1}))}}]),t}(r.Component),I=function(e){var t=x();return o.a.createElement(o.a.Fragment,null,e.isMemoized?o.a.createElement(F,null):o.a.createElement(D,null),o.a.createElement("hr",{style:{background:"transparent"}}),o.a.createElement("button",{onClick:t},"Render example"))},z={},J="wrapper";function X(e){var t=e.components,n=Object(d.a)(e,["components"]);return Object(a.b)(J,Object.assign({},z,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Components"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"React.Component")," encapsulates ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/state-and-lifecycle.html"}),"State and Lifecycle"),"."),Object(a.b)("h3",null,"Normal"),Object(a.b)(I,{isMemoized:!1,mdxType:"AllComponents"}),Object(a.b)("h3",null,"Memoized"),Object(a.b)(I,{isMemoized:!0,mdxType:"AllComponents"}))}X.isMDXComponent=!0;var A=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"black"},o.a.createElement("p",null,"Container"),o.a.createElement(S,{value:1}))}}]),t}(r.Component),L=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"black"},o.a.createElement("p",null,"Container"),o.a.createElement(k,{value:1}))}}]),t}(r.Component),B=function(e){var t=x();return o.a.createElement(o.a.Fragment,null,e.isMemoized?o.a.createElement(L,null):o.a.createElement(A,null),o.a.createElement("hr",{style:{background:"transparent"}}),o.a.createElement("button",{onClick:t},"Render example"))},U={},V="wrapper";function W(e){var t=e.components,n=Object(d.a)(e,["components"]);return Object(a.b)(V,Object.assign({},U,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Class Component"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"React.Component")," encapsulates ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/state-and-lifecycle.html"}),"State and Lifecycle"),"."),Object(a.b)("h3",null,"Normal"),Object(a.b)(B,{isMemoized:!1,mdxType:"ClassComponent"}),Object(a.b)("h3",null,"Memoized"),Object(a.b)(B,{isMemoized:!0,mdxType:"ClassComponent"}))}W.isMDXComponent=!0;var $=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"black"},o.a.createElement("p",null,"Container"),o.a.createElement(R,{value:1}))}}]),t}(r.Component),_=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"black"},o.a.createElement("p",null,"Container"),o.a.createElement(T,{value:1}))}}]),t}(r.Component),H=function(e){var t=x();return o.a.createElement(o.a.Fragment,null,e.isMemoized?o.a.createElement(_,null):o.a.createElement($,null),o.a.createElement("hr",{style:{background:"transparent"}}),o.a.createElement("button",{onClick:t},"Render example"))},q={},K="wrapper";function G(e){var t=e.components,n=Object(d.a)(e,["components"]);return Object(a.b)(K,Object.assign({},q,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Pure Component"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"React.Component")," encapsulates ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/state-and-lifecycle.html"}),"State and Lifecycle"),"."),Object(a.b)("h3",null,"Normal"),Object(a.b)(H,{isMemoized:!1,mdxType:"PureComponent"}),Object(a.b)("h3",null,"Memoized"),Object(a.b)(H,{isMemoized:!0,mdxType:"PureComponent"}))}G.isMDXComponent=!0;var Q=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"black"},o.a.createElement("p",null,"Container"),o.a.createElement(M,{value:1}))}}]),t}(r.Component),Y=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(N,{color:"black"},o.a.createElement("p",null,"Container"),o.a.createElement(P,{value:1}))}}]),t}(r.Component),Z=function(e){var t=x();return o.a.createElement(o.a.Fragment,null,e.isMemoized?o.a.createElement(Y,null):o.a.createElement(Q,null),o.a.createElement("hr",{style:{background:"transparent"}}),o.a.createElement("button",{onClick:t},"Render example"))},ee={},te="wrapper";function ne(e){var t=e.components,n=Object(d.a)(e,["components"]);return Object(a.b)(te,Object.assign({},ee,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Function Component"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"React.Component")," encapsulates ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/state-and-lifecycle.html"}),"State and Lifecycle"),"."),Object(a.b)("h3",null,"Normal"),Object(a.b)(Z,{isMemoized:!1,mdxType:"FunctionComponent"}),Object(a.b)("h3",null,"Memoized"),Object(a.b)(Z,{isMemoized:!0,mdxType:"FunctionComponent"}))}ne.isMDXComponent=!0;var ae={},re="wrapper";function oe(e){var t=e.components,n=Object(d.a)(e,["components"]);return Object(a.b)(re,Object.assign({},ae,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Hooks"))}oe.isMDXComponent=!0;var ce={},le="wrapper";function se(e){var t=e.components,n=Object(d.a)(e,["components"]);return Object(a.b)(le,Object.assign({},ce,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Functions"))}se.isMDXComponent=!0;var ie=o.a.createContext({value:1}),ue=function(e){var t=o.a.useMemo((function(){return{value:1}}),[]);return o.a.createElement(N,{color:"blue"},o.a.createElement(ie.Provider,{value:t},o.a.createElement("div",null,o.a.createElement("code",null,"Provider: ",JSON.stringify(t,null,2))),o.a.createElement("div",null,e.children)))},me=o.a.memo((function(){var e=o.a.useContext(ie);return o.a.createElement(N,{color:"green"},o.a.createElement("code",null,"Consumer: ",JSON.stringify(e,null,2)))})),pe=function(){var e=x();return o.a.createElement(o.a.Fragment,null,o.a.createElement(ue,null,o.a.createElement(me,null)),o.a.createElement("hr",{style:{background:"transparent"}}),o.a.createElement("button",{onClick:e},"Render example"))},be=o.a.createContext(0),de=o.a.createContext(0),he=function(e){var t=e.foo,n=e.bar;return o.a.createElement(N,{color:"blue"},o.a.createElement(be.Provider,{value:t},o.a.createElement(de.Provider,{value:n},o.a.createElement("div",null,o.a.createElement("code",null,"Provider: ",JSON.stringify({foo:t,bar:n},null,2))),o.a.createElement("div",null,e.children))))},je=o.a.memo((function(){var e=o.a.useContext(be);return o.a.createElement(N,{color:"green"},o.a.createElement("code",null,"ConsumerFoo: ",JSON.stringify(e,null,2)))})),Oe=o.a.memo((function(){var e=o.a.useContext(de);return o.a.createElement(N,{color:"red"},o.a.createElement("code",null,"ConsumerBar: ",JSON.stringify(e,null,2)))})),fe=function(){var e=o.a.useState(0),t=Object(y.a)(e,2),n=t[0],a=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(he,{foo:n,bar:1},o.a.createElement(je,null),o.a.createElement(Oe,null)),o.a.createElement("hr",{style:{background:"transparent"}}),o.a.createElement("button",{onClick:function(){return a(n+1)}},"Render example"))},ve=n(18),ge=Object(ve.createContext)({foo:0,bar:0}),Ee=function(e){var t=e.foo,n=e.bar;return o.a.createElement(N,{color:"blue"},o.a.createElement(ge.Provider,{value:{foo:t,bar:n}},o.a.createElement("div",null,o.a.createElement("code",null,"Provider: ",JSON.stringify({foo:t,bar:n},null,2))),o.a.createElement("div",null,e.children)))},Ce=o.a.memo((function(){var e=Object(ve.useContextSelector)(ge,(function(e){return e.foo}));return o.a.createElement(N,{color:"green"},o.a.createElement("code",null,"ConsumerFoo: ",JSON.stringify(e,null,2)))})),ye=o.a.memo((function(){var e=Object(ve.useContextSelector)(ge,(function(e){return e.bar}));return o.a.createElement(N,{color:"red"},o.a.createElement("code",null,"ConsumerBar: ",JSON.stringify(e,null,2)))})),xe=function(){var e=o.a.useState(0),t=Object(y.a)(e,2),n=t[0],a=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ee,{foo:n,bar:1},o.a.createElement(Ce,null),o.a.createElement(ye,null)),o.a.createElement("hr",{style:{background:"transparent"}}),o.a.createElement("button",{onClick:function(){return a(n+1)}},"Render example"))},we=o.a.createContext({value:1}),Ne=function(e){var t={value:1};return o.a.createElement(N,{color:"blue"},o.a.createElement(we.Provider,{value:t},o.a.createElement("div",null,o.a.createElement("code",null,"Provider: ",JSON.stringify(t,null,2))),o.a.createElement("div",null,e.children)))},Se=o.a.memo((function(){var e=o.a.useContext(we);return o.a.createElement(N,{color:"green"},o.a.createElement("code",null,"Consumer: ",JSON.stringify(e,null,2)))})),ke=function(){var e=x();return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ne,null,o.a.createElement(Se,null)),o.a.createElement("hr",{style:{background:"transparent"}}),o.a.createElement("button",{onClick:e},"Render example"))},Re={},Te="wrapper";function Me(e){var t=e.components,n=Object(d.a)(e,["components"]);return Object(a.b)(Te,Object.assign({},Re,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Context"),Object(a.b)("p",null,"This page covers only modern React Context API, i.e. ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),Object(a.b)("inlineCode",{parentName:"a"},"createContext()")),"."),Object(a.b)("h3",null,"Context behavior"),Object(a.b)("p",null,"All consumers that are descendants of a ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," will re-render whenever the ",Object(a.b)("inlineCode",{parentName:"p"},"Provider"),"\u2019s ",Object(a.b)("inlineCode",{parentName:"p"},"value")," prop changes. The propagation from ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," to its descendant consumers (including ",Object(a.b)("inlineCode",{parentName:"p"},".contextType")," on class components and ",Object(a.b)("inlineCode",{parentName:"p"},"useContext()")," hook) is not subject to the ",Object(a.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate()")," method or ",Object(a.b)("inlineCode",{parentName:"p"},"React.memo()"),", so the consumer is updated even when an ancestor component skips an update."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"// \ud83d\udca1 React.memo will ignored\nconst Example = React.memo(props => {\n  // \ud83d\udca3 Updates will be triggered inside\n  const value = React.useContext(Context);\n\n  return <div />;\n});\n")),Object(a.b)("p",null,"For example the code below will trigger rerender always as ",Object(a.b)("inlineCode",{parentName:"p"},"context")," object will be always newly created."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const Example = props => {\n  const { children } = props;\n  // \u26d4 ({ value: 1 } === { value: 1 }) is false, so reference is different\n  const context = { value: 1 };\n\n  return <Provider value={context}>{children}</Provider>;\n};\n")),Object(a.b)(ke,{mdxType:"ContextUnmemoizedExample"}),Object(a.b)("h3",null,"Solution 1: Use memoized context value"),Object(a.b)("p",null,"If value is changing rarely is good option to memoize an object value with ",Object(a.b)("inlineCode",{parentName:"p"},"useMemo()")," hook."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const Example = props => {\n  const { children, value } = props;\n  // \u2705 Now new `context` will be recreated only on `value` change\n  const context = React.useMemo(() => ({ value }), [value]);\n\n  return <Provider value={context}>{children}</Provider>;\n};\n")),Object(a.b)(pe,{mdxType:"ContextMemoized"}),Object(a.b)("p",null,"For class components you can use ",Object(a.b)("inlineCode",{parentName:"p"},"this.state"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"class Example extends React.Component {\n  render() {\n    return <Provider value={this.state}>{children}</Provider>;\n  }\n}\n")),Object(a.b)("h3",null,"Solution 2: Use separate contexts"),Object(a.b)("p",null,"This trick was ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://kentcdodds.com/blog/how-to-use-react-context-effectively"}),"described")," by Kent Dodds. Idea is to pass plain/memoized\nvalues in separate contexts to avoid useless notifications to subscribers."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const Example = props => {\n  const { children } = props;\n\n  // \u2757 both values are plain and safe for shallow compare\n  const firstValue = 1;\n  const secondValue = 2;\n\n  return (\n    <FirstProvider value={firstValue}>\n      <SecondProvider value={secondValue}>{children}</SecondProvider>\n    </FirstProvider>\n  );\n};\n")),Object(a.b)(fe,{mdxType:"ContextSeparate"}),Object(a.b)("h3",null,"Solution 3: Experimental bits API"),Object(a.b)("p",null,"React provides an expiremental API with ",Object(a.b)("inlineCode",{parentName:"p"},"calculateChangedBits")," & ",Object(a.b)("inlineCode",{parentName:"p"},"calculateChangedBits"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"function createContext<T>(defaultValue: T, calculateChangedBits?: (prev: T, next: T) => number): Context<T>;\nfunction useContext<T>(context: Context<T>, observedBits?: number|boolean): T;\n")),Object(a.b)("p",null,"Which allows to change default behavior of Context API and avoid useless rerenders. As it's experimental there are no official docs yet, check ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://medium.com/@leonardobrunolima/react-tips-context-api-performance-considerations-d964f3ad3087"}),"this article")," to get more details."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"changedBits === 0")," has a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/facebook/react/blob/9b0bd43550206e04bfe9ca695e5981eff0e2d03f/packages/react-reconciler/src/ReactFiberBeginWork.js#L2304"}),"special handling")," in ",Object(a.b)("inlineCode",{parentName:"p"},"react-reconciler"),", so the simplest and interesting trick is to disable any consumer's updates:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"// \u2620\ufe0f Even is `value` will change updates will be silenced\nconst Context = React.createContext(value, () => 0);\n")),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/use-context-selector"}),Object(a.b)("inlineCode",{parentName:"a"},"use-context-selector"))," uses ",Object(a.b)("inlineCode",{parentName:"p"},"changedBits === 0")," to implement selector-like API for hooks which currently stays as an ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/reactjs/rfcs/pull/119"}),"open RFC"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const Example = React.memo(props => {\n  // \u2705 Updates of other context properties will be ignored\n  const locale = useContextSelector(LocaleContext, v => v.locale);\n\n  return <div>Current locale is {locale}.</div>;\n});\n")),Object(a.b)(xe,{mdxType:"ContextSelectorExample"}),Object(a.b)("p",null,"There is also a lot of custom context/global state implementations, comparison\nfor Concurrent mode ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/dai-shi/will-this-react-global-state-work-in-concurrent-mode"}),"available there"),"."))}Me.isMDXComponent=!0;var Pe={},De="wrapper";function Fe(e){var t=e.components,n=Object(d.a)(e,["components"]);return Object(a.b)(De,Object.assign({},Pe,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"State Immutability in React, why it is important, and how to achieve it using Immer"),Object(a.b)("p",null,"React ",Object(a.b)("em",{parentName:"p"},"props")," and ",Object(a.b)("em",{parentName:"p"},"state")," are readonly by contract; it is, however, very easy to break this contract\nand introduce issues that are difficult to debug. In order to prevent these issues it is advised not\nto mutate state unless necessary. If non-trivial mutation of the current state is unvoidable, it is\nadvised to use an immutability helper called Immer."),Object(a.b)("p",null,"In the text below we start with a piece of code\nthat doesn't work, we transform it into code that works, but is error-prone and unreadable, and eventually\nwe reach the state of well readable and easily maintainable code. As we go over these phases\nwe gradually build a case for using Immer."),Object(a.b)("h3",null,"State mutation outside of setState mechanism"),Object(a.b)("p",null,"React ",Object(a.b)("em",{parentName:"p"},"state")," is declared readonly, but that only means that the ",Object(a.b)("em",{parentName:"p"},"reference")," to it is constant. This\neffectively protects primitives from being changed, but it doesn't protect objects. The only sound\nmeans of state change in React is the ",Object(a.b)("em",{parentName:"p"},"setState")," method and any code that asserts it is correct in doing so.\nIn the example below, the ",Object(a.b)("em",{parentName:"p"},"sumData"),' function rightfully asserts that the state object will not change\nand based on that it caches its output based on the state object\'s internal field "data".'),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"export const Component: React.FunctionComponent = props => {\n  const [state, setState] = React.useState({ data: [0, 0] });\n\n  // Assert state immutability.\n  const data = state.data;\n  const sumData = React.useCallback(\n    () => data.reduce((acc, val) => acc + val, 0),\n    [data]\n  );\n\n  const run = () => {\n    // State mutated.\n    state.data = [1, 1];\n    // Sum is out of sync.\n    state.data.push(sumData());\n    state.data.push(sumData());\n    state.data.push(sumData());\n    setState({ data: state.data });\n  };\n")),Object(a.b)("p",null,"However, the ",Object(a.b)("em",{parentName:"p"},"run")," function changes the state object -- its internal field ",Object(a.b)("em",{parentName:"p"},"data")," now points to a\ndifferent address. ",Object(a.b)("em",{parentName:"p"},"sumData")," captures the original address (that wasn't supposed to change), and therefore\nit will sum the original data."),Object(a.b)("p",null,"The logical step in rectifying this seems to be to make ",Object(a.b)("em",{parentName:"p"},"sumData")," capture the entire state -- since it is\nreadonly we will be sure that we always refer to the correct address. It also seemingly makes sense not to construct\na new state object in ",Object(a.b)("em",{parentName:"p"},"run")," since we only change a single field inside of it:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"export const Component: React.FunctionComponent = props => {\n  const [state, setState] = React.useState({ data: [0, 0] });\n\n  // Assert state immutability.\n  const sumData = React.useCallback(\n    () => state.data.reduce((acc, val) => acc + val, 0),\n    [state]\n  );\n\n  const run = () => {\n    // State mutated.\n    state.data = [1, 1];\n    // Sum is in sync.\n    state.data.push(sumData());\n    state.data.push(sumData());\n    state.data.push(sumData());\n    setState(state);\n  };\n")),Object(a.b)("p",null,"The issue with this change is that now it doesn't work at all, because React asserts that since the\naddress of the state object hasn't changed, the object itself hasn't changed, and it will ignore the\nsetState call. The obvious solution is to copy the object:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"export const Component: React.FunctionComponent = props => {\n  const [state, setState] = React.useState({ data: [0, 0] });\n\n  // Assert state immutability.\n  const sumData = React.useCallback(\n    () => state.data.reduce((acc, val) => acc + val, 0),\n    [state]\n  );\n\n  const run = () => {\n    state.data = [1, 1];\n    // Contract violation.\n    state.data.push(sumData());\n    state.data.push(sumData());\n    state.data.push(sumData());\n    setState({...state});\n  };\n")),Object(a.b)("p",null,'Now the code will work. The issue with this code, however, is that it is breaking the immutability contract\nwith React and that it is prone to error. If the state object were to consist of multiple nested fields,\nwe would have to make sure that the object is copied properly to form a new state. Since there is no native\nconcept of "deep copy" in javascript, doing this can be rather cumbersome:'),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'export const Component: React.FunctionComponent = props => {\n  const [state, setState] = React.useState(getCumbersomeState());\n\n  const getStateString = React.useCallback(() => JSON.stringify(state), [\n    state\n  ]);\n\n  const updateJillsStreet = () => {\n    // It is easy to get lost in this sea of spread operators and brackets.\n    setState(prevState => ({\n      people: [\n        { ...prevState.people[0] },\n        {\n          ...prevState.people[1],\n          addresses: [\n            {\n              ...prevState.people[1].addresses[0],\n              street: `Street ${Math.random()}`\n            }\n          ]\n        }\n      ]\n    }));\n  };\n\n  return (\n    <div className="App">\n      <div>{getStateString()}</div>\n      <div>\n        <button onClick={updateJillsStreet}>updateJillsStreet</button>\n      </div>\n    </div>\n  );\n};\n')),Object(a.b)("h3",null,"Immer.js to the rescue"),Object(a.b)("p",null,"And that is when Immer.js comes to the rescue. Immer.js uses ES6 proxies (note that when transcompiled to ES5\nit will become much slower) to record changes to a so called ",Object(a.b)("em",{parentName:"p"},"draft")," object during the execution of the ",Object(a.b)("em",{parentName:"p"},"produce"),"\nfunction and then project them onto a new object that becomes the new state. The ",Object(a.b)("em",{parentName:"p"},"draft")," object is based on the existing\nstate that is passed to the ",Object(a.b)("em",{parentName:"p"},"produce")," function along with the draft callback. The following snippet demonstrates\nhow we go from cumbersome, ugly, and ureadable to straightforward, beautiful, and well readable:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'export const Component: React.FunctionComponent = props => {\n  const [state, setState] = React.useState(getCumbersomeState());\n\n  const getStateString = React.useCallback(() => JSON.stringify(state), [\n    state\n  ]);\n\n  const updateJillsStreet = () => {\n    setState(\n      produce(state, _draft => {\n        _draft.people[1].addresses[0].street = `Street ${Math.random()}`;\n      })\n    );\n  };\n\n  return (\n    <div className="App">\n      <div>{getStateString()}</div>\n      <div>\n        <button onClick={updateJillsStreet}>updateJillsStreet</button>\n      </div>\n    </div>\n  );\n};\n')),Object(a.b)("p",null,"This can be further simplified by using the ",Object(a.b)("em",{parentName:"p"},"use-immer")," npm package that provides us with a hook\nthat combines the native ",Object(a.b)("em",{parentName:"p"},"React.useState")," and Immer's ",Object(a.b)("em",{parentName:"p"},"produce"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'export const Component: React.FunctionComponent = props => {\n  const [state, setState] = useImmer(getCumbersomeState());\n\n  const getStateString = React.useCallback(() => JSON.stringify(state), [\n    state\n  ]);\n\n  const updateJillsStreet = () => {\n    setState(_draft => {\n      _draft.people[1].addresses[0].street = `Street ${Math.random()}`;\n    });\n  };\n\n  return (\n    <div className="App">\n      <div>{getStateString()}</div>\n      <div>\n        <button onClick={updateJillsStreet}>updateJillsStreet</button>\n      </div>\n    </div>\n  );\n};\n')),Object(a.b)("p",null,"In the newly created state, fields that didn't change during the execution of the draft callback\nwill be referentially equal to the fields in the original state. Only fields that were changed\nin the draft and the root object will be new objects."),Object(a.b)("h3",null,"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://immerjs.github.io/immer/docs/introduction"}),"https://immerjs.github.io/immer/docs/introduction"))))}Fe.isMDXComponent=!0;var Ie=function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("header",null,o.a.createElement("h1",null,"React Patterns")),o.a.createElement("div",{className:"main"},o.a.createElement("aside",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(p.b,{to:"/"},"Overview")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/components"},"Components"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(p.b,{to:"/class-component"},"Class Component")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/pure-component"},"Pure Component")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/function-component"},"Function Component")))),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/hooks"},"Hooks")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/context"},"Context")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/functions"},"Functions")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/immutability"},"Immutability")))),o.a.createElement("main",null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/components",component:X}),o.a.createElement(b.a,{path:"/class-component",component:W}),o.a.createElement(b.a,{path:"/pure-component",component:G}),o.a.createElement(b.a,{path:"/function-component",component:ne}),o.a.createElement(b.a,{path:"/hooks",component:oe}),o.a.createElement(b.a,{path:"/context",component:Me}),o.a.createElement(b.a,{path:"/functions",component:se}),o.a.createElement(b.a,{path:"/immutability",component:Fe}),o.a.createElement(b.a,{exact:!0,path:"/",component:O}))))),o.a.createElement("footer",null,"\xa9 2019, Sergii Mykhailov. ",o.a.createElement(p.b,{to:"/"},"React Patterns"))))},ze=n(22),Je=(n(41),{code:function(e){var t=e.className,n=void 0===t?"language-jsx":t,a=e.children,r=void 0===a?"":a,c=n.replace("language-",""),l=r.replace(/\n$/,"");return o.a.createElement(o.a.Fragment,null,o.a.createElement("style",null,".prism-code .token.plain { display: inline-block; }"),o.a.createElement("style",null,".prism-code .token.comment { font-style: normal; }"),o.a.createElement(ze.a,Object.assign({},ze.b,{code:l,language:c,theme:void 0}),(function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,c=e.getTokenProps;return o.a.createElement("pre",{className:t,style:Object(w.a)({},n,{padding:3})},a.map((function(e,t){return o.a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return o.a.createElement("span",c({token:e,key:t}))})))})))})))}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(42);new i.a(m.a).injectStyles(),l.a.render(o.a.createElement(a.a,{components:Je},o.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.80c6f3dc.chunk.js.map