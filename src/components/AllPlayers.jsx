import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchPlayers } from '../API/index.js'

function AllPlayers () {
  const navigate = useNavigate()
  const [players, setPlayers] = useState([])

  useEffect(() => {
    async function fetchPlayersData () {
      const playersData = await fetchPlayers()
      setPlayers(playersData)
    }

    fetchPlayersData()
  }, [])

  return (
    <div>
      <h4>Players:</h4>
      {players.map(player => {
        return (
          <div>
            <img style={{ height: '250px' }} src={player.imageUrl} />
            <h4>{player.name}</h4>
            <button
              onClick={() => {
                navigate(`/players/${player.id}`)
              }}
            >
              See Details
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default AllPlayers
