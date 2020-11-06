/****************  Fetches ****************/
const baseUrl = "http://localhost:3000/api/v1"

const getAnimals = () => {
  fetch(baseUrl + `/animals`)
    .then(r => r.json())
    .then(renderAllAnimals)
}

const postAnimal = newAnimal => {
  fetch(baseUrl + `/animals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newAnimal)
  })
    .then(r => r.json())
    .then(renderAnimal)
}

const updateDonations = (id, donations) => {
  fetch(baseUrl + `/animals/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      donations: donations
    })
  })
}

const deleteAnimal = id => {
  fetch(baseUrl + `/animals/${id}`, {
    method: "DELETE"
  })
}

/****************  DOM Elements ****************/
const lightSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")
const animalList = document.querySelector("#animal-list")

/**************** Event Handlers ****************/
const handleLightSwitchClick = () => {
  document.body.classList.toggle("dark-mode")
}

const handleFormSubmit = e => {
  e.preventDefault()

  const newAnimal = {
    name: e.target.name.value,
    species_name: e.target.species_name.value,
    imageUrl: e.target.image_url.value,
    description: e.target.description.value,
    diet: e.target.diet.value,
    donations: 0
  }

  postAnimal(newAnimal)
}

const handleDonate = e => {
  const card = e.target.closest(".card")
  const animalId = card.dataset.id

  const donationCount = card.querySelector(".donation-count")
  const newDonations = parseInt(donationCount.textContent) + 10
  donationCount.textContent = newDonations
  
  updateDonations(animalId, newDonations)
}

const handleDelete = e => {
  const card = e.target.closest(".card")
  const animalId = card.dataset.id
  
  card.remove()
  deleteAnimal(animalId)
}

/**************** Event Listeners ****************/
lightSwitch.addEventListener("click", handleLightSwitchClick)
animalForm.addEventListener("submit", handleFormSubmit)
animalList.addEventListener("click", e => {
  // Donate button clicked
  if (e.target.dataset.action === "donate") {
    handleDonate(e)
  }

  // Delete button clicked
  if (e.target.dataset.action === "freeToTheWild") {
    handleDelete(e)
  }
})


/**************** Render Helpers ****************/
const renderAnimal = animalObj => {
  const card = document.createElement('li')
  card.className = "card"
  card.dataset.id = animalObj.id

  card.innerHTML = `
    <div class="image">
      <img src="${animalObj.imageUrl}" alt="${animalObj.name}">
      <button data-action="freeToTheWild" class="delete button">X</button>
    </div>
    <div class="content">
      <div class="name">${animalObj.name}</div>
      <div class="donations">
        $<span class="donation-count">${animalObj.donations}</span> Donated
      </div>
      <div class="description">${animalObj.description}</div>
      <div class="tags">
        <span>(species name)</span>
        <span class="omnivore">omnivore</span>
      </div>
    </div>
    <button data-action="donate" class="donate button">
      Donate $10
    </button>
  `

  animalList.append(card)
}

const renderAllAnimals = animals => {
  animals.forEach(renderAnimal)
}

/**************** Initial Render ****************/
getAnimals()