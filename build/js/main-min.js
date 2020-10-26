(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=0)})([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);class videoPlayer{constructor(video,button){this.video=video;this.button=button;this.button.addEventListener("click",()=>{this.playVideo()})}playVideo(){if(!this.video.parentNode.classList.contains("active")){this.video.controls=true;this.video.play();this.video.parentNode.classList.add("active")}else{this.video.controls=false;this.video.pause();this.button.parentNode.classList.remove("active")}}}class popupFunc{constructor(popup,button){this.button=button;this.popup=popup;this.openPopupFunc=this.openPopup.bind(this);this.closePopupFunc=this.closePopup.bind(this);if(Array.isArray(this.button)){this.button.forEach(elem=>{elem.addEventListener("click",this.openPopupFunc)})}else{this.button.addEventListener("click",this.openPopupFunc)}this.popup.querySelector(".close").addEventListener("click",this.closePopupFunc);this.popup.parentNode.addEventListener("click",this.closePopupFunc)}openPopup(event){event.preventDefault();this.popup.classList.add("open");this.popup.parentNode.classList.add("open")}closePopup(event){if(!event.target.classList.contains("close")&&event.target.closest(".popup")!==null){event.stopPropagation()}else{this.popup.classList.remove("open");this.popup.parentNode.classList.remove("open")}}}class BurgerMenu{constructor(popup,burger){this.burger=burger;this.popup=popup;let thisOpenPopup=this.openPopup.bind(this);let thisClosePopup=this.closePopup.bind(this);this.burger.addEventListener("click",thisOpenPopup);this.popup.querySelector(".close").addEventListener("click",thisClosePopup);document.querySelector("header .order.close").addEventListener("click",thisClosePopup);this.popup.querySelectorAll("a").forEach(elem=>elem.addEventListener("click",thisClosePopup))}openPopup(){this.popup.classList.add("open");document.querySelector(".user-panel").classList.add("active")}closePopup(){this.popup.classList.remove("open");document.querySelector(".user-panel").classList.remove("active")}}if(document.querySelector(".reviews .video")){document.querySelectorAll(".reviews .video").forEach(elem=>{new videoPlayer(elem.querySelector("video"),elem.querySelector(".play-btn"))})}if(document.querySelector(".wrapper .popup")){new popupFunc(document.querySelector(".wrapper .popup"),[document.querySelector("header .order"),document.querySelector("section.info .btn")])}new BurgerMenu(document.querySelector("header nav"),document.querySelector("header .burger"))}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibW9kdWxlcyIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJnZXREZWZhdWx0IiwiZ2V0TW9kdWxlRXhwb3J0cyIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fd2VicGFja19leHBvcnRzX18iLCJ2aWRlb1BsYXllciIsIltvYmplY3QgT2JqZWN0XSIsInZpZGVvIiwiYnV0dG9uIiwidGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5VmlkZW8iLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjb250cm9scyIsInBsYXkiLCJhZGQiLCJwYXVzZSIsInJlbW92ZSIsInBvcHVwRnVuYyIsInBvcHVwIiwib3BlblBvcHVwRnVuYyIsIm9wZW5Qb3B1cCIsImNsb3NlUG9wdXBGdW5jIiwiY2xvc2VQb3B1cCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJlbGVtIiwicXVlcnlTZWxlY3RvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiQnVyZ2VyTWVudSIsImJ1cmdlciIsInRoaXNPcGVuUG9wdXAiLCJ0aGlzQ2xvc2VQb3B1cCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6IkNBQVMsU0FBVUEsU0FFVCxJQUFJQyxpQkFBbUIs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RyxLQUFLWSxNQUFNUixVQUFVTSxPQUFPLFFBQzVCcUIsU0FBU1YsY0FBYyxlQUFlakIsVUFBVU0sT0FBTyxXQVEvRCxHQUFJcUIsU0FBU1YsY0FBYyxtQkFBbUIsQ0FDMUNVLFNBQVNDLGlCQUFpQixtQkFBbUJiLFFBQVNDLE9BQ2xELElBQUl4QixZQUFZd0IsS0FBS0MsY0FBYyxTQUFVRCxLQUFLQyxjQUFjLGdCQUd4RSxHQUFJVSxTQUFTVixjQUFjLG1CQUFtQixDQUMxQyxJQUFJVixVQUFVb0IsU0FBU1YsY0FBYyxtQkFBb0IsQ0FBQ1UsU0FBU1YsY0FBYyxpQkFBa0JVLFNBQVNWLGNBQWMsdUJBRzlILElBQUlNLFdBQVdJLFNBQVNWLGNBQWMsY0FBY1UsU0FBU1YsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gRVNNIENPTVBBVCBGTEFHXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvdmlkZW9QbGF5ZXIuanNcbiBjbGFzcyB2aWRlb1BsYXllciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWRlbywgYnV0dG9uKSB7XHJcbiAgICAgICAgdGhpcy52aWRlbyA9IHZpZGVvO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gYnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlWaWRlbygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwbGF5VmlkZW8oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvLmNvbnRyb2xzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52aWRlby5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW8ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW8uY29udHJvbHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy52aWRlby5wYXVzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9wb3B1cEZ1bmMuanNcbmNsYXNzIHBvcHVwRnVuYyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cCwgYnV0dG9uKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBidXR0b247XHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IHBvcHVwO1xyXG4gICAgICAgIHRoaXMub3BlblBvcHVwRnVuYyA9IHRoaXMub3BlblBvcHVwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwRnVuYyA9IHRoaXMuY2xvc2VQb3B1cC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGlmICggQXJyYXkuaXNBcnJheSh0aGlzLmJ1dHRvbikpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5mb3JFYWNoKCBlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5Qb3B1cEZ1bmMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuUG9wdXBGdW5jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQb3B1cEZ1bmMpO1xyXG4gICAgICAgIHRoaXMucG9wdXAucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQb3B1cEZ1bmMpO1xyXG4gICAgfVxyXG4gICAgb3BlblBvcHVwKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICAgIHRoaXMucG9wdXAucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICB9XHJcbiAgICBjbG9zZVBvcHVwKGV2ZW50KXtcclxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykgJiYgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wb3B1cCcpICE9PSBudWxsKXtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXAucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2J1cmdlck1lbnUuanNcbmNsYXNzIEJ1cmdlck1lbnV7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cCwgYnVyZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5idXJnZXIgPSBidXJnZXI7XHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IHBvcHVwO1xyXG4gICAgICAgIGxldCB0aGlzT3BlblBvcHVwID0gdGhpcy5vcGVuUG9wdXAuYmluZCh0aGlzKTtcclxuICAgICAgICBsZXQgdGhpc0Nsb3NlUG9wdXAgPSB0aGlzLmNsb3NlUG9wdXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXNPcGVuUG9wdXApO1xyXG4gICAgICAgIHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLmNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzQ2xvc2VQb3B1cCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIC5vcmRlci5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpc0Nsb3NlUG9wdXApO1xyXG4gICAgICAgIHRoaXMucG9wdXAucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goIGVsZW0gPT4gZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXNDbG9zZVBvcHVwKSlcclxuICAgIH1cclxuICAgIG9wZW5Qb3B1cCgpe1xyXG4gICAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXBhbmVsJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH1cclxuICAgIGNsb3NlUG9wdXAoKXtcclxuICAgICAgICB0aGlzLnBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1wYW5lbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbn1cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2luZGV4LmpzXG5cclxuXHJcblxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzIC52aWRlbycpKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXdzIC52aWRlbycpLmZvckVhY2goIGVsZW0gPT4ge1xyXG4gICAgICAgIG5ldyB2aWRlb1BsYXllcihlbGVtLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyksIGVsZW0ucXVlcnlTZWxlY3RvcignLnBsYXktYnRuJykpXHJcbiAgICB9KVxyXG59XHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlciAucG9wdXAnKSl7XHJcbiAgICBuZXcgcG9wdXBGdW5jKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyIC5wb3B1cCcpLCBbZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIC5vcmRlcicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmluZm8gLmJ0bicpXSk7XHJcbn1cclxuXHJcbm5ldyBCdXJnZXJNZW51KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBuYXYnKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgLmJ1cmdlcicpKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pOyJdLCJmaWxlIjoibWFpbi1taW4uanMifQ==