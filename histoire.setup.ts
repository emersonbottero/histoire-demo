// import { InclusiveDates } from "inclusive-dates/dist/components/inclusive-dates";
import { defineCustomElements } from "inclusive-dates/dist/loader";
import "inclusive-dates/dist/themes/light.css";

export function setupVue3({ app }) {
  // app.use(...)
  //   customElements.define("inclusive-dates", InclusiveDates);
  defineCustomElements();
}
