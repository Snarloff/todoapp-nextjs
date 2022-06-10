import { Todo } from 'lib/db'
import useSWR from 'swr'
import axios from 'services/axios';

interface ComponentProps {
  todos: Todo[]
}

export default function DeleteTodo({ todos }: ComponentProps): JSX.Element  {
  
  const { data, mutate } = useSWR('/api/todo')

  const handleDelete = async (id: number) => {
    const newData = [...todos].filter((item) => item.id != id)
    mutate(newData, false)
    await axios('/api/todo', { method: 'DELETE', data: JSON.stringify(id) })
  }

  return (
    <div id="delete">
      {todos?.map((item, index) => (
        <div className="flex mb-4 items-center" key={index}>
          <p className="w-full text-white">
            <strong>{index + 1}.</strong> {item.description}
          </p>
          <button
            type="button"
            onClick={() => handleDelete(item.id)}
            className="uppercase p-3 flex items-center bg-gray-500 hover:bg-gray-400 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10 "
          >
            <svg
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
              style={{transform: "rotate(360deg)"}}
            >
              <path d="M12 12h2v12h-2z" fill="currentColor"></path>
              <path d="M18 12h2v12h-2z" fill="currentColor"></path>
              <path
                d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                fill="currentColor"
              ></path>
              <path d="M12 2h8v2h-8z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      ))}
    </div>
  )

}