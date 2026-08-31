'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, XCircle, Trash2, Clock, MoreHorizontal } from 'lucide-react'
import { updateAppointmentStatus, deleteAppointment } from './actions'

interface AppointmentActionsProps {
  appointmentId: string
  currentStatus: string
}

export function AppointmentActions({ appointmentId, currentStatus }: AppointmentActionsProps) {
  const router = useRouter()
  const [isUpdating, setIsUpdating] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const handleStatusUpdate = async (newStatus: string) => {
    setIsUpdating(true)
    setShowMenu(false)
    
    try {
      await updateAppointmentStatus(appointmentId, newStatus)
      router.refresh()
    } catch (error) {
      console.error('Failed to update status:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const handleDelete = async () => {
    setIsUpdating(true)
    
    try {
      await deleteAppointment(appointmentId)
      router.refresh()
    } catch (error) {
      console.error('Failed to delete appointment:', error)
    } finally {
      setIsUpdating(false)
      setShowDeleteConfirm(false)
    }
  }

  return (
    <div className="relative">
      {/* Status Badge & Dropdown Toggle */}
      <div className="flex items-center gap-2">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            currentStatus === 'pending'
              ? 'bg-amber-100 text-amber-700'
              : currentStatus === 'confirmed'
              ? 'bg-green-100 text-green-700'
              : currentStatus === 'completed'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-slate-100 text-slate-700'
          }`}
        >
          {currentStatus}
        </span>
        
        <button
          onClick={() => setShowMenu(!showMenu)}
          disabled={isUpdating}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors disabled:opacity-50"
        >
          <MoreHorizontal className="w-5 h-5 text-slate-600" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-20">
            <button
              onClick={() => handleStatusUpdate('pending')}
              disabled={currentStatus === 'pending'}
              className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Clock className="w-4 h-4 text-amber-600" />
              Mark as Pending
            </button>
            <button
              onClick={() => handleStatusUpdate('confirmed')}
              disabled={currentStatus === 'confirmed'}
              className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4 text-green-600" />
              Mark as Confirmed
            </button>
            <button
              onClick={() => handleStatusUpdate('completed')}
              disabled={currentStatus === 'completed'}
              className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4 text-blue-600" />
              Mark as Completed
            </button>
            <button
              onClick={() => handleStatusUpdate('cancelled')}
              disabled={currentStatus === 'cancelled'}
              className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <XCircle className="w-4 h-4 text-slate-600" />
              Mark as Cancelled
            </button>
            <div className="border-t border-slate-200 my-2" />
            <button
              onClick={() => {
                setShowMenu(false)
                setShowDeleteConfirm(true)
              }}
              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </>
      )}

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Delete Appointment?</h3>
            <p className="text-sm text-slate-600 mb-6">
              This action cannot be undone. The appointment will be permanently deleted.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                disabled={isUpdating}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isUpdating}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {isUpdating ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
