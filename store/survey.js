import _ from "lodash";

export const state = () => ({
  survey: null,
  //
  surveyList: [],
  error: null
});

export const mutations = {
  setSurvey(state, data) {
    state.survey = data;
  },
  setSurveyList(state, data) {
    state.surveyList = data;
  },
  setError(state, error) {
    state.error = error;
  }
};

export const getters = {
  surveyList: (state) => {
    return state.surveyList
  }
}


export const actions = {
  async create(
    { commit },
    { name, desc, budget, participant, targetGroup, questions }
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.$axios.post(
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
        commit("setSurvey", result);
        resolve(result);
      } catch (error) {
        console.log({ error });
        commit("setError", error);
        reject(error);
      }
    });
  },
  async getSurveyList(
    { commit },
    { }
  ) {
    try {
      const { data } = await this.$axios.get(
        `${process.env.baseUrl}/api/${process.env.versionAPI}/questionnaires`
      );
      console.log('--- data', data.data)
      commit("setSurveyList", data.data);
      return data;
    } catch (error) {
      commit("setError", error);
      reject(error);
    }
  }
};
