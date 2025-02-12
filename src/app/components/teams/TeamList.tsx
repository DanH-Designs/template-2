import { Team } from '@/lib/types/team'
import { Button } from '../ui/button'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import TeamForm from './TeamForm'

interface TeamListProps {
  teams: Team[]
  onDelete: (id: string) => void
  onEdit: (team: Team) => void
}

export default function TeamList({ teams, onDelete, onEdit }: TeamListProps) {
  const [editingTeam, setEditingTeam] = useState<Team | null>(null)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Group</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manager</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coaches</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pitch Allocation</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {teams.map((team) => (
            <tr key={team.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.ageGroup}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.teamName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.teamGender}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.teamSize}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.teamManager}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {[team.coach1, team.coach2, team.coach3].filter(Boolean).join(', ')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div>Sat: {team.saturdayPitchAllocation}</div>
                <div>Sun: {team.sundayPitchAllocation}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingTeam(team)}
                  >
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDelete(team.id)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingTeam && (
        <TeamForm
          team={editingTeam}
          onSubmit={(updatedTeam) => {
            onEdit({ ...updatedTeam, id: editingTeam.id })
            setEditingTeam(null)
          }}
          onCancel={() => setEditingTeam(null)}
        />
      )}
    </div>
  )
} 