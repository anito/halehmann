!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t,n){var r=n(12),o=n(13),c=n(14),a=n(16);e.exports=function(e,t){return r(e)||o(e,t)||c(e,t)||a()}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){!function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(){}function a(){}t=t&&t.hasOwnProperty("default")?t.default:t,a.resetWarningCache=c;var i=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function e(e,t,n,r,o,c){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==c){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:c};return n.PropTypes=n,n}()})),s=function(e){return null!==e&&"object"===n(e)},u=function e(t,n){if(!s(t)||!s(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o="[object Object]"===Object.prototype.toString.call(t);if(o!==("[object Object]"===Object.prototype.toString.call(n)))return!1;if(!o&&!r)return!1;var c=Object.keys(t),a=Object.keys(n);if(c.length!==a.length)return!1;for(var i={},u=0;u<c.length;u+=1)i[c[u]]=!0;for(var l=0;l<a.length;l+=1)i[a[l]]=!0;var p=Object.keys(i);if(p.length!==c.length)return!1;var f=t,d=n;return p.every((function(t){return e(f[t],d[t])}))},l=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},p=function(e){if(null===e||s(t=e)&&"function"==typeof t.elements&&"function"==typeof t.createToken&&"function"==typeof t.createPaymentMethod&&"function"==typeof t.confirmCardPayment)return e;var t;throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},f=function(e){if(function(e){return s(e)&&"function"==typeof e.then}(e))return{tag:"async",stripePromise:Promise.resolve(e).then(p)};var t=p(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},d=t.createContext(null);d.displayName="ElementsContext";var m=function(e){var n=e.stripe,r=e.options,c=e.children,a=t.useRef(!1),i=t.useRef(!0),s=t.useMemo((function(){return f(n)}),[n]),p=o(t.useState((function(){return{stripe:null,elements:null}})),2),m=p[0],y=p[1],h=l(n),g=l(r);return null!==h&&(h!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),u(r,g)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),a.current||("sync"===s.tag&&(a.current=!0,y({stripe:s.stripe,elements:s.stripe.elements(r)})),"async"===s.tag&&(a.current=!0,s.stripePromise.then((function(e){e&&i.current&&y({stripe:e,elements:e.elements(r)})})))),t.useEffect((function(){return function(){i.current=!1}}),[]),t.useEffect((function(){var e=m.stripe;e&&e._registerWrapper&&e._registerWrapper({name:"react-stripe-js",version:"1.1.2"})}),[m.stripe]),t.createElement(d.Provider,{value:m},c)};m.propTypes={stripe:i.any,options:i.object};var y=function(e){return function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e}(t.useContext(d),e)},h=function(e){return(0,e.children)(y("mounts <ElementsConsumer>"))};h.propTypes={children:i.func.isRequired};var g=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},b=function(e){return s(e)?(e.paymentRequest,r(e,["paymentRequest"])):{}},v=function(){},E=function(e,n){var r,o="".concat((r=e).charAt(0).toUpperCase()+r.slice(1),"Element"),c=n?function(e){y("mounts <".concat(o,">"));var n=e.id,r=e.className;return t.createElement("div",{id:n,className:r})}:function(n){var r=n.id,c=n.className,a=n.options,i=void 0===a?{}:a,s=n.onBlur,l=void 0===s?v:s,p=n.onFocus,f=void 0===p?v:p,d=n.onReady,m=void 0===d?v:d,h=n.onChange,E=void 0===h?v:h,w=n.onEscape,_=void 0===w?v:w,C=n.onClick,O=void 0===C?v:C,R=y("mounts <".concat(o,">")).elements,j=t.useRef(null),S=t.useRef(null),T=g(m),P=g(l),x=g(f),A=g(O),k=g(E),I=g(_);t.useLayoutEffect((function(){if(null==j.current&&R&&null!=S.current){var t=R.create(e,i);j.current=t,t.mount(S.current),t.on("ready",(function(){return T(t)})),t.on("change",k),t.on("blur",P),t.on("focus",x),t.on("escape",I),t.on("click",A)}}));var N=t.useRef(i);return t.useEffect((function(){N.current&&N.current.paymentRequest!==i.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=b(i);0===Object.keys(e).length||u(e,b(N.current))||j.current&&(j.current.update(e),N.current=i)}),[i]),t.useEffect((function(){return function(){j.current&&j.current.destroy()}}),[]),t.createElement("div",{id:r,className:c,ref:S})};return c.propTypes={id:i.string,className:i.string,onChange:i.func,onBlur:i.func,onFocus:i.func,onReady:i.func,onClick:i.func,options:i.object},c.displayName=o,c.__elementType=e,c},w="undefined"==typeof window,_=E("auBankAccount",w),C=E("card",w),O=E("cardNumber",w),R=E("cardExpiry",w),j=E("cardCvc",w),S=E("fpxBank",w),T=E("iban",w),P=E("idealBank",w),x=E("paymentRequestButton",w);e.AuBankAccountElement=_,e.CardCvcElement=j,e.CardElement=C,e.CardExpiryElement=R,e.CardNumberElement=O,e.Elements=m,e.ElementsConsumer=h,e.FpxBankElement=S,e.IbanElement=T,e.IdealBankElement=P,e.PaymentRequestButtonElement=x,e.useElements=function(){return y("calls useElements()").elements},e.useStripe=function(){return y("calls useStripe()").stripe},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(17))},function(e,t){!function(){e.exports=this.wc.wcBlocksRegistry}()},function(e,t){!function(){e.exports=this.wc.wcSettings}()},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},,,function(e,t){function n(e,t,n,r,o,c,a){try{var i=e[c](a),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,c){var a=e.apply(t,r);function i(e){n(a,o,c,i,s,"next",e)}function s(e){n(a,o,c,i,s,"throw",e)}i(void 0)}))}}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}},function(e,t,n){var r=n(15);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){!function(){e.exports=this.React}()},function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(11),c=n.n(o),a=n(2),i=n.n(a),s=n(1),u=n(0);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p="https://js.stripe.com/v3",f=null,d=function(e,t){if(null===e)return null;var n=e.apply(void 0,l(t));return function(e){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.3.2"})}(n),n},m=Promise.resolve().then((function(){return null!==f?f:f=new Promise((function(e,t){if("undefined"!=typeof window)if(window.Stripe)e(window.Stripe);else{var n=document.querySelector('script[src="'.concat(p,'"], script[src="').concat(p,'/"]'))||function(){var e=document.createElement("script");e.src=p;var t=document.head||document.body;if(!t)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return t.appendChild(e),e}();n.addEventListener("load",(function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){t(new Error("Failed to load Stripe.js"))}))}else e(null)}))})),y=!1;m.catch((function(e){y||console.warn(e)}));var h=n(3),g=n.n(h),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((function(e){return{amount:e.value,label:e.label,pending:t}}))},v=function(e){return e[0].shipping_rates.map((function(e){return{id:e.rate_id,label:e.name,detail:e.description,amount:parseInt(e.price,10)}}))},E=function(e){return{first_name:e.recipient.split(" ").slice(0,1).join(" "),last_name:e.recipient.split(" ").slice(1).join(" "),company:"",address_1:void 0===e.addressLine[0]?"":e.addressLine[0],address_2:void 0===e.addressLine[1]?"":e.addressLine[1],city:e.city,state:e.region,country:e.country,postcode:e.postalCode.replace(" ","")}},w=function(e){var t=e.source,n=t&&t.owner.name,r=t&&t.owner.address,o=e.payerEmail||"",c=e.payerPhone||"";return{first_name:n?n.split(" ").slice(0,1).join(" "):"",last_name:n?n.split(" ").slice(1).join(" "):"",email:t&&t.owner.email||o,phone:t&&t.owner.phone||c.replace("/[() -]/g",""),country:r&&r.country||"",address_1:r&&r.line1||"",address_2:r&&r.line2||"",city:r&&r.city||"",state:r&&r.state||"",postcode:r&&r.postal_code||"",company:""}},_=function(e,t){return{payment_method:"stripe",stripe_source:e.source?e.source.id:null,payment_request_type:t}},C={INVALID_EMAIL:"email_invalid",INVALID_REQUEST:"invalid_request_error",API_CONNECTION:"api_connection_error",API_ERROR:"api_error",AUTHENTICATION_ERROR:"authentication_error",RATE_LIMIT_ERROR:"rate_limit_error",CARD_ERROR:"card_error",VALIDATION_ERROR:"validation_error"},O="invalid_number",R="invalid_expiry_month",j="invalid_expiry_year",S="invalid_cvc",T="incorrect_number",P="incomplete_number",x="incomplete_cvc",A="incomplete_expiry",k="expired_card",I="incorrect_cvc",N="incorrect_zip",M="invalid_expiry_year_past",q="card_declined",D="missing",L="processing_error",F=n(6),U=function(){var e=Object(F.getSetting)("stripe_data",null);if(!e)throw new Error("Stripe initialization data is not available");return e},B=function(e){return{label:U().stripeTotalLabel||Object(s.__)("Total","woo-gutenberg-products-block"),amount:e.value}},V=function(e){return[C.INVALID_REQUEST,C.API_CONNECTION,C.API_ERROR,C.AUTHENTICATION_ERROR,C.RATE_LIMIT_ERROR].includes(e)},W=function(e){var t;return(t={},g()(t,O,Object(s.__)("The card number is not a valid credit card number.","woocommerce-gateway-stripe")),g()(t,R,Object(s.__)("The card's expiration month is invalid.","woocommerce-gateway-stripe")),g()(t,j,Object(s.__)("The card's expiration year is invalid.","woocommerce-gateway-stripe")),g()(t,S,Object(s.__)("The card's security code is invalid.","woocommerce-gateway-stripe")),g()(t,T,Object(s.__)("The card number is incorrect.","woocommerce-gateway-stripe")),g()(t,P,Object(s.__)("The card number is incomplete.","woocommerce-gateway-stripe")),g()(t,x,Object(s.__)("The card's security code is incomplete.","woocommerce-gateway-stripe")),g()(t,A,Object(s.__)("The card's expiration date is incomplete.","woocommerce-gateway-stripe")),g()(t,k,Object(s.__)("The card has expired.","woocommerce-gateway-stripe")),g()(t,I,Object(s.__)("The card's security code is incorrect.","woocommerce-gateway-stripe")),g()(t,N,Object(s.__)("The card's zip code failed validation.","woocommerce-gateway-stripe")),g()(t,M,Object(s.__)("The card's expiration year is in the past","woocommerce-gateway-stripe")),g()(t,q,Object(s.__)("The card was declined.","woocommerce-gateway-stripe")),g()(t,D,Object(s.__)("There is no card on a customer that is being charged.","woocommerce-gateway-stripe")),g()(t,L,Object(s.__)("An error occurred while processing the card.","woocommerce-gateway-stripe")),t)[e]||""},H=function(){return new Promise((function(e){try{e(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return y=!0,m.then((function(e){return d(e,t)}))}(function(){var e=U().publicKey;if(!e)throw new Error("There is no api key available for stripe. Make sure it is available on the wc.stripe_data.stripe.key property.");return e}()))}catch(t){e({error:t})}}))},Y=n(7),Z=n.n(Y),z=n(10),Q=n.n(z),K=n(4),X=function(e,t,n){Object(u.useEffect)((function(){var r=t((function(t){var r=t.processingResponse.paymentDetails||{};return function(e,t,n){var r={type:n.responseTypes.SUCCESS};if(!t.setup_intent&&!t.payment_intent_secret)return r;var o=!!t.setupIntent,c=t.verification_endpoint,a=o?t.setup_intent:t.payment_intent_secret;return e[o?"confirmCardSetup":"confirmCardPayment"](a).then((function(e){if(e.error)throw e.error;var t=e[o?"setupIntent":"paymentIntent"];return"requires_capture"!==t.status&&"succeeded"!==t.status||(r.redirectUrl=c),r})).catch((function(e){return r.type=n.responseTypes.ERROR,r.message=e.message,r.retry=!0,r.messageContext=n.noticeContexts.PAYMENTS,window.fetch(c+"&is_ajax"),r}))}(e,r,n)}));return function(){return r()}}),[t,e])},$=function(e,t,n,r,o,c,a,l){var p=Object(u.useState)(""),f=i()(p,2),d=f[0],m=f[1],y=Object(u.useRef)((function(e){return e}));return X(a,e.onCheckoutAfterProcessingWithSuccess,c),Object(u.useEffect)((function(){y.current=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(e){case C.INVALID_EMAIL:return Object(s.__)("Invalid email address, please correct and try again.","woo-gutenberg-product-blocks");case V(e):return Object(s.__)("Unable to process this payment, please try again or use alternative method.","woo-gutenberg-product-blocks");case C.CARD_ERROR:case C.VALIDATION_ERROR:return W(t)}return""}(e.error.type,e.error.code||"");return t=t||e.error.message,m(d),t};var i=function(){var e=Q()(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=U().inline_cc_form?K.CardElement:K.CardNumberElement,e.next=3,a.createSource(l.getElement(n),{type:"card",owner:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Q()(Z.a.mark((function e(){var a,s,u;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.billingData,!d){e.next=4;break}return e.abrupt("return",{type:c.responseTypes.ERROR,message:d});case 4:if(0===n){e.next=6;break}return e.abrupt("return",{type:c.responseTypes.SUCCESS,meta:{paymentMethodData:{paymentMethod:"stripe",paymentRequestType:"cc",stripe_source:n,shouldSavePayment:o},billingData:a}});case 6:return s={address:{line1:a.address_1,line2:a.address_2,city:a.city,state:a.state,postal_code:a.postcode,country:a.country}},a.phone&&(s.phone=a.phone),a.email&&(s.email=a.email),(a.first_name||a.last_name)&&(s.name="".concat(a.first_name," ").concat(a.last_name)),e.next=12,i(s);case 12:if(!(u=e.sent).error){e.next=15;break}return e.abrupt("return",{type:c.responseTypes.ERROR,message:y.current(u)});case 15:return r(u.source.id),e.abrupt("return",{type:c.responseTypes.SUCCESS,meta:{paymentMethodData:{stripe_source:u.source.id,paymentMethod:"stripe",paymentRequestType:"cc",shouldSavePayment:o},billingData:a}});case 19:return e.prev=19,e.t0=e.catch(0),e.abrupt("return",{type:c.responseTypes.ERROR,message:e.t0});case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),p=e.onPaymentProcessing(u),f=e.onCheckoutAfterProcessingWithError((function(e){var t,n=e.processingResponse;return!(null==n||null===(t=n.paymentDetails)||void 0===t?void 0:t.errorMessage)||{type:c.responseTypes.ERROR,message:n.paymentDetails.errorMessage,messageContext:c.noticeContexts.PAYMENTS}}));return function(){p(),f()}}),[e.onPaymentProcessing,e.onCheckoutAfterProcessingWithError,a,n,t.billingData,r,o,d]),y.current};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee={style:{base:{iconColor:"#666EE8",color:"#31325F",fontSize:"15px","::placeholder":{color:"#fff"}}},classes:{focus:"focused",empty:"empty",invalid:"has-error"}},te=function(e){var t=Object(u.useState)(!1),n=i()(t,2),r=n[0],o=n[1],c=Object(u.useState)(J({},ee,{},e)),a=i()(c,2),s=a[0],l=a[1],p=Object(u.useState)(""),f=i()(p,2),d=f[0],m=f[1];Object(u.useEffect)((function(){var e=r?"#CFD7E0":"#fff";l((function(t){var n=void 0!==t.showIcon?{showIcon:r}:{};return J({},s,{style:J({},s.style,{base:J({},s.style.base,{"::placeholder":{color:e}})})},n)}))}),[r]);var y=Object(u.useCallback)((function(e){o(!e||function(e){return!e})}),[o]);return{options:s,onActive:y,error:d,setError:m}},ne=function(e){var t=e.inputErrorComponent,n=e.onChange,r=Object(u.useState)(!0),o=i()(r,2),c=o[0],a=o[1],l=te({hidePostalCode:!0}),p=l.options,f=l.onActive,d=l.error,m=l.setError;return React.createElement(React.Fragment,null,React.createElement("div",{className:"wc-block-gateway-container wc-inline-card-element"},React.createElement(K.CardElement,{id:"wc-stripe-inline-card-element",className:"wc-block-gateway-input",options:p,onBlur:function(){return f(c)},onFocus:function(){return f(c)},onChange:function(e){e.error?m(e.error.message):m(""),a(e.empty),n(e)}}),React.createElement("label",{htmlFor:"wc-stripe-inline-card-element"},Object(s.__)("Credit Card Information","woo-gutenberg-products-block"))),React.createElement(t,{errorMessage:d}))},re=function(e){var t=e.onChange,n=e.inputErrorComponent,r=Object(u.useState)(!0),o=i()(r,2),c=o[0],a=o[1],l=te({showIcon:!1}),p=l.options,f=l.onActive,d=l.error,m=l.setError,y=te(),h=y.options,g=y.onActive,b=y.error,v=y.setError,E=te(),w=E.options,_=E.onActive,C=E.error,O=E.setError,R=function(e){return function(n){n.error?e(n.error.message):e(""),a(n.empty),t(n)}};return React.createElement("div",{className:"wc-block-card-elements"},React.createElement("div",{className:"wc-block-gateway-container wc-card-number-element"},React.createElement(K.CardNumberElement,{onChange:R(m),options:p,className:"wc-block-gateway-input",id:"wc-stripe-card-number-element",onFocus:function(){return f(c)},onBlur:function(){return f(c)}}),React.createElement("label",{htmlFor:"wc-stripe-card-number-element"},Object(s.__)("Card Number","woo-gutenberg-product-blocks")),React.createElement(n,{errorMessage:d})),React.createElement("div",{className:"wc-block-gateway-container wc-card-expiry-element"},React.createElement(K.CardExpiryElement,{onChange:R(v),options:h,className:"wc-block-gateway-input",onFocus:function(){return g(c)},onBlur:function(){return g(c)},id:"wc-stripe-card-expiry-element"}),React.createElement("label",{htmlFor:"wc-stripe-card-expiry-element"},Object(s.__)("Expiry Date","woo-gutenberg-product-blocks")),React.createElement(n,{errorMessage:b})),React.createElement("div",{className:"wc-block-gateway-container wc-card-cvc-element"},React.createElement(K.CardCvcElement,{onChange:R(O),options:w,className:"wc-block-gateway-input",onFocus:function(){return _(c)},onBlur:function(){return _(c)},id:"wc-stripe-card-code-element"}),React.createElement("label",{htmlFor:"wc-stripe-card-code-element"},Object(s.__)("CVV/CVC","woo-gutenberg-product-blocks")),React.createElement(n,{errorMessage:C})))},oe=function(e){var t=e.billing,n=e.eventRegistration,r=e.emitResponse,o=e.components,c=o.ValidationInputError,a=o.CheckboxControl,l=t.customerId,p=Object(u.useState)(0),f=i()(p,2),d=f[0],m=f[1],y=Object(K.useStripe)(),h=Object(u.useState)(!!l),g=i()(h,2),b=g[0],v=g[1],E=Object(K.useElements)(),w=$(n,t,d,m,b,r,y,E),_=function(e){e.error&&w(e),m(0)},C=U().inline_cc_form?React.createElement(ne,{onChange:_,inputErrorComponent:c}):React.createElement(re,{onChange:_,inputErrorComponent:c});return React.createElement(React.Fragment,null,C,l>0&&React.createElement(a,{className:"wc-block-checkout__save-card-info",label:Object(s.__)("Save payment information to my account for future purchases.","woo-gutenberg-products-block"),checked:b,onChange:function(){return v(!b)}}),React.createElement("div",{className:"wc-blocks-credit-card-images"},Object.entries(U().icons).map((function(e){var t=i()(e,2),n=t[0],r=t[1],o=r.url,c=r.alt;return React.createElement("img",{src:o,alt:c,key:n,className:"wc-blocks-credit-".concat(n,"-icon wc-blocks-credit-cart-icon")})}))))},ce=function(e){var t=U().button.locale,n=e.activePaymentMethod,r=e.stripe;return"stripe"===n?React.createElement(K.Elements,{stripe:r,locale:t},React.createElement(oe,e)):null},ae=H(),ie=function(e){var t=Object(u.useState)(""),n=i()(t,2),r=n[0],o=n[1];return Object(u.useEffect)((function(){Promise.resolve(ae).then((function(e){var t=e.error;t&&o(t.message)}))}),[ae,o]),Object(u.useEffect)((function(){if(r)throw new Error(r)}),[r]),React.createElement(ce,c()({stripe:ae},e))},se={name:"stripe",label:React.createElement("strong",null,Object(s.__)("Credit/Debit Card","woo-gutenberg-products-block")),content:React.createElement(ie,null),edit:React.createElement(ie,null),canMakePayment:function(){return ae},ariaLabel:Object(s.__)("Stripe Credit Card payment method","woo-gutenberg-products-block")},ue={shippingAddressChange:null,shippingOptionChange:null,source:null},le=function(e){var t=e.shippingData,n=e.billing,r=e.eventRegistration,o=e.onSubmit,c=e.setExpressPaymentError,a=e.emitResponse,l=e.onClick,p=e.onClose,f=Object(u.useState)(null),d=i()(f,2),m=d[0],y=d[1],h=Object(K.useStripe)(),g=Object(u.useState)(!1),C=i()(g,2),O=C[0],R=C[1],j=Object(u.useState)(""),S=i()(j,2),T=S[0],P=S[1],x=Object(u.useState)(!1),A=i()(x,2),k=A[0],I=A[1],N=Object(u.useState)(!1),M=i()(N,2),q=M[0],D=M[1],L=Object(u.useRef)(ue),F=Object(u.useRef)(n),V=Object(u.useRef)(t),W=Object(u.useRef)(m);Object(u.useEffect)((function(){F.current=n,V.current=t,W.current=m}),[n,t,m]),Object(u.useEffect)((function(){h&&n.cartTotal.value&&(W.current||q||y(function(e){var t=e.stripe,n=e.total,r=e.currencyCode,o=e.countryCode,c=e.shippingRequired,a=e.cartTotalItems,i={total:B(n),currency:r,country:o||"US",requestPayerName:!0,requestPayerEmail:!0,requestPayerPhone:!0,requestShipping:c,displayItems:b(a)};return t.paymentRequest(i)}({total:n.cartTotal,currencyCode:n.currency.code.toLowerCase(),countryCode:t.shippingAddress.country,shippingRequired:t.needsShipping,cartTotalItems:n.cartTotalItems,stripe:h})),k||!W.current||q||function(e){var t=e.paymentRequest,n=e.total,r=e.currencyCode,o=e.cartTotalItems;t.update({total:B(n),currency:r,displayItems:b(o)})}({paymentRequest:W.current,total:n.cartTotal,currencyCode:n.currency.code.toLowerCase(),cartTotalItems:n.cartTotalItems}))}),[n.cartTotal,n.currency.code,t.shippingAddress.country,t.needsShipping,n.cartTotalItems,h,k,q]),Object(u.useEffect)((function(){m&&function(e){return new Promise((function(t){e.canMakePayment().then((function(e){if(e){var n=e.applePay?"apple_pay":"payment_request_api";t({canPay:!0,requestType:n})}else t({canPay:!1})}))}))}(m).then((function(e){e.requestType&&P(e.requestType),R(e.canPay)}))}),[m]);var H=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var n=L.current,r=F.current;n.shippingAddressChange&&k&&(n.shippingAddressChange.updateWith({status:e?"success":"fail",shippingOptions:v(t),total:B(r.cartTotal),displayItems:b(r.cartTotalItems)}),n.shippingAddressChange=null)}},Y=function(){var e,t=L.current;return t.sourceEvent&&k?{type:a.responseTypes.SUCCESS,meta:{billingData:w(t.sourceEvent),paymentMethodData:_(t.sourceEvent,T),shippingData:(e=t.sourceEvent,e.shippingAddress?{address:E(e.shippingAddress)}:null)}}:{type:a.responseTypes.SUCCESS}},Z=function(e){var t=L.current,n={type:a.responseTypes.SUCCESS};if(t.sourceEvent&&k){var r=e.paymentStatus,o=e.paymentDetails;if(r===a.responseTypes.SUCCESS&&(t.sourceEvent.complete("success"),D(!0),I(!1)),r===a.responseTypes.ERROR||r===a.responseTypes.FAIL){var c=function(e,t){var n={fail:{message:t,billingData:w(e),paymentMethodData:_(e,T)}};return e.complete("fail"),I(!1),D(!0),n}(t.sourceEvent,null==o?void 0:o.errorMessage);n={type:a.responseTypes.ERROR,message:c.message,messageContext:a.noticeContexts.EXPRESS_PAYMENTS,retry:!0}}t.sourceEvent=null}return n};Object(u.useEffect)((function(){m&&O&&k&&(m.on("shippingaddresschange",(function(e){V.current.setShippingAddress(E(e.shippingAddress)),L.current.shippingAddressChange=e})),m.on("shippingoptionchange",(function(e){V.current.setSelectedRates(e.shippingOption.id),L.current.shippingOptionChange=e})),m.on("source",(function(e){U().allowPrepaidCard||!e.source.card.funding?(L.current.sourceEvent=e,o()):c(Object(s.__)("Sorry, we're not accepting prepaid cards at this time.","woocommerce-gateway-stripe"))})),m.on("cancel",(function(){D(!0),I(!1),p()})))}),[m,O,k,p]),Object(u.useEffect)((function(){if(O&&k){var e=r,t=e.onShippingRateSuccess(H()),n=e.onShippingRateFail(H(!1)),o=e.onShippingRateSelectSuccess(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(){var t=L.current,n=V.current,r=F.current;if(t.shippingOptionChange&&!n.isSelectingRate&&k){var o=e?{status:"success",total:B(r.cartTotal),displayItems:b(r.cartTotalItems)}:{status:"fail"};t.shippingOptionChange.updateWith(o),t.shippingOptionChange=null}}}()),c=e.onShippingRateSelectFail(H(!1)),a=e.onPaymentProcessing(Y),i=e.onCheckoutAfterProcessingWithSuccess(Z),s=e.onCheckoutAfterProcessingWithError(Z);return function(){s(),i(),a(),n(),t(),o(),c()}}}),[O,k,r.onShippingRateSuccess,r.onShippingRateFail,r.onShippingRateSelectSuccess,r.onShippingRateSelectFail,r.onPaymentProcessing,r.onCheckoutAfterProcessingWithSuccess,r.onCheckoutAfterProcessingWithError]);var z={paymentRequestButton:{type:"default",theme:U().button.theme,height:"48px"}};return O&&m?React.createElement(K.PaymentRequestButtonElement,{onClick:function(){I(!0),D(!1),c(""),l()},options:{style:z,paymentRequest:m}}):null},pe=function(e){var t=U().button.locale,n=e.stripe;return React.createElement(K.Elements,{stripe:n,locale:t},React.createElement(le,e))},fe=function(){return React.createElement("img",{src:"data:image/svg+xml,%3Csvg width='264' height='48' viewBox='0 0 264 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='264' height='48' rx='3' fill='black'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M125.114 16.6407C125.682 15.93 126.067 14.9756 125.966 14C125.135 14.0415 124.121 14.549 123.533 15.2602C123.006 15.8693 122.539 16.8641 122.661 17.7983C123.594 17.8797 124.526 17.3317 125.114 16.6407Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M125.955 17.982C124.601 17.9011 123.448 18.7518 122.801 18.7518C122.154 18.7518 121.163 18.0224 120.092 18.0421C118.696 18.0629 117.402 18.8524 116.694 20.1079C115.238 22.6196 116.31 26.3453 117.726 28.3909C118.414 29.4028 119.242 30.5174 120.334 30.4769C121.366 30.4365 121.77 29.8087 123.024 29.8087C124.277 29.8087 124.641 30.4769 125.733 30.4567C126.865 30.4365 127.573 29.4443 128.261 28.4313C129.049 27.2779 129.373 26.1639 129.393 26.1027C129.373 26.0825 127.209 25.2515 127.189 22.7606C127.169 20.6751 128.888 19.6834 128.969 19.6217C127.998 18.1847 126.481 18.0224 125.955 17.982Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M136.131 23.1804H138.834C140.886 23.1804 142.053 22.0752 142.053 20.1592C142.053 18.2432 140.886 17.1478 138.845 17.1478H136.131V23.1804ZM139.466 15.1582C142.411 15.1582 144.461 17.1903 144.461 20.1483C144.461 23.1172 142.369 25.1596 139.392 25.1596H136.131V30.3498H133.775V15.1582H139.466Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152.198 26.224V25.3712L149.579 25.5397C148.106 25.6341 147.339 26.182 147.339 27.14C147.339 28.0664 148.138 28.6667 149.39 28.6667C150.988 28.6667 152.198 27.6449 152.198 26.224ZM145.046 27.2032C145.046 25.2551 146.529 24.1395 149.263 23.971L152.198 23.7922V22.9498C152.198 21.7181 151.388 21.0442 149.947 21.0442C148.758 21.0442 147.896 21.6548 147.717 22.5916H145.592C145.656 20.6232 147.507 19.1914 150.01 19.1914C152.703 19.1914 154.459 20.602 154.459 22.7917V30.351H152.282V28.5298H152.229C151.609 29.719 150.241 30.4666 148.758 30.4666C146.571 30.4666 145.046 29.1612 145.046 27.2032Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M156.461 34.4145V32.5934C156.608 32.6141 156.965 32.6354 157.155 32.6354C158.196 32.6354 158.785 32.1932 159.142 31.0564L159.353 30.3824L155.366 19.3281H157.827L160.604 28.298H160.657L163.434 19.3281H165.832L161.698 30.9402C160.752 33.6038 159.668 34.4778 157.376 34.4778C157.197 34.4778 156.618 34.4565 156.461 34.4145Z' fill='white'/%3E%3C/svg%3E%0A",alt:""})},de=H(),me=H(),ye={name:"payment_request",content:React.createElement(pe,{stripe:me}),edit:React.createElement(fe,null),canMakePayment:function(e){return de.then((function(t){var n,r,o;return null!==t&&t.paymentRequest({total:{label:"Test total",amount:1e3},country:null==e||null===(n=e.shippingAddress)||void 0===n?void 0:n.country,currency:null==e||null===(r=e.cartTotals)||void 0===r||null===(o=r.currency_code)||void 0===o?void 0:o.toLowerCase()}).canMakePayment().then((function(e){return!!e}))}))},paymentMethodId:"stripe"};Object(r.registerPaymentMethod)((function(e){return new e(se)})),Object(r.registerExpressPaymentMethod)((function(e){return new e(ye)}))}]);