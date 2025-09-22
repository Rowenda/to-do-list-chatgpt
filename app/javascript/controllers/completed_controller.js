import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="completed"
export default class extends Controller {
  static targets = ["button"]

  connect() {
    console.log("You're connected")
  }
  toggle(event) {
    event.preventDefault()

    const token = document.querySelector("meta[name=csrf-token]").content

    fetch(`/tasks/${event.target.value}/toggle`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "X-CSRF-Token": token }
    })
      .then(response => response.json())
      .then((data) => {
        data.completed ? event.target.innerText = "Complete" : event.target.innerText = "Undo"
        })
  }
}
