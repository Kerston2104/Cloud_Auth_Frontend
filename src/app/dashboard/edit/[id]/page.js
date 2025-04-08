'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function EditBlog({ params }) {
  const { id } = params
  const [formData, setFormData] = useState({ title: '', content: '' })
  const router = useRouter()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/blogs/${id}/`)
      .then(res => {
        setFormData({
          title: res.data.blog.title,
          content: res.data.blog.content
        })
      })
      .catch(err => {
        alert('Error fetching blog')
        router.push('/')
      })
  }, [id, router])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:8000/api/blogs/${id}/`, formData)
      alert('Blog updated successfully')
    } catch (err) {
      alert('Update failed: ' + (err.response?.data?.error || 'Unknown error'))
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          rows={5}
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Save Changes
        </button>
      </form>
    </div>
  )
}
