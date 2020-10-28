const state = {
  pythonCode: "",
  xml: "",
  mode: "",
};

const mutations = {
  updatePythonCode(state, payload) {
    state.pythonCode = payload;
  },
  updateXml(state, payload) {
    state.xml = payload;
  },
  updateMode(state, payload) {
    state.mode = payload;
  }
};

export const store = {
  state,
  mutations,
};