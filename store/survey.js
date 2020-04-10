import _ from "lodash";

export const state = () => ({
  survey: null,
  error: null
});

export const mutations = {
  setSurvey(state, data) {
    state.survey = data;
  },
  setError(state, error) {
    state.error = error;
  }
};

export const actions = {
  async create(
    { commit },
    { name, desc, budget, participant, targetGroup, questions }
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.post(
          `${process.env.baseUrl}/api/${process.env.versionAPI}/questionnaires`,
          {
            name,
            desc,
            budget,
            participant,
            targetGroup,
            questions
          }
        );
        commit("setSurvey", {});
        resolve({});
      } catch (error) {
        console.log({ error });
        commit("setError", error);
        reject(error);
      }
    });
  }
};
