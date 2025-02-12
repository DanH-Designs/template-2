'use client'

import { useState } from 'react'
import Header from '../components/Header'
import TeamList from '../components/teams/TeamList'
import TeamForm from '../components/teams/TeamForm'
import { Team } from '@/lib/types/team'
import { Button } from '../components/ui/button'
import { PlusIcon } from '@heroicons/react/24/outline'

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([])
  const [isAddingTeam, setIsAddingTeam] = useState(false)

  const handleImportCSV = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        const rows = text.split('\n')
        const headers = rows[0].split(',')
        
        const newTeams: Team[] = rows.slice(1).map((row) => {
          const values = row.split(',')
          return {
            id: Math.random().toString(36).substr(2, 9),
            ageGroup: values[0],
            teamName: values[1],
            teamGender: values[2],
            teamSize: values[3],
            teamManager: values[4],
            coach1: values[5],
            coach2: values[6],
            coach3: values[7],
            saturdayPitchAllocation: values[8],
            sundayPitchAllocation: values[9],
          }
        })

        setTeams((prevTeams) => [...prevTeams, ...newTeams])
      }
      reader.readAsText(file)
    }
  }

  const handleExportCSV = () => {
    const headers = [
      'Age Group',
      'Team Name',
      'Team Gender',
      'Team Size',
      'Team Manager',
      'Coach 1',
      'Coach 2',
      'Coach 3',
      'Saturday Pitch Allocation',
      'Sunday Pitch Allocation',
    ]

    const csvContent = [
      headers.join(','),
      ...teams.map((team) =>
        [
          team.ageGroup,
          team.teamName,
          team.teamGender,
          team.teamSize,
          team.teamManager,
          team.coach1,
          team.coach2,
          team.coach3,
          team.saturdayPitchAllocation,
          team.sundayPitchAllocation,
        ].join(',')
      ),
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'teams.csv'
    link.click()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Team Management</h1>
            <div className="flex gap-4">
              <input
                type="file"
                accept=".csv"
                onChange={handleImportCSV}
                className="hidden"
                id="csvInput"
              />
              <Button
                variant="outline"
                onClick={() => document.getElementById('csvInput')?.click()}
              >
                Import CSV
              </Button>
              <Button variant="outline" onClick={handleExportCSV}>
                Export CSV
              </Button>
              <Button onClick={() => setIsAddingTeam(true)}>
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Team
              </Button>
            </div>
          </div>

          <TeamList
            teams={teams}
            onDelete={(id) => setTeams(teams.filter((team) => team.id !== id))}
            onEdit={(editedTeam) =>
              setTeams(teams.map((team) => (team.id === editedTeam.id ? editedTeam : team)))
            }
          />

          {isAddingTeam && (
            <TeamForm
              onSubmit={(newTeam) => {
                setTeams([...teams, { ...newTeam, id: Math.random().toString(36).substr(2, 9) }])
                setIsAddingTeam(false)
              }}
              onCancel={() => setIsAddingTeam(false)}
            />
          )}
        </div>
      </main>
    </div>
  )
} 