import { Team } from '@/lib/types/team'
import { Button } from '../ui/button'
import { useState } from 'react'

interface TeamFormProps {
  team?: Team
  onSubmit: (team: Omit<Team, 'id'>) => void
  onCancel: () => void
}

const AGE_GROUPS = [
  'U5', 'U6', 'U7', 'U8', 'U9', 'U10', 'U11', 'U12',
  'U13', 'U14', 'U15', 'U16', 'U17', 'U18', 'Mens', 'Ladies'
]

const TEAM_GENDERS = ['Boys', 'Girls', 'Mixed', 'Mens', 'Ladies']

const TEAM_NAMES = ['', 'Blues', 'Colts', 'Yellows']

const INITIAL_TEAM: Omit<Team, 'id'> = {
  ageGroup: '',
  teamName: '',
  teamGender: '',
  teamSize: '',
  teamManager: '',
  coach1: '',
  coach2: '',
  coach3: '',
  saturdayPitchAllocation: '',
  sundayPitchAllocation: '',
}

export default function TeamForm({ team, onSubmit, onCancel }: TeamFormProps) {
  const [formData, setFormData] = useState<Omit<Team, 'id'>>(team || INITIAL_TEAM)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">{team ? 'Edit Team' : 'Add New Team'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Age Group</label>
              <select
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select Age Group</option>
                {AGE_GROUPS.map((age) => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Team Name</label>
              <select
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                {TEAM_NAMES.map((name) => (
                  <option key={name} value={name}>{name || 'Select Team Name'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Team Gender</label>
              <select
                name="teamGender"
                value={formData.teamGender}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select Gender</option>
                {TEAM_GENDERS.map((gender) => (
                  <option key={gender} value={gender}>{gender}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Team Size</label>
              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select Size</option>
                <option value="5-a-side">5-a-side</option>
                <option value="7-a-side">7-a-side</option>
                <option value="9-a-side">9-a-side</option>
                <option value="11-a-side">11-a-side</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Team Manager</label>
              <input
                type="text"
                name="teamManager"
                value={formData.teamManager}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Coach 1</label>
              <input
                type="text"
                name="coach1"
                value={formData.coach1}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Coach 2</label>
              <input
                type="text"
                name="coach2"
                value={formData.coach2}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Coach 3</label>
              <input
                type="text"
                name="coach3"
                value={formData.coach3}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Saturday Pitch</label>
              <input
                type="text"
                name="saturdayPitchAllocation"
                value={formData.saturdayPitchAllocation}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sunday Pitch</label>
              <input
                type="text"
                name="sundayPitchAllocation"
                value={formData.sundayPitchAllocation}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {team ? 'Update Team' : 'Add Team'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 