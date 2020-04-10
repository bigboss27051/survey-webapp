<template>
  <div>
    <h1>Create Survey</h1>
    <v-row justify="center">
      <v-col cols="3">
        <v-btn color="primary" @click="gotoStep(1)" :outlined="step !== 1" rounded depressed>
          <v-icon left dark>mdi-numeric-1-circle</v-icon>Survey Detail
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn color="primary" @click="gotoStep(2)" :outlined="step !== 2" rounded depressed>
          <v-icon left dark>mdi-numeric-2-circle</v-icon>Target
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn color="primary" @click="gotoStep(3)" :outlined="step !== 3" rounded depressed>
          <v-icon left dark>mdi-numeric-3-circle</v-icon>Questions
        </v-btn>
      </v-col>
    </v-row>
    <v-form ref="form" v-if="step === 1">
      <v-text-field
        placeholder="Survey of My business"
        v-model="surveyName"
        label="Survey Name"
        required
      ></v-text-field>
      <v-textarea
        v-model="surveyDesciption"
        hint="Please do this survey if"
        label="Survey Description"
        required
      ></v-textarea>
      <v-text-field
        v-model="surveyLimitBudget"
        label="Budget"
        type="number"
        placeholder="Limit of coin usage on this project"
      ></v-text-field>
      <v-row justify="center">
        <v-col cols="2">
          <v-btn color="primary" @click="gotoStep(2)" rounded depressed>Choose Taget</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-form ref="form" v-if="step === 2">
      <v-row>
        <v-col cols="6">
          <v-text-field
            placeholder="Number of participant"
            v-model="surveyLimitParticipant"
            label="Limit"
            type="Number"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">20 coin / participant</v-col>
      </v-row>
      <v-select
        :items="['Male','Female','Bisexsual', 'Gay', 'Lesbian', 'Rather not say']"
        :chips="true"
        :multiple="true"
        v-model="targetGender"
        label="Target Gender"
      ></v-select>
      <v-subheader>Age range</v-subheader>
      <v-range-slider thumb-label="always" min="13" max="80" v-model="targetAge"></v-range-slider>
      <v-select
        :items="['Under High School','High School','Bachelor degree','Master degree','PhDs']"
        :chips="true"
        :multiple="true"
        v-model="targetEducationLevel"
        label="Educations"
      ></v-select>
      <v-select :items="['Bangkok','Singapore']" :chips="true" :multiple="true" label="Locations"></v-select>
      <v-select
        :items="['Below 15,000','15,0001 - 20,000','20,001 - 30,000','30,001 - 40,000','40,001 - 50,000','50,001 - 60,000','60,001 - 70,000','70,001 - 80,000','80,001 - 90,000','90,001 - 100,000','More than 100,001']"
        :chips="true"
        :multiple="true"
        label="Monthly Income"
        v-model="targetMonthlyIncome"
      ></v-select>
      <v-row justify="center">
        <v-col cols="2">
          <v-btn color="primary" @click="gotoStep(3)" rounded depressed>Define Question</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-form ref="form" v-if="step === 3">
      <v-text-field
        placeholder="Define Question title"
        v-model="questionTitle"
        label="Question Title"
        required
      ></v-text-field>
      <v-select :items="['Single select','Multiple select']" v-model="questionType" label="Type"></v-select>
      <v-textarea v-model="questionAnswers" label="Answer (One Answer per line)" required></v-textarea>
      <v-row>
        <v-col cols="12">
          <v-btn color="primary" rounded depressed outlined>Add Question</v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="2">
          <v-btn color="primary" rounded depressed>Create Survey</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      surveyName: "",
      surveyDesciption: "",
      surveyLimitBudget: 0,
      targetLimitParticipant: 0,
      targetGender: [],
      targetAge: [18, 65],
      targetEducationLevel: [],
      targetMonthlyIncome: [],
      question: [],
      questionTitle: "",
      questionType: "",
      questionAnswers: ""
    };
  },
  methods: {
    gotoStep(step) {
      this.step = step;
    },
    create() {
      try {
      } catch (error) {}
    }
  }
};
</script>

<style>
</style>
