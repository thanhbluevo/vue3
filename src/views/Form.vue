<template>
  <div>
    <h1>Create an event</h1>
    <form>
      <label>Select a category</label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
          >{{ option }}</option
        >
      </select>

      <h3>Name & describe your event</h3>

      <DatePicker data-status="activated"></DatePicker>

      <BaseInput v-model="event.title" label="Title" type="text"></BaseInput>
      <BaseInput
        v-model="event.description"
        label="Description"
        type="text"
      ></BaseInput>

      <h3>Where is your event?</h3>
      <BaseInput
        v-model="event.location"
        label="Location"
        type="text"
      ></BaseInput>

      <h3>Are pets allowed?</h3>
      <div>
        <input type="radio" v-model="event.pets" :value="1" name="pets" />
        <label>Yes</label>
      </div>

      <div>
        <input type="radio" v-model="event.pets" :value="0" name="pets" />
        <label>No</label>
      </div>

      <h3>Extras</h3>
      <div>
        <input type="checkbox" v-model="event.extras.catering" class="field" />
        <label>Catering</label>
      </div>

      <div>
        <input type="checkbox" v-model="event.extras.music" class="field" />
        <label>Live music</label>
      </div>
      <button type="submit">Submit</button>
    </form>
    <pre>{{ event }}</pre>
  </div>
  <div>
    <ReviewList v-if="reviews.length" :reviews="reviews"></ReviewList>
    <Review @review-submitted="addReview"></Review>
  </div>
</template>
<script>
// @ is an alias to /src
import BaseInput from "@/components/BaseInput.vue";
import DatePicker from "@/components/DatePicker.vue";
import Review from "./Review.vue";
import ReviewList from "@/components/ReviewList.vue";

export default {
  name: "Form",
  components: {
    BaseInput,
    DatePicker,
    Review,
    ReviewList
  },
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community"
      ],
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
      reviews: []
    };
  },
  methods: {
    addReview(review) {
      console.log(review);
      this.reviews.push(review);
      console.log(this.reviews);
    }
  }
};
</script>
