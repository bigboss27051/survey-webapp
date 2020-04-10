import _ from "lodash";

import firebase from "../utils/firebase";

export const state = () => ({
  auth: null,
  error: null
});

export const mutations = {
  setAuth(state, data) {
    state.auth = data;
  },
  setError(state, error) {
    state.error = error;
  }
};

export const actions = {
  async login({ commit }, { email, password }) {
    return new Promise(async (resolve, reject) => {
      try {
        const auth = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        const tokenResult = await auth.user?.getIdTokenResult(true);
        console.log({ tokenResult });
        this.$cookies.set("accessToken", tokenResult?.token);
        this.$cookies.set("refreshToken", auth.user?.refreshToken);

        commit("setAuth", {
          uid: auth.user?.uid,
          refreshToken: auth.user?.refreshToken,
          accessToken: tokenResult?.token,
          issuedAtTime: tokenResult?.issuedAtTime,
          expirationTime: tokenResult?.expirationTime
        });
        resolve({
          uid: auth.user?.uid,
          refreshToken: auth.user?.refreshToken,
          accessToken: tokenResult?.token
        });
      } catch (error) {
        console.log({ error });
        commit("setError", error);
        reject(error);
      }
    });
  },
  async logout({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        setTimeout(() => {
          this.$cookies.set("accessToken", "");
          this.$cookies.set("refreshToken", "");
          commit("setAuth", null);
          resolve("");
        }, 1000);
      } catch (error) {
        commit("setError", error);
        reject(error);
      }
    });
  }
};
