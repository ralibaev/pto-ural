!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
Modernizr.on('webp', function(result) {
  if (result) {
    document.body.classList.add('webp');
  } else {
    document.body.classList.add('no-webp');
  }
});

// Появление меню
let navToggle = document.querySelector('.main-nav__toggle');
let mainMenu = document.querySelector('.main-nav__main-menu');
navToggle.addEventListener('click', function() {
  if (mainMenu.classList.contains('main-nav__main-menu--showed')) {
    navToggle.classList.remove('main-nav__toggle--opened');
    mainMenu.classList.remove('main-nav__main-menu--showed');
    setTimeout(function() {mainMenu.classList.remove('main-nav__main-menu--opened');}, 350);
  } else {
    navToggle.classList.add('main-nav__toggle--opened');
    mainMenu.classList.add('main-nav__main-menu--opened');
    setTimeout(function() {mainMenu.classList.add('main-nav__main-menu--showed');}, 50);
  };
});

// Главный слайдер
let mainSlides = document.querySelectorAll('.main-slider__item');
if (mainSlides.length != 0) {
  let mainSlidesCount = 0;
  for (let i = 0; i < mainSlides.length; i++) {
    mainSlidesCount++;
  }

  let mainSlidesButtonList = document.querySelector('.main-slider__button-list');
  for (let i = 0; i < mainSlidesCount; i++) {
    let mainSlidesButton = document.createElement('button');
    mainSlidesButton.classList.add('main-slider__button-item');
    mainSlidesButtonList.append(mainSlidesButton);
  }

  mainSlidesButtonList.childNodes[0].classList.add('main-slider__button-item--active');

  for (let i = 0; i < mainSlides.length; i++) {
    mainSlides[i].style.left = (i * 100) + '%';
  }

  function showMainSlide() {
    for (let i = 0; i < mainSlidesCount; i++) {
      if (mainSlidesButtonList.childNodes[i].classList.contains('main-slider__button-item--active')) {
        for (let j = 0; j < mainSlides.length; j++) {
          mainSlides[j].style.left = (j * 100) - (i * 100) + '%';
        }
      }
    }
  }

  function prevMainSlide() {
    let x = 0;
    for (let i = 0; i < mainSlidesCount; i++) {
      if (mainSlidesButtonList.childNodes[i].classList.contains('main-slider__button-item--active')) {
        x = i;
      }
    }
    mainSlidesButtonList.childNodes[x].classList.remove('main-slider__button-item--active');
    if (x == 0) {
      mainSlidesButtonList.lastChild.classList.add('main-slider__button-item--active');
    } else {
      mainSlidesButtonList.childNodes[x - 1].classList.add('main-slider__button-item--active');
    }
    showMainSlide();
  }

  function nextMainSlide() {
    let x = 0;
    for (let i = 0; i < mainSlidesCount; i++) {
      if (mainSlidesButtonList.childNodes[i].classList.contains('main-slider__button-item--active')) {
        x = i;
      }
    }
    mainSlidesButtonList.childNodes[x].classList.remove('main-slider__button-item--active');
    if (x == (mainSlidesCount - 1)) {
      mainSlidesButtonList.firstChild.classList.add('main-slider__button-item--active');
    } else {
      mainSlidesButtonList.childNodes[x + 1].classList.add('main-slider__button-item--active');
    }
    showMainSlide();
  }

  let mainSlidesTime = 10000;
  let mainSlidesTimer = setInterval(function() {
    nextMainSlide();
  }, mainSlidesTime);

  for (let i = 0; i < mainSlidesCount; i++) {
    mainSlidesButtonList.childNodes[i].addEventListener('click', function() {
      for (let j = 0; j < mainSlides.length; j++) {
        mainSlidesButtonList.childNodes[j].classList.remove('main-slider__button-item--active')
      }
      mainSlidesButtonList.childNodes[i].classList.add('main-slider__button-item--active');
      showMainSlide();
    });
  }

  // let mainSlidesPrevButton = document.querySelector('.main-slider__button--prev');
  // mainSlidesPrevButton.addEventListener('click', prevMainSlide);
  //
  // let mainSlidesNextButton = document.querySelector('.main-slider__button--next');
  // mainSlidesNextButton.addEventListener('click', nextMainSlide);
}

// Попап

let formLayout = document.querySelector('.popup__layout');
let formButton = document.querySelector('.popup__button');
let formClose = document.querySelector('.popup__close');
let formPopup = document.querySelector('.popup__form');

formButton.addEventListener('click', function() {
  formLayout.classList.add('popup__layout--show');
  formPopup.classList.add('popup__form--show');
});

formClose.addEventListener('click', function() {
  formLayout.classList.remove('popup__layout--show');
  formPopup.classList.remove('popup__form--show');
});
formLayout.addEventListener('click', function() {
  formLayout.classList.remove('popup__layout--show');
  formPopup.classList.remove('popup__form--show');
});

// let popupTel = document.querySelector('.popup__tel-input');
// console.log(popupTel);
//
// popupTel.addEventListener('focus', _ => {
//   if(!/^\+\d*$/.test(popupTel.value))
//     popupTel.value = '+';
// });
//
// popupTel.onclick = function() {
//     popupTel.value = "+";
// }
//
// let popupNumCount = 0;
// popupTel.onkeydown = function() {
//   let curLen = popupTel.value.length;
//   if (curLen < popupNumCount){
//     popupNumCount--;
//     return;
//   }
//   if (curLen > 16)
//   	popupTel.value = popupTel.value.substring(0, popupTel.value.length - 1);
//   popupNumCount++;
// }
//
// popupTel.addEventListener('keypress', e => {
//   if(!/\d/.test(e.key))
//     e.preventDefault();
// });

