const playerContainer = document.getElementById('all-players-container')
const newPlayerFormContainer = document.getElementById('new-player-form')

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = `2302-ACC-ET-WEB-PT-B`
// Use the API_URL variable for fetch requests
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/players`)
    const data = await response.json()

    return data.data.players
  } catch (err) {
    console.error('Uh oh, trouble fetching players!', err)
    throw err // Propagate the error to the caller
  }
}

const fetchSinglePlayer = async id => {
  try {
    //fetch a single player using it's id
    const response = await fetch(`${API_URL}/players/${id}`)
    const playerObject = await response.json()
    const singlePlayer = playerObject.data.player
    return singlePlayer
    // convert (parse) the single player into an object
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err)
  }
}
// need to render single player

const addNewPlayer = async playerId => {
  //Misty
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(playerId)
    })
    const result = await response.json()
    console.log(result)
    return result
  } catch (err) {
    console.error('Oops, something went wrong with adding that player!', err)
  }
}

const removePlayer = async playerId => {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/${playerId}`,
      {
        method: 'DELETE'
      }
    )
    const result = await response.json()
    console.log(result)
    return result
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    )
  }
}
const playerDetails = async id => {
  try {
    const singlePlayer = await fetchSinglePlayer(id)
    const player = document.createElement('div')
    player.classList.add('details')
    player.innerHTML = `
   <h3>${singlePlayer.name}</h3>
   <p>${singlePlayer.breed}</p>
   <p>${singlePlayer.status}</p>
   <p>${singlePlayer.teamId}</p>
   <img src="${singlePlayer.imageUrl}"></img>
   <button id ="close">Close</button>

   `
    playerContainer.append(player)
    const closeButton = document.getElementById('close')
    closeButton.addEventListener('click', () => {
      player.remove()
    })
  } catch (error) {
    console.error(
      "Oh no! We're having difficulty getting single player" + error
    )
  }
}
/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players.
 *
 * Then it takes that larger string of HTML and adds it to the DOM.
 *
 * It also adds event listeners to the buttons in each player card.
 *
 * The event listeners are for the "See details" and "Remove from roster" buttons.
 *
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player.
 *
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster.
 *
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = playerList => {
  try {
    if (!playerList || !playerList.length) {
      playerContainer.innerHTML = '<h3>No Players Found</h3>'
      return
    }

    playerContainer.innerHTML = ''

    playerList.forEach(player => {
      const playerElement = document.createElement('div')
      playerElement.classList.add('player-card')
      playerElement.innerHTML = `
          <h4>${player.name}</h4>
          <img src="${player.imageUrl}" alt="${player.name}">
          <button class="details-button" data-id="${player.id}">See Details</button>
          <button class="delete-button" data-id="${player.id}">Remove From Roster</button>
        `
      playerContainer.append(playerElement)

      let detailButton = playerElement.querySelector('.details-button')
      detailButton.addEventListener('click', event => {
        event.preventDefault()
        playerDetails(player.id)
      })

      let deleteButton = playerElement.querySelector('.delete-button')
      deleteButton.addEventListener('click', event => {
        event.preventDefault()
        removePlayer(player.id)
      })
    })
  } catch (err) {
    console.error('Uh oh, trouble rendering players!', err)
  }
}

/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */

const renderNewPlayerForm = () => {
  //Candice
  try {
    const playerForm = document.createElement('div')
    playerForm.innerHTML = `
      
        <form id="new-player-form">
              
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      
        <label for="breed">Breed:</label>
        <input type="text" id="breed" name="breed" required>
      
        <label for="status">Status:</label>
        <input type="text" id="status" name="status" required>
      
        <label for="imageURL">Image URL:</label>
        <input type="text" id="imageURL" name="imageURL">
                  
        <label for="teamId">Team ID:</label>
        <input type="text" id="teamId" name="teamId">
                   
        <button type="submit" value="Submit">Add New Player</button>
      </form>
      `
    newPlayerFormContainer.append(playerForm)

    playerForm.addEventListener('submit', async event => {
      event.preventDefault()
      const name = document.getElementById('name').value
      const breed = document.getElementById('breed').value
      const status = document.getElementById('status').value
      const imageUrl = document.getElementById('imageURL').value
      const teamId = document.getElementById('teamId').value

      const playerObj = {
        name: name,
        breed: breed,
        status: status,
        imageUrl: imageUrl,
        teamId: teamId
      }
      await addNewPlayer(playerObj)
      alert(
        'A new player has been created. Everybody welcome ' + playerObj.name
      )
      const players = await fetchAllPlayers()

      renderAllPlayers(players)
    })
  } catch (err) {
    console.error('Uh oh, trouble rendering the new player form!', err)
  }
}

const init = async () => {
  const players = await fetchAllPlayers()

  console.log(players)
  renderNewPlayerForm()
  renderAllPlayers(players)
}

init()