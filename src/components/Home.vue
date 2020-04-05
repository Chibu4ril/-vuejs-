<template>
  <div>
    <div class="loader">
      <span>{</span> Welcome
      <span>}</span>
    </div>
    <section class="charts">
      <h3>Bar Chart</h3>
      <vue-highcharts :options="options" ref="barChart"></vue-highcharts>
    </section>
  </div>
</template>

<script>
import VueHighcharts from "vue2-highcharts";

export default {
  name: "Home",
  components: {
    VueHighcharts
  },
  beforeCreate() {
    this.$store.dispatch("fetchUserData");
  },
  computed: {
    data() {
      const users = this.$store.getters["getUserData"];
      const numOfGroup = [];
      Object.filter = (obj, predicate) =>
        Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .reduce((res, key) => ((res[key] = obj[key]), res), {});

      const blood_a = Object.filter(users, user => user.blood_group === "A");
      const numA = Object.keys(blood_a).length;

      const blood_b = Object.filter(users, user => user.blood_group === "B");
      const numB = Object.keys(blood_b).length;

      const blood_ab = Object.filter(users, user => user.blood_group === "AB");
      const numAB = Object.keys(blood_ab).length;

      const blood_o = Object.filter(users, user => user.blood_group === "O");
      const numO = Object.keys(blood_o).length;

      numOfGroup.push(numA, numB, numAB, numO);

      return numOfGroup;
    },
    age() {
      const users = this.$store.getters["getUserData"];
      const numOfAge = [];
      Object.filter = (obj, predicate) =>
        Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .reduce((res, key) => ((res[key] = obj[key]), res), {});

      const age1 = Object.filter(users, user => user.age <= 25);
      const num1 = Object.keys(age1).length;

      const age2 = Object.filter(
        users,
        user => user.age > 25 && user.age <= 50
      );
      const num2 = Object.keys(age2).length;

      const age3 = Object.filter(
        users,
        user => user.age > 50 && user.age <= 75
      );
      const num3 = Object.keys(age3).length;

      const age4 = Object.filter(users, user => user.age > 75);
      const num4 = Object.keys(age4).length;

      numOfAge.push(num1, num2, num3, num4);

      return numOfAge;
    },

    options() {
      return {
        chart: {
          type: "bar",
           backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(200, 200, 255)']
            ]
        },
        },
        title: {
          text: "Statistics Showing User Blood Group and Age"
        },
        xAxis: {
          title: {
            text: "Blood Group & Age"
          }
        },
        yAxis: {
          min: 0,
          allowDecimals: false,
          title: {
            text: "Number of People",
            align: "high"
          },
          labels: {
            overflow: "justify"
          }
        },
        plotLines: [
          {
            value: 0,
            width: 1,
            color: "#808080"
          }
        ],
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "top",
          x: -40,
          y: 30,
          floating: true,
          borderWidth: 1,
          shadow: true
        },
        series: [
          {
            name: "A",
            data: [this.data[0]]
          },
          {
            name: "B",
            data: [this.data[1]]
          },
          {
            name: "AB",
            data: [this.data[2]]
          },
          {
            name: "O",
            data: [this.data[3]]
          },
          {
            name: "Age(0-25)",
            data: [this.age[0]]
          },
          {
            name: "Age(0-50)",
            data: [this.age[1]]
          },
          {
            name: "Age(0-75)",
            data: [this.age[2]]
          },
          {
            name: "Age(0-100)",
            data: [this.age[3]]
          }
        ]
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
