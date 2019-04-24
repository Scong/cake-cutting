<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  mounted() {
    const chartdata = [];
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              min: -1000,
              max: 1000
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              min: -1000,
              max: 1000
            }
          }
        ]
      }
    };
    this.renderChart(chartdata, options);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
