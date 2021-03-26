import _ from "lodash";
import firebase from "../utils/firebase";

export default ({ $axios, redirect, app }) => {
  $axios.onRequest(config => {
    const accessToken = app.$cookies.get("accessToken");
    if (accessToken) {
      config.headers.common["Authorization"] = accessToken;
      // config.headers.common["authoriaztion"] = `Bearer ${accessToken}`;

    }
  });

  $axios.onError(async err => {
    let originalRequest = err.config;
    const code = parseInt(err.response && err.response.status);
    if (code === 400) {
      redirect("/400");
    }
    if (code === 401) {
      originalRequest.__isRetryRequest = true;
      try {
        await new Promise(async (resolve, reject) => {
          try {
            firebase.auth().onAuthStateChanged(async user => {
              if (user) {
                const tokenResult = await user.getIdTokenResult(true);
                app.$cookies.set("accessToken", tokenResult?.token);
                app.$cookies.set("refreshToken", user?.refreshToken);
                originalRequest.headers["accessToken"] = tokenResult?.token;
                resolve(tokenResult);
              }
            });
          } catch (error) {
            console.log("error token", error);
            reject(`error refresh token: ${error}`);
          }
        });
        return $axios(originalRequest);
      } catch (e) {
        console.log("e", e);
        app.router.push("/login");
      }
    }
  });
};
