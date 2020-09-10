const state = {
  pythonCode: "",
  xml: ""
};

const mutations = {
  updatePythonCode(state, payload) {
    state.pythonCode = payload;
  },
  updateXml(state, payload) {
    state.xml = payload;
  }
};

export const store = {
  state,
  mutations,
};