(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{223:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return r}),t.d(n,"default",function(){return c});t(11),t(13),t(6),t(21),t(20),t(0);var a=t(80),o=t(232);var r={},s={_frontmatter:r},i=o.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(i,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Los plugins de Gatsby son paquetes de Node.js que implementan APIs propias de\nGatsby y, si nuestro proyecto es grande, nos permiten modularizar algunas\npersonalizaciones que tengamos y convertirlas en plugins específicos para lo que\nnecesitemos."),Object(a.b)("p",null,"Gatsby está diseñado para ser extensible, y los plugins nos sirven para eso:\nextender y modificar todo lo que Gatsby hace."),Object(a.b)("p",null,"Algunas de las cosas que los plugins nos permiten hacer son:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Añadir contenido o data externa (ej. CMS, archivos estáticos, una API REST) a\nnuestra data de GraphQL"),Object(a.b)("li",{parentName:"ul"},"Transformar data de otros formatos (ej. Markdown, YAML, CSV) a objetos JSON"),Object(a.b)("li",{parentName:"ul"},"Añadir servicios externos (ej. Google Analytics, Instagram) a nuestro proyecto"),Object(a.b)("li",{parentName:"ul"},"Muchísimas cosas más!")),Object(a.b)("p",null,"En ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/plugins/"}),"este link")," podemos ver todos los plugins\nque nos ofrece el ecosistema de Gatsby 😀"),Object(a.b)("h2",null,"Tipos de plugins"),Object(a.b)("p",null,"Gatsby nos propone, entre otros, dos tipos importantes (a mi parecer) de plugins\npara hacer algunas de las cosas que recién nombramos:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://www.gatsbyjs.org/tutorial/part-five/"}),Object(a.b)("code",Object.assign({parentName:"a"},{className:"language-text"}),"source plugins")),": Los plugins\nde tipo ",Object(a.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"source"),' (fuente) nos sirven para crear lo que sería una "fuente de\ndatos" para que nosotros podamos, mediante GraphQL, consultar y utilizar esa\ndata en el frontend. (La data consultada puede ser data de un CMS, imágenes,\nMarkdown, otros archivos estáticos locales, etc.)'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://www.gatsbyjs.org/tutorial/part-six/"}),Object(a.b)("code",Object.assign({parentName:"a"},{className:"language-text"}),"transformer plugins")),": Este\ntipo de plugins nos permite ",Object(a.b)("em",{parentName:"li"},"convertir o transformar")," (de ahí el nombre 😝) la\ndata consultada de nuestra fuente de datos, por ejemplo, nos permite convertir\nMarkdown a HTML, procesar imágenes, archivos PDF, etc.")),Object(a.b)("p",null,"Veamos un poco cómo se usan estos tipos de plugins en nuestro proyecto."),Object(a.b)("h2",null,"Usando plugins en nuestro proyecto"),Object(a.b)("p",null,"Los plugins de Gatsby, al ser paquetes de Node.js, podemos instalarlos como\ncualquier otro paquete utilizando NPM, Yarn, o lo que más les guste. Analicemos\nnuestro proyecto para ver qué plugins usamos, veamos el archivo\n",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"gatsby-config.js")," que es donde indicamos qué plugins vamos a usar, deberíamos\nver algo así:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(a.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"module",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"exports ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  siteMetadata",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    title",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'Gatsby Default Starter'"),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  plugins",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'gatsby-plugin-react-helmet'"),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      resolve",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"gatsby-source-filesystem"),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      options",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        name",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"images"),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        path",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"__dirname",Object(a.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"/src/images"),Object(a.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'gatsby-transformer-sharp'"),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'gatsby-plugin-sharp'"),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"..."),Object(a.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]")))),Object(a.b)("p",null,"Con lo cual podemos observar que ya estamos indicando que vamos a utilizar,\nentre otros, los plugins:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"gatsby-",Object(a.b)("strong",{parentName:"li"},"source"),"-filesystem"),Object(a.b)("li",{parentName:"ul"},"gatsby-",Object(a.b)("strong",{parentName:"li"},"transformer"),"-sharp"),Object(a.b)("li",{parentName:"ul"},"gatsby-plugin-sharp")),Object(a.b)("p",null,"Y vemos que la forma de importarlos (verificando antes que estén instalados y\nestén en nuestro ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"package.json"),") es agregando un string con el nombre del plugin\nen el array de plugins de nuestro archivo de configuración. Pero por qué\n",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"gatsby-source-filesystem")," está como objeto? Eso es porque algunos plugins\nreciben parámetros para que funcionen como necesitemos, suele ser por medio del\nobjeto ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"options")," y nosotros debemos indicar el nombre en un string en la clave\n",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"resolve")," del objeto. La utilización de cada plugin suele explicarse en la\ndocumentación de cada plugin, así que a no tener miedo y leer que van a\nencontrar mejores explicaciones que la mía jajaja. Bueno, hablando de eso, vamos\na ver la\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/"}),"documentación de gatsby-transformer-sharp"),"\ndonde vamos a ver que nos indica que es un ",Object(a.b)("strong",{parentName:"p"},"plugin oficial")," de Gatsby y\npodemos ver que gatsby-plugin-sharp es un adaptador de una biblioteca ",Object(a.b)("em",{parentName:"p"},"Sharp"),"\nque existe y se encarga de manejar imágenes. Entonces, una idea de cómo sería el\nflujo desde consultar una imagen que tenemos en una carpeta local hasta que se\nusa en el frontend, sería algo como lo siguiente:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Se genera una fuente de datos desde nuestra carpeta con imágenes")," ⇒ ",Object(a.b)("strong",{parentName:"p"},"Se\nconsultan esos datos que tiene nuestras imágenes desde el frontend")," ⇒ ",Object(a.b)("strong",{parentName:"p"},"Se usan\nlas imágenes en el frontend con el componente ",Object(a.b)("code",Object.assign({parentName:"strong"},{className:"language-text"}),"gatsby-image"))," (siendo\nprocesadas con ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"gatsby-transformer-sharp")," y ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"gatsby-plugin-sharp"),", que ya viene\ntodo preparado para nosotros 🥰)"),Object(a.b)("p",null,"Para varias cosas nos vamos a topar con esta dinámica de Crear fuente de datos ⇒\nProcesar datos ⇒ Usarlos, y si traducimos, estaríamos teniendo que hacer\n",Object(a.b)("strong",{parentName:"p"},"Source")," ⇒ ",Object(a.b)("strong",{parentName:"p"},"Transformer")," ⇒ ",Object(a.b)("strong",{parentName:"p"},"Use")),Object(a.b)("p",null,"No toda la data tiene que pasar obligatoriamente por un plugin de tipo\nTransformer, eso vamos a ir viendo mientras usemos más plugins."),Object(a.b)("p",null,"Hasta acá creo que estamos bien para continuar con el siguiente tema, que es\nnuestra forma de consultar la fuente de datos que creemos con nuestros plugins\nde tipo ",Object(a.b)("strong",{parentName:"p"},"Source"),", sigamos con ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"GraphQL")," 😉"))}c.isMDXComponent=!0},228:function(e){e.exports={data:{allMdx:{edges:[{node:{frontmatter:{title:"GraphQL",path:"/graphql",index:4}}},{node:{frontmatter:{title:"Index",path:"/",index:0}}},{node:{frontmatter:{title:"Workshop - Paso 1",path:"/paso-01",index:3}}},{node:{frontmatter:{title:"Plugins",path:"/plugins",index:2}}},{node:{frontmatter:{title:"Introducción",path:"/intro",index:1}}},{node:{frontmatter:{title:"Workshop - Paso 2",path:"/paso-02",index:5}}},{node:{frontmatter:{title:"Workshop - Paso 3",path:"/paso-03",index:6}}}]}}}},229:function(e,n,t){"use strict";var a=t(231),o=t(0),r=t.n(o),s=t(236),i=t.n(s),c=t(39);function p(e){var n=e.title,t=e.description,o=e.lang,s=e.meta,p=e.keywords,d=e.pageContext;return r.a.createElement(c.StaticQuery,{query:l,render:function(e){var a=t||e.site.siteMetadata.description,c="Demo"===d.frontmatter.title,l=n||(c?"Tippy.js - Vanilla JS Tooltip and Popover Library":d.frontmatter.title);return r.a.createElement(i.a,{htmlAttributes:{lang:o},title:l,titleTemplate:c?null:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(s)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:[]},n.a=p;var l="1025518380"},230:function(e,n,t){e.exports=t.p+"static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png"},231:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Workshop",description:"Workshop de Gatsby para aprender las bases realizando un portfolio con los proyectos de Github y un blog.",author:"@agustinmulet"}}}}},232:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=(t(11),t(13),t(6),t(21),t(227)),s=t(39);function i(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}var c={xs:360,sm:576,md:768,lg:992,xl:1200},p=Object.keys(c).reduce(function(e,n){return e[n]="@media (min-width: "+c[n]+"px)",e},{}),l=(r.c.div.withConfig({displayName:"Framework__Center",componentId:"sc-1kcsy75-0"})(["text-align:center;"]),r.c.div.withConfig({displayName:"Framework__Container",componentId:"sc-1kcsy75-1"})(["position:relative;max-width:940px;padding:0 ","%;margin:0 auto;","{padding:0 25px;}","{padding:0 40px;}","{padding:0 50px;}"],function(e){return e.mobilePadding},p.sm,p.md,p.lg));l.defaultProps={mobilePadding:5},Object(r.c)(function(e){var n=e.children,t=(e.spacing,i(e,["children","spacing"]));return o.a.createElement("div",t,n)}).withConfig({displayName:"Framework__Row",componentId:"sc-1kcsy75-2"})(["display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 -","px;"],function(e){return e.spacing}).defaultProps={spacing:15},Object(r.c)(function(e){var n=e.children,t=(e.base,e.xs,e.sm,e.md,e.lg,e.xl,e.spacing,i(e,["children","base","xs","sm","md","lg","xl","spacing"]));return o.a.createElement("div",t,n)}).withConfig({displayName:"Framework__Col",componentId:"sc-1kcsy75-3"})(["flex:1;padding:0 ","px;"," ",";"],function(e){return e.spacing},function(e){return e.base&&Object(r.b)(["flex-basis:","%;"],function(e){return 100*e.base/12})},function(e){return["xs","sm","md","lg","xl"].filter(function(n){return e[n]}).map(function(e){return Object(r.b)(["","{flex-basis:","%;}"],p[e],function(n){return 100*n[e]/12})})}).defaultProps={spacing:15};var d=Object(r.c)(s.Link).attrs(function(e){return{activeStyle:{fontWeight:"bold",background:"linear-gradient(90deg, #d9bae8, #663399)",color:"#48434f"}}}).withConfig({displayName:"Framework__Link",componentId:"sc-1kcsy75-4"})(["color:inherit;text-decoration:none;transition:color 0.15s;"]),b=r.c.a.attrs(function(e){return{target:"_blank",rel:"noopener noreferrer"}}).withConfig({displayName:"Framework__ExternalLink",componentId:"sc-1kcsy75-5"})(["color:inherit;text-decoration:none;transition:color 0.15s;&:hover{color:#2263e5;}"]),u=r.c.div.withConfig({displayName:"Framework__Flex",componentId:"sc-1kcsy75-6"})(["display:flex;flex-wrap:wrap;justify-content:",";> div{margin-right:15px;margin-bottom:15px;flex:",";}"],function(e){return e.justify},function(e){return"even"===e.type&&1});u.defaultProps={justify:"space-between"};r.c.button.withConfig({displayName:"Framework__Button",componentId:"sc-1kcsy75-7"})(["border:none;background:linear-gradient(135deg,#56c8ff,#6f99fc) no-repeat;color:white;will-change:opacity;box-shadow:0 4px 8px -1px rgba(25,80,137,0.08),0 8px 24px -2px rgba(0,128,255,0.06);font-size:17px;font-weight:600;text-shadow:0 1px 0 rgba(0,0,0,0.1);padding:8px 16px;border-radius:4px;margin-right:8px;margin-bottom:8px;transition:opacity 0.2s;&:hover{opacity:0.8;}"]),r.c.div.withConfig({displayName:"Framework__Demo",componentId:"sc-1kcsy75-8"})(["margin:15px 0;background:#eeeefa;padding:15px 15px 6px;border-radius:8px;"]);var m=t(228),g=t(106),f=t(233),h=t.n(f),j=(t(47),t(19),t(107));function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y=function(e){var n,t;function r(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))||this).scroller=Object(a.createRef)(),n}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var s=r.prototype;return s.componentDidMount=function(){this.instance=Object(j.a)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach(function(n){x(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({targets:this.scroller},this.props))},s.componentWillUnmount=function(){this.instance.disable(),this.instance=null},s.render=function(){var e=this;return a.Children.map(this.props.children,function(n){return Object(a.cloneElement)(n,{children:o.a.createElement("div",{"data-elastic-wrapper":!0},n.props.children),ref:function(t){e.scroller=t;var a=n.ref;a&&("function"==typeof a?a(t):a.hasOwnProperty("current")&&(a.current=t))}})})},r}(a.Component);var N=r.c.nav.withConfig({displayName:"Nav__Navbar",componentId:"sc-1ofyja1-0"})(["display:",";position:fixed;top:0;bottom:0;width:250px;border-right:1px solid rgba(0,16,64,0.08);background-clip:padding-box;padding:16px 0;background:#663399;color:white;overflow-y:auto;z-index:1;transform:",";transition:transform ",",visibility 0.2s;transition-timing-function:",";visibility:",";","{display:block;visibility:visible;transform:none;}"],function(e){return e.isMounted?"block":"none"},function(e){return e.isOpen?"translate3d(0, 0, 0)":"translate3d(-100%, 0, 0)"},function(e){return e.isOpen?"0.45s":"0.3s"},function(e){return e.isOpen?"cubic-bezier(.165, .84, .44, 1)":"cubic-bezier(.77, 0, .175, 1)"},function(e){return e.isOpen?"visible":"hidden"},p.lg),k=r.c.ul.withConfig({displayName:"Nav__List",componentId:"sc-1ofyja1-1"})(["list-style:none;padding-left:0;margin:0;"]),w=r.c.li.withConfig({displayName:"Nav__ListItem",componentId:"sc-1ofyja1-2"})(["margin:0;&:not(:last-child){border-bottom:1px dotted rgba(0,16,64,0.1);}> a{display:block;padding:12px 25px;&:hover{border-bottom-color:transparent;}}"]),v=r.c.button.withConfig({displayName:"Nav__XButton",componentId:"sc-1ofyja1-3"})(["position:absolute;right:10px;background:none;border:none;color:inherit;padding:0;","{display:none;}"],p.lg),E=function(e){var n,t;function r(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))||this).state={isMounted:!1,transitions:!0},n.ref=Object(a.createRef)(),n.handleResize=function(){n.setState({transitions:!1}),clearTimeout(n.timeout),n.timeout=setTimeout(function(){n.setState({transitions:!0})},100)},n.handleClose=function(){n.props.close()},n.handleTransitionEnd=function(){n.props.isOpen&&n.ref.current.focus()},n.handleBlur=function(e){e.currentTarget.contains(e.relatedTarget)||n.props.close()},n}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var i=r.prototype;return i.componentDidMount=function(){this.setState({isMounted:!0}),window.addEventListener("resize",this.handleResize),this.handleResize()},i.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),clearTimeout(this.timeout)},i.render=function(){var e=this.props.isOpen,n=this.state,t=n.isMounted,a=n.transitions;return o.a.createElement(y,null,o.a.createElement(N,{tabIndex:"-1","aria-label":"Menu",ref:this.ref,style:{transition:a?"":"none"},isOpen:e,isMounted:t,onTransitionEnd:this.handleTransitionEnd,onBlur:this.handleBlur},o.a.createElement(v,{"aria-label":"Close Menu",onClick:this.handleClose},o.a.createElement(h.a,{style:{width:36,height:36}})),o.a.createElement(k,null,o.a.createElement(s.StaticQuery,{query:_,render:function(e){return Object(g.a)(e.allMdx.edges).map(function(e){var n=e.node;return o.a.createElement(w,{key:n.frontmatter.path},o.a.createElement(d,{to:n.frontmatter.path},n.frontmatter.title))})},data:m}))))},r}(a.Component),_="4190207198",z=r.c.span.withConfig({displayName:"NavButtons__FadedText",componentId:"ii0ddk-0"})(["position:relative;top:-2px;opacity:0.4;font-size:70%;margin-right:10px;font-weight:bold;display:block;","{display:inline;}"],p.md),C=Object(r.c)(s.Link).withConfig({displayName:"NavButtons__NavButton",componentId:"ii0ddk-1"})(["display:block;padding:40px 25px;border:",";border-radius:4px;background:",";text-decoration:none;color:",";filter:",";font-weight:bold;transition:box-shadow 0.2s;flex:1;margin:0 10px;max-width:500px;font-size:20px;transition:all 0.1s;&:hover{border-color:inherit;border-bottom:",";filter:",";}","{font-size:24px;}"],function(e){return e["data-next"]?"none":"1px solid rgba(0, 16, 64, 0.15)"},function(e){return e["data-next"]?"linear-gradient(90deg,#f6edfa,#d9bae8)":"white"},function(e){return e["data-next"]?"#663399":"inherit"},function(e){return e["data-next"]&&"saturate(1.15)"},function(e){return e["data-next"]&&"none"},function(e){return e["data-next"]&&"saturate(1.15) brightness(1.02)"},p.md);var q=function(e){var n=e.next;return o.a.createElement(u,{style:{marginTop:40,marginLeft:-10,marginRight:-10}},o.a.createElement(s.StaticQuery,{query:P,render:function(e){var t=Object(g.a)(e.allMdx.edges).map(function(e){return e.node}),a=t[n],r=n>1?t[n-2]:null;return o.a.createElement(o.a.Fragment,null,r&&o.a.createElement(C,{to:r.frontmatter.path},o.a.createElement(z,null,"ATRÁS")," ",r.frontmatter.title),a&&o.a.createElement(C,{to:a.frontmatter.path,"data-next":!0},o.a.createElement(z,null,"PRÓX")," ",a.frontmatter.title))},data:m}))},P="4190207198",M=t(230),I=t.n(M),S=t(234),L=t.n(S),T=t(235),G=t.n(T);function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var A=r.c.header.withConfig({displayName:"Header__HeaderRoot",componentId:"sc-9eu2yh-0"})(["position:relative;background:linear-gradient(91deg,#f6edfa,#b17acc 70%,#d9bae8);padding:25px 0 5px 0;text-align:center;margin-bottom:50px;"]),R=r.c.img.withConfig({displayName:"Header__Logo",componentId:"sc-9eu2yh-1"})(["height:60px;margin:0px;"]),B=r.c.h1.withConfig({displayName:"Header__Title",componentId:"sc-9eu2yh-2"})(["font-size:48px;font-weight:600;margin-top:0;margin-bottom:8px;"]),H=Object(r.c)(b).withConfig({displayName:"Header__ButtonLink",componentId:"sc-9eu2yh-3"})(["background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.4);padding:12px 24px;border-radius:4px;transition:all 0.15s;color:#663399;margin:0 10px 10px;font-weight:500;position:absolute;right:0px;top:0px;&:hover{color:#663399;background:white;border-bottom-color:white;box-shadow:0 8px 16px -2px rgba(0,32,128,0.25);}"]),W=r.c.button.withConfig({displayName:"Header__MenuButton",componentId:"sc-9eu2yh-4"})(["position:absolute;top:-10px;left:15px;color:inherit;font-weight:bold;border:none;background:none;text-transform:uppercase;border-radius:4px;padding:0;","{display:none;}"],p.lg),Q=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(t,!0).forEach(function(n){D(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},{verticalAlign:-6,marginRight:10},{color:"#333"}),U={width:36,height:36};var J=function(e){var n=e.openNav;return o.a.createElement(A,null,o.a.createElement(l,null,o.a.createElement(W,{"aria-label":"Menu",onClick:n},o.a.createElement(G.a,{style:U})),o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},o.a.createElement(R,{src:I.a,draggable:"false"})),o.a.createElement(B,null,"Gatsby Workshop"),o.a.createElement(u,{justify:"center"},o.a.createElement(H,{href:"https://github.com/agustinmulet/gatsbyworkshop"},o.a.createElement(L.a,{style:Q}),"Github"))))},X=r.c.main.withConfig({displayName:"Main",componentId:"sc-7otpyo-0"})(["","{margin-left:250px;}"],p.lg),Y=r.c.footer.withConfig({displayName:"Footer",componentId:"sc-1xqajj9-0"})(["text-align:center;padding:25px 0;border-top:1px solid rgba(0,16,64,0.08);margin-top:50px;color:#9dacb6;font-size:85%;background:white;"]),V=t(229);function $(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    color: #324b64;\n    height: 100%;\n    font-size: 17px;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :focus:not(.focus-visible) {\n    outline: 0;\n  }\n\n  &::-moz-selection {\n    background: #663399;\n    color: white;\n  }\n  &::selection {\n    background: #663399;\n    color: white;\n  }\n  \n  a {\n    color: #0065d5;\n    text-decoration: none;\n    border-bottom: 1px solid transparent;\n    transition: border-bottom-color 0.15s;\n\n    &:hover {\n      border-bottom-color: inherit;\n    }\n  }\n\n  h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    > a {\n      color: inherit;\n      padding-bottom: 0.25rem;\n    }\n  }\n\n  h1 {\n    font-size: 2.488rem;\n    margin-top: 2.488rem;\n  }\n\n  h2 {\n    font-size: 2.074rem;\n    margin-top: 2.074rem;\n    border-bottom: 1px solid rgba(0, 32, 128, 0.1);\n    padding-bottom: 10px;\n    margin-bottom: 1.5rem;\n  }\n\n  h3 {\n    font-size: 1.728rem;\n    margin-top: 1.728rem;\n  }\n\n  h4 {\n    font-size: 1.44rem;\n    margin-top: 1.5rem;\n  }\n\n  h5 {\n    font-size: 1.2rem;\n  }\n\n  p, \n  li {\n    line-height: 1.6;\n    margin-top: 0.5rem;\n  }\n  \n  table {\n    box-shadow: 0 0 0 1px rgba(0,32,128,0.1);\n    border-collapse: collapse;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    line-height: 1.4;\n    border-radius: 0 0 10px 10px;\n  }\n\n  table tr {\n    padding: 5px;\n\n    &:not(:last-child) {\n      border-bottom: 1px dotted rgba(0,32,128,0.1);\n    }\n  }\n\n  td:first-child code {\n    background: none;\n    font-size: 90%;\n    color: inherit;\n    padding: 0;\n  }\n\n  table th, table td {\n    padding: 16px;\n    text-align: left;\n  }\n\n  table th {\n    position: relative;\n    z-index: 1;\n    font-size: 14px;\n    text-transform: uppercase;\n    background: #eeeefa;\n    position: sticky;\n    top: 0;\n  }\n\n  @media (max-width: 1150px) {\n    table {\n      border: 0;\n      box-shadow: none;\n    }\n\n    table thead {\n      display: none;\n    }\n\n    table tr {\n      border: 1px solid rgba(0,32,128,0.1);\n      display: block;\n      margin-bottom: 10px;\n      border-radius: 10px;\n    }\n\n    table td {\n      display: block;\n\n      &:not(:last-child) {\n        border-bottom: 1px dotted rgba(0,32,128,0.1);\n      }\n    }\n\n    table td:last-child {\n      border-bottom: 0;\n    }\n\n    table td::before {\n      content: attr(data-label);\n      display: block;\n      font-weight: bold;\n      text-transform: uppercase;\n      opacity: 0.7;\n      font-size: 13px;\n      margin-bottom: 5px;\n    }\n\n    td:first-child code {\n      font-size: 100%;\n    }\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid rgba(0, 16, 64, 0.15);\n    margin-top: 5px;\n  }\n\n  [data-reach-tabs] {\n    padding: 14px;\n    box-shadow: 0.055rem 0.055rem 1.11rem rgba(20, 20, 20, 0.27);\n    margin-bottom: 24px;\n    -webkit-tap-highlight-color: transparent;\n  }\n  \n  [data-reach-tab-list] {\n    border-bottom: 1px solid #aaa;\n    margin: 0 0 10px;\n    padding: 0;\n  }\n  \n  [data-reach-tab] {\n    display: inline-block;\n    border: 1px solid #aaa;\n    border-bottom: none;\n    border-radius: 5px 5px 0 0;\n    bottom: -1px;\n    position: relative;\n    list-style: none;\n    padding: 6px 12px;\n    cursor: pointer;\n    background: #aaa;\n    margin-left: 4px;\n  }\n  \n  [data-reach-tab][data-selected] {\n    background: #fff;\n    border-color: #aaa;\n    color: black;\n  }\n  \n  [data-reach-tab]--disabled {\n    color: GrayText;\n    cursor: default;\n  }\n  \n  [data-reach-tab]:focus {\n    box-shadow: 0 0 5px hsl(208, 99%, 50%);\n    border-color: hsl(208, 99%, 50%);\n    outline: none;\n  }\n  \n  [data-reach-tab]:focus:after {\n    content: \"\";\n    position: absolute;\n    height: 5px;\n    left: -4px;\n    right: -4px;\n    bottom: -5px;\n    background: #fff;\n  }\n    \n"]);return $=function(){return e},e}var K=Object(r.a)($());function Z(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  code,\n  pre {\n    font-family: Menlo, Consolas, 'Liberation Mono', Courier, monospace;\n  }\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    color: #cee6ff;\n    background: none;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 2.25;\n    font-size: 90%;\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n    tab-size: 2;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  pre[class*='language-'] {\n    padding: 16px 5%;\n    margin-top: 0;\n    margin-left: -5.55%;\n    margin-right: -5.55%;\n    background: #22223f;\n    font-size: 15px;\n    line-height: 2;\n    max-height: 650px;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n\n    [data-elastic-wrapper] {\n      display: inline-block;\n    }\n\n    "," {\n      margin-left: -25px;\n      margin-right: -25px;\n      padding: 16px 25px;\n    }\n\n    "," {\n      border-radius: 8px;\n      margin-left: 0;\n      margin-right: 0;\n      padding: 16px 24px;\n      font-size: 16px;\n    }\n  }\n\n  code.language-text {\n    background: linear-gradient(90deg, #f3edff, #f6edfa);\n    color: #663399;\n    font-weight: bold;\n    padding: 0.2em 0.4em;\n    border-radius: 4px;\n    font-size: 85%;\n    line-height: inherit;\n  }\n\n  .token.important,\n  .token.atrule,\n  .token.keyword {\n    color: #bc90ff;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #7692d9;\n  }\n\n  .token.attr-name,\n  .token.selector {\n    color: #ffb07b;\n  }\n\n  .token.boolean {\n    color: #ff81d0;\n  }\n\n  .token.punctuation,\n  .token.operator,\n  .token.op,\n  .token.module {\n    color: #6ed3ff;\n  }\n\n  .token.nil {\n    color: #9b9fb0;\n  }\n\n  .token.arrow {\n    color: #c49dff;\n  }\n\n  .token.parameter {\n    color: #ffc5ff;\n  }\n\n  .token.flow {\n    color: #e99eff;\n    font-style: italic;\n  }\n\n  .token.spread {\n    font-weight: bold;\n    color: #ff7e99;\n    text-shadow: 0px 1px 6px;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.tag {\n    color: #ff6c8b;\n  }\n\n  .token.number,\n  .token.symbol,\n  .token.deleted {\n    color: #ff984b;\n  }\n\n  .token.string,\n  .language-css .token.string,\n  .token.url,\n  .token.attr-value,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #4ef2d0;\n  }\n\n  .token.entity,\n  .style .token.string {\n    color: #ecd6ba;\n    text-shadow: 0 1px 3px transparentize(#ecd6ba, 0.5);\n  }\n\n  .token.function,\n  .token.property {\n    color: #61a5ff;\n  }\n\n  .token.method {\n    color: #16c5ff;\n  }\n\n  .token.variable {\n    color: #ffad92;\n  }\n\n  .token.dom,\n  .token.class-name {\n    color: #ffd278;\n  }\n\n  .token.property.definition {\n    color: #b6e992;\n  }\n\n  .token.property.access {\n    color: #8ec1ef;\n  }\n\n  .token.regex {\n    color: #88ecff;\n  }\n\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n"]);return Z=function(){return e},e}var ee=Object(r.a)(Z(),p.sm,p.md);var ne=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(K,null),o.a.createElement(ee,null))};var te=function(e){var n,t;function a(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))||this).state={isNavOpen:!1},n.openNav=function(){n.setState({isNavOpen:!0})},n.closeNav=function(){n.setState({isNavOpen:!1})},n}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.state.isNavOpen,n=this.props,t=n.children,a=n.pageContext;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,null),o.a.createElement(V.a,{pageContext:a}),o.a.createElement(E,{isOpen:e,close:this.closeNav}),o.a.createElement(X,null,o.a.createElement(J,{openNav:this.openNav}),o.a.createElement(l,null,o.a.createElement("h2",null,a.frontmatter.title),t,o.a.createElement(q,{next:a.frontmatter.index+1})),o.a.createElement(Y,null,"© ",(new Date).getFullYear()," - MIT License")))},a}(a.Component);n.a=te}}]);
//# sourceMappingURL=component---src-pages-plugins-mdx-fcb111e883549e77e4ee.js.map