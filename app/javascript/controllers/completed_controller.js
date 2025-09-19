import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="completed"
export default class extends Controller {
  static targets = ["button"]

  connect() {
    console.log("You're connected")
  }
  toggle(event) {
    console.log(event.target.value);

  }
}
