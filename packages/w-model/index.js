import wModal from "./src/w-modal";

wModal.install = function(Vue) {
  Vue.component(wModal.name, wModal);
};

export default wModal;