// Маска для телефона
var masking = {

  // User defined Values
  //maskedInputs : document.getElementsByClassName('masked'), // add with IE 8's death
  maskedInputs : document.querySelectorAll('.masked'), // kill with IE 8's death
  maskedNumber : 'XdDmMyY9',
  maskedLetter : '_',

  init: function () {
    masking.setUpMasks(masking.maskedInputs);
    masking.maskedInputs = document.querySelectorAll('.masked'); // Repopulating. Needed b/c static node list was created above.
    masking.activateMasking(masking.maskedInputs);
  },

  setUpMasks: function (inputs) {
    var i, l = inputs.length;

    for(i = 0; i < l; i++) {
      masking.createShell(inputs[i]);
    }
  },

  // replaces each masked input with a shall containing the input and it's mask.
  createShell : function (input) {
    var text = '',
        placeholder = input.getAttribute('placeholder');

    input.setAttribute('maxlength', placeholder.length);
    input.setAttribute('data-placeholder', placeholder);
    input.removeAttribute('placeholder');

    text = '<span class="shell">' +
      '<span aria-hidden="true" id="' + input.id +
      'Mask"><i></i>' + placeholder + '</span>' +
      input.outerHTML +
      '</span>';

    input.outerHTML = text;
  },

  setValueOfMask : function (e) {
    var value = e.target.value,
        placeholder = e.target.getAttribute('data-placeholder');

    return "<i>" + value + "</i>" + placeholder.substr(value.length);
  },

  // add event listeners
  activateMasking : function (inputs) {
    var i, l;

    for (i = 0, l = inputs.length; i < l; i++) {
      if (masking.maskedInputs[i].addEventListener) { // remove "if" after death of IE 8
        masking.maskedInputs[i].addEventListener('keyup', function(e) {
          masking.handleValueChange(e);
        }, false);
      } else if (masking.maskedInputs[i].attachEvent) { // For IE 8
          masking.maskedInputs[i].attachEvent("onkeyup", function(e) {
          e.target = e.srcElement;
          masking.handleValueChange(e);
        });
      }
    }
  },

  handleValueChange : function (e) {
    var id = e.target.getAttribute('id');

    switch (e.keyCode) { // allows navigating thru input
      case 20: // caplocks
      case 17: // control
      case 18: // option
      case 16: // shift
      case 37: // arrow keys
      case 38:
      case 39:
      case 40:
      case  9: // tab (let blur handle tab)
        return;
      }

    document.getElementById(id).value = masking.handleCurrentValue(e);
    document.getElementById(id + 'Mask').innerHTML = masking.setValueOfMask(e);

  },

  handleCurrentValue : function (e) {
    var isCharsetPresent = e.target.getAttribute('data-charset'),
        placeholder = isCharsetPresent || e.target.getAttribute('data-placeholder'),
        value = e.target.value, l = placeholder.length, newValue = '',
        i, j, isInt, isLetter, strippedValue;

    // strip special characters
    strippedValue = isCharsetPresent ? value.replace(/\W/g, "") : value.replace(/\D/g, "");

    for (i = 0, j = 0; i < l; i++) {
        var x =
        isInt = !isNaN(parseInt(strippedValue[j]));
        isLetter = strippedValue[j] ? strippedValue[j].match(/[A-Z]/i) : false;
        matchesNumber = masking.maskedNumber.indexOf(placeholder[i]) >= 0;
        matchesLetter = masking.maskedLetter.indexOf(placeholder[i]) >= 0;

        if ((matchesNumber && isInt) || (isCharsetPresent && matchesLetter && isLetter)) {

                newValue += strippedValue[j++];

          } else if ((!isCharsetPresent && !isInt && matchesNumber) || (isCharsetPresent && ((matchesLetter && !isLetter) || (matchesNumber && !isInt)))) {
                // masking.errorOnKeyEntry(); // write your own error handling function
                return newValue;

        } else {
            newValue += placeholder[i];
        }
        // break if no characters left and the pattern is non-special character
        if (strippedValue[j] == undefined) {
          break;
        }
    }
    if (e.target.getAttribute('data-valid-example')) {
      return masking.validateProgress(e, newValue);
    }
    return newValue;
  },

  validateProgress : function (e, value) {
    var validExample = e.target.getAttribute('data-valid-example'),
        pattern = new RegExp(e.target.getAttribute('pattern')),
        placeholder = e.target.getAttribute('data-placeholder'),
        l = value.length, testValue = '';

    //convert to months
    if (l == 1 && placeholder.toUpperCase().substr(0,2) == 'MM') {
      if(value > 1 && value < 10) {
        value = '0' + value;
      }
      return value;
    }
    // test the value, removing the last character, until what you have is a submatch
    for ( i = l; i >= 0; i--) {
      testValue = value + validExample.substr(value.length);
      if (pattern.test(testValue)) {
        return value;
      } else {
        value = value.substr(0, value.length-1);
      }
    }

    return value;
  },

  errorOnKeyEntry : function () {
    // Write your own error handling
  }
}

masking.init();
